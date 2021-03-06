jQuery(document).ready(function ($) {


    var BulkHeartbeatIntervalRunning = false;

    /**
     * Media Library - Heartbeat
     */
    var BulkHeartbeatInterval = setInterval(function () {

        if (!BulkHeartbeatIntervalRunning) {
            BulkHeartbeatIntervalRunning = true;
            $.ajax({
                url: ajaxurl, type: 'POST', data: {action: 'wps_ic_media_library_bulk_heartbeat'}, success: function (response) {
                    BulkHeartbeatIntervalRunning = false;
                }
            });
        }

    }, 30000);


    $('.button-start-bulk-restore').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: ajaxurl, type: 'POST', data: {action: 'wps_ic_media_library_bulk_restore_start'}, success: function (response) {

                $('.bulk-area-inner').show();
                $('.wps-ic-stop-bulk-restore').show();
                $('#bulk-start-container').hide();
                $('.bulk-preparing-restore').show();
                $('.bulk-compress-status-progress-prepare').hide();

                doRestoreProcess();
            }
        });
        return false;
    });


    $('.button-start-bulk-compress').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: ajaxurl, type: 'POST', data: {action: 'wps_ic_media_library_bulk_compress_start'}, success: function (response) {

                $('.wps-ic-stop-bulk-compress').show();
                $('.bulk-area-inner').show();
                $('#bulk-start-container').hide();
                $('.bulk-preparing-optimize').show();

                doCompressProcess();
            }
        });
        return false;
    });


    /**
     * Start the bulk process
     */
    function doProcess_Background() {
        $.ajax({
            url: ajaxurl, type: 'POST', data: {action: 'wps_ic_doBulkCompress_Background'}, success: function (response) {

            }
        });
    }


    function updateRestoreStatusProgressCount(data) {
        var progress = $('.bulk-restore-status-progress');
        var restoredImages = $('.bulk-images-restored', progress);
        $(restoredImages).html('<h3>' + data.finished + '/' + data.total + '</h3><h5>Images Restored</h5>');
        $(progress).show();
    }


    function updateCompressStatusProgressCount(data) {
        var progress = $('.bulk-compress-status-progress');
        var compressedImages = $('.bulk-images-compressed>div.data', progress);
        var compressedThumbs = $('.bulk-thumbs-compressed>div.data', progress);
        var totalSavings = $('.bulk-total-savings>div.data', progress);
        var thumbSavings = $('.bulk-thumbs-savings>div.data', progress);
        var avgReduction = $('.bulk-avg-reduction>div.data', progress);

        $(compressedImages).html(data.progressCompressedImages);
        $(compressedThumbs).html(data.progressCompressedThumbs);
        $(totalSavings).html(data.progressTotalSavings);
        //$(thumbSavings).html(data.progressThumbsSavings);
        $(avgReduction).html(data.progressAvgReduction);
        $(progress).show();
    }


    function updateStatusProgressBar(progress_percent) {
        var progress = $('.bulk-status-progress-bar');
        var progressBar = $('.progress-bar-inner', '.bulk-status-progress-bar');
        $(progress).show();
        $(progressBar).css('width', progress_percent + '%');
    }


    function FinishedRestoreProcess(count) {
        clearInterval(BulkHeartbeatInterval);
        var bulkFinished = $('.bulk-finished');

        $.ajax({
            url: ajaxurl, type: 'POST', data: {action: 'wps_ic_RestoreFinished', type: 'restore', count: count}, success: function (response) {
                $('.bulk-status-progress-bar').hide();
                $('.wps-ic-stop-bulk-restore').hide();
                $('.bulk-status').hide();
                $(bulkFinished).show().html(response.data.html);
            }
        });
    }


    function FinishedCompressProcess() {
        clearInterval(BulkHeartbeatInterval);
        var bulkFinished = $('.bulk-finished');

        setTimeout(function(){
        $.ajax({
            url: ajaxurl, type: 'POST', data: {action: 'wps_ic_getBulkStats', type: 'compress'}, success: function (response) {
                $('.bulk-status-progress-bar').hide();
                $('.wps-ic-stop-bulk-compress').hide();
                $('.bulk-status-settings').hide();
                $('.bulk-status').fadeOut(600, function () {
                    $(bulkFinished).hide().html(response.data.html).fadeIn(800);
                });
            }
        });
        }, 1500);
    }


    /**
     * Start the bulk process
     */
    var lastProgress = 0;

    function doRestoreProcess() {
        $.ajax({
            url: ajaxurl, type: 'POST', data: {action: 'wps_ic_doBulkRestore', lastProgress: lastProgress}, success: function (response) {
                if (response.success == false) {
                    $('.wps-ic-stop-bulk-restore').hide();
                    $('.wps-ic-stop-bulk-compress').hide();
                    clearInterval(BulkHeartbeatInterval);
                }
                else {
                    $('.bulk-compress-status-progress-prepare').hide();
                    $('.bulk-preparing-placholders').hide();
                    $('.bulk-preparing-optimize').hide();
                    $('.bulk-preparing-restore').hide();
                    $('.bulk-status').html(response.data.html);
                    $('.bulk-restore-status-top-right>h3', '.wps-ic-bulk-html-wrapper').html(response.data.finished + ' / ' + response.data.total);
                    $('.bulk-restore-preview-image-holder img', '.wps-ic-bulk-html-wrapper').animate({opacity: 1});

                    var progress = $('.bulk-status-progress-bar', '.wps-ic-bulk-html-wrapper');
                    var progressBar = $('.progress-bar-inner', progress);
                    $(progress).show();
                    $(progressBar).css('width', response.data.progress + '%');

                    lastProgress = response.data.progress;
                    $('.bulk-status').show();

                    //updateStatusProgressBar(response.data.progress);
                    //updateRestoreStatusProgressCount(response.data);

                    if (response.data.leftover > 0) {
                        doRestoreProcess();
                    }
                    else {
                        setTimeout(function () {
                            FinishedRestoreProcess(response.data.finished);
                        }, 3000);
                    }
                }
            }
        });
    }


    /**
     * Start the bulk process
     */
    function doCompressProcess() {
        $.ajax({
            url: ajaxurl, type: 'POST', data: {action: 'wps_ic_doBulkCompress', hash: Math.random().toString(36).substring(7)}, success: function (response) {
                if (response.success == false) {
                    $('.wps-ic-stop-bulk-restore').hide();
                    $('.wps-ic-stop-bulk-compress').hide();
                    clearInterval(BulkHeartbeatInterval);
                }
                else {

                    if (response.data.leftover >= 0 && response.data.count<response.data.total) {
                        $('.bulk-compress-status-progress-prepare').hide();
                        $('.bulk-preparing-placholders').hide();
                        $('.bulk-preparing-optimize').hide();
                        $('.bulk-compress-status-progress-prepare').hide();
                        $('.bulk-status-settings').html(response.data.status).fadeIn(300);
                        $('.bulk-status').html(response.data.html);
                        $('.bulk-process-file-name').html(response.data.lastFileName);
                        $('.bulk-process-status').html(response.data.progress + '%');
                        $('.wps-ic-bulk-before img', '.wps-ic-bulk-html-wrapper').animate({opacity: 1});
                        $('.wps-ic-bulk-after img', '.wps-ic-bulk-html-wrapper').animate({opacity: 1});
                        $('.bulk-status').fadeIn(300);

                        updateStatusProgressBar(response.data.progress);
                        updateCompressStatusProgressCount(response.data);

                        doCompressProcess();
                    }
                    else {
                        $('.bulk-compress-status-progress-prepare').hide();
                        $('.bulk-preparing-placholders').hide();
                        $('.bulk-preparing-optimize').hide();
                        $('.bulk-compress-status-progress-prepare').hide();

                        $('.bulk-status-settings').html(response.data.status).fadeIn(300);
                        $('.bulk-status').html(response.data.html);
                        $('.bulk-process-file-name').html(response.data.lastFileName);
                        $('.bulk-process-status').html(response.data.progress + '%');
                        $('.wps-ic-bulk-before img', '.wps-ic-bulk-html-wrapper').animate({opacity: 1});
                        $('.wps-ic-bulk-after img', '.wps-ic-bulk-html-wrapper').animate({opacity: 1});
                        $('.bulk-status').fadeIn(300);

                        updateStatusProgressBar(response.data.progress);
                        updateCompressStatusProgressCount(response.data);

                        FinishedCompressProcess();
                    }
                }
            }
        });
    }


});
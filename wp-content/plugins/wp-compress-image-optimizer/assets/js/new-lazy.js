var lazyImages = [];
var elementorInvisible = [];
var pictureTag = [];
var active;
var activeBG = false;
var activeRegular;
var img_count = 1;
var browserWidth;
var mobileWidth;
var forceWidth = 0;
var jsDebug = 0;
var isMobile = false;
var imageExtension = '';
var imageFilename = '';

var wpc_u = window.location.href;
var wpc_c = document.images.length;
var wpc_s = false;
var wpc_z = wpc_vars.zoneName;
var wpc_d = {wpc_c: wpc_c, wpc_u: wpc_u, wpc_z: wpc_z};

document.addEventListener("visibilitychange", function logData() {
    if (document.visibilityState === "hidden" && wpc_s === false) {
        navigator.sendBeacon("https://cdn.zapwp.net/hello", JSON.stringify(wpc_d));
        wpc_s = true
    }
});
window.addEventListener("beforeunload", function logData() {
    if (wpc_s === false) {
        navigator.sendBeacon("https://cdn.zapwp.net/hello", JSON.stringify(wpc_d));
        wpc_s = true
    }
});
window.addEventListener("pagehide", function logData() {
    if (wpc_s === false) {
        navigator.sendBeacon("https://cdn.zapwp.net/hello", JSON.stringify(wpc_d));
        wpc_s = true
    }
});

function checkMobile() {
    if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 680) {
        isMobile = true;
        mobileWidth = window.innerWidth;
    }
}

checkMobile();

var WPCgetParents = function (elem) {
    if (jsDebug) {
        console.log('parents func');
        console.log(elem);
    }
    // Set up a parent array
    var parents = [];

    // Push each parent element to the array
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.childElementCount > 1) {
            break;
        }
        else {
            if (jsDebug) {
                console.log('parents func element');
                console.log(elem);
            }
            if (elem.classList.contains('logo')) {
                return 'logo';
                break;
            }
            parents.push(elem);
        }
    }

    // Return our parent array
    return parents;

};

function load() {
    browserWidth = window.innerWidth;
    lazyImages = document.querySelectorAll("img.wps-ic-live-cdn");
    //pictureTag = [].slice.call(document.querySelectorAll("picture.wps-ic-picture-tag"));
    elementorInvisible = document.querySelectorAll("section.elementor-invisible");
    active = false;
    activeRegular = false;
    lazyLoad();

    if (wpc_vars.background_sizing == 'true') {
        findBGImage();
    }

    //pictureLoad();
}

function findBGImage() {
    if (activeBG === false) {
        activeBG = true;
        var bgElement = '';
        var bgUrl = '';
        var bgWidth = 1;
        var newBgURL = '';
        bgs = document.querySelectorAll('span[data-img-url],span[style*="background"],div[style*="background"]');

        for (i = 0; i < bgs.length; ++i) {
            bgElement = bgs[i];

            if (bgElement.dataset.scanned == 'true') {
                continue;
            }

            bgElement.setAttribute('data-scanned', 'true');

            if (bgElement.style.background.match("url")) {

                // LazyLoad Things
                image_parent_type = bgElement.parentNode.nodeName.toLowerCase();

                if (image_parent_type == 'a') {
                    image_parent = bgElement.parentNode.parentElement;
                }
                else {
                    image_parent = bgElement.parentNode;
                }

                parent_style = window.getComputedStyle(image_parent);
                parent_width = Math.round(parseInt(parent_style.width));

                if (isNaN(parent_width)) {
                    image_parent = image_parent.parentNode;
                    parent_style = window.getComputedStyle(image_parent);
                    parent_width = Math.round(parseInt(parent_style.width));
                }

                if (isNaN(parent_width) || parent_width < 1) {
                    bgWidth = 1;
                }
                else {
                    bgWidth = parent_width;
                }

                bgUrl = bgElement.style.background;

                bgUrl = bgUrl.substr(bgUrl.indexOf("url") + 4, bgUrl.lastIndexOf(")") - (bgUrl.indexOf("url") + 4));
                bgWidth = Math.round(parseInt(bgWidth * 1.20));
                newBgURL = bgUrl.replace(/w:(\d{1,5})/g, 'w:' + bgWidth);

                bgElement.setAttribute('data-bg-width', bgWidth);
                bgElement.style.background = 'url(' + newBgURL + ')';
                bgUrl = bgElement.style.background;
                bgElement.style.display = 'block';
            }
            else if (bgElement.style.backgroundImage.match("url")) {

                // LazyLoad Things
                image_parent_type = bgElement.parentNode.nodeName.toLowerCase();

                if (image_parent_type == 'a') {
                    image_parent = bgElement.parentNode.parentElement;
                }
                else {
                    image_parent = bgElement.parentNode;
                }

                parent_style = window.getComputedStyle(image_parent);
                parent_width = Math.round(parseInt(parent_style.width));


                if (isNaN(parent_width)) {
                    image_parent = image_parent.parentNode;
                    parent_style = window.getComputedStyle(image_parent);
                    parent_width = Math.round(parseInt(parent_style.width));
                }

                if (isNaN(parent_width) || parent_width < 1) {
                    bgWidth = 1;
                }
                else {
                    bgWidth = parent_width;
                }

                bgUrl = bgElement.style.backgroundImage;
                bgWidth = Math.round(parseInt(bgWidth * 1.20));
                newBgURL = bgUrl.replace(/w:(\d{1,5})/g, 'w:' + bgWidth);

                bgElement.style.backgroundImage = newBgURL;
                bgElement.style.display = 'block';

            }
            else if (typeof bgElement.dataset.imgUrl !== 'undefined' && bgElement.dataset.imgUrl != '') {
                // LazyLoad Things
                image_parent_type = bgElement.parentNode.nodeName.toLowerCase();

                if (image_parent_type == 'a') {
                    image_parent = bgElement.parentNode.parentElement;
                }
                else {
                    image_parent = bgElement.parentNode;
                }

                parent_style = window.getComputedStyle(image_parent);
                parent_width = Math.round(parseInt(parent_style.width));

                if (isNaN(parent_width)) {
                    image_parent = image_parent.parentNode;
                    parent_style = window.getComputedStyle(image_parent);
                    parent_width = Math.round(parseInt(parent_style.width));
                }

                if (isNaN(parent_width) || parent_width < 1) {
                    bgWidth = 1;
                }
                else {
                    bgWidth = parent_width;
                }

                bgUrl = bgElement.dataset.imgUrl;
                //bgUrl = bgUrl.substr(bgUrl.indexOf("url") + 4, bgUrl.lastIndexOf(")") - (bgUrl.indexOf("url") + 4) );

                bgWidth = Math.round(parseInt(bgWidth * 1.20));
                newBgURL = bgUrl.replace(/w:(\d{1,5})/g, 'w:' + bgWidth);

                bgElement.setAttribute('data-img-url', newBgURL);
            }
        }

        activeBG = false;
    }
}

function loadMutation() {
    browserWidth = window.innerWidth;
    lazyImages = document.querySelectorAll("img.wps-ic-lazy-image");
    //pictureTag = [].slice.call(document.querySelectorAll("picture.wps-ic-picture-tag"));
    elementorInvisible = document.querySelectorAll("section.elementor-invisible");
    active = false;
    activeRegular = false;
    lazyLoad();

    if (wpc_vars.background_sizing == 'true') {
        findBGImage();
    }
}


if (wpc_vars.js_debug == 'true') {
    jsDebug = 1;
    console.log('JS Debug is Enabled');
}

var parent_before = false;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    wpc_vars.webp_enabled = 'false';
    if (jsDebug) {
        console.log('Safari Disable WebP');
    }
}

if (jsDebug) {
    console.log('Safari: ' + isSafari);
}

function pictureLoad() {
    pictureTag.forEach(function (pictureImage) {

        imgWidth = 1;
        var children = pictureImage.children;
        var pictureParent = WPCgetParents(pictureImage.parentNode);

        var last = Object.keys(pictureParent)[pictureParent.length - 1];
        pictureParent = Object.values(pictureParent)[last];

        parent_style = window.getComputedStyle(pictureParent);
        var widthIsPercent = parent_style.width.indexOf("%") > -1;

        if (widthIsPercent) {
            pictureParent = pictureParent.parentNode;
            parent_style = window.getComputedStyle(pictureParent);
        }

        var widthIsPercent = parent_style.width.indexOf("%") > -1;
        if (widthIsPercent) {
            parent_width = 1;
        }
        else {
            parent_width = Math.round(parseInt(parent_style.width));
        }

        if ((parent_width !== 0 && typeof parent_width !== 'undefined')) {
            // We found a great image size, use it
            imgWidth = parent_width;
        }
        else {
            imgWidth = 1;
        }

        if (typeof imgWidth == 'undefined' || !imgWidth || imgWidth == 0 || isNaN(imgWidth)) {
            imgWidth = 1;
        }

        if (isMobile) {
            if (imgWidth > mobileWidth) {
                imgWidth = mobileWidth;
            }
        }

        for (var i = 0; i < children.length; i++) {
            var srcset = children[i].srcset;
            var src = children[i].src;
            if (srcset) {

                newApiURL = children[i].srcset;
                newApiURL = newApiURL.replace(/w:(\d{1,5})/g, 'w:' + imgWidth);

                if ((window.devicePixelRatio >= 2 && wpc_vars.retina_enabled == 'true') || wpc_vars.force_retina == 'true') {
                    newApiURL = newApiURL.replace(/r:0/g, 'r:1');

                    if (jsDebug) {
                        console.log('Retina set to True');
                        console.log('DevicePixelRation ' + window.devicePixelRatio);
                    }

                }
                else {
                    newApiURL = newApiURL.replace(/r:1/g, 'r:0');

                    if (jsDebug) {
                        console.log('Retina set to False');
                        console.log('DevicePixelRation ' + window.devicePixelRatio);
                    }

                }

                if (wpc_vars.webp_enabled == 'true' && isSafari == false) {
                    newApiURL = newApiURL.replace(/wp:0/g, 'wp:1');

                    if (jsDebug) {
                        console.log('WebP set to True');
                    }

                }
                else {
                    newApiURL = newApiURL.replace(/wp:1/g, 'wp:0');

                    if (jsDebug) {
                        console.log('WebP set to False');
                    }

                }

                if (wpc_vars.exif_enabled == 'true') {
                    newApiURL = newApiURL.replace(/e:0/g, 'e:1');
                }
                else {
                    newApiURL = newApiURL.replace(/\/e:1/g, '');
                    newApiURL = newApiURL.replace(/\/e:0/g, '');
                }

                children[i].srcset = newApiURL;
            }
            if (src) {

                newApiURL = children[i].src;
                newApiURL = newApiURL.replace(/w:(\d{1,5})/g, 'w:' + imgWidth);

                if ((window.devicePixelRatio >= 2 && wpc_vars.retina_enabled == 'true') || wpc_vars.force_retina == 'true') {
                    newApiURL = newApiURL.replace(/r:0/g, 'r:1');

                    if (jsDebug) {
                        console.log('Retina set to True');
                        console.log('DevicePixelRation ' + window.devicePixelRatio);
                    }

                }
                else {
                    newApiURL = newApiURL.replace(/r:1/g, 'r:0');

                    if (jsDebug) {
                        console.log('Retina set to False');
                        console.log('DevicePixelRation ' + window.devicePixelRatio);
                    }

                }

                if (wpc_vars.webp_enabled == 'true' && isSafari == false) {
                    newApiURL = newApiURL.replace(/wp:0/g, 'wp:1');

                    if (jsDebug) {
                        console.log('WebP set to True');
                    }

                }
                else {
                    newApiURL = newApiURL.replace(/wp:1/g, 'wp:0');

                    if (jsDebug) {
                        console.log('WebP set to False');
                    }

                }

                if (wpc_vars.exif_enabled == 'true') {
                    newApiURL = newApiURL.replace(/e:0/g, 'e:1');
                }
                else {
                    newApiURL = newApiURL.replace(/\/e:1/g, '');
                    newApiURL = newApiURL.replace(/\/e:0/g, '');
                }

                children[i].src = newApiURL;
            }
        }


    });
}

function getFileName(lazyImage) {
    if (typeof lazyImage.dataset.src !== 'undefined' && lazyImage.dataset.src != '') {

        if (lazyImage.dataset.src.endsWith('u:https')) {
            return;
        }

        imageFilename = lazyImage.dataset.src;
        imageExtension = lazyImage.dataset.src.split('.').pop();
    }
    else if (typeof lazyImage.src !== 'undefined' && lazyImage.src != '') {
        if (lazyImage.src.endsWith('u:https')) {
            return;
        }

        imageFilename = lazyImage.src;
        imageExtension = lazyImage.src.split('.').pop();
    }
}


function isImage() {
    if (imageExtension !== '') {
        if (imageExtension !== 'jpg' && imageExtension !== 'jpeg' && imageExtension !== 'webp' && imageExtension !== 'gif' && imageExtension !== 'png' && imageExtension !== 'svg' && lazyImage.src.includes('svg+xml') == false && lazyImage.src.includes('placeholder.svg') == false) {
            return false;
        }
        else {
            return true;
        }
    }

    return false;
}


function SetupNewApiURL(newApiURL, imgWidth) {
    if (imgWidth > 0) {
        newApiURL = newApiURL.replace(/w:(\d{1,5})/g, 'w:' + imgWidth);
    }

    if ((window.devicePixelRatio >= 2 && wpc_vars.retina_enabled == 'true') || wpc_vars.force_retina == 'true') {
        newApiURL = newApiURL.replace(/r:0/g, 'r:1');

        if (jsDebug) {
            console.log('Retina set to True');
            console.log('DevicePixelRation ' + window.devicePixelRatio);
        }

    }
    else {
        newApiURL = newApiURL.replace(/r:1/g, 'r:0');

        if (jsDebug) {
            console.log('Retina set to False');
            console.log('DevicePixelRation ' + window.devicePixelRatio);
        }
    }

    if (wpc_vars.webp_enabled == 'true' && isSafari == false) {
        newApiURL = newApiURL.replace(/wp:0/g, 'wp:1');

        if (jsDebug) {
            console.log('WebP set to True');
        }

    }
    else {
        newApiURL = newApiURL.replace(/wp:1/g, 'wp:0');

        if (jsDebug) {
            console.log('WebP set to False');
        }

    }

    if (wpc_vars.exif_enabled == 'true') {
        newApiURL = newApiURL.replace(/e:0/g, 'e:1');
    }
    else {
        newApiURL = newApiURL.replace(/\/e:1/g, '');
        newApiURL = newApiURL.replace(/\/e:0/g, '');
    }

    if (isMobile) {
        newApiURL = getSrcset(newApiURL.split(","), mobileWidth);
    }

    return newApiURL;
}

function lazyLoad() {
    if (active === false) {
        active = true;

        for (i = 0; i < elementorInvisible.length; ++i) {
            elementorSection = elementorInvisible[i];
            if ((elementorSection.getBoundingClientRect().top <= window.innerHeight && elementorSection.getBoundingClientRect().bottom >= 0) && getComputedStyle(elementorSection).display !== "none") {
                elementorSection.classList.remove('elementor-invisible');
            }
        }

        for (i = 0; i < lazyImages.length; ++i) {
            lazyImage = lazyImages[i];

            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight + 500 && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {

                if (jsDebug) {
                    console.log('Image src');
                    console.log(lazyImage.src);
                    console.log('Image srcset');
                    console.log(lazyImage.srcset);
                    console.log('Image data srcset');
                    console.log(lazyImage.dataset.srcset);
                }

                getFileName(lazyImage);

                if (!isImage()) {
                    return;
                }


                if (wpc_vars.speed_test == '1') {
                    if (img_count >= 6) {
                        return;
                    }
                    else {
                        forceWidth = 320;
                    }

                    img_count++;
                }

                // Integrations
                masonry = lazyImage.closest(".masonry");
                owlSlider = lazyImage.closest(".owl-carousel");
                SlickSlider = lazyImage.closest(".slick-slider");
                SlickList = lazyImage.closest(".slick-list");

                if (jsDebug) {
                    console.log('lazyImage:');
                    console.log(lazyImage);
                }

                image_parent = WPCgetParents(lazyImage);

                if (jsDebug) {
                    console.log('lazyImage is logo:');
                    console.log(image_parent);
                }

                /**
                 * Is SlickSlider/List?
                 */
                if (SlickSlider || SlickList) {
                    if (typeof lazyImage.dataset.src !== 'undefined' && lazyImage.dataset.src != '') {
                        newApiURL = lazyImage.dataset.src;
                    }
                    else {
                        newApiURL = lazyImage.src;
                    }

                    newApiURL = newApiURL.replace(/w:(\d{1,5})/g, 'w:1');
                    lazyImage.src = newApiURL;
                    lazyImage.classList.add("ic-fade-in");
                    lazyImage.classList.remove("wps-ic-lazy-image");
                    lazyImage.style.opacity = null;
                    return;
                }

                /**
                 * Is Logo?
                 */
                if (image_parent == 'logo') {

                    if (typeof lazyImage.dataset.src !== 'undefined' && lazyImage.dataset.src != '') {
                        newApiURL = lazyImage.dataset.src;
                    }
                    else {
                        newApiURL = lazyImage.src;
                    }

                    newApiURL = newApiURL.replace(/w:(\d{1,5})/g, 'w:1');
                    lazyImage.src = newApiURL;
                    lazyImage.style.opacity = 0;
                    lazyImage.classList.add("ic-fade-in");
                    lazyImage.classList.remove("wps-ic-lazy-image");
                    lazyImage.style.opacity = null;
                    return;
                }


                imageStyle = window.getComputedStyle(lazyImage);
                ImageWidthPreloaded = Math.round(parseInt(imageStyle.width));

                if (jsDebug) {
                    console.log('ImageFilename:' + imageFilename.toLowerCase());
                    console.log('lazyImage parent:');
                    console.log(image_parent);
                    console.log(image_parent.length);
                    console.log(Object.keys(image_parent)[image_parent.length - 1]);
                    console.log('--lazyImage parent end--');
                }

                var last = Object.keys(image_parent)[image_parent.length - 1];
                image_parent = Object.values(image_parent)[last];

                parent_style = window.getComputedStyle(image_parent);
                var widthIsPercent = parent_style.width.indexOf("%") > -1;

                if (widthIsPercent) {
                    image_parent = image_parent.parentNode;
                    parent_style = window.getComputedStyle(image_parent);
                }

                var widthIsPercent = parent_style.width.indexOf("%") > -1;
                if (widthIsPercent) {
                    parent_width = 1;
                }
                else {
                    parent_width = Math.round(parseInt(parent_style.width));
                }

                imageWidth = ImageWidthPreloaded;

                imageWidthNatural = lazyImage.dataset.width;
                imageHeightNatural = lazyImage.dataset.height;

                imageIsLogo = false;
                imageIsZoom = false;

                //imageClass = [].slice.call(lazyImage.classList);
                imageClass = lazyImage.classList.value;
                imageIsZoom = imageClass.toLowerCase().includes("zoom");
                imageIsLogoClass = imageClass.toLowerCase().includes("logo");
                imageIsLogoSrc = imageFilename.toLowerCase().includes("logo");

                if (imageClass.toLowerCase().includes("no-wpc-load")) {
                    return;
                }

                if (imageIsLogoClass || imageIsLogoSrc) {
                    imageIsLogo = true;
                }

                if (jsDebug) {
                    console.log('Image logo: ' + imageIsLogo);
                }

                /**
                 * If image is NOT Logo
                 */
                if (typeof imageIsLogo == 'undefined' || !imageIsLogo) {
                    imageIsLogo = false;

                    if (wpc_vars.adaptive_enabled == '1' || wpc_vars.adaptive_enabled == 'true') {
                        if (!imageWidth || imageWidth == 0 || typeof imageWidth == 'undefined') {

                            if (jsDebug) {
                                console.log('Image Width Preloaded ' + imageWidth);
                            }

                            // LazyLoad Things
                            image_parent_type = lazyImage.parentNode.nodeName.toLowerCase();

                            if (image_parent_type == 'a') {
                                image_parent = lazyImage.parentNode.parentElement;
                            }
                            else {
                                image_parent = lazyImage.parentNode;
                            }

                            parent_style = window.getComputedStyle(image_parent);


                            if (parent_style.width == 'auto') {
                                image_parent = image_parent.parentNode;
                                parent_style = window.getComputedStyle(image_parent);
                            }

                            parent_width = Math.round(parseInt(parent_style.width));
                            imgWidth = Math.round(parseInt(parent_style.width));

                            if (jsDebug) {
                                console.log('Image Width set to: ' + imgWidth);
                                console.log(image_parent);
                            }

                            if (imgWidth == parent_width) {
                                image_parent = image_parent.parentNode;
                                parent_style = window.getComputedStyle(image_parent);
                                parent_width = Math.round(parseInt(parent_style.width));
                            }

                            if (jsDebug) {
                                console.log('Parent set to #131: ' + image_parent);
                            }

                            if (typeof imgWidth == 'undefined' || !imgWidth || imgWidth == 0 || isNaN(imgWidth)) {
                                imgWidth = 1;
                            }

                        }
                        else {
                            imgWidth = Math.round(parseInt(imageWidth));

                            if (jsDebug) {
                                console.log('Image Width Predefined ' + imgWidth);
                            }

                            // PArent
                            image_parent_type = lazyImage.parentNode.nodeName.toLowerCase();

                            if (image_parent_type == 'a') {
                                image_parent = lazyImage.parentNode.parentElement;
                            }
                            else {
                                image_parent = lazyImage.parentNode;
                            }

                            parent_style = window.getComputedStyle(image_parent);
                            parent_width = Math.round(parseInt(parent_style.width));
                            parent_height = Math.round(parseInt(parent_style.height));

                            if (jsDebug) {
                                console.log('Image Width set to #158: ' + imgWidth);
                                console.log(image_parent);
                                console.log(parent_width);
                            }

                            if (isNaN(parent_width)) {
                                image_parent = image_parent.parentNode;
                                parent_style = window.getComputedStyle(image_parent);
                                parent_width = Math.round(parseInt(parent_style.width));
                                parent_height = Math.round(parseInt(parent_style.height));
                            }

                            if (isNaN(imgWidth) || imgWidth < 50) {
                                if (imgWidth < parent_width) {
                                    imgWidth = parent_width;
                                }
                            }


                            if (isNaN(imgWidth) || isNaN(parent_width)) {
                                imgWidth = browserWidth;
                            }

                            if (imgWidth > browserWidth) {
                                imgWidth = browserWidth;
                            }

                        }
                    }
                    else {

                        imgWidth = Math.round(parseInt(window.getComputedStyle(lazyImage).width));

                        image_parent = lazyImage.parentNode;
                        parent_style = window.getComputedStyle(image_parent);
                        parent_width = Math.round(parseInt(parent_style.width));
                        parent_height = Math.round(parseInt(parent_style.height));
                    }


                }
                else {
                    // Image is a logo or something like a logo
                    if (wpc_vars.adaptive_enabled == '1' || wpc_vars.adaptive_enabled == 'true') {
                        imgWidth = 400;
                        image_parent = lazyImage.parentNode;
                        parent_style = window.getComputedStyle(image_parent);
                        parent_width = Math.round(parseInt(parent_style.width));
                        parent_height = Math.round(parseInt(parent_style.height));
                    }
                    else {
                        imgWidth = 1;
                        image_parent = lazyImage.parentNode;
                        parent_style = window.getComputedStyle(image_parent);
                        parent_width = Math.round(parseInt(parent_style.width));
                        parent_height = Math.round(parseInt(parent_style.height));
                    }

                    lazyImage.classList.add("ic-fade-in");
                    lazyImage.classList.remove("wps-ic-lazy-image");


                    /**
                     * Added fix for images which have logo in their filename/class but are not actually logo
                     */
                    if (imageWidthNatural > imgWidth) {
                        imageIsLogo = false;
                        imgWidth = Math.round(parseInt(imageWidthNatural));
                    }

                }

                if (imgWidth > browserWidth) {
                    imgWidth = browserWidth;
                }

                if (typeof imgWidth == 'undefined' || !imgWidth || imgWidth == 0 || isNaN(imgWidth)) {
                    imgWidth = 1;
                }

                imageRatio = imageWidthNatural / imageHeightNatural;

                if (typeof parent_height == 'undefined' || !parent_height || parent_height == 0) {
                    parent_height = Math.round(parseInt(parent_style.height));
                }

                if (typeof parent_height == 'undefined' || !parent_height || parent_height == 0) {
                    parent_height = lazyImage.dataset.height;
                }

                if (imageRatio < 1) {
                    newWidth = (parent_height * imageRatio);
                    //imgWidth = Math.round(newWidth);
                }


                if (typeof imgWidth == 'undefined' || imageIsLogo && (imgWidth < 200 || (!imgWidth || imgWidth == 0))) {
                    imgWidth = 200;
                }


                if (forceWidth > 0 && imgWidth > 320) {
                    imgWidth = forceWidth;
                }

                /**
                 * Give Image a little extra width for crop/scale fix
                 */
                imgWidth = imgWidth + 50;

                if (jsDebug) {
                    console.log('Image:');
                    console.log(lazyImage);
                    console.log('Image Width: ' + imgWidth);
                }

                if (typeof imgWidth == 'undefined' || !imgWidth || imgWidth == 0 || isNaN(imgWidth)) {
                    imgWidth = 1;
                }

                if (isNaN(imgWidth) || imgWidth <= 30) {
                    imgWidth = 1;
                }

                if (jsDebug) {
                    console.log('Image srcset');
                    console.log(lazyImage.srcset);
                    console.log('Image data srcset');
                    console.log(lazyImage.dataset.srcset);
                }

                if (owlSlider) {
                    imgWidth = 640;
                }

                if (imageIsZoom) {
                    imgWidth = 1;
                }

                if (isMobile) {
                    if (imgWidth > mobileWidth) {
                        imgWidth = mobileWidth;
                    }
                }

                /**
                 * SrcSet Code
                 */
                srcSetAPI = '';
                if (typeof lazyImage.srcset !== 'undefined' && lazyImage.srcset != '') {
                    srcSetAPI = newApiURL = lazyImage.srcset;

                    if (jsDebug) {
                        console.log('Image has srcset');
                        console.log(lazyImage.srcset);
                        console.log(newApiURL);
                    }

                    newApiURL = SetupNewApiURL(newApiURL);

                    lazyImage.srcset = newApiURL;
                }
                else if (typeof lazyImage.dataset.srcset !== 'undefined' && lazyImage.dataset.srcset != '') {
                    srcSetAPI = newApiURL = lazyImage.dataset.srcset;
                    if (jsDebug) {
                        console.log('Image does not have srcset');
                        console.log(newApiURL);
                    }

                    newApiURL = SetupNewApiURL(newApiURL);

                    lazyImage.dataset.srcset = newApiURL;
                }


                /**
                 * Setup Image SRC only if srcset is empty
                 */
                if ((typeof lazyImage.dataset.src !== 'undefined' && lazyImage.dataset.src != '')) {
                    newApiURL = lazyImage.dataset.src;

                    newApiURL = SetupNewApiURL(newApiURL, imgWidth);

                    lazyImage.src = newApiURL;
                    if (typeof lazyImage.dataset.srcset !== 'undefined' && lazyImage.dataset.src != '') {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                }
                else if (typeof lazyImage.src !== 'undefined' && lazyImage.src != '') {
                    newApiURL = lazyImage.src;

                    newApiURL = SetupNewApiURL(newApiURL, imgWidth);

                    lazyImage.src = newApiURL;
                    if (typeof lazyImage.dataset.srcset !== 'undefined' && lazyImage.dataset.src != '') {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                }

                lazyImage.style.opacity = 0;
                lazyImage.classList.add("ic-fade-in");
                lazyImage.classList.remove("wps-ic-lazy-image");
                lazyImage.style.opacity = null;

                //lazyImage.removeAttribute('data-src'); => Had issues with Woo Zoom
                lazyImage.removeAttribute('data-srcset');

                /*lazyImages = lazyImages.filter(function (image) {
                    return image !== lazyImage;
                });*/

            }
            //});
        }

        active = false;
    }
}

function srcSetUpdateWidth(srcSetUrl, imageWidth) {
    let srcSetWidth = srcSetUrl.split(' ').pop();
    if (srcSetWidth.endsWith('w')) {
        // Remove w from width string
        let Width = srcSetWidth.slice(0, -1);
        if (parseInt(Width) <= 5) {
            Width = 1;
        }
        srcSetUrl = srcSetUrl.replace(/w:(\d{1,5})/g, 'w:' + imageWidth);
    }
    else if (srcSetWidth.endsWith('x')) {
        let Width = srcSetWidth.slice(0, -1);
        if (parseInt(Width) <= 3) {
            Width = 1;
        }
        srcSetUrl = srcSetUrl.replace(/w:(\d{1,5})/g, 'w:' + imageWidth);
    }
    return srcSetUrl;
}

function getSrcset(sourceArray, imageWidth) {
    let changedSrcset = '';

    sourceArray.forEach(function (imageSource) {

        if (jsDebug) {
            console.log('Image src part from array');
            console.log(imageSource);
        }

        newApiURL = srcSetUpdateWidth(imageSource.trimStart(), imageWidth);
        changedSrcset += newApiURL + ",";
    });

    return changedSrcset.slice(0, -1); // Remove last comma
}

var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (event) {
        //console.log(event);
        loadMutation();
    });
});

mutationObserver.observe(document.documentElement, {
    attributes: true, characterData: true, childList: true, subtree: true, attributeOldValue: true, characterDataOldValue: true
});

window.addEventListener("resize", lazyLoad);
window.addEventListener("orientationchange", lazyLoad);
document.addEventListener("scroll", lazyLoad);
document.addEventListener("DOMContentLoaded", load);

if ('undefined' !== typeof jQuery) {
    jQuery(document).on('elementor/popup/show', function () {
        load();
    });
}
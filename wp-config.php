<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Intelli' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6eALVnRJDpYpV&e3K~:}?2|kFq%(b)<zrfj$Ju2*oJc>[|_jeHgl$$5:~&`5DM$[' );
define( 'SECURE_AUTH_KEY',  't0O5E|2AJ%`%YbxoppQL=Av,yJ@7G7M,^Pu.twru[1csR3E]+Z /=ZPj&os?xp[r' );
define( 'LOGGED_IN_KEY',    ',-D`jC.6tMC,$%>0&5O`a@0l<u)0Z4TISdhG-pO.V0.QftrgagFIgGG5s>~^A`e]' );
define( 'NONCE_KEY',        '[=v1-c&f)w3}[8}IT=B[W_T3,.kFZb/6XY[HW0W@@Vs%e;t5~G.xtT Jn)6a@yke' );
define( 'AUTH_SALT',        '$*zve6;.?qhCZ/<Ki[E)cNPYm+spO_BPX0X8(VFQ1SZUa,9Cbr2YmWrINlL,Cc/I' );
define( 'SECURE_AUTH_SALT', 'iG fskoZATH5&B[_5hE94Ets @9;lp9>@h0bsk{n#xSmY|fc2U|zo@]oK{}`)({t' );
define( 'LOGGED_IN_SALT',   '|v=.1Q~6`noIjci1WQ35J*eqm~C6yQA.tt{hb*%09wyijwiprI<k[|R.! AIzl8H' );
define( 'NONCE_SALT',       'w--UVSj)&hlGq`A-~/FZ9n0#H3q7Awiux^#bf/2-x>9k`e[(M,+p_C$o7pDWwJo7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

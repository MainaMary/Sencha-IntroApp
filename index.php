<script type="text/javascript">
var Ext = Ext || {}; // Ext namespace won't be defined yet...

// This function is called by the Microloader after it has performed basic
// device detection. The results are provided in the "tags" object. You can
// use these tags here or even add custom tags. These can be used by platform
// filters in your manifest or by platformConfig expressions in your app.
//
Ext.beforeLoad = function (tags) {
    var s = location.search,  // the query string (ex "?foo=1&bar")
        profile;

    // For testing look for "?classic" or "?modern" in the URL to override
    // device detection default.
    //
    if (s.match(/\bclassic\b/)) {
        profile = 'classic';
    }
    else if (s.match(/\bmodern\b/)) {
        profile = 'modern';
    }
    else {
        profile = tags.desktop ? 'classic' : 'modern';
        //profile = tags.phone ? 'modern' : 'classic';
    }

    Ext.manifest = profile; // this name must match a build profile name

    // This function is called once the manifest is available but before
    // any data is pulled from it.
    //
    //return function (manifest) {
        // peek at / modify the manifest object
    //};
};
</script>

<?php

// Path to the front controller (this file)
define('FCPATH', __DIR__ . DIRECTORY_SEPARATOR); 

/*
 *---------------------------------------------------------------
 * BOOTSTRAP THE APPLICATION
 *---------------------------------------------------------------
 * This process sets up the path constants, loads and registers
 * our autoloader, along with Composer's, loads our constants
 * and fires up an environment-specific bootstrapping.
 */

// Ensure the current directory is pointing to the front controller's directory
chdir(__DIR__);

// Load our paths config file
// This is the line that might need to be changed, depending on your folder structure.
$pathsConfig = FCPATH . './backend/app/Config/Paths.php';
// ^^^ Change this if you move your application folder
require realpath($pathsConfig) ?: $pathsConfig;

$paths = new Config\Paths();

// Location of the framework bootstrap file.
$bootstrap = rtrim($paths->systemDirectory, '\\/ ') . DIRECTORY_SEPARATOR . 'bootstrap.php';
$app       = require realpath($bootstrap) ?: $bootstrap;

/*
 *---------------------------------------------------------------
 * LAUNCH THE APPLICATION
 *---------------------------------------------------------------
 * Now that everything is setup, it's time to actually fire
 * up the engines and make this app do its thang.
 * 
 */


$app->run();



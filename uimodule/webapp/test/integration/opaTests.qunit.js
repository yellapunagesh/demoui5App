/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/yellapu/demoui5App/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});

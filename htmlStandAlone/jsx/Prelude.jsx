/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2014 Adobe
* All Rights Reserved.
*
* NOTICE: Adobe permits you to use, modify, and distribute this file in
* accordance with the terms of the Adobe license agreement accompanying
* it. If you have received this file from a source other than Adobe,
* then your use, modification, or distribution of it requires the prior
* written permission of Adobe. 
**************************************************************************/
$._ext_PPRO = {
    setMetadata: function (namespace, key, value) {
        return app.metadata.setMetadataValue(namespace, key, value);
    },
    addMarker: function (marker) {
        return app.metadata.addMarker(marker);
    },
    updateMarker: function (marker) {
        return app.metadata.updateMarker(marker);
    },
    deleteMarker: function (marker) {
        return app.metadata.deleteMarker(marker);
    },
    getAppSystemPrefPath: function () {
        var path = app.getAppSystemPrefPath;
        return path;
    },
    deleteAsset: function (path) {
        return app.project.deleteAsset(path);
    },
};
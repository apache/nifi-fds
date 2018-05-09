/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ngMaterial = require('@angular/material');
var ngCore = require('@angular/core');

/**
 * NfRegistryEditBucketPolicy constructor.
 *
 * @param nfRegistryApi         The api service.
 * @param nfRegistryService     The nf-registry.service module.
 * @param activatedRoute        The angular route module.
 * @param matDialogRef          The angular material dialog ref.
 * @param data                  The data passed into this component.
 * @constructor
 */
function FdsDemoDialog(matDialogRef, data) {
    // Services
    this.dialogRef = matDialogRef;
    this.data = data;
};

FdsDemoDialog.prototype = {
    constructor: FdsDemoDialog,

    /**
     * Cancel creation of a new policy and close dialog.
     */
    cancel: function () {
        this.dialogRef.close();
    }
};

FdsDemoDialog.annotations = [
    new ngCore.Component({
        template: require('./fds-demo-dialog.html!text')
    })
];

FdsDemoDialog.parameters = [
    ngMaterial.MatDialogRef,
    ngMaterial.MAT_DIALOG_DATA
];

module.exports = FdsDemoDialog;

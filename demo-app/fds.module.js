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

var ngCore = require('@angular/core');
var FdsRoutes = require('demo-app/fds.routes.js');
var fdsCore = require('@flow-design-system/core');
var Fds = require('demo-app/fds.js');
var FdsDemo = require('demo-app/components/flow-design-system/fds-demo.js');
var FdsDemoDialog = require('demo-app/components/flow-design-system/dialogs/demo/fds-demo-dialog.js');
var FdsService = require('demo-app/services/fds.service.js');
var ngCommonHttp = require('@angular/common/http');

function FdsModule() {
};

FdsModule.prototype = {
    constructor: FdsModule
};

FdsModule.annotations = [
    new ngCore.NgModule({
        imports: [
            fdsCore,
            FdsRoutes
        ],
        declarations: [
            Fds,
            FdsDemo,
            FdsDemoDialog
        ],
        entryComponents: [
            FdsDemoDialog
        ],
        providers: [
            FdsService
        ],
        bootstrap: [Fds]
    })
];

module.exports = FdsModule;

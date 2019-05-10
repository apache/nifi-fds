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

import { NgModule } from '@angular/core';
import FdsCoreModule from '@flow-design-system/core';
import FdsRoutes from 'webapp/fds.routes.js';
import Fds from 'webapp/fds.js';
import FdsDemo from 'webapp/components/flow-design-system/fds-demo.js';
import FdsDemoDialog from 'webapp/components/flow-design-system/dialogs/demo/fds-demo-dialog.js';
import FdsService from 'webapp/services/fds.service.js';

function FdsModule() {
}

FdsModule.prototype = {
    constructor: FdsModule
};

FdsModule.annotations = [
    new NgModule({
        imports: [
            FdsCoreModule,
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

export default FdsModule;

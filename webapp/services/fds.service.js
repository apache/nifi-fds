/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the 'License'); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TdDataTableService } from '@covalent/core/data-table';
import { FdsDialogService, FdsSnackBarService } from '@nifi-fds/core';
import {version} from '../../package.json';

/**
 * FdsService constructor.
 *
 * @param tdDataTableService    The covalent data table service module.
 * @param fdsDialogService      The FDS dialog service.
 * @param fdsSnackBarService    The FDS snack bar service module.
 * @constructor
 */
function FdsService(tdDataTableService, fdsDialogService, fdsSnackBarService) {
    // Services
    this.dialogService = fdsDialogService;
    this.snackBarService = fdsSnackBarService;
    this.dataTableService = tdDataTableService;

    // General
    this.title = 'Apache NiFi Flow Design System Demo v' + version;
    this.inProgress = true;
    this.perspective = '';
}

FdsService.prototype = {
    constructor: FdsService,
};

FdsService.parameters = [
    TdDataTableService,
    FdsDialogService,
    FdsSnackBarService
];

export default FdsService;

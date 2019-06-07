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
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {
    FdsSnackBarComponent,
    FdsSnackBarTitleDirective,
    FdsSnackBarActionsDirective,
    FdsSnackBarContentDirective
} from './fds-snackbar.component';

import {
    ICoasterConfig,
    FdsSnackBarService
} from './services/snackbar.service';

import { FdsCoasterComponent } from './coaster/coaster.component';

const FDS_SNACKBARS = [
    FdsSnackBarComponent,
    FdsSnackBarTitleDirective,
    FdsSnackBarActionsDirective,
    FdsSnackBarContentDirective,
    FdsCoasterComponent
];

const FDS_SNACKBARS_ENTRY_COMPONENTS = [
    FdsCoasterComponent
];

/**
 * FdsSnackBarsModule constructor.
 *
 * @constructor
 */
function FdsSnackBarsModule() {

}

FdsSnackBarsModule.prototype = {
    constructor: FdsSnackBarsModule
};

FdsSnackBarsModule.annotations = [
    new NgModule({
        imports: [
            FlexLayoutModule,
            FormsModule,
            CommonModule,
            MatSnackBarModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule
        ],
        declarations: [
            FDS_SNACKBARS
        ],
        exports: [
            FDS_SNACKBARS
        ],
        providers: [
            FdsSnackBarService
        ],
        entryComponents: [
            FDS_SNACKBARS_ENTRY_COMPONENTS
        ]
    })
];

export {
    FdsSnackBarsModule,
    ICoasterConfig,
    FdsSnackBarService,
    FdsSnackBarComponent,
    FdsSnackBarTitleDirective,
    FdsSnackBarContentDirective,
    FdsSnackBarActionsDirective,
    FdsCoasterComponent
};

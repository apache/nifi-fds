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
    MatDialogModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {
    FdsDialogTitleDirective,
    FdsDialogContentDirective,
    FdsDialogActionsDirective,
    FdsDialogComponent
} from '@flow-design-system/dialog-component';
import {
    IConfirmConfig,
    FdsDialogService
} from '@flow-design-system/dialog-service';
import { FdsConfirmDialogComponent } from '@flow-design-system/confirm-dialog-component';

const FDS_DIALOGS = [
    FdsDialogComponent,
    FdsDialogTitleDirective,
    FdsDialogActionsDirective,
    FdsDialogContentDirective,
    FdsConfirmDialogComponent
];

const FDS_DIALOGS_ENTRY_COMPONENTS = [
    FdsConfirmDialogComponent
];

/**
 * FdsDialogsModule constructor.
 *
 * @constructor
 */
function FdsDialogsModule() {

}

FdsDialogsModule.prototype = {
    constructor: FdsDialogsModule
};

FdsDialogsModule.annotations = [
    new NgModule({
        imports: [
            FlexLayoutModule,
            FormsModule,
            CommonModule,
            MatDialogModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule
        ],
        declarations: [
            FDS_DIALOGS
        ],
        exports: [
            FDS_DIALOGS
        ],
        providers: [
            FdsDialogService
        ],
        entryComponents: [
            FDS_DIALOGS_ENTRY_COMPONENTS
        ]
    })
];

export {
    FdsDialogsModule,
    IConfirmConfig,
    FdsDialogService,
    FdsDialogComponent,
    FdsDialogTitleDirective,
    FdsDialogContentDirective,
    FdsDialogActionsDirective,
    FdsConfirmDialogComponent
};

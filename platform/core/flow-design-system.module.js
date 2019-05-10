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

import $ from 'jquery';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    CovalentCommonModule,
    CovalentChipsModule,
    CovalentDataTableModule,
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentPagingModule
} from '@covalent/core/bundles/covalent-core.umd.min.js';
import { FdsDialogsModule } from '@flow-design-system/dialogs';
import { FdsSnackBarsModule } from '@flow-design-system/snackbars';

/**
 * FlowDesignSystemModule constructor.
 *
 * @constructor
 */
function FlowDesignSystemModule() {
    $(document).ready(function () {
        //add fds attr to body tag to allow fine grain style overrides
        document.body.setAttribute('fds', '');

        //override the hover styles for checkbox borders
        $(document.body).on('mouseenter', '.mat-checkbox-inner-container', function () {
            $(this).find('.mat-checkbox-frame').css('border-color', '#1491C1');
        });
        $(document.body).on('mouseleave', '.mat-checkbox-inner-container', function () {
            $(this).find('.mat-checkbox-frame').css('border-color', '#DDDDDD');
        });
    });
}

FlowDesignSystemModule.prototype = {
    constructor: FlowDesignSystemModule
};

FlowDesignSystemModule.annotations = [
    new NgModule({
        imports: [
            FlexLayoutModule,
            BrowserAnimationsModule,
            CommonModule,
            BrowserModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatDatepickerModule,
            MatDialogModule,
            MatExpansionModule,
            MatFormFieldModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatSliderModule,
            MatSidenavModule,
            MatSnackBarModule,
            MatStepperModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
            MatPaginatorModule,
            MatSortModule,
            MatTableModule,
            CovalentCommonModule,
            CovalentChipsModule,
            CovalentDataTableModule,
            CovalentDialogsModule,
            CovalentExpansionPanelModule,
            CovalentPagingModule,
            FdsDialogsModule,
            FdsSnackBarsModule
        ],
        exports: [
            FlexLayoutModule,
            BrowserAnimationsModule,
            CommonModule,
            BrowserModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatDatepickerModule,
            MatDialogModule,
            MatExpansionModule,
            MatFormFieldModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatSliderModule,
            MatSidenavModule,
            MatSnackBarModule,
            MatStepperModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
            MatPaginatorModule,
            MatSortModule,
            MatTableModule,
            CovalentCommonModule,
            CovalentChipsModule,
            CovalentDataTableModule,
            CovalentDialogsModule,
            CovalentExpansionPanelModule,
            CovalentPagingModule,
            FdsDialogsModule,
            FdsSnackBarsModule
        ]
    })
];

export default FlowDesignSystemModule;

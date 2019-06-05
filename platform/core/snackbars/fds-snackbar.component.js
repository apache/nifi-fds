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

import { Component, Directive, ContentChildren } from '@angular/core';

export function FdsSnackBarTitleDirective() {
}

FdsSnackBarTitleDirective.prototype = {
    contstructor: FdsSnackBarTitleDirective
};

FdsSnackBarTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'fds-snackbar-title' }] },
];

export function FdsSnackBarContentDirective() {
}

FdsSnackBarContentDirective.prototype = {
    contstructor: FdsSnackBarContentDirective
};

FdsSnackBarContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'fds-snackbar-content' }] },
];

export function FdsSnackBarActionsDirective() {
}

FdsSnackBarActionsDirective.prototype = {
    contstructor: FdsSnackBarActionsDirective
};

FdsSnackBarActionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fds-snackbar-actions' }] },
];

/**
 * FdsSnackBarComponent constructor
 *
 * @constructor
 */
export function FdsSnackBarComponent() {
    this.snackBarTitle = '';
    this.snackBarContent = '';
    this.snackBarActions = '';
}

FdsSnackBarComponent.prototype = {
    constructor: FdsSnackBarComponent,

    /**
     * Respond after Angular projects external content into the component's view.
     */
    ngAfterContentInit: function () {
        if (this.snackBarTitle.length > 1) {
            throw new Error('Duplicate fds-snackbar-title component at in fds-snackbar.');
        }
        if (this.snackBarContent.length > 1) {
            throw new Error('Duplicate fds-snackbar-content component at in fds-snackbar.');
        }
        if (this.snackBarActions.length > 1) {
            throw new Error('Duplicate fds-snackbar-actions component at in fds-snackbar.');
        }
    }
};

FdsSnackBarComponent.annotations = [
    new Component({
        selector: 'fds-snackbar',
        templateUrl: './fds-snackbar.component.html',
        queries: {
            snackBarTitle: new ContentChildren(FdsSnackBarTitleDirective),
            snackBarContent: new ContentChildren(FdsSnackBarContentDirective),
            snackBarActions: new ContentChildren(FdsSnackBarActionsDirective)
        }
    })
];

FdsSnackBarComponent.parameters = [];

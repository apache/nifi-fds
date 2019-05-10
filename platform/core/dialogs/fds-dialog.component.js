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

import {
    Component,
    ContentChildren,
    Directive
} from '@angular/core';
import html from './fds-dialog.component.html';

export function FdsDialogTitleDirective() {
}

FdsDialogTitleDirective.prototype = {
    contstructor: FdsDialogTitleDirective
};

FdsDialogTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'fds-dialog-title' }] },
];

export function FdsDialogContentDirective() {
}

FdsDialogContentDirective.prototype = {
    contstructor: FdsDialogContentDirective
};

FdsDialogContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'fds-dialog-content' }] },
];

export function FdsDialogActionsDirective() {
}

FdsDialogActionsDirective.prototype = {
    contstructor: FdsDialogActionsDirective
};

FdsDialogActionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'fds-dialog-actions' }] },
];

/**
 * FdsDialogComponent constructor
 *
 * @constructor
 */
export function FdsDialogComponent() {
    this.dialogTitle = '';
    this.dialogContent = '';
    this.dialogActions = '';
}

FdsDialogComponent.prototype = {
    constructor: FdsDialogComponent,

    /**
     * Respond after Angular projects external content into the component's view.
     */
    ngAfterContentInit: function () {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate fds-dialog-title component at in fds-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate fds-dialog-content component at in fds-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate fds-dialog-actions component at in fds-dialog.');
        }
    }
};

FdsDialogComponent.annotations = [
    new Component({
        selector: 'fds-dialog',
        template: html,
        queries: {
            dialogTitle: new ContentChildren(FdsDialogTitleDirective),
            dialogContent: new ContentChildren(FdsDialogContentDirective),
            dialogActions: new ContentChildren(FdsDialogActionsDirective)
        }
    })
];

FdsDialogComponent.parameters = [];

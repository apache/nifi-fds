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

import { TestBed } from '@angular/core/testing';

import initTestBed from '@flow-design-system/testbed-factory';

import { FdsConfirmDialogComponent } from '@flow-design-system/confirm-dialog-component';

describe('coasterComponent isolated unit tests', function () {
    let fdsConfirmDialogComponent;
    let fixture;

    beforeEach(function (done) {
        initTestBed()
            .then(function () {
                fixture = TestBed.createComponent(FdsConfirmDialogComponent);
                fixture.detectChanges();
                fdsConfirmDialogComponent = fixture.componentInstance;
                fdsConfirmDialogComponent.dialogRef = {
                    close: function () {}
                };

                //Spy
                spyOn(fdsConfirmDialogComponent.dialogRef, 'close');

                done();
            });
    });

    it('should accept the dialog', function () {
        fdsConfirmDialogComponent.accept();
        //assertions
        expect(fdsConfirmDialogComponent.dialogRef.close).toHaveBeenCalled();
        const call = fdsConfirmDialogComponent.dialogRef.close.calls.first();
        expect(call.args[0]).toBe(true);
        expect(fdsConfirmDialogComponent.dialogRef.close.calls.count()).toBe(1);
    });

    it('should cancel the dialog', function () {
        fdsConfirmDialogComponent.cancel();
        //assertions
        expect(fdsConfirmDialogComponent.dialogRef.close).toHaveBeenCalled();
        const call = fdsConfirmDialogComponent.dialogRef.close.calls.first();
        expect(call.args[0]).toBe(false);
        expect(fdsConfirmDialogComponent.dialogRef.close.calls.count()).toBe(1);
    });
});

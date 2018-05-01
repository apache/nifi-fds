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
var ngCommonHttp = require('@angular/common/http');
var FdsService = require('webapp/services/fds.service.js');
var fdsAnimations = require('webapp/fds.animations.js');
var ngRouter = require('@angular/router');
var MILLIS_PER_SECOND = 1000;

/**
 * Fds constructor.
 *
 * @param fdsService            The fds service.
 * @param changeDetectorRef     The change detector ref.
 * @constructor
 */
function Fds(fdsService, changeDetectorRef) {
    this.fdsService = fdsService;
    this.cd = changeDetectorRef;
};

Fds.prototype = {
    constructor: Fds,

    /**
     * Initialize the component
     */
    ngOnInit: function () {
        var self = this;
        this.fdsService.sidenav = this.sidenav; //ngCore.ViewChild
    },

    /**
     * Since the child views are updating the fdsService values that are used to display
     * the breadcrumbs in this component's view we need to manually detect changes at the correct
     * point in the lifecycle.
     */
    ngAfterViewChecked: function () {
        this.cd.detectChanges();
    }
};

Fds.annotations = [
    new ngCore.Component({
        selector: 'fds-app',
        template: require('./fds.html!text'),
        queries: {
            sidenav: new ngCore.ViewChild('sidenav')
        },
        animations: [fdsAnimations.flyInOutAnimation]
    })
];

Fds.parameters = [
    FdsService,
    ngCore.ChangeDetectorRef
];

module.exports = Fds;

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

import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * FdsAnimations constructor.
 *
 * @constructor
 */
function FdsAnimations() {
}

FdsAnimations.prototype = {
    constructor: FdsAnimations,

    /**
     * Fade animation
     */
    fadeAnimation: trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1
            })), transition(':enter', [
            style({
                opacity: 0
            }),
            animate('0.5s ease-in')
        ]), transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 0
            }))
        ])
    ]),

    /**
     * Slide in from the left animation
     */
    slideInLeftAnimation: trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })), transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.5s ease-in')
        ]), transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
        ])
    ]),

    /**
     * Slide in from the top animation
     */
    slideInDownAnimation: trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateY(0)'
            })), transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-100%)'
            }),
            animate('0.5s ease-in')
        ]), transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]),

    /**
     * Fly in/out animation
     */
    flyInOutAnimation: trigger('flyInOut', [
        state('in',
            style({ transform: 'translateX(0)' })), transition('void => *', [
            style({ transform: 'translateX(100%)' }),
            animate('0.4s 0.1s ease-in')
        ]), transition('* => void', animate('0.2s ease-out', style({ transform: 'translateX(-100%)' })))
    ]),

    /**
     * Fly in/out animation
     */
    fadeInOutAnimation: trigger('fadeInOut', [
        state('in',
            style({ opacity: 1 })), transition('void => *', [
            style({ opacity: 0 }),
            animate('0.5s 0.1s ease-in')
        ]), transition('* => void', animate('0.5s ease-out', style({ opacity: 0 })))
    ])

};

export default new FdsAnimations();

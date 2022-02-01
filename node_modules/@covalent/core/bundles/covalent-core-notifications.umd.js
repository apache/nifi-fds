(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/notifications', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.notifications = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: notification-count.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var TdNotificationCountPositionY = {
        Top: "top",
        Bottom: "bottom",
        Center: "center",
    };
    /** @enum {string} */
    var TdNotificationCountPositionX = {
        Before: "before",
        After: "after",
        Center: "center",
    };
    /** @type {?} */
    var DEFAULT_NOTIFICATION_LIMIT = 99;
    var TdNotificationCountComponent = /** @class */ (function () {
        function TdNotificationCountComponent() {
            this._notifications = 0;
            this._limit = DEFAULT_NOTIFICATION_LIMIT;
            /**
             * color?: "primary" | "accent" | "warn"
             * Sets the theme color of the notification tip. Defaults to "warn"
             */
            this.color = 'warn';
        }
        Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
            /**
             * @return {?}
             */
            get: function () {
                return this._positionX;
            },
            /**
             * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
             * Sets the X position of the notification tip.
             * Defaults to "after" if it has content, else 'center'.
             * @param {?} positionX
             * @return {?}
             */
            set: function (positionX) {
                this._positionX = positionX;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
            /**
             * @return {?}
             */
            get: function () {
                return this._positionY;
            },
            /**
             * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
             * Sets the Y position of the notification tip.
             * Defaults to "top" if it has content, else 'center'.
             * @param {?} positionY
             * @return {?}
             */
            set: function (positionY) {
                this._positionY = positionY;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
            /**
             * notifications?: number | boolean
             * Number for the notification count. Shows component only if the input is a positive number or 'true'
             * @param {?} notifications
             * @return {?}
             */
            set: function (notifications) {
                this._notifications = notifications;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "limit", {
            /**
             * limit?: number
             * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
             * @param {?} limit
             * @return {?}
             */
            set: function (limit) {
                this._limit = limit;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
            /**
             * @return {?}
             */
            get: function () {
                return !this.show && !this._hasContent();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
            /**
             * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
             * Makes the notification tip show without a count.
             * @return {?}
             */
            get: function () {
                return this._notifications === true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
            /**
             * Notification display string when a count is available.
             * Anything over 99 gets set as 99+
             * @return {?}
             */
            get: function () {
                if (this._notifications > this._limit) {
                    return this._limit + "+";
                }
                return this._notifications.toString();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
            /**
             * Shows notification tip only when [notifications] is true or a positive integer.
             * @return {?}
             */
            get: function () {
                return this._notifications === true || (!isNaN(( /** @type {?} */(this._notifications))) && this._notifications > 0);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
         * @return {?}
         */
        TdNotificationCountComponent.prototype.ngAfterContentInit = function () {
            if (!this._positionX) {
                this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
            }
            if (!this._positionY) {
                this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
            }
        };
        /**
         * Method to check if element has any kind of content (elements or text)
         * @private
         * @return {?}
         */
        TdNotificationCountComponent.prototype._hasContent = function () {
            if (this.content) {
                /** @type {?} */
                var contentElement = this.content.nativeElement;
                return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
            }
            return false;
        };
        return TdNotificationCountComponent;
    }());
    TdNotificationCountComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-notification-count',
                    template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div\n  *ngIf=\"show\"\n  class=\"td-notification-count mat-{{ color }}\"\n  [class.td-notification-top]=\"positionY === 'top'\"\n  [class.td-notification-bottom]=\"positionY === 'bottom'\"\n  [class.td-notification-before]=\"positionX === 'before'\"\n  [class.td-notification-after]=\"positionX === 'after'\"\n  [class.td-notification-center-y]=\"positionY === 'center'\"\n  [class.td-notification-center-x]=\"positionX === 'center'\"\n  [class.td-notification-no-count]=\"noCount\"\n>\n  {{ noCount ? '' : notificationsDisplay }}\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;height:40px;min-width:40px;position:relative;text-align:center}:host.td-notification-hidden{min-width:0}.td-notification-count{border-radius:50%;font-size:10px;font-weight:600;height:20px;line-height:21px;position:absolute;width:20px;z-index:1}.td-notification-count.td-notification-center-x{left:0;margin-left:auto;margin-right:auto;right:0}.td-notification-count.td-notification-center-y{bottom:0;margin-bottom:auto;margin-top:auto;top:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{height:8px;width:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{left:auto;right:0}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{left:auto;right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"]
                }] }
    ];
    TdNotificationCountComponent.propDecorators = {
        content: [{ type: core.ViewChild, args: ['content', { static: true },] }],
        color: [{ type: core.Input }],
        positionX: [{ type: core.Input }],
        positionY: [{ type: core.Input }],
        notifications: [{ type: core.Input }],
        limit: [{ type: core.Input }],
        hideHost: [{ type: core.HostBinding, args: ['class.td-notification-hidden',] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._notifications;
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._positionY;
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._positionX;
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._limit;
        /**
         * Div content wrapper of `ng-content`.
         * @type {?}
         */
        TdNotificationCountComponent.prototype.content;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         * @type {?}
         */
        TdNotificationCountComponent.prototype.color;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: notifications.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_NOTIFICATIONS = [TdNotificationCountComponent];
    var CovalentNotificationsModule = /** @class */ (function () {
        function CovalentNotificationsModule() {
        }
        return CovalentNotificationsModule;
    }());
    CovalentNotificationsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [TD_NOTIFICATIONS],
                    exports: [TD_NOTIFICATIONS],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-core-notifications.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentNotificationsModule = CovalentNotificationsModule;
    exports.DEFAULT_NOTIFICATION_LIMIT = DEFAULT_NOTIFICATION_LIMIT;
    exports.TdNotificationCountComponent = TdNotificationCountComponent;
    exports.TdNotificationCountPositionX = TdNotificationCountPositionX;
    exports.TdNotificationCountPositionY = TdNotificationCountPositionY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-notifications.umd.js.map

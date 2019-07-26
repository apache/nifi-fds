import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
const TdNotificationCountPositionY = {
    Top: 'top',
    Bottom: 'bottom',
    Center: 'center',
};
/** @enum {string} */
const TdNotificationCountPositionX = {
    Before: 'before',
    After: 'after',
    Center: 'center',
};
/** @type {?} */
const DEFAULT_NOTIFICATION_LIMIT = 99;
class TdNotificationCountComponent {
    constructor() {
        this._notifications = 0;
        this._limit = DEFAULT_NOTIFICATION_LIMIT;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         */
        this.color = 'warn';
    }
    /**
     * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
     * Sets the X position of the notification tip.
     * Defaults to "after" if it has content, else 'center'.
     * @param {?} positionX
     * @return {?}
     */
    set positionX(positionX) {
        this._positionX = positionX;
    }
    /**
     * @return {?}
     */
    get positionX() {
        return this._positionX;
    }
    /**
     * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
     * Sets the Y position of the notification tip.
     * Defaults to "top" if it has content, else 'center'.
     * @param {?} positionY
     * @return {?}
     */
    set positionY(positionY) {
        this._positionY = positionY;
    }
    /**
     * @return {?}
     */
    get positionY() {
        return this._positionY;
    }
    /**
     * notifications?: number | boolean
     * Number for the notification count. Shows component only if the input is a positive number or 'true'
     * @param {?} notifications
     * @return {?}
     */
    set notifications(notifications) {
        this._notifications = notifications;
    }
    /**
     * limit?: number
     * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
     * @param {?} limit
     * @return {?}
     */
    set limit(limit) {
        this._limit = limit;
    }
    /**
     * @return {?}
     */
    get hideHost() {
        return !this.show && !this._hasContent();
    }
    /**
     * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
     * Makes the notification tip show without a count.
     * @return {?}
     */
    get noCount() {
        return this._notifications === true;
    }
    /**
     * Notification display string when a count is available.
     * Anything over 99 gets set as 99+
     * @return {?}
     */
    get notificationsDisplay() {
        if (this._notifications > this._limit) {
            return `${this._limit}+`;
        }
        return this._notifications.toString();
    }
    /**
     * Shows notification tip only when [notifications] is true or a positive integer.
     * @return {?}
     */
    get show() {
        return this._notifications === true || (!isNaN((/** @type {?} */ (this._notifications))) && this._notifications > 0);
    }
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    }
    /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    _hasContent() {
        if (this.content) {
            /** @type {?} */
            let contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    }
}
TdNotificationCountComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-notification-count',
                template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"show\"\n     class=\"td-notification-count mat-{{color}}\"\n     [class.td-notification-top]=\"positionY === 'top'\"\n     [class.td-notification-bottom]=\"positionY === 'bottom'\"\n     [class.td-notification-before]=\"positionX === 'before'\"\n     [class.td-notification-after]=\"positionX === 'after'\"\n     [class.td-notification-center-y]=\"positionY === 'center'\"\n     [class.td-notification-center-x]=\"positionX === 'center'\"\n     [class.td-notification-no-count]=\"noCount\">\n  {{noCount ? '' : notificationsDisplay}}\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{position:relative;display:block;text-align:center;min-width:40px;height:40px}:host.td-notification-hidden{min-width:0}.td-notification-count{line-height:21px;width:20px;height:20px;position:absolute;font-size:10px;font-weight:600;border-radius:50%;z-index:1}.td-notification-count.td-notification-center-x{margin-left:auto;margin-right:auto;left:0;right:0}.td-notification-count.td-notification-center-y{margin-top:auto;margin-bottom:auto;top:0;bottom:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{width:8px;height:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{right:0;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{right:8px;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"]
            }] }
];
TdNotificationCountComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['content',] }],
    color: [{ type: Input }],
    positionX: [{ type: Input }],
    positionY: [{ type: Input }],
    notifications: [{ type: Input }],
    limit: [{ type: Input }],
    hideHost: [{ type: HostBinding, args: ['class.td-notification-hidden',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_NOTIFICATIONS = [
    TdNotificationCountComponent,
];
class CovalentNotificationsModule {
}
CovalentNotificationsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TD_NOTIFICATIONS,
                ],
                exports: [
                    TD_NOTIFICATIONS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentNotificationsModule, TdNotificationCountPositionY, TdNotificationCountPositionX, DEFAULT_NOTIFICATION_LIMIT, TdNotificationCountComponent };

//# sourceMappingURL=covalent-core-notifications.js.map
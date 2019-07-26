/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
/** @enum {string} */
var TdNotificationCountPositionY = {
    Top: 'top',
    Bottom: 'bottom',
    Center: 'center',
};
export { TdNotificationCountPositionY };
/** @enum {string} */
var TdNotificationCountPositionX = {
    Before: 'before',
    After: 'after',
    Center: 'center',
};
export { TdNotificationCountPositionX };
/** @type {?} */
export var DEFAULT_NOTIFICATION_LIMIT = 99;
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
        get: /**
         * @return {?}
         */
        function () {
            return this._positionX;
        },
        /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         */
        set: /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         * @param {?} positionX
         * @return {?}
         */
        function (positionX) {
            this._positionX = positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
        get: /**
         * @return {?}
         */
        function () {
            return this._positionY;
        },
        /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         */
        set: /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         * @param {?} positionY
         * @return {?}
         */
        function (positionY) {
            this._positionY = positionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
        /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         */
        set: /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         * @param {?} notifications
         * @return {?}
         */
        function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "limit", {
        /**
         * limit?: number
         * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
         */
        set: /**
         * limit?: number
         * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
         * @param {?} limit
         * @return {?}
         */
        function (limit) {
            this._limit = limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.show && !this._hasContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
        /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         */
        get: /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         * @return {?}
         */
        function () {
            return this._notifications === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
        /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         */
        get: /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         * @return {?}
         */
        function () {
            if (this._notifications > this._limit) {
                return this._limit + "+";
            }
            return this._notifications.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
        /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         */
        get: /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         * @return {?}
         */
        function () {
            return this._notifications === true || (!isNaN((/** @type {?} */ (this._notifications))) && this._notifications > 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     */
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    TdNotificationCountComponent.prototype.ngAfterContentInit = /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    function () {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    };
    /**
     * Method to check if element has any kind of content (elements or text)
     */
    /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    TdNotificationCountComponent.prototype._hasContent = /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    function () {
        if (this.content) {
            /** @type {?} */
            var contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    };
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
    return TdNotificationCountComponent;
}());
export { TdNotificationCountComponent };
if (false) {
    /** @type {?} */
    TdNotificationCountComponent.prototype._notifications;
    /** @type {?} */
    TdNotificationCountComponent.prototype._positionY;
    /** @type {?} */
    TdNotificationCountComponent.prototype._positionX;
    /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWNvdW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQ3RELFNBQVMsRUFBRSxVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDOzs7SUFHdEUsS0FBTSxLQUFLO0lBQ1gsUUFBUyxRQUFRO0lBQ2pCLFFBQVMsUUFBUTs7Ozs7SUFJakIsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7OztBQUduQixNQUFNLEtBQU8sMEJBQTBCLEdBQVcsRUFBRTtBQUVwRDtJQUFBO1FBUVUsbUJBQWMsR0FBcUIsQ0FBQyxDQUFDO1FBR3JDLFdBQU0sR0FBVywwQkFBMEIsQ0FBQzs7Ozs7UUFXM0MsVUFBSyxHQUFrQyxNQUFNLENBQUM7SUFvR3pELENBQUM7SUE3RkMsc0JBQ0ksbURBQVM7Ozs7UUFHYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBWEQ7Ozs7V0FJRzs7Ozs7Ozs7UUFDSCxVQUNjLFNBQXVDO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBVUQsc0JBQ0ksbURBQVM7Ozs7UUFHYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBWEQ7Ozs7V0FJRzs7Ozs7Ozs7UUFDSCxVQUNjLFNBQXVDO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBU0Qsc0JBQ0ksdURBQWE7UUFMakI7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDa0IsYUFBK0I7WUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSwrQ0FBSztRQUxSOzs7V0FHRzs7Ozs7OztRQUNKLFVBQ1UsS0FBYTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGtEQUFROzs7O1FBRFo7WUFFRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLGlEQUFPO1FBSlg7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSw4REFBb0I7UUFKeEI7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxPQUFVLElBQUksQ0FBQyxNQUFNLE1BQUcsQ0FBQzthQUMxQjtZQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLDhDQUFJO1FBSFI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQUssSUFBSSxDQUFDLGNBQWMsRUFBQSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7OztJQUNILHlEQUFrQjs7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQztTQUNoSDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQztTQUM5RztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSyxrREFBVzs7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ1osY0FBYyxHQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFDNUQsT0FBTyxjQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN0RztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBeEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUVqQyw2b0JBQWtEO29CQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7MEJBV0UsU0FBUyxTQUFDLFNBQVM7d0JBTW5CLEtBQUs7NEJBT0wsS0FBSzs0QkFhTCxLQUFLO2dDQVlMLEtBQUs7d0JBU0wsS0FBSzsyQkFLTCxXQUFXLFNBQUMsOEJBQThCOztJQXNEN0MsbUNBQUM7Q0FBQSxBQTFIRCxJQTBIQztTQXBIWSw0QkFBNEI7OztJQUV2QyxzREFBNkM7O0lBQzdDLGtEQUFpRDs7SUFDakQsa0RBQWlEOztJQUNqRCw4Q0FBb0Q7Ozs7O0lBS3BELCtDQUEwQzs7Ozs7O0lBTTFDLDZDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICAgICAgIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIHtcbiAgVG9wID0gJ3RvcCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBDZW50ZXIgPSAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGVudW0gVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWCB7XG4gIEJlZm9yZSA9ICdiZWZvcmUnLFxuICBBZnRlciA9ICdhZnRlcicsXG4gIENlbnRlciA9ICdjZW50ZXInLFxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fTElNSVQ6IG51bWJlciA9IDk5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1ub3RpZmljYXRpb24tY291bnQnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb24tY291bnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGROb3RpZmljYXRpb25Db3VudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbnM6IG51bWJlciB8IGJvb2xlYW4gPSAwO1xuICBwcml2YXRlIF9wb3NpdGlvblk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uWDogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWDtcbiAgcHJpdmF0ZSBfbGltaXQ6IG51bWJlciA9IERFRkFVTFRfTk9USUZJQ0FUSU9OX0xJTUlUO1xuXG4gIC8qKlxuICAgKiBEaXYgY29udGVudCB3cmFwcGVyIG9mIGBuZy1jb250ZW50YC5cbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwid2FyblwiXG4gICAqIFNldHMgdGhlIHRoZW1lIGNvbG9yIG9mIHRoZSBub3RpZmljYXRpb24gdGlwLiBEZWZhdWx0cyB0byBcIndhcm5cIlxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3dhcm4nO1xuXG4gIC8qKlxuICAgKiBwb3NpdGlvblg/OiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YIG9yIFwiYmVmb3JlXCIgfCBcImFmdGVyXCIgfCBcImNlbnRlclwiXG4gICAqIFNldHMgdGhlIFggcG9zaXRpb24gb2YgdGhlIG5vdGlmaWNhdGlvbiB0aXAuXG4gICAqIERlZmF1bHRzIHRvIFwiYWZ0ZXJcIiBpZiBpdCBoYXMgY29udGVudCwgZWxzZSAnY2VudGVyJy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvblgocG9zaXRpb25YOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YKSB7XG4gICAgdGhpcy5fcG9zaXRpb25YID0gcG9zaXRpb25YO1xuICB9XG4gIGdldCBwb3NpdGlvblgoKTogVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwb3NpdGlvblk/OiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIG9yIFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIlxuICAgKiBTZXRzIHRoZSBZIHBvc2l0aW9uIG9mIHRoZSBub3RpZmljYXRpb24gdGlwLlxuICAgKiBEZWZhdWx0cyB0byBcInRvcFwiIGlmIGl0IGhhcyBjb250ZW50LCBlbHNlICdjZW50ZXInLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uWShwb3NpdGlvblk6IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblkpIHtcbiAgICB0aGlzLl9wb3NpdGlvblkgPSBwb3NpdGlvblk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uWSgpOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25ZO1xuICB9XG5cbiAgLyoqXG4gICAqIG5vdGlmaWNhdGlvbnM/OiBudW1iZXIgfCBib29sZWFuXG4gICAqIE51bWJlciBmb3IgdGhlIG5vdGlmaWNhdGlvbiBjb3VudC4gU2hvd3MgY29tcG9uZW50IG9ubHkgaWYgdGhlIGlucHV0IGlzIGEgcG9zaXRpdmUgbnVtYmVyIG9yICd0cnVlJ1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG5vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9uczogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zO1xuICB9XG5cbiAgIC8qKlxuICAgICogbGltaXQ/OiBudW1iZXJcbiAgICAqIExpbWl0IGZvciBub3RpZmljYXRpb24gY291bnQuIElmIHRoZSBudW1iZXIgb2Ygbm90aWZpY2F0aW9ucyBpcyBncmVhdGVyIHRoYW4gbGltaXQsIHRoZW4gKyB3aWxsIGJlIGFkZGVkLiBEZWZhdWx0cyB0byA5OS5cbiAgICAqL1xuICBASW5wdXQoKVxuICBzZXQgbGltaXQobGltaXQ6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRkLW5vdGlmaWNhdGlvbi1oaWRkZW4nKVxuICBnZXQgaGlkZUhvc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnNob3cgJiYgIXRoaXMuX2hhc0NvbnRlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb21wb25lbnQgaW4gaXRzICdub0NvdW50JyBzdGF0ZSBpZiBbbm90aWZpY2F0aW9uc10gaXMgYSBib29sZWFuICd0cnVlJy5cbiAgICogTWFrZXMgdGhlIG5vdGlmaWNhdGlvbiB0aXAgc2hvdyB3aXRob3V0IGEgY291bnQuXG4gICAqL1xuICBnZXQgbm9Db3VudCgpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucyA9PT0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RpZmljYXRpb24gZGlzcGxheSBzdHJpbmcgd2hlbiBhIGNvdW50IGlzIGF2YWlsYWJsZS5cbiAgICogQW55dGhpbmcgb3ZlciA5OSBnZXRzIHNldCBhcyA5OStcbiAgICovXG4gIGdldCBub3RpZmljYXRpb25zRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25zID4gdGhpcy5fbGltaXQpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLl9saW1pdH0rYDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbnMudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBub3RpZmljYXRpb24gdGlwIG9ubHkgd2hlbiBbbm90aWZpY2F0aW9uc10gaXMgdHJ1ZSBvciBhIHBvc2l0aXZlIGludGVnZXIuXG4gICAqL1xuICBnZXQgc2hvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucyA9PT0gdHJ1ZSB8fCAoIWlzTmFOKDxhbnk+dGhpcy5fbm90aWZpY2F0aW9ucykgJiYgdGhpcy5fbm90aWZpY2F0aW9ucyA+IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIFtwb3NpdGlvblhdIGFuZCBbcG9zaXRpb25ZXSBoYXZlIGJlZW4gc2V0IGFzIGlucHV0cywgZWxzZSB1c2UgZGVmYXVsdHMgZGVwZW5kaW5nIG9uIGNvbXBvbmVudCBjb250ZW50LlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcG9zaXRpb25YKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uWCA9IHRoaXMuX2hhc0NvbnRlbnQoKSA/IFRkTm90aWZpY2F0aW9uQ291bnRQb3NpdGlvblguQWZ0ZXIgOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25YLkNlbnRlcjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9wb3NpdGlvblkpIHtcbiAgICAgIHRoaXMucG9zaXRpb25ZID0gdGhpcy5faGFzQ29udGVudCgpID8gVGROb3RpZmljYXRpb25Db3VudFBvc2l0aW9uWS5Ub3AgOiBUZE5vdGlmaWNhdGlvbkNvdW50UG9zaXRpb25ZLkNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNoZWNrIGlmIGVsZW1lbnQgaGFzIGFueSBraW5kIG9mIGNvbnRlbnQgKGVsZW1lbnRzIG9yIHRleHQpXG4gICAqL1xuICBwcml2YXRlIF9oYXNDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIGxldCBjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIHJldHVybiBjb250ZW50RWxlbWVudCAmJiAoY29udGVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAhIWNvbnRlbnRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=
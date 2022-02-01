import { ElementRef, AfterContentInit } from '@angular/core';
export declare enum TdNotificationCountPositionY {
    Top = "top",
    Bottom = "bottom",
    Center = "center"
}
export declare enum TdNotificationCountPositionX {
    Before = "before",
    After = "after",
    Center = "center"
}
export declare const DEFAULT_NOTIFICATION_LIMIT: number;
export declare class TdNotificationCountComponent implements AfterContentInit {
    private _notifications;
    private _positionY;
    private _positionX;
    private _limit;
    /**
     * Div content wrapper of `ng-content`.
     */
    content: ElementRef;
    /**
     * color?: "primary" | "accent" | "warn"
     * Sets the theme color of the notification tip. Defaults to "warn"
     */
    color: 'primary' | 'accent' | 'warn';
    /**
     * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
     * Sets the X position of the notification tip.
     * Defaults to "after" if it has content, else 'center'.
     */
    set positionX(positionX: TdNotificationCountPositionX);
    get positionX(): TdNotificationCountPositionX;
    /**
     * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
     * Sets the Y position of the notification tip.
     * Defaults to "top" if it has content, else 'center'.
     */
    set positionY(positionY: TdNotificationCountPositionY);
    get positionY(): TdNotificationCountPositionY;
    /**
     * notifications?: number | boolean
     * Number for the notification count. Shows component only if the input is a positive number or 'true'
     */
    set notifications(notifications: number | boolean);
    /**
     * limit?: number
     * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
     */
    set limit(limit: number);
    get hideHost(): boolean;
    /**
     * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
     * Makes the notification tip show without a count.
     */
    get noCount(): string | boolean;
    /**
     * Notification display string when a count is available.
     * Anything over 99 gets set as 99+
     */
    get notificationsDisplay(): string;
    /**
     * Shows notification tip only when [notifications] is true or a positive integer.
     */
    get show(): boolean;
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     */
    ngAfterContentInit(): void;
    /**
     * Method to check if element has any kind of content (elements or text)
     */
    private _hasContent;
}

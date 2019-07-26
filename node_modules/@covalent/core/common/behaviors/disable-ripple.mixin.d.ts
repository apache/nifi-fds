declare type Constructor<T> = new (...args: any[]) => T;
/** Interface to implement when applying the disabled mixin */
export interface ICanDisableRipple {
    disableRipple: boolean;
    onDisableRippleChange(v: boolean): void;
}
/** Mixin to augment a component or directive with a `disabled` property. */
export declare function mixinDisableRipple<T extends Constructor<{}>>(base: T): Constructor<ICanDisableRipple> & T;
export {};

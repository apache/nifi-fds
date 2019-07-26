declare type Constructor<T> = new (...args: any[]) => T;
/** Interface to implement when applying the disabled mixin */
export interface ICanDisable {
    disabled: boolean;
    onDisabledChange(v: boolean): void;
}
/** Mixin to augment a component or directive with a `disabled` property. */
export declare function mixinDisabled<T extends Constructor<{}>>(base: T): Constructor<ICanDisable> & T;
export {};

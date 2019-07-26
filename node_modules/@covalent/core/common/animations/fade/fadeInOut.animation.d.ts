import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
export interface IFadeInOutAnimation extends IAnimationOptions {
    easeOnIn?: string;
    easeOnOut?: string;
}
/**
 * const tdFadeInOutAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
 *
 * usage: [@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
 */
export declare const tdFadeInOutAnimation: AnimationTriggerMetadata;

import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
export interface IRotateAnimation extends IAnimationOptions {
    degrees?: number;
    ease?: string;
}
/**
 * const tdRotateAnimation
 *
 * Parameter Options:
 * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
 * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerates and decelerates. Defaults to ease-in.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
 *
 * usage: [@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
 */
export declare const tdRotateAnimation: AnimationTriggerMetadata;

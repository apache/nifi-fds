import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
export interface ICollapseAnimation extends IAnimationOptions {
    easeOnClose?: string;
    easeOnOpen?: string;
}
/**
 * const tdCollapseAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
 * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
 *
 * usage: [@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
 */
export declare const tdCollapseAnimation: AnimationTriggerMetadata;

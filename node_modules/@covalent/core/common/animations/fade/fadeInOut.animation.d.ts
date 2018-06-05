import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
export interface IFadeInOutAnimation extends IAnimationOptions {
    easeOnIn?: string;
    easeOnOut?: string;
}
/**
 * Function TdFadeInOutAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdFadeInOut
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a fading animation.
 *
 * usage: [@tdFadeInOut]="true|false"
 */
export declare function TdFadeInOutAnimation(fadeInOut?: IFadeInOutAnimation): AnimationTriggerMetadata;

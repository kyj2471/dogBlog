/// <reference types="react" />
import './style/index.less';
import ViewerProps from './ViewerProps';
export interface ViewerCoreState {
    visible?: boolean;
    visibleStart?: boolean;
    transitionEnd?: boolean;
    activeIndex?: number;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    rotate?: number;
    imageWidth?: number;
    imageHeight?: number;
    scaleX?: number;
    scaleY?: number;
    loading?: boolean;
    loadFailed?: boolean;
    startLoading: boolean;
}
declare const _default: (props: ViewerProps) => JSX.Element;
export default _default;

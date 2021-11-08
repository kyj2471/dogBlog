/// <reference types="react" />
export interface ViewerImageSize {
    width: number;
    height: number;
}
export interface ImageDecorator {
    src: string;
    alt?: string;
    downloadUrl?: string;
    defaultSize?: ViewerImageSize;
}
export interface ToolbarConfig {
    key: string;
    actionType?: number;
    render?: React.ReactNode;
    onClick?: (activeImage: ImageDecorator) => void;
}
export interface ViewerDefaultImg {
    src: string;
    width?: number;
    height?: number;
}
interface ViewerProps {
    /** viewer是否可见 */
    visible?: boolean;
    /** 点击关闭按钮的回调 */
    onClose?: () => void;
    /** 需要进行浏览的图片地址集合 */
    images?: ImageDecorator[];
    /** 当前图像index */
    activeIndex?: number;
    /** 自定义viewer组件的z-index */
    zIndex?: number;
    /** viewer渲染的父节点，设置后开启inline mode */
    container?: HTMLElement;
    /** 图片是否可拖动 */
    drag?: boolean;
    /** 是否显示图片属性 */
    attribute?: boolean;
    /** 是否显示缩放按钮 */
    zoomable?: boolean;
    /** 是否显示旋转按钮 */
    rotatable?: boolean;
    /** 是否显示变换按钮 */
    scalable?: boolean;
    /** callback function when mask is clicked */
    onMaskClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /** 是否显示下载按钮 */
    downloadable?: boolean;
    /** 图片是否可循环 */
    loop?: boolean;
    noClose?: boolean;
    noImgDetails?: boolean;
    noNavbar?: boolean;
    noToolbar?: boolean;
    noFooter?: boolean;
    changeable?: boolean;
    customToolbar?: (toolbars: ToolbarConfig[]) => ToolbarConfig[];
    zoomSpeed?: number;
    defaultSize?: ViewerImageSize;
    defaultImg?: ViewerDefaultImg;
    disableKeyboardSupport?: boolean;
    noResetZoomAfterChange?: boolean;
    noLimitInitializationSize?: boolean;
    defaultScale?: number;
    onChange?: (activeImage: ImageDecorator, index: number) => void;
    disableMouseZoom?: boolean;
    downloadInNewWindow?: boolean;
    className?: string;
    showTotal?: boolean;
    maxScale?: number;
    minScale?: number;
}
export default ViewerProps;

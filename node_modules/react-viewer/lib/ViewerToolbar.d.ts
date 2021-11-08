/// <reference types="react" />
import { ToolbarConfig } from './ViewerProps';
export interface ViewerToolbarProps {
    prefixCls: string;
    onAction: (config: ToolbarConfig) => void;
    alt: string;
    width: number;
    height: number;
    attribute: boolean;
    zoomable: boolean;
    rotatable: boolean;
    scalable: boolean;
    changeable: boolean;
    downloadable: boolean;
    noImgDetails: boolean;
    toolbars: ToolbarConfig[];
    activeIndex: number;
    count: number;
    showTotal: boolean;
}
export declare const defaultToolbars: ToolbarConfig[];
export default function ViewerToolbar(props: ViewerToolbarProps): JSX.Element;

/// <reference types="react" />
import { ImageDecorator } from './ViewerProps';
export interface ViewerNavProps {
    prefixCls: string;
    images: ImageDecorator[];
    activeIndex: number;
    onChangeImg: (index: number) => void;
}
export default function ViewerNav(props: ViewerNavProps): JSX.Element;

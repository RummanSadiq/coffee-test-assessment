import { SVGProps } from 'react';

export interface BaseIconProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox'> {
    size?: number;
    className?: string;
}
import { StaticImport, StaticImageData } from "next/dist/shared/lib/get-img-props";
import React from "react";

export interface MainNavRouteProps {
    label: string;
    path: string;
}

interface DataProps {
    mainNavRoutes: MainNavRouteProps[];
    heroLinkButtons: ButtonProps[];
    cardsContent: CardProps[];
}

export interface ButtonProps {
    icon?: string | React.ReactNode;
    imageIcon?: string | StaticImport;
    label: string;
    textSize?: string,
    textColor?: string,
    classes?: string;
    a?: boolean;
    link?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    isTextButton?: boolean;
    isGradientButton?: boolean;
    gradientType?: 'green' | 'orange';
}

export interface TextButtonProps extends ButtonProps {
    label?: string;
}

export interface HeadingProps {
    as?: React.ElementType;
    text: string;
    classes?: string;
    color?: string;
}

export interface ParagraphProps extends HeadingProps {
    text: string | string[];
}

export interface IconButtonProps extends ButtonProps {
    imageIcon: string | StaticImport;
    label?: string;
}

export interface CustomImageProps {
    src: string | StaticImageData | StaticImport;
    alt: string;
    fill?: boolean;
    classes?: string;
}

export interface CardProps {
    imageSrc: string | StaticImageData | StaticImport;
    date?: string;
    title: string;
    description: string;
    link?: string;
    icon?: string;
    linkText?: string;
    linkImageIcon?: string | StaticImport;
}
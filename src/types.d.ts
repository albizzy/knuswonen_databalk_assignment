import { StaticImport, StaticImageData } from "next/dist/shared/lib/get-img-props";
import React from "react";

export interface MainNavRouteProps {
    label: string;
    path: string;
}

export interface DataProps {
    mainNavRoutes: MainNavRouteProps[];
    heroLinkButtons: ButtonProps[];
    cardsContent: CardProps[];
    ctaContents: CTAContentProps[];
    footerContents: FooterContentSectionProps[];
}

export interface CTADataProps {
    ctaContents: CTAContentProps[];
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

export interface CTAContentProps {
    imageSrc: string | StaticImageData | StaticImport;
    isImageStart?: boolean;
    title: string;
    titleColor?: string;
    description: string | string[];
    buttonText?: string;
    gradientType?: 'green' | 'orange';
}

export interface FooterContentItemProps {
    label: string;
    value: string;
    isLink?: boolean;
    isImage?: boolean;
    link?: string;
    image?: string | StaticImageData | StaticImport;
}

export interface FooterContentSectionProps {
    title: string;
    content: (FooterContentItemProps | SocialMediaLinkProps)[]; // Union type for content
  }
  
  export interface SocialMediaLinkProps {
    label: string;
    socialLinks: SocialMediaLinkItemProps[];
  }
  
  export interface SocialMediaLinkItemProps {
    label: string;
    value: string;
    isLink: boolean;
    isImage: boolean;
    link: string;
  }
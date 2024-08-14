import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

export interface MainNavRouteProps {
    label: string;
    path: string;
}

interface DataProps {
    mainNavRoutes: MainNavRouteProps[];
    heroLinkButtons: ButtonProps[];
}

export interface ButtonProps {
    icon?: string | React.ReactNode;
    imageIcon?: string | StaticImport;
    label: string;
    classes?: string;
    a?: boolean;
    link?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
}

export interface IconButtonProps extends ButtonProps {
    imageIcon: string | StaticImport;
    label?: string;
}
import { ButtonProps, TextButtonProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Button:React.FC<ButtonProps | TextButtonProps> = ({
    icon,
    imageIcon,
    label,
    classes,
    link,
    a = false,
    type = 'button',
    onClick,
    disabled,
    isTextButton = false,
    isGradientButton = false,
    gradientType = 'green',
    textSize = 'text-lg',
    textColor = "text-[#39468C]"
}) => {
    const buttonContent = (
        <div className={`flex ${ isTextButton ? "justify-end" : "justify-start"}items-center`}>
            <div className={`flex items-center ${isTextButton ? "flex-row-reverse" : "flex-row"} gap-x-3`}>
                {icon && (
                    <span>{icon}</span>
                )}
                {imageIcon && (
                    <div className={`${ isTextButton ? "w-[16px] h-[16px]" : "w-[32px] h-[32px]"} relative overflow-hidden`}>
                        <Image
                            src={imageIcon}
                            alt={`${label} icon`}
                            fill
                            className="absolute w-full h-full object-cover"
                        />
                    </div>
                )}
                <span className={`${textSize} ${textColor} font-semibold`}>{label}</span>
            </div>
        </div>
    );

    // Conditional gradient styles
    const gradientStyles =
        gradientType === "green"
            ? "bg-gradient-to-r from-[#BFE27D] to-[#35BCE7]"
            : "bg-gradient-to-r from-[#FF6B38] to-[#FFD201]";

    const buttonStyles = isTextButton
        ? "bg-transparent p-0 w-auto"
        : isGradientButton
        ? `px-[24px] py-[8px] w-fit rounded-[8px] ${gradientStyles}`
        : "p-4 w-[288px] h-[64px] capitalize shadow-lg bg-white shadow-black/5 rounded-xl";

    const button = (
        <button
            type={type}
            className={`${buttonStyles} ${classes}`}
            disabled={disabled}
            onClick={onClick}
        >
            {buttonContent}
        </button>
    )

    if ( link && !a) {
        return (
            <Link 
                href={link}
            >
                {button}
            </Link>
        );
    } else if ( link && a) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {button}
            </a>
        );
    }

    // no link provided return default button
    return button;
}
 
export default Button;
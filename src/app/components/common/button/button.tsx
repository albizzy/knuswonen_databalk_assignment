import { ButtonProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Button:React.FC<ButtonProps> = ({
    icon,
    imageIcon,
    label,
    classes,
    link,
    a = false,
    type = 'button',
    onClick,
    disabled,
}) => {
    const buttonContent = (
        <div className="flex justify-start items-center">
            <div className="flex gap-x-3">
                {icon && (
                    <span>{icon}</span>
                )}
                {imageIcon && (
                    <div className="w-[32px] h-[32px] relative overflow-hidden">
                        <Image
                            src={imageIcon}
                            alt={`${label} icon`}
                            fill
                            className="absolute w-full h-full object-cover"
                        />
                    </div>
                )}
                <span className="text-lg font-semibold">{label}</span>
            </div>
        </div>
    )

    const button = (
        <button
            type={type}
            className={`p-4 w-[288px] h-[64px] capitalize shadow-lg bg-white shadow-black/5 rounded-xl ${classes}`}
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
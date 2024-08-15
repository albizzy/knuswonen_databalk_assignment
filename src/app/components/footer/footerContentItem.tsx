// types
import { FooterContentItemProps } from "@/types";
import Link from "next/link";

// components
import CustomImage from "../common/image";

const FooterContentItem: React.FC<FooterContentItemProps> = ({
    label,
    value,
    isLink,
    isImage,
    link,
}) => {
    if ( isLink && !link) {
        console.error("Error: Link property is required when isLink is true");
        return null;
    }

    return (
        <div className={`w-fit`}>
            {isImage ? (
                <Link href={link as string} className="flex flex-row w-fit h-fit">
                    <div className="w-[32px] h-[32px] relative overflow-hidden">
                        <CustomImage 
                            src={value} 
                            alt={label} 
                        />
                    </div>
                </Link>
            ) : isLink ? (
                <span><Link href={link as string}>{value}</Link></span>
            ) : (
                <span className="text-base">{value}</span>
            )}
        </div>
    );
}
 
export default FooterContentItem;
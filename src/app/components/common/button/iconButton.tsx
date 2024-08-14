import { IconButtonProps } from "@/types";
import Image from "next/image";

const IconButton: React.FC<IconButtonProps> = ({ imageIcon }) => {
    return (
        <button className="w-[48px] h-[48px] flex items-center justify-center">
            <div className="w-[28px] h-[28px] relative overflow-hidden">
                <Image
                    src={imageIcon}
                    alt="Button Icon"
                    fill
                    className="object-cover"
                />
            </div>
        </button>
    );
}
 
export default IconButton;
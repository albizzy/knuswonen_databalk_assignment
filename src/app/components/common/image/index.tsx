import Image from "next/image";

// types
import { CustomImageProps } from "@/types";

const CustomImage:React.FC<CustomImageProps> = ({
    src,
    alt,
    fill = true,
    classes
}) => {
    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            className={`w-full h-full absolute ${classes}`}
        />
    );
}
 
export default CustomImage;
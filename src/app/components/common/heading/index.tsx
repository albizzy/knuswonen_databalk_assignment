import { Overlock } from "next/font/google";
//types
import { HeadingProps } from "@/types";

const overLock = Overlock({ weight: "700", subsets: ["latin"] });

const Heading: React.FC<HeadingProps> = ({
    as: Tag = 'h1',
    text,
    classes,
    color = 'text-[#39468C]',
}) => {
    return (
        <Tag className={`text-center md:text-left ${overLock.className} ${color} ${classes}`}>
            {text}
        </Tag>
    );
}
 
export default Heading;
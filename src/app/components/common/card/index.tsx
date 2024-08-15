// types
import { Overlock } from "next/font/google";
import { CardProps } from "@/types";
import CustomImage from "../image";
import Heading from "../heading";
import Paragraph from "../paragraph";
import Button from "../button/button";

const overLock = Overlock({ weight: "700", subsets: ["latin"] });

const Card: React.FC<CardProps> = ({
    imageSrc,
    date,
    title,
    description,
    link,
    linkText,
    linkImageIcon,
}) => {
    return (
        <div className="w-[288px] h-[336px] rounded-xl shadow-lg relative overflow-hidden flex flex-col">
            <div className="w-full h-[160px] shrink-0 relative overflow-hidden">
                <CustomImage
                    src={imageSrc}
                    alt={`${title} card`}
                />
            </div>
            <div className="w-full h-full bg-white p-3">
                <div className="w-full h-full flex flex-col justify-start gap-2">
                    <span className="text-[11px] uppercase text-[#999999]">{date}</span>
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex flex-col gap-y-2">
                            <Heading
                                as='h3'
                                text={title}
                                classes={`${overLock.className} font-bold text-[20px] leading-[24.4px]`}
                            />
                            <Paragraph
                                text={description}
                                classes="text-[14px] leading-[21px] line-clamp-2 font-light"
                            />
                        </div>

                        <div className="w-full h-fit flex justify-end">
                            <Button
                                isTextButton
                                label={linkText}
                                imageIcon={linkImageIcon}
                                link={link}
                                textSize="text-[14px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;
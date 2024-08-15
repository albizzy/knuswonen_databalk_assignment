// types
import { CTAContentProps } from "@/types";
import CustomImage from "@/app/components/common/image";
import Button from "@/app/components/common/button/button";
import Heading from "@/app/components/common/heading";
import Paragraph from "@/app/components/common/paragraph";

const CTA:React.FC<CTAContentProps> = ({
    isImageStart,
    imageSrc,
    title,
    description,
    buttonText,
    gradientType,
    titleColor
}) => {
    return ( 
        <div className="w-full h-full md:h-[572px]">
            <div className={`w-full h-full flex items-center py-8 md:py-4 px-4 md:px-10 lg:px-32 gap-2`}>
                {/* Image Section */}
                <div className={`w-full h-fit flex gap-4 ${ isImageStart ? "flex-col md:flex-row justify-start" : "flex-col-reverse md:flex-row-reverse justify-start"} items-center`}>
                    <div className={`relative w-[383px] h-[304px] md:w-[601px] md:h-[479px] md:mt-8 md:ml-6 ${!isImageStart && "w-[398px] h-[317px] md:w-[560.5px] md:h-[440px] md:mt-20"}`}>
                        <CustomImage 
                            src={imageSrc} 
                            alt={title}
                            classes=""
                        />
                    </div>

                    <div className="w-full h-full md:w-[597px] md:h-[372px] flex flex-col justify-between items-center md:items-start gap-y-8">
                        <Heading
                            as='h2'
                            text={title}
                            classes={`text-[32px]`}
                            color={titleColor}
                        />
                        <Paragraph
                            text={description}
                            classes=""
                        />
                        <Button 
                            label={buttonText}
                            isGradientButton
                            gradientType={gradientType}
                            textColor="text-white"
                            textSize="text-base"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CTA;
// types
import { CardProps } from "@/types";

// data
import data from "@/app/components/data";

// icon
import ArrowIcon from "@/app/assets/icons/ArrowIcon.svg";

// components
import Heading from "@/app/components/common/heading";
import Card from "@/app/components/common/card";
import Button from "@/app/components/common/button/button";


const CardList = () => {
    const cardContents: CardProps[] = data.cardsContent;
    return (
        <div className="w-full lg:w-[912px] justify-center h-fit flex flex-col gap-5">
            <div className="w-full">
                <Heading
                    as='h2'
                    text="Laatste nieuws"
                    classes="text-[32px] text-center md:text-left"
                />
            </div>
            <div className="w-full justify-center items-center flex flex-col md:flex-row gap-6">
                {cardContents.map((cardContent, index) => (
                    <Card
                        key={index}
                        imageSrc={cardContent.imageSrc}
                        title={cardContent.title}
                        description={cardContent.description}
                        date={cardContent.date}
                        link={cardContent.link}
                        linkText={cardContent.linkText}
                        linkImageIcon={cardContent.linkImageIcon}
                    />
                ))}
            </div>
            <div className="w-full flex items-center justify-center md:justify-end">
                <Button
                    isTextButton
                    label="Bekijk alle nieuwsberichten"
                    textSize="text-[14px]"
                    link="#"
                    imageIcon={ArrowIcon}
                />
            </div>
        </div>
    );
}
 
export default CardList;
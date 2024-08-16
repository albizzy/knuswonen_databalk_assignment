// types
import { FooterContentSectionProps, SocialMediaLinkProps } from "@/types";

// components
import FooterContentItem from "./footerContentItem";
import Heading from "../common/heading";

const FooterContentSection: React.FC<FooterContentSectionProps> = ({
    title,
    content,
}) => {
    return (
        <div className="flex flex-col gap-y-4">
            <Heading
                text={title}
                as="h3"
                classes="text-[20px]"
                color="text-[#1E1E1E]"
            />
            <ul className="flex flex-col gap-2">
                {content.map((item, index) => {
                    if ("socialLinks" in item) { // Type guard using 'in' opearator
                        return (
                        <li key={index} className="flex flex-row">
                            {item.socialLinks.map((socialLink, socialIndex) => (
                            <FooterContentItem key={socialIndex} {...socialLink} />
                            ))}
                        </li>
                        );
                    } else {
                        return (
                        <li key={index}>
                            <FooterContentItem {...item} />
                        </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}
 
export default FooterContentSection;
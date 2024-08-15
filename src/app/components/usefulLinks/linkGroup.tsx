// types
import { UsefulLinksGroupProps } from "@/types";

// componenst
import LinkItem from "./linkItem";

const LinkGroup: React.FC<UsefulLinksGroupProps> = ({ links }) => {
    return (
        <div className="w-fit flex gap-4">
            {links.map((link, index) => (
                <LinkItem
                    key={index}
                    label={link.label}
                    link={link.link}
                />
            ))}
        </div>
    );
}
 
export default LinkGroup;
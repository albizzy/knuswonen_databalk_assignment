// types
import { UsefulLinksProps } from "@/types";

import Link from "next/link";

const LinkItem: React.FC<UsefulLinksProps> = ({
    label,
    link,
}) => {
    return (
        <Link 
            href={link}
            className="underline underline-offset-2 font-medium text-xs"
        >
            {label}
        </Link>
    );
}
 
export default LinkItem;
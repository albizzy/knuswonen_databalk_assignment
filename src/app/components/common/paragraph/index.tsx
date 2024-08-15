import { ParagraphProps } from "@/types";
import { Span } from "next/dist/trace";

const Paragraph: React.FC<ParagraphProps> = ({
    as: Tag = 'p',
    text,
    classes,
    color = 'text-[#39468C]'
}) => {
    return (
        <Tag className={`${color} ${classes}`}>
            {Array.isArray(text) ? (
                text.map((part, index) => (
                    <span key={index}>
                        {part}
                        {index < text.length - 1 && (<span><br/><br/></span>)}
                    </span>
                ))
            ) : (
                text
            )}
        </Tag>
    );
}
 
export default Paragraph;
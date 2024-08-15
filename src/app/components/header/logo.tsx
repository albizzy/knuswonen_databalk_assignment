import Image from "next/image";
import Mark from "../../assets/images/Mark.png";
import WordMark from "../../assets/images/Path 63.png"

const Logo = () => {
    return (
        <div className="w-fit h-fit flex items-center gap-1">
            <div className="w-[48.09px] h-[40px] relative overflow-hidden">
                <Image
                    src={Mark}
                    alt="Logo mark"
                    fill
                    className="absolute w-full h-full"
                />
            </div>

            <div className="hidden md:block w-[153.48px] h-[20.9px] relative overflow-hidden">
                <Image
                    src={WordMark}
                    alt="Logo mark"
                    fill
                    className="absolute w-full h-full"
                />
            </div>
        </div>
    );
}
 
export default Logo;
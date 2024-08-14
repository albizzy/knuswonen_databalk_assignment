import Background from "@/app/assets/HeroBackground.png";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full h-[560px] bg-blue-500">
            <div className="w-full h-[560px] relative overflow-hidden">
                <Image
                    src={Background}
                    alt="Hero Background"
                    fill
                    className="absolute w-full h-full object-cover"
                />
                <div className="w-full h-full relative"></div>
            </div>
        </div>
    );
}
 
export default Hero;
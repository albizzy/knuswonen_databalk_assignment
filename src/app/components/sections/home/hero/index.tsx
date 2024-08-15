import Background from "@/app/assets/images/HeroBackground.png";
import Image from "next/image";
import HeroLinks from "./heroLinks";

const Hero = () => {
    return (
        <div className="w-full h-full md:h-[560px]">
            <div className="w-full h-[560px] relative overflow-hidden">
                <Image
                    src={Background}
                    alt="Hero Background"
                    fill
                    className="absolute w-full h-full object-cover"
                />
                <div className="w-full h-full relative flex justify-center items-end pb-6">
                    <HeroLinks/>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;
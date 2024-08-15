// components
import Hero from "./hero";
import LaatsteNieuws from "./laatsteNieuws";
import CTA from "./CTA";

import data from "@/app/components/data";

const HomePage = () => {
    const cta1 = data.ctaContents[0];
    const cta2 = data.ctaContents[1];

    return (
        <div className="w-full h-full flex flex-col relative overflow-x-hidden">
            <Hero/>
            <CTA {...cta1}/>
            <LaatsteNieuws/>
            <CTA {...cta2}/>
        </div>
    );
}
 
export default HomePage;
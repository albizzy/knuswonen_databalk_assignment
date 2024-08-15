// components
import Hero from "./hero";
import LaatsteNieuws from "./laatsteNieuws";

const HomePage = () => {
    return (
        <div className="w-full h-full flex flex-col relative overflow-x-hidden">
            <Hero/>
            <LaatsteNieuws/>
        </div>
    );
}
 
export default HomePage;
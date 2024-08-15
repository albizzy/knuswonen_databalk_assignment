// components
import Heading from "@/app/components/common/heading";
import CardList from "./cardList";

const LaatsteNieuws = () => {
    return (
        <div className="w-full h-full md:h-[572px] bg-[#9AA4D9]">
            <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center px-4 md:px-10 lg:px-32">
                <CardList />
            </div>
        </div>
    );
}
 
export default LaatsteNieuws;
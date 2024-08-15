import { 
    MainNavRouteProps, 
    DataProps, 
    ButtonProps,
    CardProps, 
} from "@/types";

// hero icons
import HammerIcon from "@/app/assets/icons/HammerIcon.svg";
import ChatCircleIcon from "@/app/assets/icons/ChatsCircle.svg";
import HandDepositIcon from "@/app/assets/icons/HandDepositIcon.svg";

// images for card
import Telefoone from "@/app/assets/images/telefoonstoring.png";
import Energie1 from "@/app/assets/images/energiebesparing.png";
import Energie2 from "@/app/assets/images/energietoeslag.png";
import ArrowIcon from "@/app/assets/icons/ArrowIcon.svg";

const mainNavRoutes: MainNavRouteProps[] = [
    {
        label: 'Ik huur',
        path: '#',
    },
    {
        label: 'Ik zoek',
        path: '#',
    },
    {
        label: 'Over ons',
        path: '#',
    },
    {
        label: 'Projecten',
        path: '#',
    },
]

const heroLinkButtons: ButtonProps[] = [
    {
        label: 'Reparatie melden',
        imageIcon: HammerIcon,
        type: 'button',
        link: '#',
        classes: 'text-[#39468C]',
    },
    {
        label: 'Huur betalen',
        imageIcon: HandDepositIcon,
        type: 'button',
        link: '#',
        classes: 'text-[#39468C]',
    },
    {
        label: 'Contact',
        imageIcon: ChatCircleIcon,
        type: 'button',
        link: '#',
        classes: 'text-[#39468C]',
    },
]

const cardsContent: CardProps[] = [
    {
        imageSrc: Telefoone,
        title: 'Telefoonstoring',
        description: 'Update: Telefoonstoring verholpen',
        date: '5 maart 2024',
        link: '#',
        linkText: 'Lees meer',
        linkImageIcon: ArrowIcon,
    },
    {
        imageSrc: Energie1,
        title: 'Energiebesparing - Wat doet KnusWonen?',
        description: 'KnusWonen werkt hard aan het energiezuiniger maken van',
        date: '17 februari 2024',
        link: '#',
        linkText: 'Lees meer',
        linkImageIcon: ArrowIcon,
    },
    {
        imageSrc: Energie2,
        title: 'Energietoeslag: Heeft u er recht op?',
        description: 'Steeds meer mensen hebben moeite om hun energierekening te',
        date: '30 januari 2024',
        link: '#',
        linkText: 'Lees meer',
        linkImageIcon: ArrowIcon,
    },
]

const data: DataProps = {
    mainNavRoutes,
    heroLinkButtons,
    cardsContent,
}

export default data;
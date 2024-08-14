import { MainNavRouteProps, DataProps, ButtonProps } from "@/types";

// image icons
import HammerIcon from "@/app/assets/icons/HammerIcon.svg";
import ChatCircleIcon from "@/app/assets/icons/ChatsCircle.svg";
import HandDepositIcon from "@/app/assets/icons/HandDepositIcon.svg";

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

const data: DataProps = {
    mainNavRoutes,
    heroLinkButtons,
}

export default data;
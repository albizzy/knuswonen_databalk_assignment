import { MainNavRouteProps, DataProps, IconButtonProps } from "@/types";

// icons for nav buttons
import ProfileIcon from "@/app/assets/icons/profile-icon.svg";
import SearchIcon from "@/app/assets/icons/search-icon.svg";

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

const navButtons: IconButtonProps[] = [
    {
        imageIcon: SearchIcon,
    },
    {
        imageIcon: ProfileIcon,
    },
]

const data: DataProps = {
    mainNavRoutes,
}

export default data;
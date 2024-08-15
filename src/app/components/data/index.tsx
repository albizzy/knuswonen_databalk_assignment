import { 
    MainNavRouteProps, 
    DataProps, 
    ButtonProps,
    CardProps,
    CTAContentProps,
    FooterContentSectionProps,
    UsefulLinksProps, 
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

// images for CTA section
import CTAImage1 from "@/app/assets/images/CTAimage1.png";
import CTAImage2 from "@/app/assets/images/CTAImage2.png";

// social icons
import FacebookIcon from "@/app/assets/icons/FacebookIcon.svg";
import InstagramIcon from "@/app/assets/icons/InstagramIcon.svg";

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

const ctaContents: CTAContentProps[] = [
    {
        isImageStart: true,
        imageSrc: CTAImage1,
        title: 'We verbeteren onze woningen',
        description: ['Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning','Wilt u meer weten over onze energiebesparende maatregelen?'],
        buttonText: "Lees meer",
        gradientType: 'green',
        titleColor: 'text-[#35BCE7]'
    },
    {
        isImageStart: false,
        imageSrc: CTAImage2,
        title: 'Schrijf je in voor onze nieuwsbrief',
        description: ['Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist...', 'Schrijf je vandaag nog in en blijf verbonden met KnusWonen!'],
        buttonText: "Inschrijven",
        gradientType: 'orange',
        titleColor: 'text-[#FF6B38]'
    },
]

const footerContents: FooterContentSectionProps[] = [
    {
        title: "Bel of mail ons",
        content: [
            {
                label: "Telefoonnummer",
                value: "012-345 67 89"
            },
            {
                label: "E-mail",
                value: "klantenservice@knuswonen.nu",
                isLink: true,
                link: "#"
            }
        ]
    },
    {
        title: "Openingstijden",
        content: [
            {
                label: "Maandag t/m donderdag",
                value: "Maandag t/m donderdag van 08:30 tot 12:00 uur,"
            },
            {
                label: "Vrijdag",
                value: "Vrijdag van 08:30 tot 12:00 uur"
            }
        ]
    },
    {
        title: "Kom langs op afspraak",
        content: [
            {
                label: "Adres",
                value: "Straatweglaan 123"
            },
            {
                label: "Adres",
                value: "1234 AB Dorpstad"
            },
        ]
    },
    {
    title: "Volg ons op onze sociale kanalen",
        content: [
            {
                label: "Social media",
                socialLinks: [
                    {
                        label: "Facebook",
                        value: FacebookIcon,
                        isLink: true,
                        isImage: true,
                        link: "#"
                    },
                    {
                        label: "Instagram",
                        value: InstagramIcon,
                        isLink: true,
                        isImage: true,
                        link: "#"
                    }
                ]
            }
        ]
    }
]

const usefulLinks: UsefulLinksProps[] = [
    {
        label: "Privacy",
        link: '#',
    },
    {
        label: "Cookieverklaring",
        link: '#',
    },
    {
        label: "Disclaimer",
        link: '#',
    },
]

const data: DataProps = {
    mainNavRoutes,
    heroLinkButtons,
    cardsContent,
    ctaContents,
    footerContents,
    usefulLinks,
}

export default data;
import { v4 as uuid } from "uuid";
import facebookIcon from "../../assets/shared/socials/btu-facebook-icon.png";
import linkedInIcon from "../../assets/shared/socials/btu-linkedin-icon.png";
import instagramIcon from "../../assets/shared/socials/btu-instagram-icon.png";
import tiktokIcon from "../../assets/shared/socials/btu-tiktok-icon.png";
import youtubeIcon from "../../assets/shared/socials/btu-youtube-icon.png";
import googleIcon from "../../assets/shared/socials/btu-google-icon.png";
import FAQCardBig1 from "../../assets/shared/cards/FAQ-card-big-1.png";
import FAQCardBig2 from "../../assets/shared/cards/FAQ-card-big-2.png";
import FAQCardBig3 from "../../assets/shared/cards/FAQ-card-big-3.png";
import FAQCardSmall1 from "../../assets/shared/cards/FAQ-card-small-1.jpg";
import FAQCardSmall2 from "../../assets/shared/cards/FAQ-card-small-2.png";
import FAQCardSmall3 from "../../assets/shared/cards/FAQ-card-small-3.jpg";
import ROUTES from "../../routes/Routes";

export const appNavItems = [
  {
    id: uuid(),
    page: "ჩვენს შესახებ",
    path: ROUTES.ABOUT,
  },
  {
    id: uuid(),
    page: "AI ბაკალავრის პროგრამა",
    path: ROUTES.BAPROGRAMMES,
  },
  {
    id: uuid(),
    page: "წარმატებების ისტორიები",
    path: ROUTES.SUCCESSSTORIES,
  },
  {
    id: uuid(),
    page: "კონტაქტი",
    path: ROUTES.CONTACT,
  },
  {
    id: uuid(),
    page: "FAQ",
    path: ROUTES.FAQ.MAIN,
  },
];

export const FAQNavigation = [
  {
    id: uuid(),
    page: "AI ლააბორატორიები",
    path: ROUTES.FAQ.FAQ_AI_LABS,
  },
  {
    id: uuid(),
    page: "კვლევები",
    path: ROUTES.FAQ.FAQ_AI_STUDIES,
  },
  {
    id: uuid(),
    page: "AI წიგნიერების სერია",
    path: ROUTES.FAQ.FAQ_AI_KNOWLEDGE,
  },
];
export const socialItems = [
  {
    id: uuid(),
    name: "Facebook",
    icon: facebookIcon,
    smLink: "https://www.facebook.com/BTUGEORGIA",
  },
  {
    id: uuid(),
    name: "LinkedIn",
    icon: linkedInIcon,
    smLink:
      "https://www.linkedin.com/school/business-and-technology-university-%E2%80%A2-btu/?originalSubdomain=ge",
  },
  {
    id: uuid(),
    name: "Instagram",
    icon: instagramIcon,
    smLink: "https://www.instagram.com/btugeorgia/?hl=en",
  },
  {
    id: uuid(),
    name: "TikTok",
    icon: tiktokIcon,
    smLink: "https://www.tiktok.com/@btu.university",
  },
  {
    id: uuid(),
    name: "YouTube",
    icon: youtubeIcon,

    smLink: "https://www.youtube.com/@btu-businessandtechnologyu6589",
  },
  {
    id: uuid(),
    name: "Google",
    icon: googleIcon,

    smLink: "https://btu.edu.ge/",
  },
];

export const contactInfo = [
  "თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82",
  "[+995 32] 2 195 015",
];

export const FAQSmallCardsData = [
  {
    id: uuid(),
    img: FAQCardSmall1,
    cardTxt: "ტრენინგები და ვორქშოფები ხელოვნური ინტელექტის მიმართულებით",
    link: "https://btu.edu.ge/treningebi-da-vorqshophebi-khelovnuri-inteleqtis-mimarthulebith/",
  },
  {
    id: uuid(),
    img: FAQCardSmall2,
    cardTxt: "btu ai - sustainability lab პოდკასტების სერია!",
    link: "https://btu.edu.ge/btu-ai-sustainability-lab-podkastebis-seria/",
  },
  {
    id: uuid(),
    img: FAQCardSmall3,
    cardTxt: "როგორ გამოვიყენო ხელოვნური ინტელექტი-ტრენინგი btu-ში!",
    link: "https://btu.edu.ge/rogor-gamoviqheno-khelovnuri-inteleqti-ghia-treningi-qhvela-msurvelisthvis-btu-shi/",
  },
];

export const FAQBigCardsData = [
  {
    id: uuid(),
    img: FAQCardBig1,
    cardTxt: "AI მომხმარებელთა ჩართულობისთვის",
    link: "https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-MArketing-book-Geo-.pdf",
  },
  {
    id: uuid(),
    img: FAQCardBig2,
    cardTxt: "USE OF AI IN BUSINESS",
    link: null,
  },
  {
    id: uuid(),
    img: FAQCardBig3,
    cardTxt: "AI IN EDUCATION",
    link: "https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-in-Education.docx.pdf",
  },
  {
    id: uuid(),
    img: FAQCardBig3,
    cardTxt: "AI IN EDUCATION",
    link: "https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-in-Education.docx.pdf",
  },
];

import { v4 as uuid } from "uuid";
import facebookIcon from "../../assets/shared/socials/btu-facebook-icon.png";
import linkedInIcon from "../../assets/shared/socials/btu-linkedin-icon.png";
import instagramIcon from "../../assets/shared/socials/btu-instagram-icon.png";
import tiktokIcon from "../../assets/shared/socials/btu-tiktok-icon.png";
import youtubeIcon from "../../assets/shared/socials/btu-youtube-icon.png";
import googleIcon from "../../assets/shared/socials/btu-google-icon.png";
import ROUTES from "../../routes/Routes";

export const appNavItems = [
  {
    id: uuid(),
    page: "ჩვენს შესახებ",
    path: ROUTES.ABOUT
  },
  {
    id: uuid(),
    page: "AI ბაკალავრის პროგრამა",
    path: ROUTES.BAPROGRAMMES
  },
  {
    id: uuid(),
    page: "წარმატებების ისტორიები",
    path: ROUTES.SUCCESSSTORIES
  },
  {
    id: uuid(),
    page: "კონტაქტი",
    path: ROUTES.CONTACT
  },
  {
    id: uuid(),
    page: "ჩვენს შესახებ",
    path: ROUTES.FAQ
  },
  {
    id: uuid(),
    page: "ბლოგი",
    path: ROUTES.BLOG
  }
]
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

    smLink: "https://www.linkedin.com/school/business-and-technology-university-%E2%80%A2-btu/?originalSubdomain=ge"
  },
  {
    id: uuid(),
    name: "Instagram",
    icon: instagramIcon,

    smLink: "https://www.instagram.com/btugeorgia/?hl=en"
  },
  {
    id: uuid(),
    name: "TikTok",
    icon: tiktokIcon,
    smLink: "https://www.tiktok.com/@btu.university"
  },
  {
    id: uuid(),
    name: "YouTube",
    icon: youtubeIcon,

    smLink: "https://www.youtube.com/@btu-businessandtechnologyu6589"
  },
  {
    id: uuid(),
    name: "Google",
    icon: googleIcon,

    smLink: "https://btu.edu.ge/"
  }
];

export const contactInfo = ["თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82", "[+995 32] 2 195 015"]
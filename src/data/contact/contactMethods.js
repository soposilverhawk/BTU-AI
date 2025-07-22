import phoneIcon from "../../assets/contact/phone.png";
import emailIcon from "../../assets/contact/email.png";
import locationIcon from "../../assets/contact/Location.png";

export const contactMethods = {
  phone: {
    icon: phoneIcon,
    label: "ტელეფონი",
    value: "(+995 32) 2 195 015",
  },
  email: {
    icon: emailIcon,
    label: "ელ.ფოსტა",
    value: "INFO@BTU.EDU.GE",
  },
  location: {
    icon: locationIcon,
    label: "მისამართი",
    value: "თბილისი 0162, საქართველო   ი.ჭავჭავაძის გამზირი N82",
    extra:
      "ჩვენს კამპუსამდე მოსვლა შესაძლებელია: ავტობუსით #173 #345 #351 ან მიკროავტობუსით #449 #450",
  },
};

import { v4 as uuid } from "uuid";
import firstSliderBg from "../../assets/slider/slider-img-1.png";
import secondSliderBg from "../../assets/slider/slider-img-2.jpg";
import thirdSliderBg from "../../assets/slider/slider-img-3.jpeg";
import fourthSliderBg from "../../assets/slider/slider-img-4.jpg";
export const sliderInfo = [
  {
    id: uuid(),
    bg: firstSliderBg,
    title: "BTU AI ლექტორი",
    txt: "Web development fundamentals",
  },
  {
    id: uuid(),
    bg: secondSliderBg,
    title: "lorem ipsum",
    txt: "Machine Learning and AI models",
  },
  {
    id: uuid(),
    bg: thirdSliderBg,
    title: "Lorem ipsum dolor sit amet",
    txt: "consectetur adipisicing elit.",
  },
  {
    id: uuid(),
    bg: fourthSliderBg,
    title: "Lorem ipsum dolor sit amet.",
    txt: "Nesciunt repellat praesentium magni.",
  },
];

export const bachelorProgrammes = [
  {
    id: uuid(),
    program: "ორი სადიპლომო პროგრამა",
  },
  {
    id: uuid(),
    program:
      "BTU-ს კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო პროგრამის სტუდენტებს შესაძლებლობა აქვთ ბოლო, მეოთხე აკადემიური წლის პარტნიორ უნივერსიტეტში გატარებით, ერთდროულად ორი უნივერსიტეტის დიპლომი მოიპოვონ.",
  },
];

export const programLinks = [
  {
    id: uuid(),
    name: "პროგრამა",
    link: "https://drive.google.com/file/d/1JCFceATzAUG6eisFGXBhJw7VfXfeZ9e_/view",
  },
  {
    id: uuid(),
    name: "პროგრამის ბროშურა",
    link: "https://btu.edu.ge/wp-content/uploads/2024/07/programis-broshura.-komp.pdf",
  },
  {
    id: uuid(),
    name: "გაცვლითი პროგრამები",
    link: "https://btu.edu.ge/wp-content/uploads/2024/07/gatsvlithi-komp.pdf",
  },
];

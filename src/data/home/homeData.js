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
    txt: "Nesciunt repellat praesentium libero magni quae similique qui.",
  },
];

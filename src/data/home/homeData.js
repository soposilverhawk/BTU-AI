import { v4 as uuid } from "uuid";
import sliderBg1 from "../../assets/slider/slider-img-1.png";
import sliderBg2 from "../../assets/slider/slider-img-2.jpg";
import sliderBg3 from "../../assets/slider/slider-img-3.jpeg";
import sliderBg4 from "../../assets/slider/slider-img-4.jpg";
import successStoryCard1 from "../../assets/homePage/cards/success/success-card-1.jpg";
import successStoryCard2 from "../../assets/homePage/cards/success/success-card-2.png";
import successStoryCard3 from "../../assets/homePage/cards/success/success-card-3.jpg";
import successStoryCard4 from "../../assets/homePage/cards/success/success-card-4.jpg";
import programmesCard1 from "../../assets/homePage/cards/programmes/programs-card-1.png";
import programmesCard2 from "../../assets/homePage/cards/programmes/programs-card-2.png";
import programmesCard3 from "../../assets/homePage/cards/programmes/programs-card-3.png";
import programmesCard4 from "../../assets/homePage/cards/programmes/programs-card-4.png";

export const sliderInfo = [
  {
    id: uuid(),
    bg: sliderBg1,
    title: "BTU AI ლექტორი",
    txt: "Web development fundamentals",
  },
  {
    id: uuid(),
    bg: sliderBg2,
    title: "lorem ipsum",
    txt: "Machine Learning and AI models",
  },
  {
    id: uuid(),
    bg: sliderBg3,
    title: "Lorem ipsum dolor sit amet",
    txt: "consectetur adipisicing elit.",
  },
  {
    id: uuid(),
    bg: sliderBg4,
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

export const successStoriesCards = [
  {
    id: uuid(),
    title: "გაცვლითი პროგრამების სტუდენტები",
    titleBg: "#FD007D",
    cardImg: successStoryCard1,
  },
  {
    id: uuid(),
    title: "კონკურსები და გამარჯვებები",
    titleBg: "#29CDFF",
    cardImg: successStoryCard2,
  },
  {
    id: uuid(),
    title: "სტარტაპ კატალოგი",
    titleBg: "#FD007D",
    cardImg: successStoryCard3,
  },
  {
    id: uuid(),
    title: "კურსდამთავრებულთა წარმატება",
    titleBg: "#FD007D",
    cardImg: successStoryCard4,
  },
];

export const programmesCards = [
  {
    id: uuid(),
    cardImg: programmesCard1,
    cardBgColor: "#FC4B58",
    txt: "1500 ქალის გადამზადება ტექნოლოგიებში – უმსხვილესი პროექტი BTU-ში USAID-თან პარტნიორობით ხორციელდება;",
  },
  {
    id: uuid(),
    cardImg: programmesCard2,
    cardBgColor: "#070B80",
    txt: "Women in AI-ის ფარგლებში, მთელი საქართველოს მასშტაბით 200 ქალი შეირჩა და  9 თვის განმავლობაში ხელოვნურ ინტელექტისა და ვებ-დეველოპმენტის მიმართულებებით გადამზადა.",
  },
  {
    id: uuid(),
    cardImg: programmesCard3,
    cardBgColor: "#FD007D",
    txt: "საქართველოში მცხოვრები უკრაინელი ქალები ტექნოლოგიებს შეისწავლიან. პროექტს-BTU, გაეროს ქალთა ორგანიზაციისა  და იაპონიის მთავრობის მხარდაჭერით განახორციელებს.",
  },
  {
    id: uuid(),
    cardImg: programmesCard4,
    cardBgColor: "#000046",
    txt: "ევროკავშირის მიერ მხარდაჭერილი პროექტი „ქალების მენტორობა ტექ პროგრამებში’’ მიზნად ისახავს, სამი ნაკადის განმავლობაში, 1100 ბენეფიციარისა და 320 მენტორის მოზიდვას.",
  },
];

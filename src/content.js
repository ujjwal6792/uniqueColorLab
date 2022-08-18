import birds from "./assets/uniquebirds.webp";
import Insights from "./pages/home/Insights";
import { BsCameraReels } from "react-icons/bs";

const content = {
  home: {
    heroImage: birds,
    heroHeadding: "Welcome to Unique Color Lab",
    heroPara: "explore our range of albums, photo covers and photo frames",
    service1: [
      "24X7 support",
      "get instant support for your queries and orders",
    ],
    service2: [
      "Assured Quality",
      "Our products goes through thorough quality checkss and are made with premium materials",
    ],
    service3: [
      "Amazing Services",
      "Choose from variety of designs and product styles",
    ],
    service4: [
      "customized choices",
      "get full freedom with what you want your product to be",
    ],
    insights: [
      {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/svg-design-assets%2Fcamera-reels-blue.svg?alt=media&token=ed83e68c-07f2-41f6-8aae-11082b7d1288",
        highlight: "3K+ ",
        text: "Professional customers",
      },
      {
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/svg-design-assets%2Fshop-w-blueindow.svg?alt=media&token=ffce87f5-d047-47ad-a9cc-2a4745fa73a5",
        highlight: "200+",
        text: "Partner stores",
      },
      {
        id: 3,
        img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/svg-design-assets%2Fhearts-blue.svg?alt=media&token=11babe44-5b6f-498e-9dfb-7cbf136c3a2a",
        highlight: "100+",
        text: "Products and varieties",
      },
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/svg-design-assets%2Freceipt-blue.svg?alt=media&token=8573f5e2-ff87-4ad6-9cbc-091905f2af65",
        highlight: "5K+",
        text: "Orders daily",
      },
    ],
    About: {
      heading: "What makes our color lab successful",
      para: "Making our customer's memories wrapped and printed in finest materials and paper, with our aim to bring unparalled product quality and satisfaction ",
      img: "",
    },
  },
  Blog: [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/blog%2Fpexels-alexander-dummer-134469.webp?alt=media&token=887e182a-4e9b-4ac4-ac07-c34f27858143",
      heading: "Art of photography",
      description:
        "A look into the world of professional photography and how phones are transforming the space. ",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/blog%2Fpexels-viresh-studio-1444442.webp?alt=media&token=3b32ce62-f870-40e1-8776-930053af7758",
      heading: "Wedding shoots and how to design them",
      description:
        "Discussing the art of wedding photography and in depth analysis of modern trends. ",
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/blog%2Fpexels-karolina-grabowska-4397899.webp?alt=media&token=9e253084-91b9-4bff-8f4c-5e28fe5b57f6",
      heading: "The beginner's guide to Professional Photography Equipment",
      description:
        "Today we will look into pro cameras and lenses a beginner can go for. ",
    },
    {
      id: 4,
      img: "https://firebasestorage.googleapis.com/v0/b/uniquecolorlabshop.appspot.com/o/blog%2Fpexels-alexander-dummer-134469.webp?alt=media&token=887e182a-4e9b-4ac4-ac07-c34f27858143",
      heading: "Art of photography",
      description:
        "A look into the world of professional photography and how phones are transforming the space. ",
    },
  ],
  contact: [
    { heading: "Location", text: "Charbagh, Lucknow" },
    { heading: "email", text: "Tilakphotos@gmail.com" },
    { heading: "phone", text: "9999999999" },
  ],
};

export default content;

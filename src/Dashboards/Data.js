// Sidebar imports
import {
  UilUsersAlt,
  UilClipboardAlt,
  UilUserMd,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilUserMd,
    heading: "Admin Dashboard",
  },
  {
    icon: UilUsersAlt,
    heading: "Users",
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Users",
    color: {
      backGround: "linear-gradient(180deg, #4bb49b 0%, #6cf6d6 100%)",
      boxShadow: "0px 10px 20px 0px #6cf6d6",
    },
    // barValue: 70,
    value: "150",
    png: UilUsersAlt,
    users: [
      {
        name: "Pretty",
        trainers: 2,
      },
      {
        name: "Harvey",
        trainers: 1,
      },
    ],
  },
  {
    title: "Trainers",
    color: {
      backGround: "linear-gradient(180deg, #4bb49b 0%, #6cf6d6 100%)",
      boxShadow: "0px 10px 20px 0px #6cf6d6",
    },
    // barValue: 80,
    value: "30",
    png: UilUsersAlt,
    trainers: [
      {
        name: "Hanz",
        users: 10,
      },
      {
        name: "Harvey",
        users: 5,
      },
    ],
  },
  {
    title: "Products",
    color: {
      backGround: "linear-gradient(180deg, #4bb49b 0%, #6cf6d6 100%)",
      boxShadow: "0px 10px 20px 0px #6cf6d6",
    },
    // barValue: 60,
    value: "200",
    png: UilUserMd,
    workouts: [
      {
        name: "Abs",
        trainers: 10,
      },
      {
        name: "cardio",
        trainers: 10,
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

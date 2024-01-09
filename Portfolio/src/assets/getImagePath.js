import burgerShop from "../assets/burgerShop.png";
import ecommerceApp from "../assets/ecommerceApp.png";

import fLogo from "../assets/f-logo.jpeg";
import fcLogo from "../assets/fc-logo.png";
import footprintApp from "../assets/footprintApp.png";
import happyThought from "../assets/happyThought.png";
import imagePriya from "../assets/image-priya.jpg";
import kuLogo from "../assets/ku-logo.png";
import luLogo from "../assets/lu-logo.png";
import movieApp from "../assets/movieApp.png";
import musicApp from "../assets/musicApp.png";
import quizApp from "../assets/quizApp.png";
import surveyApp from "../assets/surveyApp.png";
import technigoLogo from "../assets/technigo-logo.png";
import todoApp from "../assets/todoApp.png";
import tuLogo from "../assets/tu-logo.jpeg";
import weatherApp from "../assets/weatherApp.png";

import defaultImage from "../assets/defaultImage.jpeg";

export const getImagePath = (image) => {
    switch (image) {
      case "../assets/burgerShop.png":
        return burgerShop;
      case "../assets/ecommerceApp.png":
        return ecommerceApp;
      case "../assets/f-logo.jpeg":
        return fLogo;
      case "../assets/fc-logo.png":
        return fcLogo;
      case "../assets/footprintApp.png":
        return footprintApp;
      case "../assets/happyThought.png":
        return happyThought;
      case "../assets/image-priya-jpg":
        return imagePriya;
      case "../assets/ku-logo.png":
        return kuLogo;
      case "../assets/lu-logo.png":
        return luLogo;
      case "../assets/movieApp.png":
        return movieApp;
      case "../assets/musicApp.png":
        return musicApp;
      case "../assets/quizApp.png":
        return quizApp;
      case "../assets/surveyApp.png":
        return surveyApp;
      case "../assets/technigo-logo.png":
        return technigoLogo;
      case "../assets/todoApp.png":
        return todoApp;
      case "../assets/tu-logo.png":
        return tuLogo;

      case "../assets/weatherApp.png":
        return weatherApp;
      default:
        return defaultImage;
    }
  };
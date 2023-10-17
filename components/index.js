import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/events/Events";


// job details screen
import Company from "./eventdetail/company/Company";
import { default as JobTabs } from "./eventdetail/tabs/Tabs";
import { default as JobAbout } from "./eventdetail/about/About";
import { default as JobFooter } from "./eventdetail/footer/Footer";
import Specifics from "./eventdetail/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/event/Eventcard";
import RegisteredCard from "./common/cards/event/Registeredcard";

export {
  RegisteredCard,
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  JobFooter,
  NearbyJobCard
};

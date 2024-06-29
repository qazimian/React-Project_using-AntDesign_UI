import React from "react";
import AppHero from "../Components/home/hero";
import AppAbout from "../Components/home/about";
import AppFeature from "../Components/home/feature";
import AppWorks from "../Components/home/works";
import AppPricing from "../Components/home/pricing";
import AppContact from "../Components/home/contact";



// import AppFeature from '../components/home/feature';
// import AppWorks from '../components/home/works';
// import AppFaq from '../components/home/faq';
// import AppPricing from '../components/home/pricing';
// import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppPricing/>
      <AppContact/>
      
    </div>
  );
}

export default AppHome;

//<AppFeature/>
//<AppWorks/>
//<AppFaq/>
//<AppPricing/>
//<AppContact/>

import React from "react";
import Banner from "./Banner";
import ImageBanner from "./ImageBanner";
import home_image_banner from "../Assets/images/home_image_banner.png";
import HomeCard from "./HomeCard";
import sports from "../Assets/images/sports.jpg";
import events from "../Assets/images/events.jpg";
import clubs from "../Assets/images/clubs.jpg";
import "../components/css/home.css"
export default function Home()
{
    return(
        <>
        <Banner />
        <ImageBanner src={home_image_banner} alt={"Home Image"} title={"Activity Hub"}/>
        <div className="cultural-activities">
      <h1>Activities</h1>
      <div className="container_home">
      <HomeCard
        imageSrc={events}
        title="Events"
        description="Events are planned mostly public or social occasions. Events such as technical events, non-technical events are organized."
        url="/events"
      />
      <HomeCard
        imageSrc={clubs}
        title="Clubs"
        description="Club is an association dedicated to a particular interest or activity."
        url="/clubs"
      />
      <HomeCard
        imageSrc={sports}
        title="Sports"
        description="Sport is a form of physical activity or game. Often competitive and organized, sports use, maintain, or improve physical ability and skills."
        url="/sports"
      />
    </div>
    </div>
    
    
        </>

      
    );

}
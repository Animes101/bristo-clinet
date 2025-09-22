import React from "react";
import CoverBanner from "../Components/CoverBanner";
import coverimg1 from "../assets/menu/banner3.jpg";
import useMenu from "../hooks/useMenu";
import SectionHeading from "../Components/SectionHeading";
import PapularManuCard from "../Components/PapularManuCard";

const OurMenu = () => {
  const { menu } = useMenu();

  const dessert = menu?.filter((item) => item.category === "dessert");

  console.log(dessert)
  
  const popular = menu?.filter((item) => item.category === "popular");
  const salad = menu?.filter((item) => item.category === "salad");
  const offered = menu?.filter((item) => item.category === "offered");

 
  return (
    <section className="container mx-auto">
      <div>
        <CoverBanner
          img={coverimg1}
          title={"OUR MENU"}
          desc={"Would you like to try a dish?"}
        />
      </div>
      <div>
        <SectionHeading
          title={"TODAYS OFFER"}
          desc={""}
          time={"---Dont miss---"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {offered &&
            offered.map((item) => (
              <PapularManuCard item={item} key={item._id} />
            ))}
        </div>
      </div>

      <div>
        <CoverBanner
          img={coverimg1}
          title={"OUR MENU"}
          desc={"Would you like to try a dish?"}
        />
      </div>
      <div>
        <SectionHeading
          title={"TODAYS OFFER"}
          desc={""}
          time={"---Dont miss---"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {offered &&
            offered.map((item) => (
              <PapularManuCard item={item} key={item._id} />
            ))}
        </div>
      </div>

      <div>
        <CoverBanner
          img={coverimg1}
          title={"OUR MENU"}
          desc={"Would you like to try a dish?"}
        />
      </div>
      <div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {dessert &&
            dessert.map((item) => (
              <PapularManuCard item={item} key={item._id} />
            ))}
        </div>
      </div>

      <div>
        <CoverBanner
          img={coverimg1}
          title={"OUR MENU"}
          desc={"Would you like to try a dish?"}
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {popular &&
            popular.map((item) => (
              <PapularManuCard item={item} key={item._id} />
            ))}
        </div>
      </div>

       <div>
        <CoverBanner
          img={coverimg1}
          title={"OUR MENU"}
          desc={"Would you like to try a dish?"}
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {salad &&
            salad.map((item) => (
              <PapularManuCard item={item} key={item._id} />
            ))}
        </div>
      </div>

    </section>
  );
};

export default OurMenu;

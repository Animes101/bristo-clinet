import React from "react";
import CoverBanner from "../Components/CoverBanner";
import shop1 from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import PapularManuCard from "../Components/PapularManuCard";

const OurShop = () => {

     const { menu } = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const popular = menu?.filter((item) => item.category === "popular");
  const salad = menu?.filter((item) => item.category === "salad");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <div>
        <CoverBanner
          img={shop1}
          title={"OUR SHOP"}
          desc={"Would you like to try a dish?"}
        />
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {salad &&
            salad.map((item) => (
              <PapularManuCard key={item._id} item={item} button={true} />
            ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {popular &&
              popular.map((item) => (
                <PapularManuCard key={item._id} item={item} button={true} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {offered &&
              offered.map((item) => (
                <PapularManuCard key={item._id} item={item} button={true} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {dessert &&
              dessert.map((item) => (
                <PapularManuCard key={item._id} item={item} button={true} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;

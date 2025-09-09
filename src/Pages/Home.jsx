import React, { useEffect, useState } from "react";
import ReactHelmet from "../Components/Layout/ReactHelmet";
import Banner from "../Components/Banner";
import CatagoryCard from "../Components/CatagoryCard";
import SectionHeading from "../Components/SectionHeading";
import PapularManuCard from "../Components/PapularManuCard";
import CoverBanner from "../Components/CoverBanner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import coverImg2 from "../assets/home/chef-service.jpg";
import coverImg1 from "../assets/home/banner.jpg";

import { Navigation } from "swiper/modules";

const Home = () => {
  const [papular, setPapular] = useState(null);
  const [salad, setSalad] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetch("Papular.json")
      .then((res) => res.json())
      .then((data) => {
        const papularData = data.filter(
          (items) => items.category === "popular"
        );
        setPapular(papularData);
      });
  }, []);

  useEffect(() => {
    fetch("Papular.json")
      .then((res) => res.json())
      .then((data) => {
        const saladData = data.filter((items) => items.category === "salad");
        setSalad(saladData);
      });
  }, []);

  useEffect(() => {
    fetch("revew.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  console.log(review);
  return (
    <section className="container mx-auto">
      <div>
        <Banner />
      </div>

      {/* catagory */}
      <div>
        <SectionHeading
          title="Our Categories"
          desc="Explore a variety of delicious dishes"
          time={"---From 11:00am to 10:00pm---"}
        />
        <CatagoryCard />
      </div>

      {/* papular manu */}
      <SectionHeading
        title="FROM OUR MENU"
        desc="Explore a variety of delicious dishes"
        time={"---Check it out---"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {papular &&
          papular.map((item) => <PapularManuCard key={item._id} item={item} />)}
      </div>

      {/* call us */}
      <div className="py-20 text-center bg-black text-white my-5">
        <h1 className="text-3xl">Call Us: +88 0192345678910</h1>
      </div>

      {/* cover banner */}
      <div>
        <CoverBanner
          img={coverImg1}
          title={"Bistro Boss"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero accusamus laborum deserunt ratione dolor officiis praesentium Deserunt magni aperiam dolor eius dolore at nihil iusto ducimus incidunt quibusdam nemo"
          }
        />
      </div>

      <div>
        <SectionHeading
          title="CHEF RECOMMENDS"
          desc="We would love to hear from you!"
          time={"---Should Try---"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {salad &&
            salad.map((item) => (
              <PapularManuCard key={item._id} item={item} button={true} />
            ))}
        </div>
      </div>

      {/* cover banner */}
      <div>
        <CoverBanner
          img={coverImg2}
          title={"Bistro Boss"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero accusamus laborum deserunt ratione dolor officiis praesentium Deserunt magni aperiam dolor eius dolore at nihil iusto ducimus incidunt quibusdam nemo"
          }
        />
      </div>

      {/* TESTIMONIALS */}

      <div>
        <SectionHeading
          title="TESTIMONIALS"
          desc="We would love to hear from you!"
          time={"---What Our Clients Say---"}
        />
        <div className=" ">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center border  my-10 h-[400px]">
            {review &&
              review.map((item) => (
                <SwiperSlide className="flex justify-center flex-col items-center px-10" key={item._id}>
                  <h1 className="mt-40">{item.name}</h1>
                  <p>{item.details}</p>
                  <p>Rating: {item.rating}</p>
                  <Rating className="mx-auto"
                    style={{ maxWidth: 250 }}
                    value={item.rating}
                    readOnly
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Home;

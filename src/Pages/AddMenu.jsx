import React from "react";
import SectionHeading from "../Components/SectionHeading";
import { useForm } from "react-hook-form"

const AddMenu = () => {

      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    const {name, prices, description,catagory}=data;

    console.log(name, prices,description,catagory)



  }

   
  return (
    <div>
      <SectionHeading
        title={"ADD AN ITEM"}
        desc={""}
        time={"---Whats new?---"}
      ></SectionHeading>
      <form onSubmit={handleSubmit(onSubmit)} action="" className="p-10 border-2">
        <label htmlFor="name">Recipe name*</label>
        <input 
         {...register("name")}
          className="block border-2 w-[90%]  p-4 text-base"
          type="text"
          name="name"
          placeholder="Name"
          id="name"
        />
        <div className="grid grid-cols-2">
          <div className="">
            <label htmlFor="catagroy">Category*</label>
            <select
             {...register("catagory")}
              className="block border-2 w-[90%]  p-4 text-base"
              name="catagory"
              id="catagory"
            >
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Soups">Soups</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Price*</label>
            <input
             {...register("prices")}
              className="block border-2 w-[90%]  p-4 text-base"
              type="text"
              placeholder="Prices"
              name="prices"
              id="prices"
            />
          </div>
        </div>
        <label htmlFor="" className="block py-4">Recipe Details*</label>
        <textarea  {...register("description")} name="description" className="border w-[90%] h-[300px] p-4" placeholder="description" id="description"></textarea>
        <input className="block" type="file" name="img" id="img" />
        <button type="submit" className="btn btn-secondary w-full my-4">Add Item</button>
      </form>
    </div>
  );
};

export default AddMenu;

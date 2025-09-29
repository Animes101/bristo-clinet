import SectionHeading from "../Components/SectionHeading";
import { useForm } from "react-hook-form";
import useaxiossPublic from "../hooks/useaxiossPublic";
import { axiosSecure } from '../hooks/useAxiosSecure';
import { useLocation, useParams } from "react-router-dom";

const img_hostin_api_key = import.meta.env.VITE_IMG_HOSTINT_API;
const img_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hostin_api_key}`;

const UpdateMenu = () => {

  const { id } = useParams(); // ✅ safer than useLocation
  const { axiosPublic } = useaxiossPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, prices, description, catagory, img } = data;

    // step-1: formData বানাও
    const formData = new FormData();
    formData.append("image", img[0]);

    // step-2: imgbb তে পাঠাও
    const res = await axiosPublic.post(img_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const imageUrl = res.data.data.display_url;

      const addMenu = {
        name,
        recipe: description,
        image: imageUrl,
        category: catagory.toLowerCase(),
        price: parseFloat(prices),
      };

      // step-3: backend এ পাঠাও
      const result = await axiosSecure.patch(`/menu/${id}`, addMenu);
      console.log(result.data);
    }
  };

  return (
    <div>
      <SectionHeading 
        title={"Update Menu"} 
        desc={""} 
        time={"---Update Now?---"} 
      />

      <form onSubmit={handleSubmit(onSubmit)} className="p-10 border-2">
        <label htmlFor="name">Recipe name*</label>
        <input
          {...register("name")}
          className="block border-2 w-[90%] p-4 text-base"
          type="text"
          placeholder="Name"
          id="name"
        />

        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="catagory">Category*</label>
            <select
              {...register("catagory")}
              className="block border-2 w-[90%] p-4 text-base"
              id="catagory"
            >
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Soups">Soups</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          <div>
            <label htmlFor="prices">Price*</label>
            <input
              {...register("prices")}
              className="block border-2 w-[90%] p-4 text-base"
              type="number"
              placeholder="Prices"
              id="prices"
            />
          </div>
        </div>

        <label className="block py-4">Recipe Details*</label>
        <textarea
          {...register("description")}
          className="border w-[90%] h-[300px] p-4"
          placeholder="description"
          id="description"
        ></textarea>

        <input 
          className="block" 
          type="file" 
          id="img" 
          {...register("img")} 
        />

        <button type="submit" className="btn btn-secondary w-full my-4">
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateMenu;

import SectionHeading from "../Components/SectionHeading";
import { useForm } from "react-hook-form"
import useaxiossPublic from "../hooks/useaxiossPublic";
import { axiosSecure } from '../hooks/useAxiosSecure';

const img_hostin_api_key = import.meta.env.VITE_IMG_HOSTINT_API;

const img_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hostin_api_key}`;


const UpdateMenu = () => {

      const {axiosPublic}=useaxiossPublic();

      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

   

  const onSubmit =async (data) => {

    const {name, prices, description,catagory,img}=data;

     // step-1: formData বানাও
  const formData = new FormData();
  formData.append("image", img[0]);

    // step-2: imgbb তে পাঠাও
    const res = await axiosPublic.post(img_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    if(res.data.success){

      const img =res.data.data.display_url;
      const addMenu={
        
       
        name,
        recipe:description,
         image:img,
         category: catagory.toLowerCase(),
         price:prices,
        
        
      }

      console.log(addMenu)
        // const result= await axiosSecure.post(`menu/update/${id}`, addMenu)

        // console.log(result.data)

    }

  
  }

  return (
    <div>

        <SectionHeading title={"Update Menu"}
        desc={""}
        time={"---Update Now?---"}>

        </SectionHeading>
       < form onSubmit={handleSubmit(onSubmit)} action="" className="p-10 border-2">
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
              <option value="Dessert">Dessert</option>
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
        <input className="block" type="file" name="img" id="img" {...register("img")}/>
        <button type="submit" className="btn btn-secondary w-full my-4">Add Item</button>
      </form>
    </div>
  )
}

export default UpdateMenu
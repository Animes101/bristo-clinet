import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";


const PapularManuCard = ({ item, button }) => {
  const { name, image,price, recipe } = item;

  const {user}=useContext(AuthContext);
  const axiosSecure=useAxiosSecure();


  const handleAddToCart=(item)=>{

    const userEmail=user?.email;
    const orderItem={name,image,price, email:userEmail, menuItemId:item._id};

    if(userEmail){

      axiosSecure.post('/carts', orderItem)
      .then(function (response) {
        console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      

    }else{
      return alert('please login')
    }
 

  }




  return (
    <div>
      <div className="card card-border bg-base-300 w-full p-7">
        <img src={image} alt=""  className="w-[200px]  rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"/>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="">{price}$</button>
          </div>
          {button&& <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to Card</button>}
        </div>
      </div>
    </div>
  );
};

export default PapularManuCard;

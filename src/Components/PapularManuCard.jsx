import React from "react";

const PapularManuCard = ({ item, button }) => {
  const { name, image,price, recipe } = item;

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
          {button&& <button className="btn btn-primary">Add to Card</button>}
        </div>
      </div>
    </div>
  );
};

export default PapularManuCard;

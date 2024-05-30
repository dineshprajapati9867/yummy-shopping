import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className=" font-bold lg:w-[280px] w-[75vw]  h-[40vh] lg:h-[330px]  mt-4 bg-white p-5 flex flex-col  rounded-2xl gap-4"
    >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="onoin Pizza"
            className=" lg:w-[100vw] w-[90vw]  h-[20vh]   hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
            onClick={() => {
              navigate(
                `/food/${id}/${name}/${price}/${desc}/${rating}/${encodeURIComponent(
                  img
                )}`
              );
            }}
          />
        </div>
        <div className="flex justify-between">
          <h2>{name.slice(0, 15)}... </h2>
          <p>₹ {price}</p>
        </div>
        <p>{desc.slice(0, 38)}....</p>
        <div className="flex justify-between">
          <span className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            {rating}
          </span>
   <button
            className="bg-green-400  lg:w-[8vw] w-[35vw] text-white font-bold hover:bg-green-600 text-sm p-2 rounded-lg "
            onClick={() => {
              dispatch(addToCart({ id, name, price, rating, qty: 1,img,desc }));
              handleToast(name);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;

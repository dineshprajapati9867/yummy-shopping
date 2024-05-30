import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa";
import CartSideBar from "../components/CartSideBar";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";
// import SideBarItemsCard from "../components/SideBarItemsCard";

const FoodDetails = () => {
  const { id, name, price, desc, rating, img } = useParams();
  const decodedImg = decodeURIComponent(img);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-around  gap-10 flex-col lg:flex-row  items-center">
        <div>
          <img
            src={decodedImg}
            alt={name}
            className="lg:w-[45vw] w-[80vw]  ml-4 lg:h-[60vh] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl px-5 font-bold">{name}</h1>
          <p className="lg:w-[40vw] px-5 text-2xl font-medium">{desc}</p>
          <span className="flex items-center px-5">
            <FaStar className="text-yellow-400 mr-1 " />
            {rating}
          </span>
          <span className="font-medium text-3xl px-5">₹ {price}</span>
          <button
            className="bg-green-400 w-[80vw] mx-5  text-white font-bold hover:bg-green-600 text-sm p-2 rounded-lg lg:w-[40vw]"
            onClick={() => {
              dispatch(
                addToCart({
                  id,
                  name,
                  price,
                  desc,
                  rating,
                  img: decodedImg,
                  qty: 1,
                })
              );
              toast.success(`${name} added to cart!`);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mb-10 ">
        {" "}
        <CartSideBar />
      </div>

  
    </>
  );
};

export default FoodDetails;

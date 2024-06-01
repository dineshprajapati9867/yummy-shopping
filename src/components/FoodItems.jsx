import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Date/FoodData.js";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const FoodItems = () => {
  const handleToast=(name)=>toast.success(` Added ${name}`)
  const category =useSelector((state)=>state.category.category)
  const search=useSelector((state)=>state.search.search)
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex  flex-wrap lg:gap-2 justify-start lg:ml-7 ml-8">
         {FoodData.filter((food)=>{
          if(category==="All"){
            return food.name.toLowerCase().includes(search.toLowerCase());
          }else{
            return category===food.category && food.name.toLowerCase().includes(search.toLowerCase())
          }
         }).map((food)=>{
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
         })
         } 

      </div>
    </>
  );
};

export default FoodItems;

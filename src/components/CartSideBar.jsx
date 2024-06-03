import React, { useState } from "react";
import SideBarItemsCard from "./SideBarItemsCard";
import { MdOutlineClose } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartSideBar = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`bg-gray-100 fixed right-0 top-0 h-full w-full lg:w-[20vw]
       ${activeCart ? "translate-x-full" : "translate-x-0"}
       transition-all duration-500`}
      >
        <div className="flex justify-between items-center p-6 mt-1 lg:mt-3 lg:p-4">
          <span className="text-xl font-bold">My Order</span>
          <MdOutlineClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="hover:text-white rounded-md hover:bg-red-700 text-3xl font-bold cursor-pointer"
          />
        </div>
        <div className="h-[calc(100%-160px)] overflow-y-scroll p-2">
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <SideBarItemsCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
                desc={food.desc}
                rating={food.rating}
              />
            ))
          ) : (
            <h1 className="text-xl font-bold text-center mt-4">
              Cart is empty
            </h1>
          )}
        </div>

        <div className="absolute bottom-3 bg-white px-4">
          <h2 className="font-bold my-1">Items: {totalQty}</h2>
          <h2 className="font-bold my-1">Total Amount: {totalPrice}</h2>
          <button
            className="px-3 py-2 w-[90vw] lg:w-[18vw] font-bold rounded-lg bg-green-400 text-white"
            onClick={() => {
              if (isAuth) {
                if (totalQty > 0) {
                  const itemNames = cartItems
                    .map((item) => item.name)
                    .join(", ");
                  navigate("/success");
                } else {
                  toast.error("Cart is empty!");
                }
              } else {
                navigate("/signup");
              }
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      <FaCartShopping
        onClick={() => setActiveCart(!activeCart)}
        className={`${
          activeCart
            ? "rounded-lg bg-white shadow-md text-5xl p-3 fixed bottom-6 lg:right-4 right-3"
            : "hidden"
        } ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
};

export default CartSideBar;

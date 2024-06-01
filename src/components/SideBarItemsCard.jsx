import { MdDelete } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";

const SideBarItemsCard = ({ id, name, price, img, qty, desc, rating }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="flex justify-evenly gap-1 mb-3 drop-shadow-md items-center mt-3 bg-gray-100 rounded-lg p-2">
        <img
          src={img}
          alt="pizza"
          className="lg:w-[50px] lg:h-[50px] w-[80px] h-[80px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          onClick={() => {
            navigate(
              `/food/${id}/${name}/${price}/${encodeURIComponent(
                desc
              )}/${rating}/${encodeURIComponent(img)}`
            );
          }}
        />
        <div>
          <h1 className="text-xl lg:text-xl font-bold">
            {name.slice(0, 9)}...
          </h1>
          <span className="text-green-500 font-bold">₹{price}</span>
        </div>
        <div className="flex flex-col items-end">
          <MdDelete
            onClick={() => {
              dispatch(removeFromCart({ id, img, name, price, qty }));
            }}
            className="cursor-pointer mb-2 text-3xl lg:text-xl hover:text-red-600"
          />
          <div className="flex gap-2 items-center">
            <IoMdAddCircleOutline
              onClick={() => {
                dispatch(incrementQty({ id }));
              }}
              className="cursor-pointer text-3xl lg:text-2xl hover:text-green-400"
            />
            <span>{qty}</span>
            <GrSubtractCircle
              onClick={() => {
                dispatch(decrementQty({ id }));
              }}
              className="cursor-pointer text-3xl lg:text-2xl hover:text-green-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarItemsCard;

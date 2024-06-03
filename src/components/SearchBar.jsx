import FoodData from "../Data/FoodData";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filterSearchData = FoodData.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="lg:absolute right-14 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="  p-3 border ml-16  border-gray-600 text-sm rounded-lg outline-none w-[55vw]  lg:w-[25vw] "
          type="search"
          name="search"
          placeholder="Search Here..."
          autoComplete="off"
        />
      </div>
      <div className="flex lg:justify-end  justify-center lg:mt-11 ">
        {search && (
          <div className="absolute overflow-scroll bg-gray-200 lg:w-96  lg:right-10  h-[25vh]  z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              filterSearchData.map((item, index) => (
                <div
                  key={index}
                  className="py-2 px-2 cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/food/${item.id}/${encodeURIComponent(item.name)}/${
                        item.price
                      }/${encodeURIComponent(item.desc)}/${
                        item.rating
                      }/${encodeURIComponent(item.img)}`
                    )
                  }
                >
                  <div className="flex items-center gap-2">
                    <img className="w-10" src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-end ">
                <img
                  className="w-20  "
                  src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                  alt="No results"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;

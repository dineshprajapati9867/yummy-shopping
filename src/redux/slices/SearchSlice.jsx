import { createSlice } from "@reduxjs/toolkit";  

 const SearchSice=createSlice({
    name:"search",
    initialState:{
        search:""
    },
    reducers:{
        setSearch:(state,action)=>{
          state.search=action.payload
        }
    }
 })

 export const {setSearch}=SearchSice.actions;
 export default SearchSice.reducer
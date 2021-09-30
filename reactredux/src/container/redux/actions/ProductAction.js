import { ActionType } from "../constants/Action-type";

export const setProducts=(products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products,
    };
};

export const selectProduct=(products)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:products, 
    };
};
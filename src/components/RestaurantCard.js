import React from "react";
import { CDN_IMAGE_URL } from "../constant/constant";

const RestaurantCard = ({ resData }) => {
    return (
        <div className="m-4 p-4 w-[250px] h-[400px] bg-gray-100 hover:bg-gray-200 rounded-lg">
            <img className="w-[250px] h-[150px] rounded-md"
            alt="res-logo"
            src={CDN_IMAGE_URL +
                resData?.info?.cloudinaryImageId}></img>
            <h4 className="font-bold py-4" >{resData?.info?.name}</h4>
            <h5>{resData?.info?.cuisines.join(', ')}</h5>
            <h5>{resData?.info?.avgRating} stars</h5>
            <h5>{resData?.info?.costForTwo}</h5>
            <h5>{resData?.info?.sla?.deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;
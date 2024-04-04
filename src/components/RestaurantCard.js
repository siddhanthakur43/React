import React from "react";
import { CDN_IMAGE_URL } from "../constant/constant";

const RestaurantCard = ({ resData }) => {

    return <div className="res-card" style={{
        backgroundColor: "#f0f0f0"
    }}>
        <img className="res-logo"
        alt="res-logo" 
        src={ CDN_IMAGE_URL+ 
        resData?.info?.cloudinaryImageId}></img>
        <h4 >{resData?.info?.name}</h4>
        <h5>{resData?.info?.cuisines.join(', ')}</h5>
        <h5>{resData?.info?.avgRating} stars</h5>
        <h5>{resData?.info?.costForTwo}</h5>
        <h5>{resData?.info?.sla?.deliveryTime} minutes</h5>
    </div>
}

export default RestaurantCard;
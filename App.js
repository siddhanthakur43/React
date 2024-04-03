import React from "react";
import ReactDOM from "react-dom/client";


const RestaurantCard = ({resData}) => {

    return <div className="res-card" style={{
        backgroundColor: "#f0f0f0"
    }}>
        <img className="res-logo"
        alt="res-logo" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        resData?.info?.cloudinaryImageId}></img>
        <h4 >{resData?.info?.name}</h4>
        <h5>{resData?.info?.cuisines.join(', ')}</h5>
        <h5>{resData?.info?.avgRating} stars</h5>
        <h5>{resData?.info?.costForTwo}</h5>
        <h5>{resData?.info?.sla?.deliveryTime} minutes</h5>
    </div>
}


const resList = [
        {
        info: {
        id: "755276",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
        locality: "Coles Road",
        areaName: "Frazer Town",
        costForTwo: "₹250 for two",
        cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        avgRating: 4.2,
        parentId: "4961",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        sla: {
        deliveryTime: 34,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2024-04-02 02:00:00",
        opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {}
        }
        },
        orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {}
        }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        },
        analytics: {
        context: "seo-data-1350cda6-4c53-4ce9-a796-3c70af169c14"
        },
        cta: {
        link: "http://www.swiggy.com/restaurants/la-pinoz-pizza-coles-road-frazer-town-bangalore-755276",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "23846",
        name: "Domino's Pizza",
        cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
        locality: "Rehinus Street",
        areaName: "Richmond Town",
        costForTwo: "₹400 for two",
        cuisines: [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        avgRating: 4.4,
        parentId: "2456",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2024-04-02 02:59:00",
        opened: true
        },
        badges: {
        imageBadges: [
        {
        imageId: "Rxawards/_CATEGORY-Pizza.png",
        description: "Delivery!"
        }
        ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: {
        badgeObject: [
        {
        attributes: {
        description: "Delivery!",
        imageId: "Rxawards/_CATEGORY-Pizza.png"
        }
        }
        ]
        },
        textBased: {},
        textExtendedBadges: {}
        }
        },
        aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75"
        },
        orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {}
        }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        },
        analytics: {
        context: "seo-data-1350cda6-4c53-4ce9-a796-3c70af169c14"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "9209",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Mosque Road",
        areaName: "Frazer Town",
        costForTwo: "₹250 for two",
        cuisines: [
        "Desserts"
        ],
        avgRating: 4.7,
        veg: true,
        parentId: "5588",
        avgRatingString: "4.7",
        totalRatingsString: "5K+",
        sla: {
        deliveryTime: 28,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2024-04-02 00:45:00",
        opened: true
        },
        badges: {
        imageBadges: [
        {
        imageId: "v1695133679/badges/Pure_Veg111.png",
        description: "pureveg"
        }
        ],
        textExtendedBadges: [
        {
        iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
        shortDescription: "Perfect Cake Delivery",
        fontColor: "#7E808C"
        }
        ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: {
        badgeObject: [
        {
        attributes: {
        description: "pureveg",
        imageId: "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        textBased: {},
        textExtendedBadges: {
        badgeObject: [
        {
        attributes: {
        description: "",
        fontColor: "#7E808C",
        iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
        shortDescription: "Perfect Cake Delivery"
        }
        }
        ]
        }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
        },
        orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lotti: {},
        video: {}
        }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        },
        analytics: {
        context: "seo-data-1350cda6-4c53-4ce9-a796-3c70af169c14"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-mosque-road-frazer-town-bangalore-9209",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
        id: "755276",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
        locality: "Coles Road",
        areaName: "Frazer Town",
        costForTwo: "₹250 for two",
        cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        avgRating: 4.2,
        parentId: "4961",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        sla: {
        deliveryTime: 34,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2024-04-02 02:00:00",
        opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {}
        }
        },
        orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {}
        }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        },
        analytics: {
        context: "seo-data-1350cda6-4c53-4ce9-a796-3c70af169c14"
        },
        cta: {
        link: "http://www.swiggy.com/restaurants/la-pinoz-pizza-coles-road-frazer-town-bangalore-755276",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "23846",
        name: "Domino's Pizza",
        cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
        locality: "Rehinus Street",
        areaName: "Richmond Town",
        costForTwo: "₹400 for two",
        cuisines: [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        avgRating: 4.4,
        parentId: "2456",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2024-04-02 02:59:00",
        opened: true
        },
        badges: {
        imageBadges: [
        {
        imageId: "Rxawards/_CATEGORY-Pizza.png",
        description: "Delivery!"
        }
        ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: {
        badgeObject: [
        {
        attributes: {
        description: "Delivery!",
        imageId: "Rxawards/_CATEGORY-Pizza.png"
        }
        }
        ]
        },
        textBased: {},
        textExtendedBadges: {}
        }
        },
        aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75"
        },
        orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {}
        }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        },
        analytics: {
        context: "seo-data-1350cda6-4c53-4ce9-a796-3c70af169c14"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        info: {
        id: "9209",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Mosque Road",
        areaName: "Frazer Town",
        costForTwo: "₹250 for two",
        cuisines: [
        "Desserts"
        ],
        avgRating: 4.7,
        veg: true,
        parentId: "5588",
        avgRatingString: "4.7",
        totalRatingsString: "5K+",
        sla: {
        deliveryTime: 28,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2024-04-02 00:45:00",
        opened: true
        },
        badges: {
        imageBadges: [
        {
        imageId: "v1695133679/badges/Pure_Veg111.png",
        description: "pureveg"
        }
        ],
        textExtendedBadges: [
        {
        iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
        shortDescription: "Perfect Cake Delivery",
        fontColor: "#7E808C"
        }
        ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: {
        badgeObject: [
        {
        attributes: {
        description: "pureveg",
        imageId: "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        textBased: {},
        textExtendedBadges: {
        badgeObject: [
        {
        attributes: {
        description: "",
        fontColor: "#7E808C",
        iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
        shortDescription: "Perfect Cake Delivery"
        }
        }
        ]
        }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
        },
        orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lotti: {},
        video: {}
        }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        },
        analytics: {
        context: "seo-data-1350cda6-4c53-4ce9-a796-3c70af169c14"
        },
        cta: {
        link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-mosque-road-frazer-town-bangalore-9209",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
]


const Body = () => {
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
                resList.map((restaurant, index) => <RestaurantCard key={index} resData={restaurant}/>)
            }

        </div>
    </div>
}

const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
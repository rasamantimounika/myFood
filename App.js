import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        />
        <div className="nav-items">
          <ul>
            <li> Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvhR0jQZHNyf2L75fj-Ees3WgxLVFee5gcw&s"
        />
        <h1>{data.card.card.info.name}</h1>
        <h4>{data.card.card.info.cloudinaryImageId}</h4>
        <h4>{data.card.card.info.avgRating}</h4>
        <h4>{data.card.card.info.sla.slaString}</h4>
      </div>
    </>
  );
};

const data = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "428",
        name: "Biryani Pot ",
        cloudinaryImageId: "o5x0ovrs7pu30dz9hidl",
        locality: "BTM Layout",
        areaName: "BTM Layout",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani"],
        avgRating: 4.2,
        parentId: "21798",
        avgRatingString: "4.2",
        totalRatingsString: "45K+",
        promoted: true,
        adTrackingId:
          "cid=21555491~p=1~adgrpid=21555491#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=428~eid=14c01c0f-9a18-4301-82c4-d866fb0b857f~srvts=1732007026082~collid=83639",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-11-20 03:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                  },
                },
              ],
            },
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.5",
            ratingCount: "531",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "21555491",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=428&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
};

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard resData={data} />
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

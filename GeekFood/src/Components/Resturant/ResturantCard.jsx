import React from "react";
import Resturant from "./Resturant";

const ResturantCard = (props) => {
   
  return (

    <>
        <div className="card">
            <div className="headStar">
                <h1>
                    {props.name}
                </h1>
                <span>
                {
                        [...new Array(5)].map((item, index) => {
                            return <i
                                key={"start_icon_"+index}
                                className={
                                    `fa-${parseInt(props.rating) >= index + 1 ? "solid" : "regular"
                                    } fa-star`
                                }
                            ></i>
                        })
                    }
                </span>

            </div>
            <div className="address">
                <h4>
                    <i className="fas fa-location-dot"></i>
                    {props.address}
                </h4>
                <p>
                    {props.address_line_2}
                </p>
            </div>
            <div className="codeOut">
                   <p>
                   {props.outcode}
                   </p>
                    <p>
                    {props.postcode}
                    </p>
            </div>
            <div className="cardBottom">
                <p>
                    {props.type_of_food}
                </p>
                <a href={props.URL}>
                  Visit  Menu
                </a>
            </div>
         </div>
    </>
  );
};

export default ResturantCard;

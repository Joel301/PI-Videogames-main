import "./videoGameCard.css";
import React from "react";
import { NavLink } from "react-router-dom";

function VideoGameCard({ props }) {
    return (
        <NavLink to={`/home/${props.ID}`} key={`linkTo_ ${props.ID}`}>
            <div className="VideoGameCard" key={props.ID}>
                <div
                    className="cardTitle"
                    href={`/home/${props.ID}`}
                    key={`cardTitle_${props.ID}`}
                >
                    {props.name}
                </div>
                <img
                    className="CardImg"
                    src={props.background_image}
                    alt=""
                    key={`CardImg_${props.ID}`}
                />
                <div key={`card_${props.ID}`}>
                    <p className="RatingImage">{" " + props.rating}</p>
                    <div className="GenreList">
                        {props.genres.map((gen) => (
                            <div
                                className="GenreItem"
                                key={`${props.name}_${gen.Nombre}`}
                            >{` ${gen.Nombre} `}</div>
                        ))}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default VideoGameCard;

import "./videoGameCard.css";
import React from "react";
import { NavLink } from "react-router-dom";

function VideoGameCard({ props }) {
    return (
        <NavLink to={`/home/${props.ID}`} key={`linkTo_ ${props.ID}`}>
            <div className="VideoGameCard" key={props.ID}>
                <a className="cardTitle" href={`/home/${props.ID}`}>
                    {props.name}
                </a>
                <img
                    className="CardImg"
                    src={props.background_image}
                    alt=""
                    srcset=""
                />
                <div>
                    <p className="RatingImage">{" " + props.rating}</p>
                    <p className="GenreList">
                        {props.genres.map((gen) => (
                            <div className="GenreItem">
                                {` ${gen.Nombre} `}
                            </div>
                        ))}
                    </p>
                </div>
            </div>
        </NavLink>
    );
}

export default VideoGameCard;

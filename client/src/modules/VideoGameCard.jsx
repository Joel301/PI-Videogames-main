import "./videoGameCard.css";
import React from "react";

function VideoGameCard({ props }) {
    return (
        <div className="VideoGameCardContainer" key={props.ID}>
            <img
                className="CardImg"
                src={props.background_image}
                alt=""
                srcset=""
            />
            <div>
                <a href={`/home/${props.ID}`}>{props.name}</a>
                <p>{" " + props.rating}</p>
            </div>
        </div>
    );
}

export default VideoGameCard;

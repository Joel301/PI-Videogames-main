import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../redux/actions";

function CardDetail(props) {
    const { ID } = useParams();
    const dispatch = useDispatch();
    const { GameDetail } = useSelector((state) => state);

    useState(() => {
        getGameDetail(ID).then((r) => dispatch(r));
    }, []);

    return (
        <div>
            <a href="/home">back</a>
            <h1>{GameDetail.name}</h1>
            {/* {GameDetail.genres} */}
            {/* {GameDetail.plataform} */}
            <div>{GameDetail.rating}</div>
            <div>{GameDetail.released}</div>
            {GameDetail.description}
            <img src={GameDetail.background_image} alt="" srcset="" />
        </div>
    );
}

export default CardDetail;

import "./CardDetail.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getGameDetail } from "../redux/actions";

function CardDetail(props) {
    // let history = useHistory();
    const { ID } = useParams();
    const dispatch = useDispatch();
    const { GameDetail } = useSelector((state) => state);

    useState(() => {
        getGameDetail(ID).then((r) => dispatch(r));
    }, []);

    return (
        <div className="cardDetailContainer">
            <div className="imgContainer">
                <img
                    className="detailImg"
                    src={GameDetail.background_image}
                    alt={GameDetail.name}
                />
            </div>
            <div className="detailContainer">
                {/* <input type="button" onClick={}/> */}
                {/* <NavLink to={history.goBack}>Back</NavLink> */}
                <NavLink to="/home">Back</NavLink>
                <h1>{GameDetail.name}</h1>
                {/* {GameDetail.genres} */}
                <div className="plataform">
                    {GameDetail.plataform ? GameDetail.plataform : ""}
                </div>
                {console.log(GameDetail.plataform)}
                <div>{GameDetail.rating}</div>
                <div>{GameDetail.released}</div>
                <div
                    // className={styles.detailDescripcion}
                    dangerouslySetInnerHTML={{
                        __html: GameDetail.description,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default CardDetail;

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
        <div>
            {/* <input type="button" onClick={}/> */}
            {/* <NavLink to={history.goBack}>Back</NavLink> */}
            <NavLink to="/home">Back</NavLink>
            <h1>{GameDetail.name}</h1>
            {/* {GameDetail.genres} */}
            {GameDetail.plataform ? GameDetail.plataform : ""}
            {console.log(GameDetail.plataform)}
            <div>{GameDetail.rating}</div>
            <div>{GameDetail.released}</div>
            <div
                // className={styles.detailDescripcion}
                dangerouslySetInnerHTML={{
                    __html: GameDetail.description,
                }}
            ></div>
            <img src={GameDetail.background_image} alt={GameDetail.name} />
        </div>
    );
}

export default CardDetail;

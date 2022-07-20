import React from "react";
import { useParams } from "react-router-dom";

function CardDetail(props) {
    const { ID } = useParams();
    return <div>{ID}</div>;
}

export default CardDetail;

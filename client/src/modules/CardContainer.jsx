import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVideoGameList } from "../redux/actions";
import SearchBar from "./SearchBar";
import VideoGameCard from "./VideoGameCard";

function CardContainer(props) {
    const dispatch = useDispatch();
    const { VideoGameList } = useSelector((state) => state);

    useEffect(() => {
        updateVideoGameList().then((r) => dispatch(r));
    }, []);

    return (
        <div>
            <SearchBar />
            {VideoGameList.map((game) => (
                <VideoGameCard props={game} />
            ))}
        </div>
    );
}

export default CardContainer;

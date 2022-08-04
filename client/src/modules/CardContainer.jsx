import "./CardContainer.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterList, refresList, updateVideoGameList } from "../redux/actions";
// import { order } from "../redux/reducer";
import PageViewer from "./PageViewer";
import SearchBar from "./SearchBar/index";
import VideoGameCard from "./VideoGameCard";

const PAGESIZE = 15;

function CardContainer(props) {
    const dispatch = useDispatch();
    const { VideoGameList, currentPage, search, ListFiltered, orderBy } =
        useSelector((state) => state);

    useEffect(() => {
        if (VideoGameList.length === 0) {
            console.log(`${VideoGameList.length}llamado a la api`);
            updateVideoGameList().then((r) => dispatch(r));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const dothesearch = setTimeout(
            () => filterList(search).then((r) => dispatch(r)),
            1000
        );
        return () => clearTimeout(dothesearch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        dispatch(refresList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderBy]);
    return (
        <div className="VideoGameCardContainer">
            <a href="/newgame">newgame</a>
            <SearchBar />
            <div className="VideGameCardDeck" key="VideGameCardDeck">
                {[ListFiltered.length === 0 ? VideoGameList : ListFiltered][0]
                    .slice(currentPage * PAGESIZE, (currentPage + 1) * PAGESIZE)
                    .map((game) => (
                        <VideoGameCard props={game} />
                    ))}
            </div>
            {ListFiltered.length !== 0 ? (
                ""
            ) : (
                <PageViewer
                    PAGESIZE={Math.floor(VideoGameList.length / PAGESIZE)}
                />
            )}
        </div>
    );
}

export default CardContainer;

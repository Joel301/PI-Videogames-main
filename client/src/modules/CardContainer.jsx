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
    const {
        VideoGameList,
        currentPage,
        search,
        ListFiltered,
        orderBy,
        filters,
    } = useSelector((state) => state);
    const { origin, genre } = filters;
    useEffect(() => {
        if (VideoGameList.length === 0) {
            console.log(`${VideoGameList.length}llamado a la api`);
            updateVideoGameList().then((r) => {
                // console.log(r, `llamado a la api_`);
                return dispatch(r);
            });
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
    }, [orderBy, genre, origin]);
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
            {console.log(search !== "" || ListFiltered.length <= PAGESIZE)}
            {console.log(
                ListFiltered.length <= PAGESIZE && ListFiltered.length != 0
            )}
            {console.log(search !== "")}
            {search !== "" ||
            (ListFiltered.length <= PAGESIZE && ListFiltered.length != 0) ? (
                ""
            ) : (
                <PageViewer
                    PAGESIZE={Math.ceil(
                        ListFiltered.length === 0
                            ? VideoGameList.length / PAGESIZE
                            : ListFiltered.length / PAGESIZE
                    )}
                />
            )}
        </div>
    );
}

export default CardContainer;

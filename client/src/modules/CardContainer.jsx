import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterList, refresList, updateVideoGameList } from "../redux/actions";
import { order } from "../redux/reducer";
import PageViewer from "./PageViewer";
import SearchBar from "./SearchBar";
import VideoGameCard from "./VideoGameCard";

const PAGESIZE = 15;

function CardContainer(props) {
    const dispatch = useDispatch();
    const { VideoGameList, currentPage, search, ListFiltered, orderBy } =
        useSelector((state) => state);

    useEffect(() => {
        updateVideoGameList().then((r) => dispatch(r));
    }, []);

    useEffect(() => {
        const dothesearch = setTimeout(
            () => filterList(search).then((r) => dispatch(r)),
            1000
        );
        return () => clearTimeout(dothesearch);
    }, [search]);

    useEffect(() => {
        dispatch(refresList());
    }, [orderBy]);
    // useEffect(() => {
    //     var searchCopy = search.split()[0];
    //     return setTimeout(() => {
    //         if (searchCopy != search) {
    //             console.log(search, searchCopy, "this is an exit");
    //         } else {
    //             console.log(search, searchCopy, "this is an entering");
    //             filterList(search).then((r) => dispatch(r));
    //         }
    //     }, 5000);
    // }, [search]);
    return (
        <div>
            <SearchBar />
            {ListFiltered.length != 0 ? (
                ""
            ) : (
                <PageViewer
                    PAGESIZE={Math.floor(VideoGameList.length / PAGESIZE)}
                />
            )}
            {[ListFiltered.length == 0 ? VideoGameList : ListFiltered][0]
                .slice(currentPage * PAGESIZE, (currentPage + 1) * PAGESIZE)
                .map((game) => (
                    <VideoGameCard props={game} />
                ))}
        </div>
    );
}

export default CardContainer;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../redux/actions";

function PageViewer({ PAGESIZE }) {
    const { VideoGameList, currentPage } = useSelector((state) => state);
    const dispatch = useDispatch();

    if (VideoGameList.length == 0) {
        return <div></div>;
    }
    return (
        <div>
            {[...Array(PAGESIZE).keys()].map((page) => {
                return (
                    <div key={`pagenum${page}`}>
                        <a href="#" onClick={() => dispatch(updatePage(page))}>
                            {String(page)}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}
/* (page)=>{return <div key={`pageNum${page}`}>{String(page)}<div/>} */

export default PageViewer;

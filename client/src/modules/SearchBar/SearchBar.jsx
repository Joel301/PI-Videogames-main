import "./SearchBar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder, updateSearch } from "../../redux/actions";
import OrderSelector from "./OrderSelector";

function SearchBar(props) {
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const changeSearch = (e) => {
        dispatch(updateSearch(e.target.value));
    };
    return (
        <div className="searchBarContainer" key="searchBarContainer">
            <div className="search" key={"inputSearch"}>
                <label>Nombre: </label>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        changeSearch(e);
                    }}
                />
            </div>
            <OrderSelector />
        </div>
    );
}

export default SearchBar;

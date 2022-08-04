import "./SearchBar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { changeOrder } from "../../redux/actions";
import { updateSearch } from "../../redux/actions";
import OrderSelector from "./OrderSelector";
import FilterMenu from "./FilterMenu";

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
            <FilterMenu />
        </div>
    );
}

export default SearchBar;

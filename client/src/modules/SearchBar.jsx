import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../redux/actions";

function SearchBar(props) {
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const changeSearch = (e) => {
        dispatch(updateSearch(e.target.value));
    };
    return (
        <div className="searchBarContainer">
            <div className="search">
                <label>Nombre: </label>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        changeSearch(e);
                    }}
                />
            </div>
            {/* <CountrySelector />
            <OrderSelector /> */}
        </div>
    );
}

export default SearchBar;

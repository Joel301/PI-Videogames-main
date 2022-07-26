import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder, updateSearch } from "../redux/actions";
import { order } from "../redux/reducer";

function OrderSelector() {
    const dispatch = useDispatch();
    const { orderBy } = useSelector((state) => state);

    function updateOption(e) {
        dispatch(changeOrder(e.target.value));
    }
    return (
        <div>
            <input
                type={"radio"}
                value={order.NOMBREASC}
                key={order.NOMBREASC}
                checked={orderBy === order.NOMBREASC}
                onChange={(e) => {
                    updateOption(e);
                }}
            ></input>
            <label htmlFor="">NOMBREASC</label>
            <input
                type={"radio"}
                value={order.NOMBREDESC}
                key={order.NOMBREDESC}
                checked={orderBy === order.NOMBREDESC}
                onChange={(e) => {
                    updateOption(e);
                }}
            ></input>
            <label htmlFor="">NOMBREDESC</label>
            <input
                type={"radio"}
                value={order.RATINGASC}
                key={order.RATINGASC}
                checked={orderBy === order.RATINGASC}
                onChange={(e) => {
                    updateOption(e);
                }}
            ></input>
            <label htmlFor="">RATINGASC</label>
            <input
                type={"radio"}
                value={order.RATINGDESC}
                key={order.RATINGDESC}
                checked={orderBy === order.RATINGDESC}
                onChange={(e) => {
                    updateOption(e);
                }}
            ></input>
            <label htmlFor="">RATINGDESC</label>
        </div>
    );
}

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
            {/* <CountrySelector />*/}
            <OrderSelector />
        </div>
    );
}

export default SearchBar;

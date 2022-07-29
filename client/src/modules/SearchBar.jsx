import "./SearchBar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder, updateSearch } from "../redux/actions";
import { order } from "../redux/reducer";

function OrderItem({ value, currentSelected, text }) {
    const dispatch = useDispatch();
    function updateOption(e) {
        dispatch(changeOrder(e.target.value));
    }
    return (
        <div className="orderItem">
            <input
                type={"radio"}
                value={value}
                key={`Order_${value}`}
                id={`Order_${value}`}
                checked={currentSelected === value}
                onChange={(e) => {
                    updateOption(e);
                }}
            ></input>
            <label htmlFor="">{text}</label>
        </div>
    );
}

function OrderSelector() {
    const { orderBy } = useSelector((state) => state);

    return (
        <div className="OrderContainer">
            {[
                {
                    value: order.NOMBREASC,
                    currentSelected: orderBy,
                    text: "A-Z Nombre",
                },
                {
                    value: order.NOMBREDESC,
                    currentSelected: orderBy,
                    text: "Z-A Nombre",
                },
                {
                    value: order.RATINGDESC,
                    currentSelected: orderBy,
                    text: "Mejor Rating",
                },
                {
                    value: order.RATINGASC,
                    currentSelected: orderBy,
                    text: "Peor Rating",
                },
            ].map((object) => OrderItem(object))}
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

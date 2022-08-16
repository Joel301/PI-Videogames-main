import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterGenre } from "../../redux/actions";

function FilterGenre(props) {
    const URLAPI = "http://localhost:3001";
    const dispatch = useDispatch();
    const { filters } = useSelector((state) => state);
    const [genreList, setGenreList] = useState([
        { ID: "N/A", Nombre: "No filter" },
    ]);

    useEffect(() => {
        console.log(genreList);
        fetch(`${URLAPI}/genres`)
            .then((r) => r.json())
            .then((r) => setGenreList([...genreList, ...r]));
    }, []);

    const onOptionChange = (e) => {
        // console.log(e.target.value, genreList);
        const value = e.target.value;
        console.log(value, value == "N/A");
        if (value == "N/A") {
            dispatch(changeFilterGenre(""));
        } else {
            dispatch(changeFilterGenre(value));
        }
    };

    return (
        <div>
            <select
                name=""
                id=""
                value={filters.genre}
                onChange={(e) => {
                    onOptionChange(e);
                }}
            >
                {genreList
                    ? genreList.map((l) => (
                          <option
                              value={l.ID}
                              key={`${l.ID}_${l.Nombre}`}
                          >{`${l.Nombre}`}</option>
                      ))
                    : ""}
            </select>
        </div>
    );
}

export default FilterGenre;

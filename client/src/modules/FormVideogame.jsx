import React, { useState } from "react";
import { useEffect } from "react";

async function genresList() {
    const URLAPI = "http://localhost:3001/genres";
    const response = await fetch(URLAPI);
    const payload = await response.json();
    return payload;
}

function FormVideogame(props) {
    const [game, setGame] = useState({ name: "" });
    const [genres, setGenres] = useState({});

    // var GENRES = [];
    // genresList().then((list) => {
    //     GENRES = list;
    // });
    const handleOnchangeName = (e) => {
        const text = e.target.value.replace(/[^a-zA-Z0-9_\s]/, ""); //only takes alphanumerical and spaces
        setGame({ ...game, name: text });
        console.log(game);
    };
    const handleOnchangeDesc = (e) => {
        const text = e.target.value.replace(/[^a-zA-Z0-9_\s]/, ""); //only takes alphanumerical and spaces
        setGame({ ...game, description: text });
        console.log(game);
    };
    const handleOnchangeDate = (e) => {
        const date = e.target.value; //.replace(/[^a-zA-Z0-9_\s]/, ""); //only takes alphanumerical and spaces
        setGame({ ...game, releaseDate: date });
        console.log(game);
    };
    const handleOnchangeRating = (e) => {
        const raging = e.target.value; //.replace(/[^a-zA-Z0-9_\s]/, ""); //only takes alphanumerical and spaces
        setGame({ ...game, rating: raging });
        console.log(game);
    };
    // ID
    // name*
    // description*
    // releaseDate
    // rating
    // platforms
    useEffect(() => {
        genresList().then((r) => {
            setGenres(r);
        });
        console.log(genres);
    }, []);
    // useEffect(() => {}, [GENRES]);
    return (
        <form>
            <a href="/home">back</a>
            <br /> <label htmlFor="">Nombre</label>{" "}
            <input type="text" onChange={(e) => handleOnchangeName(e)} />
            <br /> <label htmlFor="">Descripción</label>{" "}
            <input type="text" onChange={(e) => handleOnchangeDesc(e)} />
            <br /> <label htmlFor="">Lanzamiento</label>{" "}
            <input
                type="date"
                value={game.releaseDate ? game.releaseDate : ""}
                onChange={(e) => handleOnchangeDate(e)}
            />
            <br /> <label htmlFor="">Rating</label>{" "}
            <input
                type="range"
                value={game.rating ? game.rating : 0}
                max={5}
                min={0}
                step={0.1}
                onChange={(e) => handleOnchangeRating(e)}
            />
            {console.log(genres)}
            <div>
                Generos:
                {Object.keys(genres).map((id) => (
                    <div>
                        <input type={"checkbox"} />
                        <label htmlFor="">{genres[id].Nombre}</label>
                    </div>
                ))}
            </div>
        </form>
    );
}

export default FormVideogame;

import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const URLAPI = "http://localhost:3001/";

async function genresList() {
    const response = await fetch(`${URLAPI}genres`);
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
    };
    const handleOnchangePlataforms = (e) => {
        const plataforms = e.target.value.replace(/[^a-zA-Z0-9_\s]/, ""); //only takes alphanumerical and spaces
        setGame({ ...game, plataforms });
    };
    // ID
    // name*
    // description*
    // releaseDate
    // rating
    // platforms

    const changeGenre = (e) => {
        const idGenre = Number(e.target.value);
        if (!game.genres) {
            setGame({ ...game, genres: [idGenre] });

            return;
        }
        if (!game.genres.includes(idGenre)) {
            setGame({
                ...game,
                genres: [...game.genres, idGenre],
            });
        } else {
            setGame({
                ...game,
                genres: game.genres.filter((element) => element !== idGenre),
            });
        }
    };

    useEffect(() => {
        genresList().then((r) => {
            setGenres(r);
        });
        console.log(genres);
    }, [genres]);
    const submit = (e) => {
        e.preventDefault();
        fetch(`${URLAPI}videogames`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ ...game }),
        }).catch();
        console.log(game);
    };
    // useEffect(() => {}, [GENRES]);
    return (
        <form onSubmit={(e) => submit(e)}>
            <NavLink to="/home">Back</NavLink>
            <input type="submit" value="Guardar" />
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
            <br />
            <label htmlFor="">Plataforms: </label>
            <input
                type="text"
                name=""
                id=""
                onChange={(e) => handleOnchangePlataforms(e)}
            />
            <div>
                Generos:
                {Object.keys(genres).map((id) => (
                    <div key={`genreContainer_${genres[id].ID}`}>
                        <input
                            value={genres[id].ID}
                            type={"checkbox"}
                            checked={
                                !!game.genres &&
                                game.genres.indexOf(Number(genres[id].ID)) !==
                                    -1
                            }
                            onChange={(e) => {
                                changeGenre(e);
                            }}
                        />
                        <label htmlFor="">{genres[id].Nombre}</label>
                    </div>
                ))}
            </div>
        </form>
    );
}

export default FormVideogame;

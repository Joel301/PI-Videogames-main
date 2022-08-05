import "./FormVideogame.css";
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
    const [error, setError] = useState("");

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const submit = (e) => {
        e.preventDefault();
        fetch(`${URLAPI}videogames`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ ...game }),
        })
            .then((res) => {
                console.log(res);
                if (res.status === 400) {
                    res.json().then((e) => {
                        console.log(e);
                        setError(e.msg);
                    });
                } else {
                    setError("");
                }
            })
            .catch((e) => {
                console.log(e);
            });
        console.log(game);
    };
    // useEffect(() => {}, [GENRES]);
    return (
        <form onSubmit={(e) => submit(e)} className="frmVideoGames">
            <NavLink to="/home">Back</NavLink>
            <h2>AGREGA UN VIDEOJUEGO</h2>
            <label>
                Nombre
                <input type="text" onChange={(e) => handleOnchangeName(e)} />
            </label>
            <label>
                Descripción
                <input type="text" onChange={(e) => handleOnchangeDesc(e)} />
            </label>
            <label>
                Lanzamiento
                <input
                    type="date"
                    value={game.releaseDate ? game.releaseDate : ""}
                    onChange={(e) => handleOnchangeDate(e)}
                />
            </label>
            <label htmlFor="">
                Rating
                <input
                    type="range"
                    value={game.rating ? game.rating : 0}
                    max={5}
                    min={0}
                    step={0.1}
                    onChange={(e) => handleOnchangeRating(e)}
                />
            </label>
            <label>
                Plataforms:
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => handleOnchangePlataforms(e)}
                />
            </label>
            Generos:
            <div className="generesContainer">
                {Object.keys(genres).map((id) => (
                    <div className="genCheckContainer" key={`genreContainer_${genres[id].ID}`}>
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
            <div>{error}</div>
            <input type="submit" value="Guardar" />
        </form>
    );
}

export default FormVideogame;

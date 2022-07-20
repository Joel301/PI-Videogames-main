import React from "react";

function StartPage(props) {
    return (
        <div className="startpage">
            <a className="toHome" href="/home">
                Inicio
            </a>
            <div>
                <img
                    src={`${process.env.PUBLIC_URL}/GameCube-Set.jpg`}
                    alt=""
                />
            </div>
        </div>
    );
}

export default StartPage;

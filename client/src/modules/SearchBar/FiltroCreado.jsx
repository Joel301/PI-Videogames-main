import React from "react";

function FiltroCreado(props) {
    return (
        <div>
            <label>
                <input type="checkbox" name="checkboxCreadoPorUsuario" />
                User created
            </label>
            <label>
                <input type="checkbox" name="checkboxDeApi" />
                No user created
            </label>
        </div>
    );
}

export default FiltroCreado;

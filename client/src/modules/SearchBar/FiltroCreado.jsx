import React from "react";

function FiltroCreado(props) {
    return (
        <div>
            <label>
                <input type="checkbox" name="checkboxCreadoPorUsuario" id="" />
                Creado por Usuario
            </label>
            <label>
                <input type="checkbox" name="checkboxDeApi" id="" />
                No creado por Usuario
            </label>
        </div>
    );
}

export default FiltroCreado;

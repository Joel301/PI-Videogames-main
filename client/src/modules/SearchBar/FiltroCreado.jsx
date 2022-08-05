import React from "react";

function FiltroCreado(props) {
    return (
        <div>
            <label>
                <input type="checkbox" name="checkboxCreadoPorUsuario" />
                Creado por Usuario
            </label>
            <label>
                <input type="checkbox" name="checkboxDeApi" />
                No creado por Usuario
            </label>
        </div>
    );
}

export default FiltroCreado;

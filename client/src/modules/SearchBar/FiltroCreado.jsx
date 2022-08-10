import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterOrigin } from "../../redux/actions";
import { filterOrigin } from "../../redux/reducer";

function FiltroCreado(props) {
    const dispatch = useDispatch();
    const { filters } = useSelector((state) => state);

    const handleOnChangeOrigin = (e) => {
        // e.preventDefault();
        console.log(e.target.value);
        if (filters.origin === e.target.value) {
            dispatch(updateFilterOrigin(""));
        } else {
            dispatch(updateFilterOrigin(e.target.value));
        }
    };

    useEffect(() => {}, [filters]);

    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="checkboxCreadoPorUsuario"
                    key="checkboxCreadoPorUsuario"
                    value={filterOrigin.USERCREATE}
                    checked={filterOrigin.USERCREATE === filters.origin}
                    onClick={(e) => {
                        handleOnChangeOrigin(e);
                    }}
                />
                Creado por Usuario
            </label>
            <label>
                <input
                    onClick={(e) => {
                        handleOnChangeOrigin(e);
                    }}
                    type="radio"
                    name="checkboxDeApi"
                    key="checkboxDeApi"
                    value={filterOrigin.APIGAME}
                    checked={filterOrigin.APIGAME === filters.origin}
                />
                No creado por Usuario
            </label>
        </div>
    );
}

export default FiltroCreado;

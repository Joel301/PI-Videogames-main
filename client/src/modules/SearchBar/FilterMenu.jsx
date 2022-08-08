import React from 'react';
import FilterGenre from './FilterGenre';
import FiltroCreado from './FiltroCreado';

function FilterMenu(props) {
    return (
        <div>
            <FiltroCreado/>
            <FilterGenre/>
        </div>
    );
}

export default FilterMenu;
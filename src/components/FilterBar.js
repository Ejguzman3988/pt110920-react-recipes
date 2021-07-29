import React from 'react'

function FilterBar(props) {
    return (
        <div id="filter-bar">
            <label htmlFor="filter">Search by Recipe Title: </label>
            <input type="text" onChange={props.handleChange} />
        </div>
    )
}

export default FilterBar

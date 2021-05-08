import React, { useState } from 'react'

import './creatureCard.css'


export default function SearchBar(props) {
    const optionData = props.searchData;
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState("");


    return (
        <div>

            <input className="searchBar"
                placeHolder="Type name to search for creatures"
                onClick={() => setDisplay(!display)}
                onChange={e => setSearch(e.target.value)}
                value={search}>

            </input>

            <div className="optionContainer">
                <ul className="optionList">
                    {display && (
                        <>
                            {optionData.filter(d => d.indexOf(search.toLowerCase()) > -1).map(d => renderOption(d))}
                        </>
                    )}
                </ul>
            </div>
            <button className="searchBtn" onClick={() => props.setSearchResult(search)}>Search</button>
            <button className="cancel" onClick={() => {
                props.setSearchResult('')
                setSearch('')
            }}>Clear</button>

        </div>
    )





    function setChosenItm(itm) {
        setSearch(itm);
        setDisplay(false);


    }

    function renderOption(item) {
        return (
            <li onClick={() => setChosenItm(item)} className="optionItm">{item}</li>
        );
    }
}

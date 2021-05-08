import React from 'react'
import fire from './Firebase.js';


export default function Points(props) {

    return (
        <div>
            <nav className="navbar">
                <ul className="navUL">
                    <li className="left"><h2 className="title">jokes and Compliment For You</h2></li>
                    <li className="navLI"><button className="navBtn" onClick={() => fire.auth().signOut()} >Log Out</button></li>
                    <li className="navLI"><button className="navBtn" onClick={() => props.setPoints(false)}>Go Back to Collection</button></li>
                    <li className="navLI"><button className="navBtn" onClick={() => props.setactive("fish")}>Go Back to Explore</button></li>
                </ul>
            </nav>

            <div className="jokeContainer">
                <button className="searchBtn" onClick={() => props.setDisplay(!props.display)}>Press For a Joke</button>
                <button className="searchBtn" onClick={() => props.setComDisplay(!props.comDisplay)}>Press For a Compliment</button>
                {props.display && (
                    <>
                        <h3 className="joke">{props.joke}</h3>
                        <h3 className="joke">{props.answer}</h3>
                    </>
                )}

                {props.comDisplay && (
                    <>
                        <h3 className="joke">{props.compliment}</h3>
                        
                    </>
                )}

            </div>
        </div>
    )


}




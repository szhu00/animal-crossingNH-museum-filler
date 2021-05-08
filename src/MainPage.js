import React, { useEffect, useState } from 'react'
import fire from './Firebase.js';

import './style.css';
import './creatureCard.css';
import MyCollection from './MyCollection.js';
import SearchBar from './SearchBar';
import Catch from './Catch.js';




function MainPage(data) {

    const fish = data.fish;
    const bugs = data.bugs;
    const seaCreatures = data.seaCreatures;
    const [active, setactive] = useState("fish");
    const [searchResult, setSearchResult] = useState('');
    const [collection, setCollection] = useState([]);



    let collectionArray = [];
    let searchData = [];

    fish.forEach(f => searchData.push(f.name["name-USen"]));
    bugs.forEach(b => searchData.push(b.name["name-USen"]));
    seaCreatures.forEach(s => searchData.push(s.name["name-USen"]));


    useEffect(() => {
        setCollection([]);
        fire.firestore().collection("UserData").doc(data.uid).get().then((doc) => {

            let x = doc.data();

            setCollection(x.collection);
        })
    }, [])


    return collectionOrCatch();

    function collectionOrCatch() {
        if (active === "catch") {
            return renderCatch();
        } else if (active === "collection") {
            return handleRenderCollection();
        } else {
            return renderExplore();
        }

    }
    function renderCatch() {
        return <Catch collection={collection} setactive={setactive} fish={fish} bugs={bugs} seaCreatures={seaCreatures} />;
    }

    function handleRenderCollection() {
        return <MyCollection collection={collection}
            fish={fish} bugs={bugs} seaCreatures={seaCreatures}
            setactive={setactive} setCollection={setCollection} uid={data.uid} />;
    }

    function renderExplore() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="navUL">
                        {active === "fish" &&
                            <img id="cj" src="https://dodo.ac/np/images/4/49/C.J._NH.png" alt="cj" />}
                        {active === "sea" &&
                            <img id="pascal" src="https://dodo.ac/np/images/e/e1/Pascal_NLa.png" alt="pascal" />
                        }
                        {active === "bugs" &&
                            <img id="flick" src="https://dodo.ac/np/images/f/f4/Flick_NH.png" alt="flick" />}

                        <li className="left"><h2 className="title">Explore</h2></li>
                        <li className="navLI"><button className="navBtn" onClick={() => fire.auth().signOut()} >Log Out</button></li>
                        <li className="navLI"><button className="navBtn" onClick={() => setactive("fish")}>Fish</button></li>
                        <li className="navLI"><button className="navBtn" onClick={() => setactive("bugs")}>Bugs</button></li>
                        <li className="navLI"><button className="navBtn" onClick={() => setactive("sea")}>Sea Creatures</button></li>
                        <li className="navLI"><button className="navBtn" onClick={() => setactive("collection")}>My Collection</button></li>
                        <li className="navLI"><button className="navBtn" onClick={() => setactive("catch")}>What to catch now?</button></li>
                    </ul>
                </nav>
                <SearchBar searchData={searchData} data={data} setSearchResult={setSearchResult} />


                <section >
                    <div className="fishContainer" >
                        {searchResult ? (handleRenderSearchResult()) : (
                            <>

                                {active === "fish" && fish.map(f => renderCreature(f))}
                                {active === "bugs" && bugs.map(f => renderCreature(f))}
                                {active === "sea" && seaCreatures.map(f => renderCreature(f))}


                            </>

                        )}
                    </div>

                </section>
            </div>);
    }

    function handleRenderSearchResult() {
        let resultf = fish.find(f => f.name["name-USen"] === searchResult);

        if (resultf === undefined) {
            let resultb = bugs.find(b => b.name["name-USen"] === searchResult);
            if (resultb === undefined) {
                let resultS = seaCreatures.find(s => s.name["name-USen"] === searchResult);

                if (resultS === undefined) {
                    return <div id="notFoundContainer"><h1 id="notFound"> ʕ•́ᴥ•̀ʔっ Creature Not Found  👋≧◉ᴥ◉≦</h1></div>
                } else {
                    return renderCreature(resultS);
                }
            } else {
                return renderCreature(resultb);
            }
        } else {
            return renderCreature(resultf);
        }


    }


    function renderCreature(creature) {
        return (

            <div className="card">
                <div className="cardHeader">
                    <img className="proPic" src={creature["image_uri"]} alt="creature pic" />
                    <h2 className="file-name">{creature.name["name-USen"]}</h2>
                </div>
                <div className="cardBody">
                    <div className="infoContainer">
                        {creature.availability.isAllYear ? (
                            <>
                                <p className="info"><strong>Northern hemisphere available month:</strong> All year</p>
                                <p className="info"><strong>Southern hemisphere available month:</strong> All year</p>
                            </>

                        ) : (
                            <>
                                <p className="info"><strong>Northern hemisphere available month:</strong> {creature.availability["month-northern"]}</p>
                                <p className="info"><strong>Southern hemisphere available month:</strong> {creature.availability["month-southern"]}</p>
                            </>
                        )}
                        <p className="info"><strong>Location:</strong> {creature.availability["location"]} </p>
                        {creature.availability.isAllDay ? (
                            <p className="info"><strong>Time:</strong> All day</p>

                        ) : (
                            <p className="info"><strong>Time:</strong> {creature.availability.time} </p>

                        )}
                        <p className="info"><strong>Shadow:</strong> {creature.shadow}</p>
                        <p className="info"><strong>Rarity:</strong> {creature.availability.rarity}</p>
                        <p className="info"><strong>Price:</strong> {creature.price} bells</p>
                        <form>


                            <button className="addCollectionBtn" onClick={e => handleCollection(e)}
                                id={creature.name["name-USen"]}>
                                {collection.includes(creature.name["name-USen"]) ? ("Undo") : ("Add to Museum")}</button>
                        </form>
                        <br />
                    </div>


                </div>

            </div >

        );


    }


    function handleCollection(e) {

        e.preventDefault();

        if (e.target.innerHTML === "Add to Museum") {
            e.target.innerHTML = "Undo";
            setCollection(collection => [...collection, e.target.id]);
            additemToCollection(e);

        } else {
            e.target.innerHTML = "Add to Museum";
            setCollection(collection.filter((n) => n !== e.target.id));
            undoItemToCollection(e);

        }
    }


    function additemToCollection(e) {

        collectionArray = [...collection, e.target.id];


        fire.firestore().collection("UserData").doc(data.uid).update({
            collection: collectionArray,
        })

    }

    function undoItemToCollection(e) {
        collectionArray = collection.filter((n) => n !== e.target.id);
        fire.firestore().collection("UserData").doc(data.uid).update({
            collection: collectionArray,
        })


    }
}

export default MainPage;

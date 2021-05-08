import React, { useState } from 'react'
import fire from './Firebase.js';
import './catch.css';
import './style.css';
import LiveC from './LiveC.js';
import './creatureCard.css';

export default function Catch(props) {
    let dataFish = [];
    let dataBugs = [];
    let dataSea = [];
    let fish = props.fish;
    let bugs = props.bugs;
    let seaCreatures = props.seaCreatures

    fish.forEach(f => {
        if (!props.collection.includes(f.name["name-USen"])) {
            dataFish.push(f);
        }
    });
    bugs.forEach(b => {
        if (!props.collection.includes(b.name["name-USen"])) {
            dataBugs.push(b);
        }
    });
    seaCreatures.forEach(s => {
        if (!props.collection.includes(s.name["name-USen"])) {
            dataSea.push(s);
        }
    })



    const [display, setDisplay] = useState(false);
    const [Nitm, setNItm] = useState("");
    const [creatureBtn, setCreatureBtn] = useState(false);
    const [sCreatureBtn, setSCreatureBtn] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <ul className="navUL">
                    <img id="blathers" src="https://dodo.ac/np/images/f/fe/Blathers_NH_2.png" alt="owl" />
                    <li className="left"><h2 className="title">Fill It Up</h2></li>
                    <li className="navLI"><button className="navBtn" onClick={() => fire.auth().signOut()} >Log Out</button></li>
                    <li className="navLI"><button className="navBtn" onClick={() => props.setactive("fish")}>Go Back to Explore</button></li>
                </ul>
            </nav>
            <LiveC display={display} setDisplay={setDisplay} setNItm={setNItm} setCreatureBtn={setCreatureBtn} setSCreatureBtn={setSCreatureBtn} />
            {display && (
                <div>
                    <ul className="hemisphere">
                        <li className="hemisphereItm"><button className="nsBtn" onClick={() => {
                            setCreatureBtn(true);
                            setSCreatureBtn(false);
                            setNItm("");
                        }

                        }>North Hemisphere Catchable Creatures</button></li>
                        <li className="hemisphereItm"><button className="nsBtn" onClick={() => {
                            setSCreatureBtn(true);
                            setCreatureBtn(false);
                            setNItm("");
                        }
                        }>South Hemisphere Catchable creatures</button></li>
                    </ul>


                </div>)}
            {creatureBtn && (
                <ul className="creatureBtnContainer">
                    <li className="creatureBtn"><button className="cbtn" onClick={() => setNItm("nfish")}>N-Fish</button></li>
                    <li className="creatureBtn"><button className="cbtn" onClick={() => setNItm("nbugs")}>N-Bugs</button></li>
                    <li className="creatureBtn"><button className="cbtn" onClick={() => setNItm("nsea")}>N-Sea Creatures</button></li>

                </ul>
            )}
            {sCreatureBtn && (
                <ul className="creatureBtnContainer">
                    <li className="creatureBtn"><button className="cbtn" onClick={() => setNItm("sfish")}>S-Fish</button></li>
                    <li className="creatureBtn"><button className="cbtn" onClick={() => setNItm("sbugs")}>S-Bugs</button></li>
                    <li className="creatureBtn"><button className="cbtn" onClick={() => setNItm("ssea")}>S-Sea Creatures</button></li>

                </ul>
            )}

            <div className="fishContainer">
                {Nitm === "nfish" && renderNfish(dataFish).map(f => renderCreatureCard(f))}
                {Nitm === "nbugs" && renderNbugs(dataBugs).map(b => renderCreatureCard(b))}
                {Nitm === "nsea" && renderNsea(dataSea).map(s => renderCreatureCard(s))}
                {Nitm === "sfish" && renderSfish(dataFish).map(f => renderCreatureCard(f))}
                {Nitm === "sbugs" && renderSbugs(dataBugs).map(b => renderCreatureCard(b))}
                {Nitm === "ssea" && renderSsea(dataSea).map(s => renderCreatureCard(s))}


            </div>
        </div>
    );

}

function renderNfish(dfish) {
    let filtered = []
    let today = new Date();
    let hour = today.getHours();
    let month = today.getMonth() + 1;

    for (let i = 0; i < dfish.length; i++) {

        if (dfish[i].availability["month-array-northern"].includes(month) && dfish[i].availability["time-array"].includes(hour)) {
            filtered.push(dfish[i]);
        }
    }
    return filtered;
}
function renderNbugs(dbugs) {
    let filtered = []
    let today = new Date();
    let hour = today.getHours();
    let month = today.getMonth() + 1;
    for (let i = 0; i < dbugs.length; i++) {
        if (dbugs[i].availability["month-array-northern"].includes(month) && dbugs[i].availability["time-array"].includes(hour)) {
            filtered.push(dbugs[i]);
        }
    }
    return filtered;
}
function renderNsea(dsea) {
    let filtered = []
    let today = new Date();
    let hour = today.getHours();
    let month = today.getMonth() + 1;
    for (let i = 0; i < dsea.length; i++) {

        if (dsea[i].availability["month-array-northern"].includes(month) && dsea[i].availability["time-array"].includes(hour)) {
            filtered.push(dsea[i]);
        }
    }
    return filtered;
}
function renderSfish(dfish) {
    let filtered = []
    let today = new Date();
    let hour = today.getHours();
    let month = today.getMonth() + 1;

    for (let i = 0; i < dfish.length; i++) {

        if (dfish[i].availability["month-array-southern"].includes(month) && dfish[i].availability["time-array"].includes(hour)) {
            filtered.push(dfish[i]);
        }
    }
    return filtered;
}
function renderSbugs(dbugs) {
    let filtered = []
    let today = new Date();
    let hour = today.getHours();
    let month = today.getMonth() + 1;
    for (let i = 0; i < dbugs.length; i++) {

        if (dbugs[i].availability["month-array-southern"].includes(month) && dbugs[i].availability["time-array"].includes(hour)) {
            filtered.push(dbugs[i]);
        }
    }
    return filtered;
}
function renderSsea(dsea) {
    let filtered = []
    let today = new Date();
    let hour = today.getHours();
    let month = today.getMonth() + 1;
    for (let i = 0; i < dsea.length; i++) {

        if (dsea[i].availability["month-array-southern"].includes(month) && dsea[i].availability["time-array"].includes(hour)) {
            filtered.push(dsea[i]);
        }
    }
    return filtered;
}

function renderCreatureCard(creature) {

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

                    <br />
                </div>


            </div>

        </div >

    );
}
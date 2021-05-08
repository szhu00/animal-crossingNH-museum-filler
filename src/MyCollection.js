import React from 'react'
import fire from './Firebase.js';
import './style.css';
import './creatureCard.css';
export default function MyCollection(props) {

    let dataArray = [];
    let collection = props.collection;
    for (let i = 0; i < collection.length; i++) {


        let x = props.fish.find(f => f.name["name-USen"] === collection[i]);
        if (x !== undefined) { dataArray.push(x) }

        x = props.bugs.find(b => b.name["name-USen"] === collection[i]);
        if (x !== undefined) { dataArray.push(x); }

        x = props.seaCreatures.find(s => s.name["name-USen"] === collection[i]);
        if (x !== undefined) { dataArray.push(x); }


    }


    return (
        <div>
            <nav className="navbar">
                <ul className="navUL">
                    <img id="isabelle" src="https://dodo.ac/np/images/f/f5/Isabelle_NH_Transparent.png" alt="issbelle" />
                    <li className="left"><h2 className="title">My Collection</h2></li>
                    <li className="navLI"><button className="navBtn" onClick={() => fire.auth().signOut()} >Log Out</button></li>
                    <li className="navLI"><button className="navBtn" onClick={() => props.setactive("fish")}>Go Back to Explore</button></li>
                </ul>
            </nav>


            <section >
                <button className="clearBtn" onClick={() => props.setCollection(["placeholder"])}><img id="trash" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEwLjEyOSAzMTAuMTI5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuMTI5IDMxMC4xMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjQ3LjA1Miw2Mi4zNzljLTI4LjkyLDEuMTI2LTU3Ljg1NSwwLjQ1MS04Ni43ODYsMC4wOThjLTMyLjMwMy0wLjM5Mi02NC4xMzIsNS43MjItOTYuNDAyLDEuNzAyDQoJCWMtNy4wODctMC44ODEtMTEuMTk5LDMuMTQ0LTEyLjQ3Nyw4LjMzOGMtMC42NTMsMS41MzktMS4wNzcsMy4yNjktMS4xMiw1LjI2Yy0xLjUxMiw3MS4wNSwzLjI4NSwxNDYuNzk1LDE1LjQ2MywyMTYuODg4DQoJCWMwLjcyMyw0LjEyOCw1LjI5OCw4Ljg3Nyw5LjQ5Nyw5LjQ5N2MzNy4wNDUsNS40NjEsNzUuMTMsNi44MzEsMTEyLjUxMiw1LjQ4OGMyMi4xNy0wLjc5NCw2Ni4yOTctMC44NjUsNjkuODA1LTMwLjI5DQoJCWMzLjg5NC0zMi42MzQsMy45MTYtNjYuMDQxLDQuNzQ4LTk4Ljg1YzAuOTAzLTM1LjYxNSwzLjI4LTcyLjc3NS0yLjEyNy0xMDguMTQ1QzI1OS4yOSw2Ni42MzgsMjUyLjU0LDYyLjE2MSwyNDcuMDUyLDYyLjM3OXoNCgkJIE0yMzEuNzE0LDI2My4zNDdjLTAuMjU2LDQuMDE5LTAuNTY2LDguMDM0LTAuOTMsMTIuMDQyYy0wLjAwNSwwLjA3Ni0wLjAwNSwwLjEyNS0wLjAxMSwwLjE5Ng0KCQljLTEyLjgwNCw4LjA0NC0zNC41NzYsNi41NjUtNDguOTc5LDcuMDgyYy0zMC4wNDUsMS4wODItNjEuMTYyLDAuMTk2LTkxLjE3LTMuNjQ0Yy05Ljg4OC02MC40NjEtMTMuODk3LTEyNS4wOTMtMTMuMzItMTg2LjU0NA0KCQljMjcuNjg1LDEuMzI3LDU1LjE2OC0zLjA1Nyw4Mi45NjItMi44MDdjMjUuMDI1LDAuMjIzLDUwLjAzOSwwLjc1Niw3NS4wNTksMC4xODVDMjQyLjA4NiwxNDYuMDU5LDIzNS4yNDQsMjA3LjU1OCwyMzEuNzE0LDI2My4zNDcNCgkJeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjU3LjgzNywyMy4xOTZjLTE3LjM0LDAuMDE2LTM0LjY3NCwwLjEyLTUyLjAwOCwwLjI1QzE5MS40MzcsMy4wNjYsMTc0LjIxMiwwLjE5NCwxNDkuNzIsMC4wMDQNCgkJYy0yMS45NjgtMC4xNjktMzQuODI2LDUuNDgzLTQzLjA3NywyNC4zNjdjLTE4LjExOCwwLjE0Ny0zNi4yMywwLjI1Ni01NC4zNDcsMC4yNzJjLTE3LjU0MSwwLjAxNi0xNy41NDEsMjcuMjEyLDAsMjcuMTk1DQoJCWM2OC41MjEtMC4wNzEsMTM3LjAyNi0xLjM4MiwyMDUuNTQ4LTEuNDUyQzI3NS4zNzMsNTAuMzY5LDI3NS4zNzMsMjMuMTc0LDI1Ny44MzcsMjMuMTk2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMTExLjIwNiwxNTcuODg5Yy0wLjAzMy04Ljc2OC0xMy42My04Ljc2OC0xMy41OTgsMGMwLjA5OCwyOS4wMTcsMS40Myw1Ny45Nyw0LjMzNSw4Ni44NA0KCQljMC44Nyw4LjYzNywxNC40NzMsOC43MjQsMTMuNTk4LDBDMTEyLjYzMSwyMTUuODU4LDExMS4zMDQsMTg2LjkwNiwxMTEuMjA2LDE1Ny44ODl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0xMzIuNzA2LDExNS44NzdjMS43ODQsNDMuNDQyLDQuNTQ3LDg2LjgwNyw0LjcwNSwxMzAuMjk4YzAuMDMzLDguNzY4LDEzLjYzLDguNzY4LDEzLjU5OCwwDQoJCWMtMC4xNTgtNDMuNDk2LTIuOTIxLTg2Ljg1Ni00LjcwNS0xMzAuMjk4QzE0NS45NCwxMDcuMTM3LDEzMi4zNDIsMTA3LjEwNCwxMzIuNzA2LDExNS44Nzd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0xODAuNjc5LDE1Ny44ODljLTAuMDMzLTguNzY4LTEzLjYzLTguNzY4LTEzLjU5OCwwYzAuMTAzLDI5LjAxNywxLjQzLDU3Ljk3LDQuMzQsODYuODQNCgkJYzAuODcsOC42MzcsMTQuNDc5LDguNzI0LDEzLjU5OCwwQzE4Mi4xMDksMjE1Ljg1OCwxODAuNzgyLDE4Ni45MDYsMTgwLjY3OSwxNTcuODg5eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjAyLjE4NSwxMTUuODc3YzEuNzg0LDQzLjQ0Miw0LjU0Nyw4Ni44MDcsNC43MDUsMTMwLjI5OGMwLjAzMyw4Ljc2OCwxMy42Myw4Ljc2OCwxMy41OTgsMA0KCQljLTAuMTU4LTQzLjQ5Ni0yLjkyMS04Ni44NTYtNC43MDUtMTMwLjI5OEMyMTUuNDI0LDEwNy4xMzcsMjAxLjgyNiwxMDcuMTA0LDIwMi4xODUsMTE1Ljg3N3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                Clear Collection</button>
                <div className="fishContainer" >
                    {dataArray.map(itm => renderCollectionCards(itm))}

                </div>

            </section>
        </div>


    )

    function renderCollectionCards(creature) {
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


                            <button className="addCollectionBtn" onClick={e => handleDelete(e)} id={creature.name["name-USen"]}>Delete</button>
                        </form>
                        <br />
                    </div>


                </div>

            </div >

        );
    }
    function handleDelete(e) {
        e.preventDefault();
        collection.forEach(element => {
            if (element === e.target.id) {
                props.setCollection(props.collection.filter((i) => i !== e.target.id));

                let collectionArray = collection.filter((n) => n !== e.target.id);
                fire.firestore().collection("UserData").doc(props.uid).update({
                    collection: collectionArray,
                })

                return;
            }

        });

    }


}

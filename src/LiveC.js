import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Clock from 'react-live-clock';

export default function LiveC(props) {
    const [zip, setZip] = useState("");
    const [input, setInput] = useState("");
    const [entered, setEntered] = useState(false);
    const [timeZone, setTimeZone] = useState('');
    const [c, setC] = useState('');

    const getTimeZone = async () => {

        fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=UWZILNHADWRB&format=json&by=position&lat=" + zip.lat + "&lng=" + zip.lng)
            .then(res => res.json()).then((r) => setTimeZone(r.zoneName));

    }

    useEffect(() => {
        getTimeZone();
    }, [c])
    const getGroLoc = async () => {

        if (input !== "") {
            let url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDwSpJcr43AjOCgB9FiC4yXvBrjS9niqCY&components=postal_code:"

            fetch(url + input)
                .then(res => res.json()).then((r) => setZip(r.results[0].geometry.location));
        }
    }

    function reor() {

        if (zip === undefined || zip === '') {

        } else {
            getTimeZone();

        }

    }

    useEffect(() => {
        getGroLoc();
        setC(!c);
    }, [entered])

    return (
        <div className="timeContainer">
            <div></div>
            <input className="zipcode" type="text" placeholder="type your zipcode to get local time" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button className="zipBtn" onClick={() => {
                setEntered(!entered);
                props.setDisplay(true);
                props.setNItm("");
                props.setCreatureBtn(false);
                props.setSCreatureBtn(false);

            }}>Submit</button>

            {props.display && renderClock()}

        </div>
    )

    function renderClock() {

        return (
            <div className="clockContainer">
                <h3 id="phrase">It is Currently....</h3>
                <Clock className="clock" format={'h:mm:ss a'} ticking={true} timezone={timeZone} />
            </div>
        );
    }


}


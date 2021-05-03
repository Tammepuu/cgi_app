import React, { useState } from 'react';
import MapComponent from './map-component';
import 'leaflet/dist/leaflet.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { eachDayOfInterval, format, isEqual } from 'date-fns';
import { DateRange } from 'react-date-range';

function SunriseAndSunsetTimes(){
    const [latitude, setLatitude] = useState(58.378025);
    const [longitude, setLongitude] = useState(26.728493);
    const [timeData, setTimeData] = useState([]);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);
    let position = { lat: latitude, lng: longitude };
    let timeDataArr = [];

    //kasutasin tõusude ja loojangute leidmiseks järgnevat APIt: https://sunrise-sunset.org/api 
    async function getTimes(lat, lng, date) { 
        await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}&formatted=0`, {
                method: 'GET',
            })
            .then(result => result.json())
            .then(function(data) {
                timeDataArr.push(data);
            })
    }

    async function isDataValid(lat, lng, date) {
        let dateFormatted = ''
        position = { lat: lat, lng: lng };
        //kuupäevadega seotud meetodid pärinevad allikast https://date-fns.org/v2.21.1/docs/
        if (isEqual(date[0].startDate, date[0].endDate)){
            dateFormatted = format(date[0].startDate, 'yyyy-MM-dd');
            await getTimes (lat, lng, dateFormatted)
        } else {
            let daysAsArray = eachDayOfInterval({
                start: date[0].startDate,
                end: date[0].endDate
            })
            for (let i = 0; i < daysAsArray.length; i++) {
                dateFormatted = format(daysAsArray[i], 'yyyy-MM-dd');
                await getTimes (lat, lng, dateFormatted)
            }
        }
        setTimeData(timeDataArr);
    }

    const getPositionInfo = function(data) {
        setLatitude(data.lat);
        setLongitude(data.lng);
        position = { lat: data.lat, lng: data.lng };
    }

    const dayLengthCalc = function(timeData) {
        let sunset = timeData.results.sunset.match(/\d\d:\d\d:\d\d/)[0];
        let sunrise = timeData.results.sunrise.match(/\d\d:\d\d:\d\d/)[0];
        let sunsetArray = sunset.split(':');
        let sunriseArray = sunrise.split(':');
        let dayLength = (Number(sunsetArray[0]) * 3600 + Number(sunsetArray[1]) * 60 + Number(sunsetArray[2])) - (Number(sunriseArray[0])*60*60 + Number(sunriseArray[1])*60 + Number(sunriseArray[2]));
        let hours = Math.floor(dayLength / 3600);
        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        let minutes = Math.floor(dayLength % 3600 / 60);
        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }
        let seconds = dayLength % 3600 % 60;
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        let dayLengthFormatted = hours + ':' + minutes + ':' + seconds;
        return [sunrise, sunset, dayLengthFormatted];
    }

    return (
       <React.Fragment>
           <h1>Päikese tõusu ja loojangu ajad ning päeva pikkus</h1>
           <p>Rakendus võimaldab kuvada Päikese tõusu ja loojangu ajad ning päeva pikkuse sõltuvalt kuupäevadest ja koordinaatidest. 
               Koordinaadid saab sisestada kas käsitsi või valides kaardil soovitud koha. Kui valida üks kuupäev, kuvatakse tõusu, loojangu ajad 
               ning päeva pikkus tekstina. Mitme kuupäeva valimise puhul ei juhtu midagi, sest äpp loeb APIst vajalikud andmed küll sisse, aga 
               paraku ei jäänud aega, et neid graafikule kuvada.</p>
           <p>Sisesta geograafiline laius:</p>
           <input id="latitude" value={latitude} onChange={event => setLatitude(event.target.value)}></input>
           <p>Sisesta geograafiline pikkus:</p>
           <input id="longitude" value={longitude} onChange={event => setLongitude(event.target.value)}></input>
           <p>Vali kuupäev:</p>
           {/*kalendri kuvamiseks kasutasin https://hypeserver.github.io/react-date-range/*/}
           <DateRange
                onChange={item => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
            />
           <br />
           <button onClick={() => isDataValid(latitude, longitude, date)}>Näita tulemust!</button>
           {(timeData.length !== undefined && timeData.length === 1) ? <p>Päike tõuseb kell {dayLengthCalc(timeData[0])[0]} UTC ja loojub kell {dayLengthCalc(timeData[0])[1]} UTC. Päeva pikkus on {dayLengthCalc(timeData[0])[2]}.</p> : <p></p>}
           <MapComponent position={position} getPositionInfo={getPositionInfo}/>
       </React.Fragment> 
    )
}

export default SunriseAndSunsetTimes;
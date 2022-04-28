//Styles
import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import "./Locationdetail.css";


function Locationdetail() {
    const [data, setData] = useState([]);
    const [fetchingData, setFetchingData] = useState(false);

    const createCampDiv = (camp) => {
        return (
        <tr>
            <td>{camp["camp_name"]}</td>
            <td>{camp["seat_available"]}</td>
            <td>{camp["address"]}</td>
        </tr>
        );
    }

    // const createAllCampDiv = () => {
    //     let campDivs = [];

    //     camps.forEach((camp) => {
    //         campDivs.push(createCampDiv(camp));
    //     })

    //     return campDivs;
    // }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_NODEJS}${process.env.REACT_APP_COVID_CAMPS}`)
        .then((res) => setData(res.data))
        .then(() => {console.log(data)});
    }, []);

    return (
        <div id="location_detail_page">
            <div id="hospital_detail_container">
                <table>
                    <tr>
                        <th>Hospital</th>
                        <th>Bed Available</th>
                        <th>Oxygen Cylinder Available</th>
                        <th>Plasma Donors Available</th>
                    </tr>

                    <tr>
                        <td>Narayani Hospital</td>
                        <td>5</td>
                        <td>4</td>
                        <td>2</td>
                    </tr>

                    <tr>
                        <td>National Medical Hospital</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>

                </table>

            </div>

            <div id="volunteer_detail_container">

                <table>

                    <tr>
                        <th>Volunteer Name</th>
                        <th>Phone Number</th>
                        <th>Avaibility</th>
                    </tr>

                    <tr>
                        <td>Manav Sewa Asram</td>
                        <td>9855032589</td>
                        <td>Available</td>
                    </tr>

                    <tr>
                        <td>Youths club</td>
                        <td>9855032589</td>
                        <td>Available</td>
                    </tr>

                </table>

            </div>

            <div id="covid_camps_container">

                <table>
                    <tr>
                        <th>Covid Camps</th>
                        <th>Seat Available</th>
                        <th>Address</th>
                    </tr>

                    <tr>
                        <td>Parsa Covid Camp</td>
                        <td>4</td>
                        <td>Brahmh Chowk</td>
                    </tr>

                    <tr>
                        <td>Kailash Camp</td>
                        <td>5</td>
                        <td>Adarsnagar</td>
                    </tr>
                </table>

            </div>
        </div>
    );
}

export default Locationdetail;
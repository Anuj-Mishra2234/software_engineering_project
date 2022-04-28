// Styles
import "./Landing.css"

// Assets
import pagesIcon from "../../assets/pages_icon.png";

import axios from "axios";


function Landing()
{
    const getLocationDetails = (event) => {
        event.preventDefault();

        const cityName = document.querySelector("#location_container input").value;

        console.log(cityName.toLowerCase());

        if(cityName.toLowerCase() === "kathmandu") {
            window.location.replace("/locationdetails/kathmandu");;
        }
        else {
            window.location.replace("*");
        }
    }
    
    return (
        <>
            <div id="welcome_container">
                <p><span class="welcome_highlight">WELCOME</span> to covid-19 support </p>
            </div>

            <div id="location_container">
                <form>
                    <input type="text" placeholder="Choose location"/>
                    <button type="submit" onClick={getLocationDetails}></button>
                </form>
            </div>

            <div id="guidelines_container"> 
                <img src={pagesIcon} alt="Page Logo" />

                <a href="/guideline" alt="Guideline page"><button>Guidelines</button></a>
            </div>
        </>
    );
}

export default Landing;
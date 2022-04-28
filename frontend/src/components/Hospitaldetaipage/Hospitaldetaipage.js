//Style
import "./Hospitaldetaipage.css";

import patienticon from "../../assets/patient.png";
import cylindericon from "../../assets/oxygen-tank.png";
import donoricon from "../../assets/donors.png";


function Hospitaldetaipage() {
    function clearOutputText () {
        let outputText = document.getElementById("hospitalDetailOutputText");
        outputText.textContent = "";
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        let outputText = document.getElementById("hospitalDetailOutputText");
        
        outputText.textContent = "Updated successfully"
        setTimeout(clearOutputText, 1500);

        let inputFields = document.querySelectorAll("input");
        inputFields.forEach((input) => {
            input.value = "";
        })
    }

    return (
        <> 
            <div id="Hospital_detail_page">
                <div id="hospital_details_containers_list">
                    <div class="Hospital_detail_page_container">
                        <img src={patienticon} alt="Patient icon" />
                        <p>Hospital Beds</p>
                        <form>
                            <input type="text" placeholder="Beds" />
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div class="Hospital_detail_page_container">
                        <img src={cylindericon} alt="Oxygen Cylinder icon" />
                        <p>Oxygen Cylinders</p>
                        <form>
                            <input type="text" placeholder="Cylinders" />
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div class="Hospital_detail_page_container">
                        <img src={donoricon} alt="Donor icon" />
                        <p>Plasma Donors</p>
                        <form>
                            <input type="text" placeholder="Donors" />
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                <p id="hospitalDetailOutputText"></p>
            </div>
        </>
    )
}

export default Hospitaldetaipage;
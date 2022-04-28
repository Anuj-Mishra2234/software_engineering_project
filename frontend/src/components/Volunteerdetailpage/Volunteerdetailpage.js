//Styles
import "./Volunteerdetailpage.css";

function Volunteerdetailpage () {
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

            <div id="Volunteer_detail_page">
                <div id="Volunteer_detail_page_header">

                    <h1>Manav Sewa Asram</h1>
                </div>

                <div id="Volunteer_detail_table">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                        </tr>

                        <tr>
                            <td>Akshay Ravikumar</td>
                            <td>+977 9845033589</td>
                            <td>Available</td>
                            
                        </tr>

                        <tr>
                            <td>Kartik Ajay</td>
                            <td>+977 9855033589</td>
                            <td>Available</td>
                            
                        </tr>

                        <tr>
                            <td>Aman Mishra</td>
                            <td>+977 9845058589</td>
                            <td>Not Available</td>
                            
                        </tr>

                        <tr>
                            <td>Abinas Singh</td>
                            <td>+977 985508289</td>
                            <td>Available</td>
                            
                        </tr>

                    </table>

                

                </div>

                <div id="Status_container">
                    <p>Overall Status</p>
                    <form>
                        <input type="text" placeholder="Status" />
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>

                <p id="hospitalDetailOutputText"></p>
            </div>

        </>
    )
}

export default Volunteerdetailpage;

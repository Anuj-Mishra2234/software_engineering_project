//styles
import './LoginForm.css';

import axios from "axios";

function LoginForm(props){
    const fetchVolunteer = async (username) => {
        let result = await axios.get(`${process.env.REACT_APP_NODEJS}${process.env.REACT_APP_GET_VOLUNTEER}${username}`);

        return result.data;
    }

    const fetchEmployee = async (username) => {
        let result = await axios.get(`${process.env.REACT_APP_NODEJS}${process.env.REACT_APP_GET_EMPLOYEE}${username}`);

        return result.data;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let result = {};
        let username = document.getElementById(props.usernameID).value;
        let password = document.getElementById(props.passwordID).value;
        let messageDiv = document.getElementById("login_form_message_div");

        if(props.usernameID.includes("volunteer"))
        {
            result = await fetchVolunteer(username);
        }
        else if(props.usernameID.includes("employee"))
        {
            result = await fetchEmployee(username);
        }

        if(result["result"])
        {
            result = result["result"];
        }
        
        console.log(result);

        if(!result)
        {
            messageDiv.setAttribute("style", "color: red");
            messageDiv.textContent = "Error: User not found";
        }
        else
        {
            if(result["password"] === password)
            {
                if(props.usernameID.includes("volunteer"))
                {
                    window.location.replace("/Volunteerdetailpage");
                }
                else if(props.usernameID.includes("employee"))
                {
                    window.location.replace("/Hospitaldetailpage");
                }
            }
            else
            {
                messageDiv.setAttribute("style", "color: red");
                messageDiv.textContent = "Error: Username or Password is incorrect";
            }
        }
    }

    return(
        <>
            <div id="login_form">
                <form>
                    <div id="login_form_input_container">
                        <input type="email" id={props.usernameID} placeholder="Username"/>
                        <input type="password" id={props.passwordID} placeholder="Password"/>
                    </div>

                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>

                <div id="login_form_message_div"></div>
            </div>
        </>

    );
}

export default LoginForm;
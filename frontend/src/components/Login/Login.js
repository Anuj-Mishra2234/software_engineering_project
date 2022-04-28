//styles
import "./Login.css"

import volunteericon from "../../assets/volunteericon.png";
import stethescope from "../../assets/stethescope_icon.png";

function Login() {

    return (
        <>
            <section id="login_container">
                <div id="volunteer_login_container">
                    <img src={volunteericon} alt="Volunteer logo"/>
                    <h2>Login As Volunteer</h2>
                    <a href="/loginvolunteer" alt="Volunteer Login Page"><button>Login</button></a>
                
                </div>
                <div id="hospital_login_container">
                    <img src={stethescope} alt="Stethescope_logo"/>
                    <h2>Login As Hospital</h2>
                    <a href="/loginhospital" alt="Hospital Login Page"><button>Login</button></a>
                </div>

            </section>
        </>
    );
}

export default Login;

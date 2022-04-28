// Styles
import "./Footer.css";

// Icons
import facebookicon from "../../assets/facebook_icon.png"
import instaicon from "../../assets/insta_icon.png"
import twittericon from "../../assets/twitter_icon.png"
import googleplusicon from "../../assets/googleplus_icon.png"

function Footer()
{
    return (
        <>
            <div id="icon_container">
                <img src={facebookicon} alt="Page Logo" />
                <img src={instaicon} alt="Page Logo" />
                <img src={twittericon} alt="Page Logo" />
                <img src={googleplusicon} alt="Page Logo" />
            </div>
        </>
    )
}

export default Footer;
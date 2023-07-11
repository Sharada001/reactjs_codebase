import "../assets/SocialIcon.css";

function SocialIcon(props) {
    let webURL, logoSRC;
    switch (props.socialMedia) {
        case "facebook":
            webURL = "https://www.facebook.com/"+props.accountName;
            logoSRC = require("../logos/facebook_logo.png");
            break;
        case "instagram":
            webURL = "https://www.instagram.com/"+props.accountName;
            logoSRC = require("../logos/instagram_logo.png");
            break;
        case "twitter":
            webURL = "https://twitter.com/"+props.accountName;
            logoSRC = require("../logos/twitter_logo.png");
            break;
        default:
            break;
    }
	return (
		<a href={webURL}>
            <img src={logoSRC} class="image-class"/>
        </a>
	);
}

export default SocialIcon;
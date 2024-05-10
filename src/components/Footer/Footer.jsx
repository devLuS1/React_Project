import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footerContainer">
            <div class="footerText">
                <a href="https://twitter.com/" target="_blank">
                    <img class="twitterIcon" src="img/icons/icon_twitter.png" alt="Twitter icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img class="instagramIcon" src="img/icons/icon_instagram.png" alt="Instagram icon" />
                </a>
                <a href="https://www.pinterest.com/" target="_blank">
                    <img class="pinteresIcon" src="img/icons/icon_pinterest.png" alt="Pinterest icon" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                    <img class="youtubeIcon" src="img/icons/icon_youtube.png" alt="Youtube icon" />
                </a>
                <div class="copyright">
                    &copy; 2024 Snow Home. All Rights Reserved.
                </div>
            </div>
            <img className='footerIcon' src="/img/icon.png" alt="Snow Home Icon" />
        </div>
    )
}

export default Footer
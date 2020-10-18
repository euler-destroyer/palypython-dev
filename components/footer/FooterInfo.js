// Footer info component

const FooterInfo = () => (
    <>
        <div className = "footer-info">
            <div className = "footer-logo">
                <img className = "footer-image" src = "/images/palypython.png" alt = "logo" />
            </div>
            <div className = "footer-desc">
                Paly Python is a programming club based in Palo Alto empowering the next generations of coders through free comprehensive resources and hosted events such as club meetings and summer camps.
            </div>
            <div className = "social-media">
                <a href = "https://www.youtube.com/channel/UCzsie648BDGw-r-HFbz8tbg" target = "_blank" className = "social-media-icon" id = "youtube">
                    <i className = "fab fa-youtube"></i>
                </a>
                <a href = "https://discord.gg/ct2MDjR" target = "_blank" className = "social-media-icon" id = "discord">
                    <i className = "fab fa-discord"></i>
                </a>
            </div>
        </div>
        <style jsx>{`
            .footer-info {
                width: 30%;
                display: flex;
                flex-direction: column;
                margin-right: 5%;
            }

            .footer-logo {
                display: flex;
                flex-direction: row;
                align-items: center;

                font-weight: bold;
                font-size: 1.15rem;

                color: var(--accent);
                opacity: 0.9;
                margin-bottom: 7px;
            }

            .footer-image {
                width: 37px;
                height: 37px;
            }

            .footer-desc {
                margin: 16px 0;
                line-height: 1.5rem;
                color: var(--text-dark);
            }

            .social-media {
                display: flex;
                flex-direction: row;
                margin-top: 10px;
            }

            .social-media-icon {
                font-size: 1.1rem;
                border-radius: 4px;
                border: 1px solid var(--text-dark);
                margin-right: 10px;
                height: 30px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: var(--text-dark);
                transition-duration: 0.2s;
            }

            .social-media-icon:focus {
                box-shadow: 0 0 0 3px rgba(0, 142, 255, 0.3);
            }

            @media only screen and (max-width: 950px) {
                .footer-info {
                    width: 100%;
                }
            }
        `}</style>
    </>
)

// Exports

export default FooterInfo
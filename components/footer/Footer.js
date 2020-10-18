// Imports

import FooterInfo from "./FooterInfo.js"
import FooterLink from "./FooterLink.js"

// Footer component

const Footer = () => (
    <>
        <div className = "footer-wrapper">
            <div className = "footer">
                <FooterInfo />
                <div className = "footer-lower">
                    <div className = "footer-links-container">
                        <div className = "footer-links">
                            <div className = "section-title">Main</div>
                            <FooterLink link = "/about">About</FooterLink>
                            <FooterLink link = "/resources">Resources</FooterLink>
                            <FooterLink link = "/blog">Blog</FooterLink>
                            <FooterLink link = "/contact">Contact</FooterLink>
                        </div>
                        <div className = "footer-links">
                            <div className = "section-title">Useful Links</div>
                            <FooterLink link = "/about">About</FooterLink>
                            <FooterLink link = "/resources">Resources</FooterLink>
                            <FooterLink link = "/blog">Blog</FooterLink>
                            <FooterLink link = "/club">Club</FooterLink>
                        </div>
                    </div>
                    <div className = "newsletter">
                        <div className = "section-title">
                            Paly Python Newsletter
                        </div>
                        <div className = "newsletter-desc">
                            Recieve updates, inviations, and more from our weekly newsleter!
                        </div>
                        <div className = "email">
                            <input className = "email-submit" placeholder = "Enter email"></input>
                            <button className = "email-button">
                                <i className = "fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = "footer-legal-wrapper">
            <div className = "footer-legal">    
                Copyright © 2020 Paly Python. All rights reserved.
            </div>
        </div>
        <style jsx>{`
            .footer-wrapper {
                padding: 70px;
                width: 100%;

                background-color: rgb(247, 247, 247);
                border-top: 1px solid rgb(200, 200, 200);
            }

            .footer-legal-wrapper {
                padding: 20px 70px;

                background-color: rgb(247, 247, 247);
                border-top: 1px solid rgb(200, 200, 200);
            }

            .footer-legal {
                margin: auto;
                max-width: 1000px;
                color: rgb(120, 120, 120);
            }

            .footer-lower {
                display: flex;
                flex-direction: row;
            }

            .footer {
                max-width: 1000px;
                margin: auto;

      
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
            }

            .footer-links-container {
                display: flex;
                flex-direction: row;
                margin-bottom: 30px;
            }

            .footer-links {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                width: 170px;
            }

            .section-title {
                font-size: 1.3rem;
                margin-bottom: 20px;
            }

            .newsletter {
                
                display: flex;
                flex-direction: column;
                margin-left: 40px;
            }

            .newsletter-desc {
                color: rgb(80, 80, 80);
                margin-bottom: 10px;
            }

            .email {
                height: 36px;
                margin-top: 16px;
                display: flex;
                flex-direction: row;
            }

            .email-submit {
                height: 100%;
                width: 80%;
                border-radius: 8px 0 0 8px;
                border: 1px solid rgb(200, 200, 200);
                border-right: none;
                padding: 0 10px;
                font-size: 1rem;
            }

            .email-button {
                width: 36px;
                height: 36px;
                border-radius: 0 8px 8px 0;
                font-size: 1rem;
                background-color: rgb(240, 240, 240);
                border: 1px solid rgb(200, 200, 200);
                transition-duration: 250ms;
            }

            .email-button:hover {
                background-color: rgb(230, 230, 230);
            }

            @media only screen and (max-width: 950px) {
                .footer {
                    flex-direction: column !important;
                    padding: 0;
                }

                .footer > * {
                    width: 100% !important;
                    margin-top: 32px;
                }

                .footer-lower {
                    flex-direction: row;
                }

            }

            @media only screen and (max-width: 950px) {
                .footer {
                    flex-direction: column !important;

                }
            }

            @media only screen and (max-width: 700px) {
                .footer-lower {
                    flex-direction: column !important;
                }

                .newsletter {
                    margin-left: 0;
                }
            }
        `}</style>
    </>
)

// Exports

export default Footer
import React from 'react'

export default function Footer() {
  return (
    <div className="Footer -init">
        <img src="https://cdn.animaapp.com/projects/6267e8559ca4aeb9f7ac93aa/releases/6267e86e0561ee1dfacdc2c0/img/divder-1@1x.png" className="Footer -divider-image"/>
         <div className="Footer -footer-content">
            <div className="Footer -left-content">
                 <img src="https://cdn.animaapp.com/projects/6267e8559ca4aeb9f7ac93aa/releases/6267e86e0561ee1dfacdc2c0/img/logo@2x.png" className="Footer -logo-image"/>
                 <div className= "Footer -text-input">
                    <div className="Footer -title-news-letter">Subscribe to our newsletter</div>
                    <div className="Footer -primary-cta">
                        <input className="Footer -enter-your-emailid -body-text" placeholder="Enter your email ID"/>
                        <div className="Footer -send-button">Send</div>
                    </div>
                 </div>
            </div>
            <div className="Footer -right-content">
                 <div className="Footer -social-media">
                    <img src="https://cdn.animaapp.com/projects/6267e8559ca4aeb9f7ac93aa/releases/6267e86e0561ee1dfacdc2c0/img/live-links-1@2x.png" className="Footer -social-media-image"/>
                    <a href="#" target="_blank">
                        <div className="Footer -discord -mulish-bold-sunset-orange-30px -valign-text-middle">A</div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="Footer -facebook -mulish-bold-sunset-orange-30px -valign-text-middle">A</div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="Footer -dribble -mulish-bold-sunset-orange-30px -valign-text-middle">A</div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="Footer -instagram -mulish-bold-sunset-orange-30px -valign-text-middle">A</div>
                    </a>
                    <a href="#" target="_blank">
                        <div className="Footer -behence -mulish-bold-sunset-orange-30px -valign-text-middle">A</div>
                    </a>
                 </div>
                 <div className="Footer -title">
                        <div className="Footer -policy -lato-semi-bold-heavy-metal-14px -valign-text-middle">
                            Privacy Policy
                        </div>
                        <div className="Footer -groups">
                            <div className="Footer -subtitle -lato-semi-bold-heavy-metal-14px -valign-text-middle">
                             © Trainers 2022
                            </div>
                        </div>
                        <div className="Footer -cookies-policy -lato-semi-bold-heavy-metal-14px -valign-text-middle">
                            Cookies Policy
                        </div>
                 </div>
            </div>
         </div>

    </div>
  )
}

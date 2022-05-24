import React from 'react'

export default function Banner() {
  return (
     <div className="Banner -init">
         <div className="Banner -contentWrapper">
             <div className="Banner -leftcontent">
                 <div className="Banner -maintitle">
                     <div className="Banner -promoTitle -heading-1 -valign-text-middle">
                         Start to
                         <br/>
                         workout
                     </div>
                     <p className="Banner -promosubtitle -body-text">
                     This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                     </p>
                 </div>
                 <div className="Banner -primaryBtn"> Get Started</div>
             </div>

             <img className="Banner -girlImage" src="https://cdn.animaapp.com/projects/6267e8559ca4aeb9f7ac93aa/releases/6267e86e0561ee1dfacdc2c0/img/image@2x.png"/>

         </div>

     </div>
  )
}

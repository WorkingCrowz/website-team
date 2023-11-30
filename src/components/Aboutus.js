import React from 'react'

export default function Aboutus() {
    return (
        <div className="container-fluid background">
            <div className="container pt-3 ">
                <div className="row pt-5 pb-5">

                    <div className="col-md-5 offset-md-1 mx-3 my-3">

                        <div className="view overlay">
                            <img src="team-pic.jpg" className="img-fluid" alt="Team" />
                            <a href="/">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                    </div>

                    <div className="col-md-6 text-md-left ml-3 mt-3">
                        <h3 className="display-4 textbold text-white " >ABOUT US</h3>

                        <h4 className="h4 mb-4 text-white">We are Team Aviators International !</h4>
                        <p className="font-weight-normal text-white">Team Aviators International is the official
                            aero-modelling team of
                            VIT, Chennai. It comprises proficient, formidable and influenced engineers. We offer
                            comprehensive aircraft and drones design and engineering solutions with new innovations. We
                            customize our RC aircrafts to make them unique to achieve specific goals.

                            We work on two areas - RC airplanes and drones. We build both of them from scratch as well
                            as customize them according to the needs of our clients.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

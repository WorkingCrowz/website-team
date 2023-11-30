import React, { Component } from 'react'
import $ from 'jquery';

export default class Achievements extends Component {
    componentDidMount() {
        $(".step").click(function () {
            $(this).addClass("active").prevAll().addClass("active");
            $(this).nextAll().removeClass("active");
        });

        $(".step01").click(function () {
            $("#line-progress").css("width", "0%");
            $(".discovery").addClass("active").siblings().removeClass("active");
        });

        $(".step02").click(function () {
            $("#line-progress").css("width", "25%");
            $(".strategy").addClass("active").siblings().removeClass("active");
        });

        $(".step03").click(function () {
            $("#line-progress").css("width", "50%");
            $(".creative").addClass("active").siblings().removeClass("active");
        });

        $(".step04").click(function () {
            $("#line-progress").css("width", "75%");
            $(".production").addClass("active").siblings().removeClass("active");
        });

        $(".step05").click(function () {
            $("#line-progress").css("width", "100%");
            $(".analysis").addClass("active").siblings().removeClass("active");
        });
    }
    render() {
        return (
            <div className="cont-temp">
                <h3 className="display-4 textbold text-white text-center">OUR ACHIEVMENTS</h3>
                <br />
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul>
                            <li className="step step01 active"><div className="step-inner rpnv-hide">TATA MAKERTHON UAV </div></li>
                            <li className="step step02"><div className="step-inner rpnv-hide">MICRO CLASS AIRCRAFT 2018</div></li>
                            <li className="step step03"><div className="step-inner rpnv-hide">MICRO CLASS AIRCRAFT 2020</div></li>
                            <li className="step step04"><div className="step-inner rpnv-hide">SAE AERO DESIGN CHALLENGE</div></li>
                            <li className="step step05"><div className="step-inner rpnv-hide">ROBOZAR DRONE+ 2021</div></li>
                        </ul>

                        <div id="line">
                            <div id="line-progress"></div>
                        </div>
                    </div>

                    <div id="progress-content-section">
                        <div className="section-content discovery active">
                            <h2>TATA MAKERTHON UAV CHALLENGE</h2>
                            <p>Winner of the TATA Makerthon 2017-18 (UAV Challenge), we are forever proud of our Fully Autonomous Heavy Lifting Hexarotor: Orel. Modular design reduces the hassle of replacing the broken components. Components which are susceptible to breakage are easy to manufacture and replace. Required thrust is provided with high power, low KV, durable and efficient BLDC motors from Foxtech. Maximum thrust of all the motors combined is 81 KgF. Thus, our effective payload capacity is 25 Kg excluding the weight of the drone itself.</p>
                        </div>

                        <div className="section-content strategy">
                            <h2>MICRO CLASS AIRCRAFT 2018</h2>
                            <p>The length of the main structure is 29.30 inches. It has a wingspan of 1 m and a height of 8.80 inches. The aircraft is driven by a 1120 KV BLDC Motor and controlled by a 6 channel transmitter and receiver. Balsa wood is used for basic plane model. The weight of plane was 1.5 Kg. This aircraft marked the start of our journery into the world of SAE Aerodesign Challenge (Southern Section) that occurs annually.</p>
                        </div>

                        <div className="section-content creative">
                            <h2>MICRO CLASS AIRCRAFT 2020</h2>
                            <p>With a payload capacity of 1000 grams, this aircraft has the highest thrust to weight ratio out of all of our aircrafts so far. It has a length of 28.34 inches, a width of 3.07 inches and a height of 2.95 inches. Its wingspan is 1.2 meters. The fuselage design is similar to a simple boom fuselage with tapered end but with an elevated tail end for better airflow on the empennage. The aircraft runs using a X2814-1000KV BLDC motor. The weight of the aircraft without the payload is 800 grams. The Selig airfoil has been used in this aircraft. Despite the manufacturing difficulty of the airfoil, the wing of the aircraft was developed flawlessly.</p>
                        </div>

                        <div className="section-content production">
                            <h2>SAE AERO DESIGN CHALLENGE</h2>
                            <p>With a wingspan of 1.2m and total length of 756mm, the aircraft was capable of lifting  a total payload of 700grams. The aircraft was capable of conducting social distancing surveillance missions and informing the concerned authorities about the violations with the location and time details. Fitted with a onboard computer, the aircraft is capable of doing all the required computation for the mission. The plane was manufactured using balsa wood and coated with monokote sheets for smooth airflow. The BLDC motor and the servo motors in the aircraft were controlled using a 6 channel transmitter. The wing of the aircraft was manufactured in 3 parts for easy transportation</p>
                        </div>

                        <div className="section-content analysis">
                            <h2>ROBOZAR DRONE+ CHALLENGE 2021</h2>
                            <p>The hexarotor developed by the team is an agile unmanned medical assistance drone. The drone is capable of carrying heavy medical equipment like automated external defibrillators (AEDs) and other first aid requirements for the person in need. The hexarotor is capable of capable of accepting requests, automatically navigating to the desired destination within a time span of less than 10 minutes. The autonomous process makes it a lot easier for people to operate and help out people in need. According to studies, the chances of survival are boosted up to 90% if this drone is put to use.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
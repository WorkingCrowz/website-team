import React, { Component } from 'react'
import $ from 'jquery';

export default class Projects extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $("#des1").hide();
            $("#des2").hide();
            $("#des3").hide();
            $("#des4").hide();
            $("#des5").hide();
            $("#des6").hide();
        });
        $("#cr1").on('click', function () {
            $("#des1").toggle(300);
        });
        $("#card1").on('click', function () {
            $("#des1").toggle(300);
        });
        $("#cr2").on('click', function () {
            $("#des2").toggle(300);
        });
        $("#card2").on('click', function () {
            $("#des2").toggle(300);
        });
        $("#cr3").on('click', function () {
            $("#des3").toggle(300);
        });
        $("#card3").on('click', function () {
            $("#des3").toggle(300);
        });
        $("#cr4").on('click', function () {
            $("#des4").toggle(300);
        });
        $("#card4").on('click', function () {
            $("#des4").toggle(300);
        });
        $("#cr5").on('click', function () {
            $("#des5").toggle(300);
        });
        $("#card5").on('click', function () {
            $("#des5").toggle(300);
        });
        $("#cr6").on('click', function () {
            $("#des6").toggle(300);
        });
        $("#card6").on('click', function () {
            $("#des6").toggle(300);
        });
    }
    render() {
        return (
            <div className="spon-cont">
                <div className="container container-fluid pb-2 mt-5 " >
                    <h3 className="display-4 textbold text-white my-head text-center">OUR PROJECTS</h3>
                    <br />
                    {/* First Row */}
                    <div className="row row-cols-1 row-cols-md-3 top-row">

                        <div className="col md-6 whole-card" id="card1">
                            {/* Card */}
                            <div className="card card-zoom">

                                <div className="view overlay">
                                    <img className="card-img-top bot-radius nd" style={{ height: "154.28px" }} src="https://i.ibb.co/Xb2pDmd/orel2.jpg"
                                        alt="Card image cap" />
                                    <a id="but1">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </div>
                            <h5 className="text-css img-txt">Orel 2017</h5>
                        </div>
                        <div className="col md-6 whole-card" id="card2">
                            <div className="card card-zoom" >

                                <div className="view overlay">
                                    <img className="card-img-top bot-radius" src="https://i.ibb.co/LCpZcS2/Regular-Class-Anna-Univ.png"
                                        alt="Card image cap" />
                                    <a id="but2">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </div>
                            <h5 className="text-css img-txt">Micro Class Aircraft 2018</h5>
                        </div>
                        <div className="col md-6 whole-card" id="card3">
                            <div className="card card-zoom">

                                <div className="view overlay">
                                    <img className="card-img-top bot-radius" src="https://i.ibb.co/fdJtpfX/microclass.jpg"
                                        alt="Card image cap" />
                                    <a id="but3">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </div>
                            <h5 className="text-css img-txt">Micro Class Aircraft 2019</h5>
                        </div>
                    </div>
                    {/* Second Row */}

                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col md-6 whole-card" id="card4">
                            <div className="card card-zoom">
                                <div className="view overlay">
                                    <img className="card-img-top bot-radius" src="https://i.ibb.co/FXbX6yz/Regular.png"
                                        alt="Card image cap" />
                                    <a id="but4">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </div>
                            <h5 className="text-css img-txt">Regular Class Aircraft 2019</h5>
                        </div>

                        <div className="col md-6 whole-card" id="card5">
                            <div className="card card-zoom">

                                <div className="view overlay">
                                    <img className="card-img-top bot-radius" src="https://i.ibb.co/2tzjfYh/microclass2020.png"
                                        alt="Card image cap" />
                                    <a id="but5">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </div>
                            <h5 className="text-css img-txt">Micro Class Aircraft 2020</h5>
                        </div>
                        <div className="col md-6 whole-card" id="card6">
                            <div className="card card-zoom" >

                                <div className="view overlay">
                                    <img className="card-img-top bot-radius" src="Ipas.png"
                                        alt="Card image cap" />
                                    <a id="but6">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </div>
                            <h5 className="text-css img-txt">Inter Planetary Aerial System Challenge</h5>
                        </div>

                    </div>
                </div>

                {/* Description */}

                <div className="backdrop" id="des1">
                    <div className="infotemp">
                        <button className="cross" id="cr1"><span className="x">X</span></button>
                        <img src="https://i.ibb.co/Xb2pDmd/orel2.jpg" className="img-fluid proj-img" alt="..." />
                        <h1 className="text-css" id="head">Orel 2017</h1>
                        {/* <h4 className="text-css" id="sub-head">h4. MDB heading</h4> */}
                        <p className="text-css" id="proj-para">
                            Winner of the TATA Makerthon 2017-18 (UAV Challenge), we are forever proud of
                            our Fully Autonomous
                            Heavy Lifting Hexarotor: Orel. Modular design reduces the hassle of replacing
                            the broken components. Components
                            which are susceptible to breakage are easy to manufacture and replace. Required
                            thrust is provided with
                            high power, low KV, durable and efficient BLDC motors from Foxtech. Maximum
                            thrust of all the motors combined
                            is 81 KgF. Thus, our effective payload capacity is 25 Kg excluding the weight of
                            the drone itself.
                        </p>
                    </div>
                </div>
                <div className="backdrop" id="des2">
                    <div className="infotemp">
                        <button className="cross" id="cr2"><span className="x">X</span></button>
                        <img src="https://i.ibb.co/LCpZcS2/Regular-Class-Anna-Univ.png" className="img-fluid proj-img" alt="..." />
                        <h1 className="text-css" id="head">Micro Class Aircraft 2018</h1>
                        {/* <h4 className="text-css" id="sub-head">h4. MDB heading</h4> */}
                        <p className="text-css" id="proj-para">
                            The length of the main structure is 29.30 inches. It has a wingspan of 1 m and a
                            height of 8.80 inches.
                            The aircraft is driven by a 1120 KV BLDC Motor and controlled by a 6 channel
                            transmitter and receiver. Balsa wood is used for basic plane model. The weight
                            of plane was 1.5 Kg.
                            This aircraft marked the start of our journery into the world of SAE Aerodesign
                            Challenge (Southern Section) that
                            occurs annually.
                        </p>
                    </div>
                </div>
                <div className="backdrop" id="des3">
                    <div className="infotemp">
                        <button className="cross" id="cr3"><span className="x">X</span></button>
                        <img src="https://i.ibb.co/fdJtpfX/microclass.jpg" className="img-fluid proj-img" alt="..." />
                        <h1 className="text-css" id="head">Micro Class Aircraft 2019</h1>
                        {/* <h4 className="text-css" id="sub-head">h4. MDB heading</h4> */}
                        <p className="text-css" id="proj-para">
                            Winner of the 3rd Prize of the Innovation Challenge at SAE Aerodesign Challenge
                            2019, the total length of
                            the aircraft is 26.18 inches, width is 2.36 inches and the height is 2.95
                            inches.
                            It has a wingspan of 1.3 m. The aircraft is driven by a 1000 KV BLDC Motor and
                            controlled by a 6 channel
                            transmitter and receiver. Balsa wood is used for basic plane model with the help
                            of PVC pipe for structure stability
                            and monokote is used for entire sheeting of aircraft. The entire weight without
                            payload is 800 g. The innovation in this aircraft
                            was that its wing was made in 3 parts which were then joined together using 3D
                            printed nuts and bolts.
                        </p>
                    </div>
                </div>
                <div className="backdrop" id="des4">
                    <div className="infotemp">
                        <button className="cross" id="cr4"><span className="x">X</span></button>
                        <img src="https://i.ibb.co/FXbX6yz/Regular.png" className="img-fluid proj-img" alt="..." />
                        <h1 className="text-css" id="head">Regular Class Aircraft 2019</h1>
                        {/* <h4 className="text-css" id="sub-head">h4. MDB heading</h4> */}
                        <p className="text-css" id="proj-para">
                            The total length of aircraft is approximately 152.56 inches (387.514cm), the
                            wing span is 86.61 inches (2.2m)
                            and the height is 21.412 inches (543.89mm). The aircraft is driven by a 520 KV
                            BLDC Motor and controlled by a 6 channel
                            transmitter and receiver. Balsa wood is used for basic plane model with the help
                            of PVC pipe for structure stability
                            and monokote is used for entire sheeting of aircraft. The entire weight without
                            payload is 3.4 Kg.
                        </p>
                    </div>
                </div>
                <div className="backdrop" id="des5">
                    <div className="infotemp">
                        <button className="cross" id="cr5"><span className="x">X</span></button>
                        <img src="https://i.ibb.co/2tzjfYh/microclass2020.png" className="img-fluid proj-img" alt="..." />
                        <h1 className="text-css" id="head">Micro Class Aircraft 2020</h1>
                        {/* <h4 className="text-css" id="sub-head">h4. MDB heading</h4> */}
                        <p className="text-css" id="proj-para">
                            With a payload capacity of 1000 grams, this aircraft has the highest thrust to
                            weight ratio out of all of our
                            aircrafts so far. It has a length of 28.34 inches, a width of 3.07 inches and a
                            height of 2.95 inches.
                            Its wingspan is 1.2 meters. The fuselage design is similar to a simple boom
                            fuselage with tapered end but
                            with an elevated tail end for better airflow on the empennage. The aircraft runs
                            using a X2814-1000KV BLDC motor.
                            The weight of the aircraft without the payload is 800 grams. The Selig airfoil
                            has been used in this aircraft.
                            Despite the manufacturing difficulty of the airfoil, the wing of the aircraft
                            was developed flawlessly.
                        </p>
                    </div>
                </div>
                <div className="backdrop" id="des6">
                    <div className="infotemp">
                        <button className="cross" id="cr6"><span className="x">X</span></button>
                        <img src="IPASmain.png" className="img-fluid proj-img" alt="..." />
                        <h1 className="text-css" id="head">Inter Planetary Aerial System Challenge</h1>
                        {/* <h4 className="text-css" id="sub-head">h4. MDB heading</h4> */}
                        <p className="text-css" id="proj-para">
                            HAVIK, the drone developed for IPAS is an Unmanned Aerial Vehicle designed specially to withstand Martian atmospheric conditions and carry out payload, 360° orthophotography and atmospheric analysis missions. Foldable arms and landing skids facilitate faster deployment and compact transportation, and the carbon fibre frame protects the on-board computer which acts as an interface for the camera, flight controllers, and other components.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

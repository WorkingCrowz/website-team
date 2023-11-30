import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
                <div className="row pt-5 pb-5" id="home-car" style={{backgroundImage: 'url("drone.png")'}}>

                    {/* mobile */}
                    <div className="view" id="view-car" style={{backgroundImage: 'url("dronemob.png")'}}>
                        <div className="carousel-txt-overlay pl-3">
                            <h1 className="display-4 textsemibold rpnv-txt1">Team Aviators International</h1>
                            <p className=" rpnv-txt2">WE TALK IN MACHS!</p>
                        </div>
                    </div>
                    {/* pc */}
                    <div className="carousel-txt-overlay" id="hide-mob">
                        <h1 className="display-4 textsemibold">Team Aviators International</h1>
                        <p>WE TALK IN MACHS!</p>
                        <a className="btn btn-ylw textsemibold" role="button" href="/#/project">View Projects</a>
                    </div>
                        
                </div>
        )
    }
}
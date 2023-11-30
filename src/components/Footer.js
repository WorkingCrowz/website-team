import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer font-small pt-4 background">

            <div className="container-fluid text-center text-md-left mt-5">

                <div className="row mt-3">

                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 className="text-uppercase font-weight-bold">Team Aviators International</h6>
                        <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>Team Aviators International is the official Aeromodelling team of VIT Chennai, that focuses on introducing new innovations.</p>
                        <h6 className="pt-3 mb-3 textsemibold">Get connected :</h6>
                        {/* <!-- Facebook --> */}
                        <a className="fb-ic" href="https://www.facebook.com/AviatorsInternational" target="_blank">
                            <i className="fab fa-facebook-f white-text mr-4"> </i>
                        </a>
                        {/* <!-- Google +--> */}
                        <a className="gplus-ic"
                            href="https://www.google.com/search?source=hp&ei=WSj9XbGUONCy9QOZ1InICg&q=team+aviators+international&btnK=Google+Search&oq=youtube.com&gs_l=psy-ab.3..0j0i131j0j0i131j0l3j0i131j0l2.1643.4948..5218...0.0..0.160.1223.1j10......0....1..gws-wiz.FVfhRk8yl9o&ved=0ahUKEwjxpNiHgsXmAhVQWX0KHRlqAqkQ4dUDCAY&uact=5#btnK=Google%20Search"
                            target="_blank">
                            <i className="fab fa-google white-text mr-4"> </i>
                        </a>
                        {/* <!--Linkedin --> */}
                        <a className="li-ic" href="https://www.linkedin.com/company/team-aviators-international/"
                            target="_blank">
                            <i className="fab fa-linkedin-in white-text mr-4"> </i>
                        </a>
                        {/* <!--Instagram--> */}
                        <a className="ins-ic" href="https://www.instagram.com/teamaviatorsinternational/?hl=en" target="_blank">
                            <i className="fab fa-instagram white-text mr-4"> </i>
                        </a>
                        {/* Youtube */}
                        <a className="ins-ic" href="https://www.youtube.com/channel/UCevoVmjAEpPY4JLs3Pvxz2A" target="_blank">
                            <i className="fab fa-youtube white-text"></i>
                        </a>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <i className="fas fa-home mr-3"></i> VIT University Chennai Campus,
                            Kelambakkam - Vandalur Rd,
                            Chennai, TN 600127
                        </p>
                        <p><a href="mailto:teamaviatorsinternational@gmail.com">
                            <i className="fas fa-envelope mr-3"></i> teamaviatorsinternational@gmail.com </a>
                        </p>
                        <p><a href="tel:+ 91 98929 02383">
                            <i className="fas fa-phone mr-3"></i> +91 76665 87219</a>
                        </p>
                        <p><a href="#" data-toggle="modal" data-target="#modalDoubtForm">
                            <i className="fas fa-question mr-3"></i> Have Any Further Doubts</a>
                        </p>
                    </div>
                    <div className="col-md-4 ">
                        <h6 className="text-uppercase font-weight-bold">Find Us</h6>
                        <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <div id=" map-container-google-1" style={{ height: ' 120px' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=VIT%20CHENNAI&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" className="mob-align" scrolling="no" allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-copyright text-center py-3 textsemibold mt-3">© 2021 Copyright:
                TEAM AVIATORS INTERNATIONAL
            </div>
        </footer >

    )

}

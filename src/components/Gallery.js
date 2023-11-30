import React, { Component } from 'react'
import $ from 'jquery';

export default class Gallery extends Component {
    
    componentDidMount()
    {
        // MDB Lightbox Init
        $(document).ready(function(){
            $("#full1").hide();
            $("#full2").hide();
            $("#full3").hide();
            $("#full4").hide();
            $("#full5").hide();
            $("#full6").hide();
            $("#full7").hide();
            $("#full8").hide();
            $("#full9").hide();
            $("#full10").hide();
            $("#full11").hide();
            $("#full12").hide();
            $("#full13").hide();
            $("#full14").hide();
            $("#full15").hide();
        });
        $("#gacr1").on('click',function(){
            $("#full1").toggle(300);
        });
        $("#imgtile1").on('click',function(){
            $("#full1").toggle(300);
        });
        $("#gacr2").on('click',function(){
            $("#full2").toggle(300);
        });
        $("#imgtile2").on('click',function(){
            $("#full2").toggle(300);
        });
        $("#gacr3").on('click',function(){
            $("#full3").toggle(300);
        });
        $("#imgtile3").on('click',function(){
            $("#full3").toggle(300);
        });
        $("#gacr4").on('click',function(){
            $("#full4").toggle(300);
        });
        $("#imgtile4").on('click',function(){
            $("#full4").toggle(300);
        });
        $("#gacr5").on('click',function(){
            $("#full5").toggle(300);
        });
        $("#imgtile5").on('click',function(){
            $("#full5").toggle(300);
        });
        $("#gacr6").on('click',function(){
            $("#full6").toggle(300);
        });
        $("#imgtile6").on('click',function(){
            $("#full6").toggle(300);
        });
        $("#gacr7").on('click',function(){
            $("#full7").toggle(300);
        });
        $("#imgtile7").on('click',function(){
            $("#full7").toggle(300);
        });
        $("#gacr8").on('click',function(){
            $("#full8").toggle(300);
        });
        $("#imgtile8").on('click',function(){
            $("#full8").toggle(300);
        });
        $("#gacr9").on('click',function(){
            $("#full9").toggle(300);
        });
        $("#imgtile9").on('click',function(){
            $("#full9").toggle(300);
        });
        $("#gacr10").on('click',function(){
            $("#full10").toggle(300);
        });
        $("#imgtile10").on('click',function(){
            $("#full10").toggle(300);
        });
        $("#gacr11").on('click',function(){
            $("#full11").toggle(300);
        });
        $("#imgtile11").on('click',function(){
            $("#full11").toggle(300);
        });
        $("#gacr12").on('click',function(){
            $("#full12").toggle(300);
        });
        $("#imgtile12").on('click',function(){
            $("#full12").toggle(300);
        });
        $("#gacr13").on('click',function(){
            $("#full13").toggle(300);
        });
        $("#imgtile13").on('click',function(){
            $("#full13").toggle(300);
        });
        $("#gacr14").on('click',function(){
            $("#full14").toggle(300);
        });
        $("#imgtile14").on('click',function(){
            $("#full14").toggle(300);
        });
        $("#gacr15").on('click',function(){
            $("#full15").toggle(300);
        });
        $("#imgtile15").on('click',function(){
            $("#full15").toggle(300);
        });
    }
    render() {
        return (
            <div className="spon-cont">
                <div className="container container-fluid pb-2 mt-4 " >
                    <h3 className="display-4 textbold text-white text-center" id="gal-head">GALLERY</h3>
                    <br />
                    <div className="gal-cont">
                        <button className="gal-img-cont" id="imgtile1">
                            <img src="https://i.ibb.co/m4yc8SX/IMG-20181102-134417.jpg" className="gal-img" data-sizes/>
                        </button>
                        <button className="gal-img-cont" id="imgtile2">
                            <img src="https://i.ibb.co/0FBfVgh/IMG-20181102-134551.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile3">
                            <img src="https://i.ibb.co/SnvQjvr/IMG-20190716-171135.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile4">
                            <img src="https://i.ibb.co/D8n9Zh4/IMG-20190716-171152-Bokeh.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile5">
                            <img src="https://i.ibb.co/0B2SVGp/IMG-20190719-160947.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile6">
                            <img src="https://i.ibb.co/NVkHHSY/IMG-20190719-160957.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile7">
                            <img src="https://i.ibb.co/r43ShSB/IMG-20190721-174503.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile8">
                            <img src="https://i.ibb.co/Q64G4rv/IMG-20200228-120559.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile9">
                            <img src="https://i.ibb.co/Hpy354T/IMG-20190924-181542.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile10">
                            <img src="https://i.ibb.co/xLKR0NF/IMG-20200227-061822.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile11">
                            <img src="https://i.ibb.co/Fx1027H/IMG-20200228-120212.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile12">
                            <img src="https://i.ibb.co/vVP19SJ/IMG-20180411-WA0002.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile13">
                            <img src="https://i.ibb.co/hKc3cCR/IMG-20180321-WA0019.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile14">
                            <img src="https://i.ibb.co/0hCJtfD/IMG-20180321-WA0014.jpg" className="gal-img"/>
                        </button>
                        <button className="gal-img-cont" id="imgtile15">
                            <img src="https://i.ibb.co/9ZV8sRw/IMG-20180321-WA0020.jpg" className="gal-img"/>
                        </button>
                    </div>

                    {/* The actual images */}

                    <div className="backdrop" id="full1">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr1"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/m4yc8SX/IMG-20181102-134417.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full2">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr2"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/0FBfVgh/IMG-20181102-134551.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full3">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr3"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/SnvQjvr/IMG-20190716-171135.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full4">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr4"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/D8n9Zh4/IMG-20190716-171152-Bokeh.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full5">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr5"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/0B2SVGp/IMG-20190719-160947.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full6">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr6"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/NVkHHSY/IMG-20190719-160957.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full7">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr7"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/r43ShSB/IMG-20190721-174503.jpgg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full8">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr8"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/Q64G4rv/IMG-20200228-120559.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full9">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr9"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/Hpy354T/IMG-20190924-181542.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full10">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr10"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/xLKR0NF/IMG-20200227-061822.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full11">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr11"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/Fx1027H/IMG-20200228-120212.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full12">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr12"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/vVP19SJ/IMG-20180411-WA0002.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full13">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr13"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/hKc3cCR/IMG-20180321-WA0019.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full14">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr14"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/0hCJtfD/IMG-20180321-WA0014.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                    <div className="backdrop" id="full15">
                        <div className="gal-full-img-cont">
                            <button className="cross" id="gacr15"><span className="x">X</span></button>
                            <img src="https://i.ibb.co/9ZV8sRw/IMG-20180321-WA0020.jpg" className="img-fluid gal-full-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

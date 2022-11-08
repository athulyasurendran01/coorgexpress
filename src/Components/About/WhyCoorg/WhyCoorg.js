import Banner from "../../Common/Banner"
import './WhyCoorg.css'
import AboutGallery from "../AboutGallery/AboutGallery"

function WhyCoorg() {
    return (
        <>
            <Banner category={'about'}/>
            <section id="property-single-gallery" className="property-single-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="property-single-carousel inner-box about-page-sec">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">Stays, Wilderness, Adventures and Experiences</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>Not just for great price and value,You should be on Coorgexpress.com because we showcase:</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">HANDPICKED STAYS</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>The SCOTLAND OF INDIA offers unique home stays and hotels to hide amidst the mist kissed coffee estates in tranquillity, our options will provide you with the most authentic experience possible and will always reflect the local character and spirit of your stay. Drink freshly brewed coffee from the backyard and unwind at dusk with local folk music & bonfire sipping on country made wine.</p>
                                                <p>Each Stay listed is personally visited & verified and met our standards.</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">FASCINATING WILDERNESS</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>Come get lost in the most amazing stretches of forest land the country has to offer, NAGARHOLE & DUBARE with their vast expanse of woodland and a haven for Wildlife. Come stalk the elusive big cat, see the tusker at Dubare and get intimate and up close with it or lose yourself in the stunningly beautiful bird life.</p>
                                                <p>Our Nature tours are conducted be expert naturalist with in depth knowledge.</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">UNBELIEVABLE ADVENTURES</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>Come with your hiking shoes to stroll through some aromatic coffee plantation or get your Adeline fix through a host of adventure sports, from forest trekking to river rafting.</p>
                                                <p>We offer camping, Cycling, Trekking and other host of adventures to select from.</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">UNIQUE EXPERIENCES</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>We pioneer in the offbeat experiences and give a personalized touch to our travellers seeking exclusive Tours. We conduct tours such as Birding ,Cookery, Bee keeping & Other Unconventional experiences.</p>
                                                <p>Go local and experience best of Coorg.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12" style={{"margin-top" : "50px" }}>
                                        <AboutGallery />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 text-left prev-page">
                                            <a href="our-story">
                                                <h3><i className="fa fa-arrow-left"></i>Our story</h3>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 text-right next-page">
                                            <a href="responsible-tourism">
                                                <h3>Responsible Tourism<i className="fa fa-arrow-right"></i></h3>
                                            </a>
                                        </div>
                                    </div>
                                        
                                </div>
                                

                                
                            </div>
                        </div>
                        </div>
            </section>        


        </>
    )
}

export default WhyCoorg
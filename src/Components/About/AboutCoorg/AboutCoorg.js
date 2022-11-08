import Banner from "../../Common/Banner"
import './AboutCoorg.css'
import AboutGallery from "../AboutGallery/AboutGallery"

function AboutUs() {
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
                                                <h2 className="heading--title">Coorg - About People Culture</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>The wonder that India is elegantly bestowed is with number of hill stations that can offer you respite from the blazing heat and giving you rejuvenating and inspiring experience amidst the comforting environments of the hills and some very pleasing people to host you. Coorg calls...! Take a time off and explore this little land flourishing in all its abundance of nature and tranquillity.</p>
                                                <p>Kodagu or the anglicized Coorg was once hailed as the “Scotland of India “.The tiny district in southern Karnataka is a rich agricultural Land .With an Ancient heritage that has influences of to the erstwhile colonial Rule.</p>
                                                <p>The land of Coorg is a different facet of India: unsullied, beautiful, green, and exciting with the lovely blue Sahyadri Mountains, dense forested valleys, gurgling mountain streams and waterfalls. It is the land of coffee resplendent with red berries, cardamom fields covered with white and purple blossoms, long stretches of paddy fields, old silver oak trees laden with huge hives, and of a sturdy handsome people called the Coorgs, who charm by their hospitality and cuisine, their intriguing customs and the reverence with which they worship their river, the Cauvery.</p>
                                                <p>The hill station of Coorg in the Western Ghats of Karnataka unveils like a Pandora box, where there is something for everyone. From the nature buffs to tranquillity loving folks, religiously inclined to honeymooners and audacious souls, Coorg is an ideal place for everyone. Coorg due to its location has various sightseeing places and adventure activities for adrenaline junkies. It can also be your quiet escape.Trekking,Zip line rafting , Kayaking , Coffee plantation tours ,Experiential kodava Dining , jungle safari , sport fishing camping you’ve got it all . In addition, there are number of traveller attractions in vicinity like Madikeri Fort, Abbi Falls, Iruppu Falls, Talakaveri, Bhagamandala, Padi Iggutappa Temple, Somwarpet, Little Tibet (Tibetan refugee's colony). To make your stay in Coorg unforgettable we have number of adventures and experience Packages minutely crafted to suit the new as well as the frequent travellers.</p>
                                                <p>Coorg has a pleasant climate throughout the year; the best time to visit Coorg depends on what activities you would like to do. Rain in Coorg lasts from June to October, during this time the vegetation is lush green, the streams and waterfalls are full. This is the time to go rafting. Trekking and camping become is done on the drier months of year.</p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">Ethnic Kodavas</h2>
                                            </div>
                                            <div className="property--details">
                                                <p>The Kodavas or the Coorgs are primarily a warrior community. Over the centuries,
                                                     many of the Royal dynasties of South India, Including the Kadambas, the Gangas, 
                                                     the cholas, and the hoysalas ruled the Kodagu region, influencing the original 
                                                     culture and customs of the Kodavas.The Kodavas have immensely contributed to the 
                                                     Indian Army and to the game of field Hockey
                                                    The Kodavas are worshipers of ancestors and traditionally celebrate festivals.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="heading">
                                                <h2 className="heading--title">Land of Rich Produce</h2>
                                            </div>
                                            <div className="property--details">
                                                <ul>
                                                    <li><strong>Coffee</strong> - The World’s Best Shade-Grown ’Mild’ Coffee. Coorg coffee is the most extraordinary of beverages, offering intriguing subtlety and stimulating intensity. India is the only country that grows all of its coffee under shade. Typically mild and not too acidic, these coffees possess an exotic full-bodied taste and a fine aroma. Coorg produces more coffee — Arabica and Robusta, the two main varieties of beans grown for consumption.</li>
                                                    <li><strong>Spices</strong> - Pepper & Cardamom are two widely grown spices in Coorg. Apart from these, Bird Eye Chili usually grown wild in the coffee states and a basic ingredient to the all the local delicacies.</li>
                                                    <li><strong>Fruits</strong> - Rain forest fruits like Oranges, Bitter lime, Avocados, Jack fruit, Rain forest Plum and many more are found plenty in Coorg.</li>
                                                    <li><strong>Honey</strong> - Coorg Honey is one of the best in India. Apart from extracting honey by beekeeping Coorg honey is also extracted from the wild Woods.</li>
                                                </ul>
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
                                            <a href="responsible-tourism">
                                                <h3><i className="fa fa-arrow-left"></i>Responsible Tourism</h3>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 text-right next-page">
                                            <a href="our-story">
                                                <h3>Our Story<i className="fa fa-arrow-right"></i></h3>
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

export default AboutUs
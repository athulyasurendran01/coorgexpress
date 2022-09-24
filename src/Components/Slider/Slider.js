import Carousel from 'react-bootstrap/Carousel';

import slider1 from '../../assets/images/home/slider_1.png'
// import slider2 from '../../assets/images/home/slider_2.png'
// import slider3 from '../../assets/images/home/3.jpg'

function Slider({sliderItem}) {
    return (
        <section id="hero">
            <Carousel>
                { sliderItem && sliderItem.map((slide, idx) => {
                    return (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={slider1}
                                alt={slide.Slider.title}
                            />
                            <Carousel.Caption>
                                <h3>{slide.Slider.title}</h3>
                                <p>{slide.Slider.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default Slider
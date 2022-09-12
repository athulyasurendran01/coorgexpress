import Carousel from 'react-bootstrap/Carousel';

import slider1 from '../../assets/images/home/slider_1.png'
// import slider2 from '../../assets/images/home/slider_2.png'
// import slider3 from '../../assets/images/home/3.jpg'

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sliders, getHomepage } from '../../reducers/slider';

function Slider() {
    const dispatch = useDispatch();
    const slider = useSelector(sliders);

    useEffect(() => {
        dispatch(getHomepage(0))
    }, [])

    return (
        <section id="hero">
            <Carousel>
                {slider[0] && slider[0].map((slide, idx) => {
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
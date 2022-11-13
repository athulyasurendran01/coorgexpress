import Carousel from 'react-bootstrap/Carousel';
function Slider({ sliderItem }) {
    return (
        <section id="hero">
            <Carousel>
                {sliderItem && sliderItem.map((slide, idx) => {
                    const imageURL = `https://www.coorgexpress.com/${slide.file_path}/${slide.file_name}`
                    return (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={imageURL}
                                alt={slide.title}
                            />
                            <Carousel.Caption>
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default Slider
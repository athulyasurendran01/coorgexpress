import React from "react";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/400/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/400/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1026/1000/400/',
      thumbnail: 'https://picsum.photos/id/1026/250/150/',
    }
  ];

class ImageSliderComponent extends React.Component {

  render() {
    return (
        <div className="wrapper">
            <ImageGallery items={images} />
        </div>
    );
  }
}
export default ImageSliderComponent;
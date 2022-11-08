import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { useEffect } from 'react';
import { serverURL_ } from "../../app/Config"

function ImageSliderComponent({ images }) {
  const gallery = []

  useEffect(() => {
    for (const [key, value] of Object.entries(images)) {
      if (value.hasOwnProperty('file_path')) {
        gallery.push({
          original: `${serverURL_}/${value.file_path}/${value.file_name}`,
          thumbnail: `${serverURL_}/${value.file_path}/${value.file_name}`,
        })
      }
    }
  })
  return (
    <div className="wrapper">
      <ImageGallery items={gallery ? gallery : []} />
    </div>
  );
}
export default ImageSliderComponent;
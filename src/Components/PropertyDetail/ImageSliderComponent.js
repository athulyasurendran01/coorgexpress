import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { useEffect } from 'react';


function ImageSliderComponent({ images }) {
  const gallery = []
  let URL = `https://www.coorgexpress.com/`

  useEffect(() => {
    console.log(images)
    for (const [key, value] of Object.entries(images)) {
      if (value.hasOwnProperty('file_path')) {
        gallery.push({
          original: `${URL}${value.file_path}/${value.file_name}`,
          thumbnail: `${URL}${value.file_path}/${value.file_name}`,
        })
      }
    }


    console.log(gallery)
  })
  return (
    <div className="wrapper">
      <ImageGallery items={gallery ? gallery : []} />
    </div>
  );
}
export default ImageSliderComponent;
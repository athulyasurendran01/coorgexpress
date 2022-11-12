import './Loader.css'
import LoaderImg from '../../assets/images/coorgexpress_loader.png'

function Loader() {
    return(
        <div className="loaderDiv">
            <img src={LoaderImg} className="loadder"/>
        </div>
    )
}

export default Loader
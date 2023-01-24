import './Loader.css'
import LoaderImg from '../../assets/images/coorgexpress_loader.gif'

function Loader() {
    return(
        <div className="loaderDiv">
            <img src={LoaderImg} className="loadder"/>
        </div>
    )
}

export default Loader
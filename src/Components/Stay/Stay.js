import Banner from "../Common/Banner"
import PropertyTypeStrip from "../Common/PropertyTypeStrip"
import Loader from "../Loader/Loader"

function Stay() {
    return(
        <>
            <Banner category={'stay'} />
            {/*<Loader />*/}
            <PropertyTypeStrip category={'stay'}/>
        </>
    )
}

export default Stay
import Banner from "../Common/Banner"
import PropertyTypeStrip from "../Common/PropertyTypeStrip"

function Stay({propertyHighlight}) {
    return(
        <>
            <Banner category={'stay'} />
            <PropertyTypeStrip propertyHighlight={propertyHighlight}/>
        </>
    )
}

export default Stay
import Banner from "../Common/Banner"
import PropertyTypeStrip from "../Common/PropertyTypeStrip"

function Experiences({propertyHighlight}) {
    return(
        <>
            <Banner category={'experience'} />
            <PropertyTypeStrip propertyHighlight={propertyHighlight} category={'experience'}/>
        </>
    )
}
export default Experiences
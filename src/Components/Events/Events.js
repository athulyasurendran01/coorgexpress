import Banner from "../Common/Banner"
import PropertyTypeStrip from "../Common/PropertyTypeStrip"

function Events({propertyHighlight}) {
    return (
        <>
            <Banner category={'events'} />
            <PropertyTypeStrip propertyHighlight={propertyHighlight}/>
        </>
    )
}
export default Events
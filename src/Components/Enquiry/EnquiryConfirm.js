import { useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { serverURL_ } from "../../app/Config"

function EnquiryConfirm() {
    const search = useLocation().search;
    const navigate = useNavigate()

    const getDate = () => {
        let bookingdate = new URLSearchParams(search).get('daterange').split(' - ')
        return bookingdate;
    }
    
    useEffect(() => {
        //let bannerURL = `${serverURL_}/${propertyDetails.data[0].file_path}/${propertyDetails.data[0].file_name}`
        const bookingDetails = {
            name: new URLSearchParams(search).get('name'),
            image: new URLSearchParams(search).get('image'),
            daterange: getDate(),
            check_in_time: new URLSearchParams(search).get('check_in_time'),
            check_out_time: new URLSearchParams(search).get('check_out_time'),
            no_guest: new URLSearchParams(search).get('no_guest'),
            no_guest_child: new URLSearchParams(search).get('no_guest_child') ? new URLSearchParams(search).get('no_guest_child') : 0,
            extraBedNo: new URLSearchParams(search).get('extraBedNo'),
            extrabedPrice: new URLSearchParams(search).get('extrabedPrice'),
            total: new URLSearchParams(search).get('total'),
            category: 'stay'
        }
        navigate('/booking', { state: bookingDetails })
    })

    return (
        <p>Enquiry Confirmation</p>
    )
}

export default EnquiryConfirm
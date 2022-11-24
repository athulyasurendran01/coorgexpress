import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { serverURL_ } from "../../app/Config"

function EnquiryConfirm() {
    const search = useLocation().search;
    const navigate = useNavigate()

    useMemo(() => {
        //let bannerURL = `${serverURL_}/${propertyDetails.data[0].file_path}/${propertyDetails.data[0].file_name}`
        const bookingDetails = {
            name: new URLSearchParams(search).get('name'),
            image: new URLSearchParams(search).get('image'),
            daterange: new URLSearchParams(search).get('daterange'),
            check_in_time: new URLSearchParams(search).get('check_in_time'),
            check_out_time: new URLSearchParams(search).get('check_out_time'),
            no_guest: new URLSearchParams(search).get('no_guest'),
            no_guest_child: new URLSearchParams(search).get('no_guest_child'),
            no_guest_infant: new URLSearchParams(search).get('no_guest_infant'),
            total: new URLSearchParams(search).get('total'),
            category: 'stay'
        }
        navigate('/booking', { state: bookingDetails })
    }, [])

    return (
        <p>Enquiry Confirmation</p>
    )
}

export default EnquiryConfirm
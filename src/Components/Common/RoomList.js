import { useMemo, useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./RoomList.css";

const getFormattedPrice = (price) => `₹${price.toFixed(2)}`;

export default function RoomList({ rooms, handleChange, checkRooms, handleExtrabedChange }) {
    const [checkedState, setCheckedState] = useState(
        new Array(rooms.length).fill(false)
    );

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Including Room Rent and Extra bed charge
        </Tooltip>
    );


    const [total, setTotal] = useState(0);
    const [extraBedTotal, setExtraBedTotal] = useState(0);
    const [extrabedCount, setExtrabed] = useState([]);

    const handleOnChange = (e, position, type) => {
        if (type === 'room') {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);

            const totalPrice = updatedCheckedState.reduce(
                (sum, currentState, index) => {
                    if (currentState === true) {
                        return sum + parseFloat(rooms[index].room_base_price);
                    }
                    return sum;
                },
                0
            );

            setTotal(totalPrice);
            handleChange(e)
        } else {
            setExtrabed([...extrabedCount, {
                roomId: rooms[position].id,
                noBed: parseInt(e.target.value),
                price: parseInt(e.target.value) * parseFloat(rooms[position].extra_bed_charge ? rooms[position].extra_bed_charge : 0)
            }])
        }
    };
    useMemo(() => {
        const res = [...extrabedCount.reduce((a, c) => {
            a.set(c.roomId, c);
            return a;
        }, new Map()).values()];

        let bedTotal = res.reduce((accum, item) => accum + item.price, 0)
        let noBedTotal = res.reduce((accum, item) => accum + item.noBed, 0)
        setExtraBedTotal(bedTotal)
        handleExtrabedChange(noBedTotal, bedTotal)
    }, [extrabedCount])

    return (
        <div className="App">
            <h6>Select Rooms</h6>
            <ul className="toppings-list">
                {rooms.map(({ no_of_bed, id, room_no_name, room_base_price, extra_bed_charge }, index) => {
                    return (
                        <li key={index}>
                            {checkRooms(id) ?
                                <>
                                    <div className="toppings-list-item">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                name={room_no_name}
                                                value={index}
                                                checked={checkedState[index]}
                                                onChange={(e) => handleOnChange(e, index, 'room')}
                                            />
                                            <label htmlFor={`custom-checkbox-${index}`}>{room_no_name}</label>
                                        </div>
                                        <div className="right-section" 
                                        style={{fontWeight: "700"}}
                                        >{getFormattedPrice(parseFloat(room_base_price))}</div>
                                    </div>

                                    {checkedState[index] &&
                                        <select 
                                        style={{marginTop : "10px", marginBottom: "5px"}}
                                        onChange={(e) => {
                                            handleOnChange(e, index, 'bed')
                                        }}>
                                            <option value={0} disabled={true} selected={true}>Select extra bed</option>
                                            <option value={0}>Nill</option>
                                            {
                                                Array.from({ length: parseInt(no_of_bed) }).map((_, idx) => (
                                                    <option value={idx + 1} key={idx}>{idx + 1}</option>
                                                ))}
                                        </select>

                                    }
                                </>
                                : ''}
                        </li>
                    );

                })}
                <li className="li-total">
                    <div className="toppings-list-item">
                        <div className="left-section"><span className="total"
                        style={{marginRight : "10px"}}
                        >Total:</span><span>(Per night)</span></div>
                        <div className="right-section total">{getFormattedPrice(total + extraBedTotal)}</div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <span className="tooltip_btn">!</span>
                        </OverlayTrigger>

                    </div>
                </li>
            </ul>
        </div>
    );
}

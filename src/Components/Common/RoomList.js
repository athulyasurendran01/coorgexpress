import { useState } from "react";
import "./RoomList.css";

const getFormattedPrice = (price) => `₹${price.toFixed(2)}`;

export default function RoomList({ rooms, handleChange, checkRooms }) {
    const [checkedState, setCheckedState] = useState(
        new Array(rooms.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (e, position) => {
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
    };

    return (
        <div className="App">
            <h6>Select Rooms</h6>
            <ul className="toppings-list">
                {rooms.map(({ id, room_no_name, room_base_price }, index) => {
                    return (
                        <li key={index}>
                            {checkRooms(id) ?
                                <div className="toppings-list-item">
                                    <div className="left-section">
                                        <input
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={room_no_name}
                                            value={index}
                                            checked={checkedState[index]}
                                            onChange={(e) => handleOnChange(e, index)}
                                        />
                                        <label htmlFor={`custom-checkbox-${index}`}>{room_no_name}</label>
                                    </div>
                                    <div className="right-section">{getFormattedPrice(parseFloat(room_base_price))}</div>
                                </div>
                                : ''}
                        </li>
                    );

                })}
                <li className="li-total">
                    <div className="toppings-list-item">
                        <div className="left-section"><span class="total">Total:</span><span>(Per night)</span></div>
                        <div className="right-section total">{getFormattedPrice(total)}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

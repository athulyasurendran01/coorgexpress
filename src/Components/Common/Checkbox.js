import { useState } from "react";

const Checkbox = ({ label, handleClick, id }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={isChecked} name={id}
                    onChange={() => {
                        setIsChecked(!isChecked, handleClick(id, !isChecked,));
                    }} /> &nbsp;
                <span>{label}</span>
            </label>
        </div>
    );
}

export default Checkbox;

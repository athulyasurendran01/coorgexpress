import { useState } from "react";

const Checkbox = ({ label, handleClick }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={isChecked}
                    onChange={() => {
                        setIsChecked(!isChecked, handleClick(isChecked));
                    }} /> &nbsp;
                <span>{label}</span>
            </label>
        </div>
    );
}

export default Checkbox;

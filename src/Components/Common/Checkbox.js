import { useMemo, useState } from "react";

const Checkbox = ({ label, handleClick, id, selectedVal }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={isChecked || selectedVal.includes(id)} name={id}
                    onChange={() => {
                        setIsChecked(!isChecked, handleClick(id, !isChecked));
                    }} /> &nbsp;
                <span>{label}</span>
            </label>
        </div>
    );
}

export default Checkbox;

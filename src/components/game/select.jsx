import { availableRates } from "../../const.js";
import { useEffect } from "react";

function Select() {
    useEffect(() => {
        let dropdown = document.querySelector('.select_dropdown');
        dropdown.onclick = function () {
            dropdown.classList.toggle('active')
        }
    });

    return (
        <div className="select_dropdown" >
            <input type="text" className="select_text" name="money-rate" defaultValue="1.00" />
            <div className="select_option">
                {availableRates.map((rate) => (
                    <div value={rate.toFixed(2)}
                         key={rate}
                         onClick={() => document.querySelector('.select_text').value = rate.toFixed(2)} >
                        {rate.toFixed(2)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Select;

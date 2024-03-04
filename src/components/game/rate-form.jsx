import {availableRates, ratesOptions} from "../../const.js";
import {roll} from "../../utils.js";
import {useState} from "react";
import Select from "./select.jsx";

function RateForm({setRollResult, setGain, balance, setBalance}) {
    const [inputValue, setInputValue] = useState('');
    const [isRolling, setIsRolling] = useState(false);

    const handleInputChange = (event) => {
        let value;
        if (event.target.id === 'specific') {
            value = document.getElementById('specific-number').value;
        } else {
            value = event.target.value;
        }
        setInputValue(value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setIsRolling(true);

        const result = roll(null, () => {
            const formData = new FormData(e.target)
            let money = formData.get('money-rate');
            let rateOption = formData.get('num-rate');
            let coefficient = 2;
            setRollResult(result);

            if (rateOption === 'specific') {
                rateOption = Array.from(formData.get('specific-rate'));
                coefficient = 3;
            } else {
                rateOption = formData.get('num-rate').split(',');
            }

            let gain = rateOption.includes(result.toString()) ? +money * +coefficient
                : -(+money * +coefficient);
            setGain(gain);
            setBalance((+balance + gain).toFixed(1));
            setIsRolling(false);
        })
    };

    return (
        <form className="rate_form" onSubmit={handleSubmit}>
            <fieldset className="rate_fieldset">
                <legend className="rate_legend">Размер ставки</legend>
                <Select />
            </fieldset>
            <fieldset className="rate_fieldset rate_fieldset--table">
                <legend className="rate_legend">Варианты ставок</legend>
                {ratesOptions.map(option => {
                        return (
                            <div className={`rate-form_radio_btn ${option.id==='specific' && 'rate-form_radio_btn--long'}`} key={option.id}>
                                <input type="radio" id={option.id} name="num-rate" value={option.value} required="required" onChange={handleInputChange}/>
                                <label htmlFor={option.id}>{option.title}</label>
                                {option.id === 'specific' ? <input type="text" pattern="[1-6]" id="specific-number" name="specific-rate" placeholder="1"  onChange={handleInputChange}/> : '' }
                            </div>
                        )
                    }
                )}
            </fieldset>
            <button className="rate-form_radio_btn rate-form_submit button" type="submit" disabled={isRolling || !inputValue}>Сделать ставку</button>
        </form>
    )
}

export default RateForm;
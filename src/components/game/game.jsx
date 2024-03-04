import Dice from "./dice.jsx";
import RateForm from "./rate-form.jsx";

function Game( {balance, setRollResult, setGain, setBalance} ) {
    return (
        <div className={`game_container ${!balance && 'pass-through'}`}>
            <div className="dice_container"><Dice /></div>
            <RateForm setRollResult={setRollResult} setGain={setGain} balance={balance} setBalance={setBalance}/>
    </div>
    )
}

export default Game;

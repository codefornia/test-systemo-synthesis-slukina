import {useEffect, useRef, useState} from "react";
import Header from "./components/game/header.jsx";
import Title from "./components/game/title.jsx";
import Game from "./components/game/game.jsx";

function App() {
    const [balance, setBalance] = useState(null); //общий баланс
    const [gain, setGain] = useState(null); //выигрыш
    const [rollResult, setRollResult] = useState(null); //кубик
    const loaded = useRef(false);

    useEffect(() => {
        if (loaded.current) {
            return;
        }

        fetch('https://api.cibet.dev.bet4skill.com/api/auth/me', {
            method: 'GET',
            credentials: "include",
        })
            .then((response) => response.json())
            .then((result) => setBalance(result.balance))
            .catch(() => {})
            .finally(loaded.current = true)
    }, []);

    if (!loaded.current) {
        return null;
    }

    return (
        <>
            <Header balance={balance} setBalance={setBalance}/>
            <Title balance={balance} gain={gain} rollResult={rollResult}/>
            <Game balance={balance} setBalance={setBalance} setRollResult={setRollResult} rollResult={rollResult} setGain={setGain}/>
        </>
    )
}

export default App;
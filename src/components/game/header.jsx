import Authorization from "./authorization.jsx";
import Balance from "./balance.jsx";

function Header({balance, setBalance}) {
    return (
        <header className="header">
            <h1 className="header_title">Test Game</h1>
            {!!balance ?
                <Balance balance={balance}/> :
                <Authorization setBalance={setBalance}/>
            }
        </header>
    )
}

export default Header;

function AuthorizationForm({closeModal, setBalance}) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('https://api.cibet.dev.bet4skill.com/api/client-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(Object.fromEntries(formData))
        })
            .then((response) => response.json())
            .then((result) => {
                setBalance(result.balance);
                closeModal();
            });
    }

    return (
        <div className="authorization_modal">
            <form className="auth-form" onSubmit={handleSubmit}>
                <button type="button" className="auth-form_closed" id="modal_close" onClick={() => closeModal()} title="Закрыть" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none">
                        <path fill="#C4C4C4" d="M14.703 1.41 13.232 0 7.405 5.59 1.577 0 .107 1.41 5.935 7 .107 12.59 1.577 14l5.828-5.59L13.233 14l1.47-1.41L8.875 7l5.828-5.59Z"/>
                    </svg>
                </button>
                <h3 className="visually-hidden">Форма входа</h3>
                <input className="auth-form_input" type="text" name="login" maxLength="15" minLength="4"
                       pattern="^[a-zA-Z0-9]+$" id="login" placeholder="Login" required/>
                <input className="auth-form_input" type="password" name="password" minLength="6" id="password"
                       placeholder="Password" required/>
                <button className="auth-form_submit" type="submit" >Войти</button>
            </form>
        </div>
    )
}

export default AuthorizationForm;
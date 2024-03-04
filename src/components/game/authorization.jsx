import AuthorizationForm from "./authorization-form.jsx";
import { useState } from "react";

function Authorization({setBalance}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="authorization_bar">
        <button type="button" className="authorization_button" onClick={openModal}>Вход</button>
        <button type="button" className="authorization_button">Регистрация</button>
        {modalIsOpen ? <div className="authorization_container"><AuthorizationForm closeModal={closeModal} setBalance={setBalance}/></div> : '' }
        </div>
    )
}

export default Authorization;

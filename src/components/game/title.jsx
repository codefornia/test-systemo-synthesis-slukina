function Title({balance, gain, rollResult}) {
    const title = !balance ? 'Войдите, чтобы продолжить' :
        (!!rollResult ? `Результат броска кубика: ${rollResult}` : 'Сделайте ставку');

    const text = gain > 0 ? `Вы выиграли ${gain} TND!` : 'Повезет в следующий раз!';

    return (
        <div className='game_title-container'>
        <h2 className="game_title">{ title }</h2>
            {!!balance && !!rollResult ? <p className="game_result">{ text }</p> : <p>&nbsp;</p>}
        </div>
    )
}

export default Title;

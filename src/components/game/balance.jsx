function Balance({balance}) {
    function numberWithSpaces(date) {
        const parts = date.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }

    return (
        <p>{ numberWithSpaces(balance) } (TND)</p>
    )
}

export default Balance;

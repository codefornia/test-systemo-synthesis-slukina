function Dice() {
    return (
        <div className='dice'>
            <div className='face' data-id='1'>
                <div className="point point-middle point-center" />
            </div>
            <div className='face' data-id='2'>
                <div className="point point-top point-right" />
                <div className="point point-bottom point-left" />
            </div>
            <div className='face' data-id='6'>
                <div className="point point-top point-right" />
                <div className="point point-top point-left" />
                <div className="point point-middle point-right" />
                <div className="point point-middle point-left" />
                <div className="point point-bottom point-right" />
                <div className="point point-bottom point-left" />
            </div>
            <div className='face' data-id='5'>
                <div className="point point-top point-right" />
                <div className="point point-top point-left" />
                <div className="point point-middle point-center" />
                <div className="point point-bottom point-right" />
                <div className="point point-bottom point-left">
                </div>
            </div>
            <div className='face' data-id='3'>
                <div className="point point-top point-right" />
                <div className="point point-middle point-center" />
                <div className="point point-bottom point-left" />
            </div>
            <div className='face' data-id='4'>
                <div className="point point-top point-right" />
                <div className="point point-top point-left" />
                <div className="point point-bottom point-right" />
                <div className="point point-bottom point-left" />
            </div>
        </div>
    )
}

export default Dice;

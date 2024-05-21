import React from "react";
import './DepositInfo.css';

const DepositInfo = (props) => {
    return (
        <div>
            <div className='infoTitle'>Вклад</div>
            <div className='infoDiv'>C адреса: <run>{props.address}</run></div>
            <div className='infoDiv'>Первоначальный депозит: <run>{props.deposit} </run></div>
            <div className='infoDiv'>Время через которое начисляются проценты: <run>{props.time} сек.</run> </div>
            <div className='infoDiv'>Процент: <run>{props.percent}%</run></div>
        </div>
    )
};

export default DepositInfo;

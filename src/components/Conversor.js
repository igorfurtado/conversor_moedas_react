import React, { useState } from 'react';

export default function Conversor(props) {

    const [valorConvertido, setValorConvertido] = useState(0);
    const [valorInserido, setValorInserido] = useState("");
    const APP_KEY = process.env.REACT_APP_API_KEY;

    function converter() {
        let url = `http://api.exchangeratesapi.io/v1/latest?access_key=${APP_KEY}`
        console.log(url)
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            let cotacao = data.rates.BRL;
            setValorConvertido(cotacao * valorInserido);
        })
    };

    return (
        <div className="conversor">
            <h2>{props.moedaB} para {props.moedaA}</h2>
            <div className="inputsConversor">
                <input type="number" onChange={(event) => { setValorInserido(event.target.value) }}></input>
                <button onClick={converter}>Converter </button>
            </div>
            <h2>{parseFloat(valorConvertido.toFixed(2))}</h2>
        </div>
    )
};

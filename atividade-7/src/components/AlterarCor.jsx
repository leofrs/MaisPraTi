import React, { useState, useEffect } from "react";

const AlteracaoCorFundo = () => {
    const [corFundo, setCorFundo] = useState("#FFFFFF");

    const gerarCorAleatoria = () => {
        const letras = "0123456789ABCDEF";
        let cor = "#";
        for (let i = 0; i < 6; i++) {
            cor += letras[Math.floor(Math.random() * 16)];
        }
        return cor;
    };

    useEffect(() => {
        document.body.style.backgroundColor = corFundo;
    }, [corFundo]);

    const mudarCor = () => {
        setCorFundo(gerarCorAleatoria());
    };

    return (
        <div>
            <h1>Alteração de Cor de Fundo</h1>
            <button onClick={mudarCor}>Mudar Cor de Fundo</button>
        </div>
    );
};

export default AlteracaoCorFundo;

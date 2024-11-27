import React, { useState, useEffect } from "react";

const Temporizador = () => {
    const [tempo, setTempo] = useState(0);
    const [emExecucao, setEmExecucao] = useState(false);
    const [intervalo, setIntervalo] = useState(null);

    // Inicia o temporizador quando o componente for carregado
    useEffect(() => {
        if (emExecucao) {
            const novoIntervalo = setInterval(() => {
                setTempo((prevTempo) => prevTempo + 1);
            }, 1000);
            setIntervalo(novoIntervalo);

            return () => clearInterval(novoIntervalo);
        } else {
            clearInterval(intervalo);
        }
    }, [emExecucao]);

    const alternarTemporizador = () => {
        setEmExecucao(!emExecucao);
    };

    const reiniciarTemporizador = () => {
        setTempo(0);
        setEmExecucao(false);
    };

    return (
        <div>
            <h1>Temporizador</h1>
            <p>{tempo} segundos</p>

            <button onClick={alternarTemporizador}>
                {emExecucao ? "Pausar" : "Iniciar"}
            </button>
            <button onClick={reiniciarTemporizador}>Reiniciar</button>
        </div>
    );
};

export default Temporizador;

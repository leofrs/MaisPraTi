import React, { useState, useEffect } from "react";

const Timer = () => {
    const [tempo, setTempo] = useState(0);
    const [tempoRestante, setTempoRestante] = useState(0);
    const [isRodando, setIsRodando] = useState(false);
    const [intervalo, setIntervalo] = useState(null);
    const [inputTempo, setInputTempo] = useState("");

    const iniciarTimer = () => {
        if (tempo > 0 && !isRodando) {
            setIsRodando(true);
            setTempoRestante(tempo);
            const novoIntervalo = setInterval(() => {
                setTempoRestante((prev) => {
                    if (prev <= 1) {
                        clearInterval(novoIntervalo);
                        alert("O tempo acabou!");
                        setIsRodando(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            setIntervalo(novoIntervalo);
        }
    };

    const pausarTimer = () => {
        clearInterval(intervalo);
        setIsRodando(false);
    };

    const reiniciarTimer = () => {
        clearInterval(intervalo);
        setIsRodando(false);
        setTempoRestante(tempo);
    };

    const atualizarTempo = (e) => {
        setInputTempo(e.target.value);
    };

    const configurarTempo = () => {
        const tempoInput = parseInt(inputTempo, 10);
        if (!isNaN(tempoInput) && tempoInput > 0) {
            setTempo(tempoInput);
        }
    };

    useEffect(() => {
        // Limpa o intervalo caso o componente seja desmontado
        return () => {
            if (intervalo) {
                clearInterval(intervalo);
            }
        };
    }, [intervalo]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-2xl font-semibold mb-6">
                    Timer de Contagem Regressiva
                </h1>

                <div className="mb-4">
                    <input
                        type="number"
                        value={inputTempo}
                        onChange={atualizarTempo}
                        className="p-2 border border-gray-300 rounded-lg"
                        placeholder="Digite os segundos"
                    />
                    <button
                        onClick={configurarTempo}
                        className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                    >
                        Configurar
                    </button>
                </div>

                <div className="mb-6 text-4xl font-bold text-blue-600">
                    {tempoRestante > 0 ? tempoRestante : "00"}
                </div>

                <div className="space-x-4">
                    {!isRodando ? (
                        <button
                            onClick={iniciarTimer}
                            className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600"
                        >
                            Iniciar
                        </button>
                    ) : (
                        <button
                            onClick={pausarTimer}
                            className="bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600"
                        >
                            Pausar
                        </button>
                    )}

                    <button
                        onClick={reiniciarTimer}
                        className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600"
                    >
                        Reiniciar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;

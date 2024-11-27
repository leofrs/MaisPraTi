import React, { useState } from "react";

const ContadorSimples = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
};

export default ContadorSimples;

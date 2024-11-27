import React, { useState } from "react";

const FiltroDeLista = () => {
    const nomes = [
        "Ana",
        "Carlos",
        "Beatriz",
        "joão",
        "Lucas",
        "Fernanda",
        "alessandra",
    ];

    const [filtro, setFiltro] = useState("");

    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };

    const nomesFiltrados = nomes.filter((nome) =>
        nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div>
            <h1>Filtro de Lista de Nomes</h1>

            <input
                type="text"
                placeholder="Filtrar nomes"
                value={filtro}
                onChange={handleFiltroChange}
            />

            <ul>
                {nomesFiltrados.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default FiltroDeLista;

import React, { useState } from "react";

const ListaTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [filtro, setFiltro] = useState("todas");

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") return;

        const novaTarefaObj = {
            id: Date.now(),
            texto: novaTarefa,
            concluida: false,
        };

        setTarefas([...tarefas, novaTarefaObj]);
        setNovaTarefa("");
    };

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };

    const alternarTarefaConcluida = (id) => {
        setTarefas(
            tarefas.map((tarefa) =>
                tarefa.id === id
                    ? { ...tarefa, concluida: !tarefa.concluida }
                    : tarefa
            )
        );
    };

    const filtrarTarefas = () => {
        if (filtro === "pendentes") {
            return tarefas.filter((tarefa) => !tarefa.concluida);
        }
        if (filtro === "concluidas") {
            return tarefas.filter((tarefa) => tarefa.concluida);
        }
        return tarefas;
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Adicionar nova tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            <div>
                <button onClick={() => setFiltro("todas")}>Todas</button>
                <button onClick={() => setFiltro("pendentes")}>
                    Pendentes
                </button>
                <button onClick={() => setFiltro("concluidas")}>
                    Concluídas
                </button>
            </div>

            <ul>
                {filtrarTarefas().map((tarefa) => (
                    <li key={tarefa.id}>
                        <span
                            style={{
                                textDecoration: tarefa.concluida
                                    ? "line-through"
                                    : "none",
                            }}
                            onClick={() => alternarTarefaConcluida(tarefa.id)}
                        >
                            {tarefa.texto}
                        </span>
                        <button onClick={() => removerTarefa(tarefa.id)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTarefas;

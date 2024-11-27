import React, { useState } from "react";
import Modal from "../components/Modal";

const images = [
    {
        id: 1,
        src: "https://via.placeholder.com/600x400?text=Imagem+1",
        alt: "Imagem 1",
    },
    {
        id: 2,
        src: "https://via.placeholder.com/600x400?text=Imagem+2",
        alt: "Imagem 2",
    },
    {
        id: 3,
        src: "https://via.placeholder.com/600x400?text=Imagem+3",
        alt: "Imagem 3",
    },
    {
        id: 4,
        src: "https://via.placeholder.com/600x400?text=Imagem+4",
        alt: "Imagem 4",
    },
    {
        id: 5,
        src: "https://via.placeholder.com/600x400?text=Imagem+5",
        alt: "Imagem 5",
    },
];

const GaleriaDeImagens = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    const [indiceAtual, setIndiceAtual] = useState(null);

    const abrirModal = (indice) => {
        setImagemSelecionada(images[indice]);
        setIndiceAtual(indice);
    };

    const fecharModal = () => {
        setImagemSelecionada(null);
        setIndiceAtual(null);
    };

    const irParaImagemAnterior = () => {
        if (indiceAtual > 0) {
            setIndiceAtual(indiceAtual - 1);
            setImagemSelecionada(images[indiceAtual - 1]);
        }
    };

    const irParaImagemProxima = () => {
        if (indiceAtual < images.length - 1) {
            setIndiceAtual(indiceAtual + 1);
            setImagemSelecionada(images[indiceAtual + 1]);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {images.map((imagem, index) => (
                    <img
                        key={imagem.id}
                        src={imagem.src}
                        alt={imagem.alt}
                        onClick={() => abrirModal(index)}
                        className="cursor-pointer transition-transform transform hover:scale-110 rounded-lg"
                    />
                ))}
            </div>

            {/* Modal com imagem ampliada */}
            {imagemSelecionada && (
                <Modal
                    fecharModal={fecharModal}
                    imagemSelecionada={imagemSelecionada}
                    indiceAtual={indiceAtual}
                    irParaImagemAnterior={irParaImagemAnterior}
                    irParaImagemProxima={irParaImagemProxima}
                />
            )}
        </div>
    );
};

export default GaleriaDeImagens;

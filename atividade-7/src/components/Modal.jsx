const Modal = ({
    fecharModal,
    irParaImagemAnterior,
    irParaImagemProxima,
    imagemSelecionada,
    indiceAtual,
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-6 rounded-lg">
                <button
                    onClick={fecharModal}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                >
                    Fechar
                </button>

                <div className="flex items-center justify-between">
                    <button
                        onClick={irParaImagemAnterior}
                        disabled={indiceAtual === 0}
                        className="bg-transparent text-2xl p-2 cursor-pointer disabled:text-gray-500"
                    >
                        &lt;
                    </button>

                    <img
                        src={imagemSelecionada.src}
                        alt={imagemSelecionada.alt}
                        className="max-w-90vw max-h-80vh object-contain"
                    />

                    <button
                        onClick={irParaImagemProxima}
                        disabled={indiceAtual === images.length - 1}
                        className="bg-transparent text-2xl p-2 cursor-pointer disabled:text-gray-500"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

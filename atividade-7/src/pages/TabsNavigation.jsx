import React, { useState } from "react";
import Sobre from "../components/Sobre";
import Contact from "../components/Contact";

const TabsNavigation = () => {
    const [abaAtiva, setAbaAtiva] = useState("sobre");

    const mudarAba = (aba) => {
        setAbaAtiva(aba);
    };

    return (
        <div className="flex flex-col items-center p-6">
            <div className="flex mb-4 space-x-4">
                <button
                    onClick={() => mudarAba("sobre")}
                    className={`py-2 px-4 rounded-t-lg font-medium ${
                        abaAtiva === "sobre"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-blue-200"
                    }`}
                >
                    Sobre
                </button>
                <button
                    onClick={() => mudarAba("contato")}
                    className={`py-2 px-4 rounded-t-lg font-medium ${
                        abaAtiva === "contato"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-blue-200"
                    }`}
                >
                    Contato
                </button>
            </div>

            <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                {abaAtiva === "sobre" && <Sobre />}
                {abaAtiva === "contato" && <Contact />}
            </div>
        </div>
    );
};

export default TabsNavigation;

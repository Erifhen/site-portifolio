import React, { useState, useEffect } from "react";
import axios from "axios";
import CardInfoComp from "./CardInfoComp";
import CardSocialComp from "./CardSocialComp";

function NavBarComp() {
    const [cardOpen, setCardOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/perfil");
                setLogo(res.data);
                console.log(res.data);
            } catch (err) {
                console.error("Erro ao buscar a logo", err);
            }
        };
        fetchLogo();
    }, []);

    return (
        <div className="box-navbar">
            <button 
                className="button-nav-left"
                onClick={() => setCardOpen(true)} 
            >
                {logo?.logotipo ? (
                    <img src={logo.logotipo} alt="Imagem do logotipo" className="logo" />
                ) : (
                    <p>logotipo</p>
                )}
            </button>
            
            {/* O card só aparece ao clicar no botão e some ao remover o mouse dele */}
            {cardOpen && (
                <div 
                    className="card-info-container" 
                    onMouseLeave={() => setCardOpen(false)}
                >
                    <CardInfoComp />
                </div>
            )}

            <button 
                className="button-nav-right"
                onClick={() => setClicked(!clicked)}
            >
                {clicked ? "Voltar" : "Entre em Contato"}
            </button>
            {clicked && <CardSocialComp />}
        </div>
    );
}

export default NavBarComp;

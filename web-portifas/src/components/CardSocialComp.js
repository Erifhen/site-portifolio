import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Styles.css";

function CardSocialComp() {
  const [socialInfo, setSocialInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/socialmedias");
        console.log(res.data); // Verifique a estrutura da resposta aqui
        setSocialInfo(res.data); // Ajuste para aceitar o array diretamente
      } catch (err) {
        console.error("Erro ao buscar informações do card social:", err);
        setError("Erro ao carregar as informações do card social");
      }
    };
    fetchSocial();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!socialInfo) {
    return <p>Carregando ...</p>;
  }

  return (
    <div className="colunm-social">
      <div className="box-social-medias">
        {socialInfo &&
          socialInfo.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <div className="social-header">
                <img src={social.icon} alt={`Ícone de ${social.redenome}`} />
                <span className="social-name">{social.redenome}</span>
              </div>
              <span className="social-handle">{social.handle}</span>
            </a>
          ))}
      </div>
    </div>
  ); 
}

export default CardSocialComp;

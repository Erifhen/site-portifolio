import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const CardInfoComp = React.memo(() => {
  const [informations, setInformations] = useState(null);
  const [error, setError] = useState(null);
  
  const infoFetched = useRef(false); // Controle para evitar múltiplas requisições

  useEffect(() => {
    if (infoFetched.current) return; // Se já foi buscado, não faz nova requisição

    const fetchInformation = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/api/perfil");
        setInformations(res.data);
        infoFetched.current = true; // Marca que as informações foram carregadas
      } catch (err) {
        console.error("Erro ao buscar informações do card info:", err);
        setError("Erro ao carregar as informações pessoais do card info");
      }
    };

    fetchInformation();
  }, []); // A requisição só ocorre na montagem inicial

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!informations) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="Card-box-info">
      <div className="box-field-leaft">
        <div className="box-photo">
          {informations.fotoperfil && <img src={informations.fotoperfil} alt="Foto de perfil" />}
        </div>

        <div className="box-tags">
          {informations.tags &&
            informations.tags.map((tag, index) => (
              <span key={index} className="box-tag">
                {tag}
              </span>
            ))}
        </div>
      </div>

      <div className="box-field-right">
        <div className="box-perfil-description">{informations.descricaoperfil}</div>
      </div>
    </div>
  );
});

export default CardInfoComp;

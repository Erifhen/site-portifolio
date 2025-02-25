import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProjectComp from "./CardProjectComp";

function VitrineComp() {
  const [projects, setProjects] = useState([]);
  const [hoverProjectID, setHoverProjectID] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Erro ao buscar os projetos", err);
        setError("Erro ao buscar os projetos");
      }
    };
    fetchProjects();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!projects.length) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="box-vitrine">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="box-project-title"
            onMouseEnter={() => setHoverProjectID(project.id)}
            onMouseLeave={() => setHoverProjectID(null)}
          >
            <img src={project.title} alt={`Capa do projeto ${project.name}`} className="project-image" />
            {hoverProjectID === project.id && (
              <div className="card-container">
                <CardProjectComp project={project} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
  
}

export default VitrineComp;


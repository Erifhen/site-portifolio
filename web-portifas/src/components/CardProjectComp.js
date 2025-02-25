import React, { useState } from "react";
import GalleryComp from "./GalerryComp";

function CardProjectComp({ project }) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <>
            <div
                className="box-project-resume"
                onClick={() => setIsGalleryOpen(true)}
            >
                <p className="project-name-styled">{project.name}</p>

                <div className="box-project-image">
                    {project.imgcapa ? (
                        <img src={project.imgcapa} alt="Imagem de capa" />
                    ) : (
                        <p>Imagem não disponível</p>
                    )}
                </div>

                <p className="project-tag-styled">{project.tag}</p>
            </div>

            {isGalleryOpen && (
                <GalleryComp gallery={project.gallery}
                projectName={project.name}
                 onClose={() => setIsGalleryOpen(false)} />
            )}
        </>
    );
}

export default CardProjectComp;

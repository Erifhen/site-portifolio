import React from "react";

function GalleryComp({ gallery, projectName, onClose }) {
    return (
        <div className="box-gallery">
            <p className="project-name-styled-two">{projectName}</p>
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="gallery-content">
                <div className="gallery-images">
                    {gallery.length > 0 ? (
                        gallery.map((image, index) => (
                            <img key={index} src={image} alt={`Galeria ${index + 1}`} className="gallery-image" />
                        ))
                    ) : (
                        <p>Nenhuma imagem disponível</p>
                    )}
                </div>
            </div>
        </div>
    );
}


export default GalleryComp;

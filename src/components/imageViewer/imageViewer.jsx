import React, { useEffect, useState } from "react";
import "./imageViewer.style.css";
import Spinner from "../spinner/spinner";
const ImageViewer = ({ images, thumbnail }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [loadingStates, setLoadingStates] = useState(
    Array(images?.length).fill(true)
  );

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        images?.map(async (imageUrl, index) => {
          try {
            const response = await fetch(imageUrl);
            if (response.ok) {
              setLoadingStates((prevStates) => {
                const updatedStates = [...prevStates];
                updatedStates[index] = false;
                return updatedStates;
              });
            }
          } catch (error) {
            console.error(`Error loading image ${index}: ${error}`);
          }
        })
      );
    };
    if (images?.length) {
      setSelectedImage(images[0]);
      loadImages();
    } else {
      setSelectedImage(thumbnail);
    }
  }, [images]);

  // console.log(images?.length);
  // console.log(loadingStates);

  return (
    <div className="image-viewer">
      <img src={selectedImage} alt={selectedImage} width="80%" height="300px" />
      <p style={{ marginTop: "40px" }}></p>
      <div className="image-list">
        {images?.map((imageUrl, index) => (
          <div
            key={index}
            className={`image-container ${
              selectedImage == imageUrl && "active-image-viewer"
            }`}
            onClick={() => setSelectedImage(imageUrl)}
          >
            {loadingStates[index] ? (
              <Spinner />
            ) : (
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                width="100%"
                height="100%"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;

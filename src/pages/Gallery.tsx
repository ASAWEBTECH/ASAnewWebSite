import React, { useEffect, useRef, useState } from 'react';

const GallerySection = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsGalleryVisible(true);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      if (galleryRef.current) {
        observer.observe(galleryRef.current);
      }

      return () => {
        if (galleryRef.current) {
          observer.unobserve(galleryRef.current);
        }
      };
    }
  }, []);

  const styles = {
    container: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '30px',
      backgroundColor: '#fff',
      padding: '15px',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      padding: '10px',
    },
    galleryImage: {
      width: '100%',
      height: 'auto',
    },
  };

  const images = ['/img1.png', '/img2.png', '/img3.png']; // Use paths absolutos para evitar problemas no SSR.

  return (
    <div ref={galleryRef} style={{ width: '100%', textAlign: 'center' }}>
      <div style={styles.container}>
        <h1 style={{ color: '#2e2b70', fontWeight: 'bold', fontSize: '25px' }}>
          Explore our best moments in the gallery
        </h1>
      </div>
      <div style={styles.imageContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            style={styles.galleryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;

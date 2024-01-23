// GalleryComponent.jsx
import React, { useState, useEffect } from 'react';
import Collections from '../pages/Collections';
import artworksData from '../../artworks.json';

const GalleryComponent = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    setArtworks(artworksData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artworks.map((artwork) => (
        <Collections key={artwork.id} {...artwork} />
      ))}
    </div>
  );
};

export default GalleryComponent;

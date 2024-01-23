// GalleryComponent.jsx
import React, { useState, useEffect } from 'react';
import ArtWork from '../components/ArtWork';
import artworksData from '../../artworks.json';

const GalleryComponent = ({artworks}) => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    setArtworks(artworksData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artworks.map((artwork) => (
        <ArtWork key={artwork.id} {...artwork} />
      ))}
    </div>
  );
};

export default GalleryComponent;

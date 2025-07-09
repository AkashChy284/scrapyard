import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await axios.get('/api/artist/list');
        console.log("Fetched artists from backend:", res.data.data);
        setArtists(res.data.data || []);
      } catch (err) {
        console.error("Failed to load artists", err);
      }
    };
    fetchArtists();
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-6'>Our Artists</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {artists.map((artist, idx) => (
          <div key={idx} className='p-4 border rounded-lg shadow'>
           <img
  src={
    artist.profileImage?.startsWith('http')
      ? artist.profileImage
      : `/artist-images/${artist.profileImage}`
  }
  alt={artist.name}
  className='w-full h-52 object-cover rounded'
  onError={(e) => {
     e.target.onerror = null;
    e.target.src = '/artist-images/default.jpg';  // fallback image if not found
  }}
/>


            <h2 className='mt-3 text-xl font-semibold'>{artist.name}</h2>
            <p className='text-sm text-gray-600'>{artist.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;

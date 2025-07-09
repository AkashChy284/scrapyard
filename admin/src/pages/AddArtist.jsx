import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const AddArtist = ({ token }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !bio || !image) {
      toast.error("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('bio', bio);
    formData.append('profileImage', image);

    try {
      const res = await axios.post(`${backendUrl}/api/artist/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: token
        }
      });

      if (res.data.success) {
        toast.success("Artist added successfully!");
        setName('');
        setBio('');
        setImage(null);
      } else {
        toast.error(res.data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Upload failed.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Artist</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Artist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Artist Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-black text-white py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArtist;

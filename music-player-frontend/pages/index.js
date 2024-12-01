import { useEffect, useState } from 'react';
import { fetchArtists, fetchAlbums, fetchTracks } from '../api/services/api';

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchArtists().then((res) => setArtists(res.data));
    fetchAlbums().then((res) => setAlbums(res.data));
    fetchTracks().then((res) => setTracks(res.data));
  }, []);

  return (
    <div>
      <h1>Music Player</h1>
      <h2>Artists</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
      <h2>Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.title}</li>
        ))}
      </ul>
    </div>
  );
}



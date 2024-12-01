import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const fetchArtists = async () => await API.get('artists/');
export const fetchAlbums = async () => await API.get('albums/');
export const fetchTracks = async () => await API.get('tracks/');

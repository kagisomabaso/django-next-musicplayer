import React from 'react';

const TrackPlayer = ({ src, title }) => {
  if (!src) {
    return <p>No track available</p>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TrackPlayer;

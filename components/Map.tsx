import React from 'react';

interface MapProps {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=${encodedAddress}`;

  return (
    <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg border border-gray-200">
      <iframe
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        title="BoiteMini Location"
      />
    </div>
  );
};

export default Map;
import dynamic from 'next/dynamic';

import Container from './../components/Container';
import data from './../data/places.json';

export default function Places() {

  const MapPlaces = dynamic(() => import("../components/Map"), {
    loading: () => <p>Loading...</p>,
    ssr: false
  });

  return (
    <Container title="Places – Manuel Cocoba">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-32">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Places
        </h1>
        <div className="h-96 w-full mb-8 leading-6 text-gray-600 dark:text-gray-400">
          <p className="my-8 text-base min-w-full">
            Here are all the places where I stayed at least for one day or night. I'm not a traveler but when I do I like to visit places with someone who lives there because they can take you to non-tourist places.
          </p>
          <MapPlaces locations={data.places} />
        </div>
      </div>
    </Container>
  );
}
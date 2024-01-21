// MovieDetails.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const trailerLink = queryParams.get('trailerUrl');

    useEffect(() => {
        // You may want to log trailerLink here to verify it's correctly retrieved
        console.log('Trailer Link:', trailerLink);
    }, [trailerLink]);

    if (!trailerLink) {
        return <p>Trailer Link not found.</p>;
    }

    return (
        <div>
            {/* Embed the trailer using an iframe */}
            <iframe
                title="Trailer"
                width="560"
                height="315"
                src={trailerLink}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default MovieDetails;
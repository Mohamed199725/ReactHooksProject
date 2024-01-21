// App.js/The return statement contains JSX markup for rendering the application and It includes a title, the Filter component, the MovieList component, and buttons for filtering and adding new movies.
/* eslint-disable */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetails from './MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Conjuring 3',
      description: 'Plot. In 1981, demonologists Ed and Lorraine Warren document the exorcism of 8-year-old David Glatzel, attended by his family, his sister Debbie, her boyfriend Arne Johnson, and Father Gordon in Brookfield, Connecticut. In an attempt to save the little boy, Arne invites the demon to enter his body instead of Davids',
      trailerLink: 'https://www.youtube.com/embed/h9Q4zZS2v1k',
      posterURL: '/conjuring.jpg',
      rating: 9,
    },
    {
      id: 2,
      title: 'The Nun',
      description: 'Plot. In 1952 Romania, two nuns living at the Saint Carthas monastery are attacked by an unseen evil force. The surviving nun, Sister Victoria, flees from the attacker, a demon appearing as a nun, and hangs herself. Her body is discovered by Frenchie, a villager who transports supplies to the nuns.',
      trailerLink: 'https://www.youtube.com/embed/pzD9zGcUNrw',
      posterURL: '/The_nun.jpg',
      rating: 7.5,
    },
    {
      id: 3,
      title: 'The Exorcist: Believer (2023)',
      description: 'When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive whos witnessed anything like it before.',
      trailerLink: 'https://www.youtube.com/embed/PIxpPMyGcpU',
      posterURL: '/exorcicst.jpg',
      rating: 8,
    },
    {
      id: 4,
      title: 'Saw',
      description: 'Two strangers awaken in a room with no recollection of how they got there, and soon discover theyre pawns in a deadly game perpetrated by a notorious serial killer.',
      trailerLink: 'https://www.youtube.com/embed/t3PzUo4P21c',
      posterURL: '/saw.jpg',
      rating: 7,
    },
    {
      id: 5,
      title: 'Paranormal Activity',
      description: 'Paranormal Activity is a 2007 American supernatural horror film produced, written, directed, photographed and edited by Oren Peli. It centers on a young couple (Katie Featherston and Micah Sloat) who are haunted by a supernatural presence inside their home. They then set up a camera to document what is haunting them.',
      trailerLink: 'https://www.youtube.com/embed/F_UxLEqd074',
      posterURL: '/paranormal.jpg',
      rating: 6.5,
    },
    {
      id: 6,
      title: 'The Haunting of Pendle Hill',
      description: 'Unfortunately for Matilda, her historian father has disappeared on the haunted hill and she must venture into the woods, face the dark spirits and rescue him before its too late.',
      trailerLink: 'https://www.youtube.com/embed/fnjtSPU082o',
      posterURL: 'the haunting.jpg',
      rating: 6,
    },
    {
      id: 7,
      title: 'Hereditary',
      description: 'When her mentally ill mother passes away, Annie (Toni Collette), her husband (Gabriel Byrne), son (Alex Wolff), and daughter (Milly Shapiro) all mourn her loss. The family turn to different means to handle their grief, including Annie and her daughter both flirting with the supernatural.',
      trailerLink: 'https://www.youtube.com/embed/V6wWKNij_1M',
      posterURL: '/hereditary.jpg',
      rating: 5.5,
    },
    {
      id: 8,
      title: 'Sister Death',
      description: 'A novice with supernatural powers arrives at a former convent, now a school for girls. The strange events and disturbing situations that torment her will lead her to unravel the skein of secrets that surround the convent and haunt its inhabitants.',
      trailerLink: 'https://www.youtube.com/embed/Ze6plKbzkY0',
      posterURL: '/sister.jpg',
      rating: 5.5,
    },
    {
      id: 9,
      title: 'The Unholy',
      description: 'Alice, a girl with hearing impairment, is able to hear, speak and even heal the ill after having visions of the Virgin Mary. But when a journalist probes into the matter, he unearths a conspiracy.',
      trailerLink: 'https://www.youtube.com/embed/NmQiJPLYzPI',
      posterURL: '/unholy.jpg',
      rating: 6.5,
    },
    {
      id: 10,
      title: 'The Ritual',
      description: 'A trip to the Swedish wilderness turns murky as four friends try to mend their strained relationships. However, in the forest, they realise that they are not alone.',
      trailerLink: 'https://www.youtube.com/embed/Vfugwq2uoa0',
      posterURL: '/ritual.jpg',
      rating: 7.5,
    },
    {
      id: 11,
      title: 'No One Will Save You (2023)',
      description: 'Under the plot of aliens chasing Brynn and trying to control her, No One Will Save You is about trauma, grief, and overcoming that pain. It might be tangentially about the millennial generation and the overwhelming amount of trauma they endured in their formative years if one reads into it that way.',
      trailerLink: 'https://www.youtube.com/embed/IcA02w6rm44',
      posterURL: '/noone.jpg',
      rating: 6.5,
    },
    {
      id: 12,
      title: 'The Witch',
      description: 'In the New England of the 17th century, a banished Puritan family sets up a farm by the edge of a huge remote forest where no other family lives. Soon, sinister forces then start haunting them.',
      trailerLink: 'https://www.youtube.com/embed/iQXmlf3Sefg',
      posterURL: '/witch.jpg',
      rating: 8,
    },







    // Add more horror movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filterMovies = () => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        (!ratingFilter || movie.rating >= parseFloat(ratingFilter))
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    filterMovies();
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: 'center', margin: '20px', backgroundColor: '#8B4513', minHeight: '100vh', padding: '20px' }}>
              <h1 style={{ color: '#fff', fontSize: '32px', marginBottom: '20px' }}>Horror Movie Collection</h1>
              <Filter onTitleChange={setTitleFilter} onRatingChange={setRatingFilter} />
              <MovieList movies={filteredMovies} onMovieClick={(id) => console.log(`Clicked on movie ${id}`)} />
              <button
                style={{
                  marginTop: '20px',
                  padding: '10px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                }}
                onClick={() =>
                  addMovie({
                    title: prompt('Enter the movie title:'),
                    description: prompt('Enter the movie description:'),
                    trailerLink: prompt('Enter the movie trailer link (embed video link):'),
                    posterURL: prompt('Enter the movie poster URL:'),
                    rating: parseFloat(prompt('Enter the movie rating:')),
                  })
                }
              >
                Add New Movie
              </button>
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
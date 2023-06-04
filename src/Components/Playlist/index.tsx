import React from 'react';
import { Card } from '../Card';
import './Playlist.css';
import { PlaylistData } from '../../Interface/PlaylistData';


const Playlist: React.FC<PlaylistData> = ({ name, musicas }) => {
  return (
    <>
      {musicas.length > 0 && (
        <section className="playlist">
          <h3>{name}</h3>
          <div className="musicas">
            {musicas.map((musica) => (
              <Card
                key={musica.nome}
                name={musica.nome}
                banda={musica.banda}
                url={musica.url}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Playlist;




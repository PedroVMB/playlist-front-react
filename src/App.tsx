import { useState } from 'react';
import './App.css';
import { Modal } from './Components/Modal';
import { usePlaylistData } from './hooks/usePlaylistData';
import Playlist from './Components/Playlist';
import { PlaylistData } from './Interface/PlaylistData';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

function App() {
  const { data } = usePlaylistData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <Banner />
      <h1>Veja suas playlists favoritas!</h1>
      {data?.map((playlistData: PlaylistData) => (
        <Playlist
          key={playlistData.name}
          name={playlistData.name}
          banda={playlistData.banda}
          url={playlistData.url}
          genero={playlistData.genero}
        />
      ))}
      {isModalOpen && <Modal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Novo</button>
      <Footer />
    </div>
  );
}

export default App;




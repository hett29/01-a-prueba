import { useState } from "react";
import Navbar from "./componentes/Navbar";
import ProfileModal from "./componentes/ProfileModal";
import PokemonList from "./componentes/PokemonList";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <Navbar
        onProfileClick={() => setShowProfile(true)}
      />

      <div
        style={{
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Primeros 10 Pokémon
        </h1>

        <PokemonList />
      </div>

      <ProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        name="Juan Pérez"
        email="juan@email.com"
        phone="+591 77777777"
      />
    </>
  );
}

export default App;
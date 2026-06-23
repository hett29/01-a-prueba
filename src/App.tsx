import { useState } from "react";
import Navbar from "./componentes/Navbar";
import ProfileModal from "./componentes/ProfileModal";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <Navbar
        onProfileClick={() => setShowProfile(true)}
      />

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
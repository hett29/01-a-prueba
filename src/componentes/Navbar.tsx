import React from "react";

interface NavbarProps {
  onProfileClick?: () => void;
  onCartClick?: () => void;
  onCatalogClick?: () => void;
  onContactsClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onProfileClick,
  onCartClick,
  onCatalogClick,
  onContactsClick,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Tienda</div>

      <div className="navbar-menu">
        <button className="navbar-button" onClick={onCatalogClick}>
          Catálogo
        </button>

        <button className="navbar-button" onClick={onContactsClick}>
          Contactos
        </button>

        <button className="navbar-button" onClick={onCartClick}>
          🛒 Carrito
        </button>

        <button className="navbar-button" onClick={onProfileClick}>
          👤 Perfil
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
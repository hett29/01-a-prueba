import React from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  email: string;
  phone?: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  name,
  email,
  phone,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Mi Perfil</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="profile-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-info">
            <p>
              <strong>Nombre:</strong> {name}
            </p>

            <p>
              <strong>Correo:</strong> {email}
            </p>

            {phone && (
              <p>
                <strong>Teléfono:</strong> {phone}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
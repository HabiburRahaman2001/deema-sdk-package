// src/components/DeemaButton.tsx
import React from 'react';

interface DeemaButtonProps {
  onClick: () => void;
  title: string;
}

const DeemaButton: React.FC<DeemaButtonProps> = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
      }}
    >
      {title}
    </button>
  );
};

export default DeemaButton;

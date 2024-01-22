import React from 'react';
import Button from '@/components/buttons/Button.tsx';

const FavoritesButton: React.FC = () => {
  return <Button label="Favorites" to="/favorites" />;
};

export default FavoritesButton;

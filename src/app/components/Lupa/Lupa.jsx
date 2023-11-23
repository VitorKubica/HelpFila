"use client";
import { useState, useEffect } from 'react';
import styles from './Lupa.scss'; // Importando estilos do arquivo SASS
import Input from './Input';

const suggestions = [
  'Canal',
  'YouTube',
  'YouTuber',
  'Carros',
  'Facebook',
  'Dev Sandrin',
  'Projetos CSS',
];

export default function Lupa() {
  const [userData, setUserData] = useState('');
  const [active, setActive] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserData(input);

    const filtered = suggestions.filter((data) =>
      data.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setActive(!!input); // Ativa sugestões apenas se houver texto no input
  };

  const generateSearchLink = () => {
    const link = `https://www.google.com/search?q=${userData}`;
    window.open(link, '_blank');
  };

  const selectSuggestion = (suggestion) => {
    setUserData(suggestion);
    setActive(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.search} ${active ? styles.active : ''}`}>
        <a href={`https://www.google.com/search?q=${userData}`} target="_blank" rel="noopener noreferrer" hidden></a>
        <Input/>
        <div className={styles.icon} onClick={generateSearchLink}>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

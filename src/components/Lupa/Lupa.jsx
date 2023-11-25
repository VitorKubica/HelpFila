"use client";
import { useState, useEffect } from 'react';
import Input from './Input';

const suggestions = [
  "Hospital Israelita Albert Einstein, São Paulo - SP",
  "Eye Clinic Clínica Oftalmológica, São Paulo - SP",
  "Hospital Sírio Libanês, São Paulo - SP",
  "Hospital Alemão Oswaldo Cruz, São Paulo - SP",
  "Clínica Oftalmológica Prisma Visão, Vila Mariana - SP",
  "Hospital do Coração, São Paulo - SP",
  "Vitoria Apart Hospital, Serra - ES",
  "Benatti Odontologia, Bela Vista - SP",
  "Hospital Carlos Chagas, Guarulhos - SP",
  "Family Dentistry, Campinas - SP"
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
    <div>
      <div>
        <a href={`https://www.google.com/search?q=${userData}`} target="_blank" rel="noopener noreferrer" hidden></a>
        <Input/>
        <div onClick={generateSearchLink}>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

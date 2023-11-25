"use client"

import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "./input.scss"
import { Item } from "./Item"

const suggestions = [];

const prefixos = ["Hospital", "Clínica", "Consultório", "Centro Médico"];
const especialidades = ["Cardiologia", "Oftalmologia", "Odontologia", "Ortopedia"];
const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];
const estados = ["SP", "RJ", "MG", "RS"];

for (let i = 1; i <= 1000; i++) {
  const nome = `${prefixos[Math.floor(Math.random() * prefixos.length)]} ${especialidades[Math.floor(Math.random() * especialidades.length)]}, ${cidades[Math.floor(Math.random() * cidades.length)]} - ${estados[Math.floor(Math.random() * estados.length)]}`;
  suggestions.push(nome);
}

console.log(suggestions)
 
export default function Input() {

  const router = useRouter()
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(suggestions);
  const [isFocused, setIsFocused] = useState(false);
  const [removeBorderRadius, setRemoveBorderRadius] = useState(false);
 
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
 
    // Filtrar as opções com base no valor de entrada
    const filtered = suggestions.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
 
    setFilteredOptions(filtered);
  };
 
  const handleOptionClick = (option, link) => {
    window.location.href = link;
    setInputValue(option);
    setFilteredOptions([])
  };
 
  const handleInputFocus = () => {
    setIsFocused(true);
    setRemoveBorderRadius(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setRemoveBorderRadius(false);
  };
 
  return (
    <div className="flex mt-5 justify-center">
      <div className=" w-1/3  flex justify-center flex-col search ">
          <div className={`flex justify-around px-3 items-center bg-white w-full shadow appearance-none  rounded-full h-10  ${removeBorderRadius ? 'no-border-radius' : '' }`}>
            <CiSearch />
            <input
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Pesquisar..."
              className="w-full mx-3 focus:outline-none focus:shadow-outline "
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          {isFocused && (
            <div className="bg-white rounded-b-3xl  shadow">
              {filteredOptions.map((option, index) => (
                <Item key={index} index={index} option={option}/>

              )).splice(0, 6)}
            </div>
          )}
        </div>
    </div>
  );
}
 
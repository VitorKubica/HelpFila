import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";

const suggestions = [
  "Canal",
  "YouTube",
  "YouTuber",
  "Carros",
  "Facebook",
  "Dev Sandrin",
  "Projetos CSS",
];
 
export default function Input() {
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
 
  const handleOptionClick = (option) => {
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
              className=" w-full mx-3 focus:outline-none focus:shadow-outline "
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          {isFocused && (
            <ul className="bg-white rounded-b-3xl  shadow">
              {filteredOptions.map((option, index) => (
                <li
                  className=" py-1 flex px-2 hover:bg-gray-200 transition-all duration-300"
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  <Link href='' >{option}</Link>
                  
                </li>
              )).splice(0, 3)}
            </ul>
          )}
        </div>
    </div>
  );
}
 
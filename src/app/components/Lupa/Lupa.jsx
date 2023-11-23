import "./Lupa.scss"

export default function Lupa() {
  function autocomplete() {
    var input = document.getElementById('search__input');
    var ul = document.getElementById('myUL');
    var li, txtValue;
  
    // Clear previous suggestions
    ul.innerHTML = '';
  
    // Get the input value
    var inputValue = input.value.toLowerCase();
  
    // You can replace this array with your own data source
    var suggestions = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
  
    // Filter suggestions based on input
    suggestions.forEach(function (item) {
      if (item.toLowerCase().indexOf(inputValue) > -1) {
        li = document.createElement('li');
        txtValue = document.createTextNode(item);
        li.appendChild(txtValue);
        ul.appendChild(li);
      }
    });
  }
  
  return (
  <div>
    <div className="search">
    <input type="text" className="search__input" placeholder="Pesquisar..." onkeyup="autocomplete()"/>
    <button className="search__button" >
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
    </div>
    </div>
  )
}

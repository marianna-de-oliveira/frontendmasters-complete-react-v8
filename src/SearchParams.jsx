// construiremos um app onde podemos procurar uma api para animais em doação lidando com hooks
const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="locarion">
          Location
          <input id="location" value={location} placeholder="location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

//class é palavra reservada em js, então usamos className para dar um nome de classe para a div
// for funciona no mesmo esquema

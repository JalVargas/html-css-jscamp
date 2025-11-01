import { useId } from "react";

export function SearchFormSection({ onTextFilter, onSearch }) {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperiencielevel = useId();

  const handleSumit = (event) => {
    event.preventDefault();

    const formData = new ForData(event.target);
    const filters = {
      technology: formData.get(idTechnology),
      Location: formData.get(idLocation),
      experiencieLevel: formData.get(idExperienceLevel),
    };
    onSearch(filters);
  };

  const handeleTextChange = (event) => {
    const text = event.target.value;
    onTextFilter(text);
  };
  return (
    <section className="jobs-search">
      <h1>Encuentra tu próxcimo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>
      <form onSubmit={handleSubmit} id="empleos-search-form" role="search">
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input
            name={idText}
            id="empleos-search-input"
            type="text"
            placeholder="Buscar trabajos,empresas o habilidades"
            onChange={handleTextChange}
          />

          <button type="submit" style={{ position: "absolute", right: "4px" }}>
            Buscar
          </button>
        </div>

        <div className="search-filters">
          <select name={idTechnology} id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="lenguajes de programación"></optgroup>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Typescript">Typescript</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            <option value="React">React</option>
            <option value="PHP">PHP</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <optgroup label="Países"></optgroup>
            <option value="virtual">Virtual</option>
            <option value="colombia">Colombia</option>
            <option value="españa">España</option>
            <option value="ecuador">Ecuador</option>
            <option value="méxico">México</option>
          </select>

          <select name={idExperiencielevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <optgroup label="Niveles"></optgroup>
            <option value="junior">Junior</option>
            <option value="semi-Senior">Semi-Senior</option>
            <option value="senior">Senior</option>
            <option value="arquitecto de Software">
              Arquitecto de Software
            </option>
          </select>
        </div>
      </form>
      <span id="filter-selected-value"></span>
    </section>
  );
}

import './Recherche.css';

function Recherche({ valeur, onChange }
  
  
) {
  return (
    <div className="recherche">
      
      <input
        type="text"
        className="recherche-input"
        placeholder="Rechercher une ligne..."
        value={valeur}
        onChange={e => onChange(e.target.value)}
      />

      <button
        className="btn-effacer"
        onClick={() => onChange("")}
      >
        Effacer
      </button>

    </div>
  );
}

export default Recherche;
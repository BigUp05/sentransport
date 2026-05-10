function StatReseau({ lignes }) {
  const totalLignes = lignes.length;

  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);

  const maxLigne = lignes.reduce((max, l) =>
    l.arrets > max.arrets ? l : max
  );

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Statistiques du réseau</h3>
      <p>Total lignes : {totalLignes}</p>
      <p>Total arrêts : {totalArrets}</p>
      <p>Ligne avec le plus d'arrêts : {maxLigne.numero}</p>
    </div>
  );
}

export default StatReseau;
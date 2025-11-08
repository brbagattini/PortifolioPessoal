export default function SearchBar({ valor, aoMudar }) {
  return (
    <div className="barra-pesquisa">
      <label htmlFor="busca">Buscar projetos:</label>
      <input
        type="search"
        id="busca"
        placeholder="Digite o nome do projeto..."
        value={valor}
        onChange={(e) => aoMudar(e.target.value)}
      />
    </div>
  );
}

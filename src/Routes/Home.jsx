import Avatar from '../Images/Avatar.jpg'
export default function Home() {
  return (
    <section className="secao grid-home">
      <div className="home-texto">
        <h1 className="titulo">
          Olá, eu sou <span className="destaque">Bruno Bagattini Fernandes</span>
        </h1>
        <p className="texto">
          Estudante de Engenharia de Software na FIAP, formado em TI pelo SENAC, apaixonado por programação desde a infância. Busco me tornar um desenvolvedor Full Stack, unindo criatividade e tecnologia para criar soluções inovadoras.
        </p>
        <a href="/projetos" className="botao">
          Ver projetos
        </a>
      </div>

      <div className="home-imagem">
        <img src={Avatar} alt="Foto de perfil" />
      </div>
    </section>
  );
}

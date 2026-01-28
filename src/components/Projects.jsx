import { useState, useEffect } from 'react';
import { getGitHubRepos } from '../services/githubService';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState({});

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await getGitHubRepos('sebas-2901');
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los repositorios:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const toggleVisibility = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Proyectos estáticos del portafolio original
  const staticProjects = [
    {
      title: 'Sitio Web Teoria del Color',
      description: `- Sitio web dirigido a la teoría, representación, psicología y significado de los Colores, 
desde los primarios hasta los tercearios.

-Realizado con HTML y CSS

-Fue mi Primer proyecto por lo cual fue un desafio por lo poco que sabia en ese momento, ya que solo sabia lo basico de CSS
por lo cual no fue posible aplicarle demasiados detalles.

-Utilize diferentes codigos/clases de CSS basicas para hacer funcionar el sitio Web en diferentes navegadores, 
no aplicables para dispositivos moviles.`,
      image: '/img/Teoria_del_Color.png',
      isStatic: true
    },
    {
      title: 'Sitio Web Restaurante Infierno',
      description: `Sitio Web dedicada a un recorrido en el Infierno.

-Realizado con HTML, CSS y JS

-En este proyecto fue mas sencillo de realizar debido a que tenia mas conocimiento en HTML y CSS, en esta ocasion
le aplique varios detalles, cambiando fondos de clores simples a imagenes o mejor combinacion de colores, aplicandole
hover a las imagenes y a los botones, incluso, permitiendo redirigir a otras secciones de el Sitio Web.`,
      image: '/img/Infierno.png',
      isStatic: true
    },
    {
      title: 'BD SENA CDITI DOSQUEBRADAS (En proceso)',
      description: `Base de Datos de las Fichas del Técnico en Programación de Software y Fichas del Tecnólogo en Análisis y Desarrollo de Software.

-Realizado con HTML, CSS y JS.

-Es el Proyecto mas completo hasta el momento, debido a que se le va a implementar una base de datos, teniendo un buen diseño, funcionalidad,
entre otro sin fin de detalles, siendo un desafio a gran escala, debido a que se van a manejar una gran magnitud de datos, en el cual no pueden haber
fallos en su funcionamiento, se han dado un sin fin de cambios en su desarrollo que hasta ahora han valido la pena.

-Para que no haya fallos a un futuro, se ha realizado la pagina de forma individual, es decir, su css o el JS se ha elaborado paso a paso, los colores 
del css fueron estrictamente seleccionados acorde a lo solicitado al usuario al cual va dirigido, la accesibilidd se hizo de la forma mas 
sencilla posible.`,
      image: '/img/sena.png',
      isStatic: true
    }
  ];

  return (
    <section id="proyecto" className="proyecto">
      <div className="contenido-seccion">
        <h2>PROYECTOS</h2>
        
        {/* Proyectos estáticos */}
        <h3 className="projects-subtitle">Proyectos Destacados</h3>
        <div className="galeria">
          {staticProjects.map((project, index) => (
            <div key={`static-${index}`}>
              <div className="proyecto-item">
                <h3 onClick={() => toggleVisibility(`static-${index}`)}>
                  {project.title}
                </h3>
                <p 
                  className="proyecto-info" 
                  style={{ display: expandedProjects[`static-${index}`] ? 'block' : 'none' }}
                >
                  {project.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                  {project.image && (
                    <>
                      <br />
                      <img src={project.image} alt={project.title} id="image" />
                      <br /><br />
                      <strong>PDT:</strong> Si desea ver el contenido de la imagen, hacer zoom.
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Repositorios de GitHub */}
        <h3 className="projects-subtitle">Repositorios de GitHub</h3>
        {loading ? (
          <div className="loading">
            <i className="fa-solid fa-spinner fa-spin"></i>
            <p>Cargando repositorios...</p>
          </div>
        ) : (
          <div className="github-repos">
            {repos.length > 0 ? (
              repos.map((repo, index) => (
                <div key={repo.id} className="repo-card">
                  <div className="repo-header">
                    <h3>
                      <i className="fa-brands fa-github"></i>
                      {repo.name}
                    </h3>
                    {repo.private && <span className="badge">Privado</span>}
                  </div>
                  <p className="repo-description">
                    {repo.description || 'Sin descripción'}
                  </p>
                  <div className="repo-stats">
                    {repo.language && (
                      <span className="stat">
                        <i className="fa-solid fa-code"></i>
                        {repo.language}
                      </span>
                    )}
                    <span className="stat">
                      <i className="fa-solid fa-star"></i>
                      {repo.stargazers_count}
                    </span>
                    <span className="stat">
                      <i className="fa-solid fa-code-fork"></i>
                      {repo.forks_count}
                    </span>
                  </div>
                  <div className="repo-footer">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-repo">
                      Ver Repositorio
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-demo">
                        Ver Demo
                        <i className="fa-solid fa-globe"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-repos">No se encontraron repositorios públicos.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

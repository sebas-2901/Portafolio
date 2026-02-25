import { useState, useEffect } from 'react';
import { getGitHubRepos } from '../services/githubService';
import { getFrameworksByRepo } from '../services/projectFrameworks';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="proyecto" className="proyecto">
      <div className="contenido-seccion">
        <h2>PROYECTOS</h2>
        
        {/* Repositorios de GitHub */}
        {loading ? (
          <div className="loading">
            <i className="fa-solid fa-spinner fa-spin"></i>
            <p>Cargando repositorios...</p>
          </div>
        ) : (
          <div className="github-repos">
            {repos.length > 0 ? (
              repos.map((repo, index) => {
                const frameworks = getFrameworksByRepo(repo.name);
                
                return (
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
                    {/* Mostrar Frameworks */}
                    {frameworks.length > 0 && (
                      <div className="repo-frameworks">
                        {frameworks.map((framework, idx) => (
                          <span key={idx} className="framework-tag">
                            {framework}
                          </span>
                        ))}
                      </div>
                    )}
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
                );
              })
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

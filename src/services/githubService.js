const GITHUB_API_URL = 'https://api.github.com';

/**
 * Obtiene los repositorios públicos de un usuario de GitHub
 * @param {string} username - Nombre de usuario de GitHub
 * @returns {Promise<Array>} - Lista de repositorios
 */
export const getGitHubRepos = async (username) => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Error al obtener los repositorios');
    }

    const repos = await response.json();
    
    // Filtrar y ordenar los repositorios
    return repos
      .filter(repo => !repo.fork) // Excluir forks
      .sort((a, b) => {
        // Ordenar por estrellas y fecha de actualización
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
  } catch (error) {
    console.error('Error en getGitHubRepos:', error);
    throw error;
  }
};

/**
 * Obtiene información del perfil de un usuario de GitHub
 * @param {string} username - Nombre de usuario de GitHub
 * @returns {Promise<Object>} - Información del usuario
 */
export const getGitHubUser = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener información del usuario');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en getGitHubUser:', error);
    throw error;
  }
};

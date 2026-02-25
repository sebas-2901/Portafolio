/**
 * Mapeo de repositorios a frameworks utilizados
 * 
 * INSTRUCCIONES:
 * 1. Agrega el nombre exacto del repositorio de GitHub como clave
 * 2. Asigna un array con los frameworks/tecnologías utilizadas
 * 3. El nombre del repo debe coincidir con el que ves en GitHub
 * 
 * EJEMPLOS DE FRAMEWORKS:
 * - React, Vue, Angular, Svelte
 * - Django, Flask, FastAPI
 * - Node.js, Express, Next.js, Nuxt
 * - TypeScript, JavaScript, Python, Java
 * - Tailwind, Bootstrap, Material-UI
 * - PostgreSQL, MongoDB, MySQL
 * etc.
 * 
 * EJEMPLO DE USO:
 * 'mi-portafolio': ['React', 'Vite', 'CSS3', 'JavaScript'],
 * 'proyecto-weather': ['React', 'API REST', 'Axios'],
 * 'crud-app': ['Angular', 'TypeScript', 'Firebase'],
 * 'blog-django': ['Django', 'Python', 'PostgreSQL'],
 */

export const projectFrameworks = {
    'React': ['React'],
    'Portafolio': ['React', 'Vite', 'CSS3', 'TypeScript'],
    'Pagina-Infierno' : ['CSS3'],
    'Generate-Password': ['Html','JavaScript']

};

/**
 * Obtiene los frameworks de un repositorio específico
 * @param {string} repoName - Nombre del repositorio
 * @returns {Array<string>} - Array de frameworks
 */
export const getFrameworksByRepo = (repoName) => {
  return projectFrameworks[repoName] || [];
};

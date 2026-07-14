# Portafolio de Johan Sebastian Mina

Este es mi portafolio personal(En reestructuracion) desarrollado con React y Vite, integrado con la API de GitHub para mostrar mis repositorios automáticamente.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🔄 Integración con API de GitHub para mostrar repositorios automáticamente
- 📱 Compatible con dispositivos móviles
- ⚡ Desarrollado con React + Vite para un rendimiento óptimo
- 🎨 Animaciones suaves y efectos visuales

## 🛠️ Tecnologías Utilizadas

- React 19
- Vite
- CSS3 con animaciones
- API de GitHub
- Font Awesome para iconos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sebas-2901/Portafolio.git

# Navegar al directorio
cd portafolio-react

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🌐 Deployment

### GitHub Pages

Este proyecto está configurado para deployarse en GitHub Pages. Para hacerlo:

1. Asegúrate de que el repositorio esté en GitHub
2. Actualiza el campo `base` en `vite.config.js` con el nombre de tu repositorio
3. Ejecuta el comando de deploy:

```bash
npm run deploy
```

Esto construirá la aplicación y la publicará automáticamente en la rama `gh-pages`.

### Pasos para publicar en GitHub

1. Crear un nuevo repositorio en GitHub llamado "Portafolio"
2. Ejecutar los siguientes comandos:

```bash
git add .
git commit -m "Initial commit - Portafolio React"
git branch -M main
git remote add origin https://github.com/sebas-2901/Portafolio.git
git push -u origin main
```

3. Activar GitHub Pages:
   - Ve a Settings → Pages
   - Selecciona la rama `gh-pages` como fuente
   - Guarda los cambios

4. Tu portafolio estará disponible en: `https://sebas-2901.github.io/Portafolio/`

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run deploy` - Construye y despliega a GitHub Pages

## 📁 Estructura del Proyecto

```
portafolio-react/
├── public/
│   └── img/           # Imágenes del portafolio
├── src/
│   ├── components/    # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── services/      # Servicios (API GitHub)
│   │   └── githubService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🌟 Secciones

- **Inicio**: Presentación personal con enlaces a redes sociales
- **Sobre Mí**: Información personal, objetivos e intereses
- **Habilidades**: Skills técnicas con barras de progreso animadas
- **Proyectos**: Proyectos destacados + repositorios de GitHub automáticos
- **Contacto**: Formulario de contacto

## 📝 Personalización

### Cambiar información personal

Edita los componentes en `src/components/` para actualizar tu información.

### Configurar API de GitHub

El componente `Projects.jsx` obtiene automáticamente tus repositorios de GitHub. Para cambiar el usuario:

```javascript
// En src/components/Projects.jsx
const data = await getGitHubRepos('tu-usuario-github');
```

## 📧 Contacto

- Email: sm03122018@gmail.com
- GitHub: [@sebas-2901](https://github.com/sebas-2901)
- LinkedIn: [Sebastian Mina](https://www.linkedin.com/in/sebasti%C3%A1n-mina-23423a2b2/)

## 📄 Licencia

©2024 Johan Sebastian Mina López. Todos los derechos reservados.

# 📋 INSTRUCCIONES FINALES - Publicar tu Portafolio en GitHub

## ✅ Lo que ya está hecho:

1. ✨ Proyecto React creado y configurado
2. 🎨 Todos los componentes convertidos de HTML a React
3. 📱 Estilos CSS migrados y adaptados
4. 🔗 Integración con API de GitHub lista
5. 📦 Git inicializado y primer commit realizado
6. ⚙️ Configuración de deployment preparada

---

## 🚀 Pasos para publicar en GitHub:

### 1. Crear repositorio en GitHub

1. Ve a https://github.com/sebas-2901
2. Haz clic en el botón verde "New" o "Nuevo"
3. Nombra el repositorio: **Portafolio** (exactamente así, con mayúscula inicial)
4. NO inicialices con README, .gitignore o licencia (ya los tenemos)
5. Haz clic en "Create repository"

### 2. Conectar tu proyecto local con GitHub

Ejecuta estos comandos en la terminal (desde la carpeta portafolio-react):

```bash
cd c:\Users\johan.mina\Documents\Portafolio\portafolio-react

# Cambiar de 'master' a 'main'
git branch -M main

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/sebas-2901/Portafolio.git

# Subir tu código a GitHub
git push -u origin main
```

### 3. Publicar en GitHub Pages

Una vez que el código esté en GitHub, ejecuta:

```bash
npm run deploy
```

Este comando:
- Construirá tu aplicación
- Creará una rama `gh-pages`
- Subirá la build a GitHub Pages automáticamente

### 4. Activar GitHub Pages (solo la primera vez)

1. Ve a tu repositorio en GitHub: https://github.com/sebas-2901/Portafolio
2. Haz clic en "Settings" (Configuración)
3. En el menú lateral, busca "Pages"
4. En "Source", selecciona la rama `gh-pages`
5. Haz clic en "Save"

### 5. ¡Listo! 🎉

Tu portafolio estará disponible en:
**https://sebas-2901.github.io/Portafolio/**

(Puede tardar 1-2 minutos en estar disponible la primera vez)

---

## 🔧 Comandos útiles para el futuro:

### Ver tu portafolio localmente:
```bash
cd c:\Users\johan.mina\Documents\Portafolio\portafolio-react
npm run dev
```
Luego abre: http://localhost:5173

### Hacer cambios y actualizar:
```bash
# 1. Haz tus cambios en los archivos
# 2. Guarda los cambios en Git
git add .
git commit -m "Descripción de tus cambios"
git push origin main

# 3. Actualiza GitHub Pages
npm run deploy
```

### Actualizar información personal:

- **Foto:** Reemplaza `public/img/foto.jpeg`
- **Datos personales:** Edita `src/components/About.jsx`
- **Habilidades:** Edita `src/components/Skills.jsx`
- **Contacto:** Edita `src/components/Contact.jsx`

---

## 🎯 Características especiales de tu portafolio:

### Integración con GitHub
El componente `Projects.jsx` obtiene automáticamente todos tus repositorios públicos de GitHub y los muestra en la sección de proyectos.

**Cómo funciona:**
- Hace una petición a la API de GitHub: `https://api.github.com/users/sebas-2901/repos`
- Muestra el nombre, descripción, lenguaje, estrellas y forks de cada repo
- Incluye enlaces directos a los repositorios y demos (si están configuradas)

**Para que se vean tus proyectos:**
1. Asegúrate de que tus repositorios sean públicos
2. Agrega descripciones a tus repositorios en GitHub
3. Si tienes una demo/página web, agrégala en la configuración del repo (Settings → Website)

---

## 📝 Personalización adicional:

### Cambiar el nombre del repositorio:
Si decides cambiar el nombre del repositorio en GitHub, debes actualizar:

1. El archivo `vite.config.js`:
```javascript
base: '/NuevoNombreDelRepo/',
```

2. Los enlaces en el `README.md`

### Agregar más secciones:
1. Crea un nuevo componente en `src/components/`
2. Importalo en `src/App.jsx`
3. Agrega los estilos correspondientes

---

## ⚠️ Solución de problemas:

### Si la página no se ve bien en GitHub Pages:
- Verifica que el `base` en `vite.config.js` coincida con el nombre del repositorio
- Asegúrate de haber ejecutado `npm run deploy` después de hacer cambios

### Si no se muestran los repositorios de GitHub:
- Verifica tu conexión a internet
- Asegúrate de que tu perfil de GitHub sea público
- Revisa la consola del navegador para ver errores

### Si las imágenes no se cargan:
- Verifica que las imágenes estén en `public/img/`
- Las rutas deben empezar con `/img/` (no `./img/`)

---

## 📧 Contacto y soporte:

Si tienes dudas o problemas:
1. Revisa el README.md en tu proyecto
2. Consulta la documentación de Vite: https://vitejs.dev/
3. Documentación de React: https://react.dev/

---

## 🎓 Próximos pasos recomendados:

1. ✅ Actualiza regularmente tus proyectos en GitHub
2. 📸 Agrega capturas de pantalla a tus repositorios
3. 📝 Escribe buenos README para tus proyectos
4. 🔄 Mantén tu portafolio actualizado con nuevas habilidades
5. 🌟 Comparte tu portafolio en LinkedIn y redes sociales

---

**¡Éxito con tu portafolio! 🚀**

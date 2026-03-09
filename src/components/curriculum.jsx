import React, { useState, useEffect } from "react";
import './Header.css';
import './Footer.css';
import './About.css';
import './Skills.css';
import './Projects.css';

export default function Curriculum() {

  const [idioma, setIdioma] = useState("es");


  const [menuVisible, setMenuVisible] = useState(false);

  const [animateSkills, setAnimateSkills] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const traducciones = {
    es: {
      curriculum: "CURRICULUM",
      titulo: "Desarrollador Web Full-Stack",
      resumen:
        "Desarrollador web con experiencia en proyectos académicos y personales desde 2022, incluyendo liderazgo de equipos. Fuerte base en PHP y MySQL, integración de APIs de comercio electrónico y metodologías ágiles (Scrum). Enfocado en código limpio y arquitecturas bien estructuradas.",
      habilidades: "Habilidades Técnicas",
      experiencia: "Experiencia Profesional",
      educacion: "Educación",
      idiomas: "Idiomas",
      menu: {
        inicio: "INICIO",
        habilidades: "HABILIDADES",
        experiencia: "EXPERIENCIA",
        educacion: "EDUCACIÓN"
      },
      skills: {
        lenguajes: "Lenguajes y Tecnologías",
        frameworks: "Frameworks y Metodologías"
      },
      educacionTitulo: "Formación Académica",
      idiomasTitulo: "Idiomas",
      nivelesTitulo: "Niveles",
      descargar: "Descargar Curriculum PDF",
      experienciaItems: [
        {
          titulo: "Sistema de Inventario de Medicamentos",
          descripcion: "Proyecto de inventario para medicamentos.",
          rol: "Frontend Developer",
          periodo: "2021 – 2022"
        },
        {
          titulo: "Simulación Tienda Virtual Nike",
          descripcion: "Simulación de tienda en línea.",
          rol: "Backend Developer",
          periodo: "2023"
        },
        {
          titulo: "SENSLI – Sistema Académico",
          descripcion: "Sistema académico para gestión educativa.",
          rol: "Backend Developer",
          periodo: "2024 – Presente"
        }
      ],
      educacionItems: [
        {
          titulo: "Tecnólogo en Análisis y Desarrollo de Software",
          institucion: "SENA"
        }
      ]
    },

    en: {
      curriculum: "CURRICULUM",
      titulo: "Full-Stack Web Developer",
      resumen:
        "Web developer with experience in academic and personal projects since 2022, including team leadership. Strong foundation in PHP and MySQL, e-commerce API integrations, and Agile methodologies (Scrum). Focused on clean code and well-structured architectures.",
      habilidades: "Technical Skills",
      experiencia: "Professional Experience",
      educacion: "Education",
      idiomas: "Languages",
      menu: {
        inicio: "HOME",
        habilidades: "SKILLS",
        experiencia: "EXPERIENCE",
        educacion: "EDUCATION"
      },
      skills: {
        lenguajes: "Languages & Technologies",
        frameworks: "Frameworks & Methodologies"
      },
      educacionTitulo: "Academic Background",
      idiomasTitulo: "Languages",
      nivelesTitulo: "Levels",
      descargar: "Download CV PDF",
      experienciaItems: [
        {
          titulo: "Medicine Inventory System",
          descripcion: "Inventory project for medicines.",
          rol: "Frontend Developer",
          periodo: "2021 – 2022"
        },
        {
          titulo: "Nike Virtual Store Simulation",
          descripcion: "Online store simulation.",
          rol: "Backend Developer",
          periodo: "2023"
        },
        {
          titulo: "SENSLI – Academic System",
          descripcion: "Academic system for educational management.",
          rol: "Backend Developer",
          periodo: "2024 – Present"
        }
      ],
      educacionItems: [
        {
          titulo: "Technologist in Software Analysis and Development",
          institucion: "SENA"
        }
      ]
    },

    pt: {
      curriculum: "CURRÍCULO",
      titulo: "Desenvolvedor Web Full-Stack",
      resumen:
        "Desenvolvedor web com experiência em projetos acadêmicos e pessoais desde 2022, incluindo liderança de equipes. Forte base em PHP e MySQL, integração de APIs de e-commerce e metodologias ágeis (Scrum). Focado em código limpo e arquiteturas bem estruturadas.",
      habilidades: "Habilidades Técnicas",
      experiencia: "Experiência Profissional",
      educacion: "Educação",
      idiomas: "Idiomas",
      menu: {
        inicio: "INÍCIO",
        habilidades: "HABILIDADES",
        experiencia: "EXPERIÊNCIA",
        educacion: "EDUCAÇÃO"
      },
      skills: {
        lenguajes: "Linguagens e Tecnologias",
        frameworks: "Frameworks e Metodologias"
      },
      educacionTitulo: "Formação Acadêmica",
      idiomasTitulo: "Idiomas",
      nivelesTitulo: "Níveis",
      descargar: "Baixar Currículo PDF",
      experienciaItems: [
        {
          titulo: "Sistema de Inventário de Medicamentos",
          descripcion: "Projeto de inventário para medicamentos.",
          rol: "Desenvolvedor Frontend",
          periodo: "2021 – 2022"
        },
        {
          titulo: "Simulação Loja Virtual Nike",
          descripcion: "Simulação de loja online.",
          rol: "Desenvolvedor Backend",
          periodo: "2023"
        },
        {
          titulo: "SENSLI – Sistema Acadêmico",
          descripcion: "Sistema acadêmico para gestão educacional.",
          rol: "Desenvolvedor Backend",
          periodo: "2024 – Presente"
        }
      ],
      educacionItems: [
        {
          titulo: "Tecnólogo em Análise e Desenvolvimento de Software",
          institucion: "SENA"
        }
      ]
    },

    it: {
      curriculum: "CURRICULUM",
      titulo: "Sviluppatore Web Full-Stack",
      resumen:
        "Sviluppatore web con esperienza in progetti accademici e personali dal 2022, inclusa la leadership di team. Solida base in PHP e MySQL, integrazione di API e-commerce e metodologie Agile (Scrum). Orientato a codice pulito e architetture ben strutturate.",
      habilidades: "Competenze Tecniche",
      experiencia: "Esperienza Professionale",
      educacion: "Istruzione",
      idiomas: "Lingue",
      menu: {
        inicio: "INIZIO",
        habilidades: "COMPETENZE",
        esperienza: "ESPERIENZA",
        educacion: "ISTRUZIONE"
      },
      skills: {
        lenguajes: "Linguaggi e Tecnologie",
        frameworks: "Framework e Metodologie"
      },
      educacionTitulo: "Formazione Accademica",
      idiomasTitulo: "Lingue",
      nivelesTitulo: "Livelli",
      descargar: "Scarica Curriculum PDF",
      experienciaItems: [
        {
          titulo: "Sistema di Inventario dei Medicinali",
          descripcion: "Progetto di inventario per medicinali.",
          rol: "Frontend Developer",
          periodo: "2021 – 2022"
        },
        {
          titulo: "Simulazione Negozio Virtuale Nike",
          descripcion: "Simulazione di negozio online.",
          rol: "Backend Developer",
          periodo: "2023"
        },
        {
          titulo: "SENSLI – Sistema Accademico",
          descripcion: "Sistema accademico per la gestione educativa.",
          rol: "Backend Developer",
          periodo: "2024 – Presente"
        }
      ],
      educacionItems: [
        {
          titulo: "Tecnologo in Analisi e Sviluppo Software",
          institucion: "SENA"
        }
      ]
    },

    fr: {
      curriculum: "CURRICULUM",
      titulo: "Développeur Web Full-Stack",
      resumen:
        "Développeur web avec expérience dans des projets académiques et personnels depuis 2022, y compris le leadership d'équipe.",
      habilidades: "Compétences Techniques",
      experiencia: "Expérience Professionnelle",
      educacion: "Éducation",
      idiomas: "Langues",
      menu: {
        inicio: "ACCUEIL",
        habilidades: "COMPÉTENCES",
        experiencia: "EXPÉRIENCE",
        educacion: "ÉDUCATION"
      },
      skills: {
        lenguajes: "Langages et Technologies",
        frameworks: "Frameworks et Méthodologies"
      },
      educacionTitulo: "Formation Académique",
      idiomasTitulo: "Langues",
      nivelesTitulo: "Niveaux",
      descargar: "Télécharger le CV PDF",
      experienciaItems: [
        {
          titulo: "Système d'inventaire de médicaments",
          descripcion: "Projet d'inventaire pour médicaments.",
          rol: "Développeur Frontend",
          periodo: "2021 – 2022"
        },
        {
          titulo: "Simulation Boutique Virtuelle Nike",
          descripcion: "Simulation de boutique en ligne.",
          rol: "Développeur Backend",
          periodo: "2023"
        },
        {
          titulo: "SENSLI – Système Académique",
          descripcion: "Système académique pour la gestion éducative.",
          rol: "Développeur Backend",
          periodo: "2024 – Présent"
        }
      ],
      educacionItems: [
        {
          titulo: "Technologue en Analyse et Développement de Logiciels",
          institucion: "SENA"
        }
      ]
    },

    zh: {
      curriculum: "简历",
      titulo: "全栈网页开发者",
      resumen: "具备团队领导经验的全栈开发者，专注于高质量代码。",
      habilidades: "技术技能",
      experiencia: "工作经验",
      educacion: "教育背景",
      idiomas: "语言",
      menu: {
        inicio: "主页",
        habilidades: "技能",
        experiencia: "经验",
        educacion: "教育"
      },
      skills: {
        lenguajes: "编程语言与技术",
        frameworks: "框架与方法"
      },
      educacionTitulo: "学术背景",
      idiomasTitulo: "语言",
      nivelesTitulo: "等级",
      descargar: "下载简历 PDF",
      experienciaItems: [
        {
          titulo: "药品库存系统",
          descripcion: "药品库存项目。",
          rol: "前端开发",
          periodo: "2021 – 2022"
        },
        {
          titulo: "Nike虚拟商店模拟",
          descripcion: "在线商店模拟。",
          rol: "后端开发",
          periodo: "2023"
        },
        {
          titulo: "SENSLI – 学术系统",
          descripcion: "用于教育管理的学术系统。",
          rol: "后端开发",
          periodo: "2024 – 至今"
        }
      ],
      educacionItems: [
        {
          titulo: "软件分析与开发技术员",
          institucion: "SENA"
        }
      ]
    },

    ja: {
      curriculum: "履歴書",
      titulo: "フルスタックWeb開発者",
      resumen: "チームリーダー経験を持つフルスタック開発者。",
      habilidades: "技術スキル",
      experiencia: "職務経験",
      educacion: "学歴",
      idiomas: "言語",
      menu: {
        inicio: "ホーム",
        habilidades: "スキル",
        experiencia: "経験",
        educacion: "学歴"
      },
      skills: {
        lenguajes: "言語と技術",
        frameworks: "フレームワークと手法"
      },
      educacionTitulo: "学歴",
      idiomasTitulo: "言語",
      nivelesTitulo: "レベル",
      descargar: "履歴書 PDF ダウンロード",
      experienciaItems: [
        {
          titulo: "医薬品在庫システム",
          descripcion: "医薬品の在庫管理プロジェクト。",
          rol: "フロントエンド開発者",
          periodo: "2021 – 2022"
        },
        {
          titulo: "Nikeバーチャルストアシミュレーション",
          descripcion: "オンラインストアのシミュレーション。",
          rol: "バックエンド開発者",
          periodo: "2023"
        },
        {
          titulo: "SENSLI – 学術システム",
          descripcion: "教育管理用の学術システム。",
          rol: "バックエンド開発者",
          periodo: "2024 – 現在"
        }
      ],
      educacionItems: [
        {
          titulo: "ソフトウェア分析・開発技術者",
          institucion: "SENA"
        }
      ]
    },
  };

  const t = traducciones[idioma];


  useEffect(() => {
    const handleScroll = () => {
      const skills = document.getElementById('skills');
      if (skills) {
        const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300 && !animateSkills) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateSkills]);


  return (
    <>
      {/* NAVBAR */}
      <div className="contenedor-header">
        <header style={{display: 'flex', alignItems: 'center', position: 'relative', minHeight: '3.5rem'}}>
          <div className="logo" style={{display: 'flex', alignItems: 'center', position: 'relative', flex: '0 0 auto'}}>
            <a
              href="/Portafolio/"
              className="btn-volver"
              style={{
                position: 'fixed',
                left: '1.5rem',
                top: '1.5rem',
                width: '3.8rem',
                height: '2.3rem',
                background: 'linear-gradient(90deg, #1e293b 0%, #2563eb 70%, #48b0e7 100%)',
                color: '#fff',
                borderRadius: '0 14px 14px 0',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                zIndex: 1000,
                boxShadow: '0 6px 24px rgba(36, 99, 235, 0.18), 0 1.5px 6px rgba(30,41,59,0.12)',
                transition: 'background 0.25s, box-shadow 0.25s, transform 0.18s',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
                filter: 'drop-shadow(0 2px 8px rgba(36,99,235,0.12))'
              }}
              title="Volver al Portafolio"
              onMouseOver={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #48b0e7 0%, #2563eb 70%, #1e293b 100%)';
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(36, 99, 235, 0.28), 0 2px 8px rgba(30,41,59,0.18)';
                e.currentTarget.style.transform = 'scale(1.09)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #1e293b 0%, #2563eb 70%, #48b0e7 100%)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(36, 99, 235, 0.18), 0 1.5px 6px rgba(30,41,59,0.12)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <i className="fa-solid fa-arrow-left" style={{margin: 0, padding: 0, fontSize: '1.4rem'}}></i>
            </a>
            <a href="#perfil" style={{marginLeft: '3.5rem', fontSize: '2rem', fontWeight: 'bold', color: '#48b0e7'}}>{t.curriculum}</a>
          </div>
          <nav id="nav" className={menuVisible ? 'responsive' : ''} style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
            <ul style={{display: 'flex', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none'}}>
              <li style={{margin: '0 1rem'}}><a href="#perfil" onClick={closeMenu} style={{fontSize: '1.1rem'}}>{t.menu.inicio}</a></li>
              <li style={{margin: '0 1rem'}}><a href="#skills" onClick={closeMenu} style={{fontSize: '1.1rem'}}>{t.menu.habilidades}</a></li>
              <li style={{margin: '0 1rem'}}><a href="#experience" onClick={closeMenu} style={{fontSize: '1.1rem'}}>{t.menu.experiencia}</a></li>
              <li style={{margin: '0 1rem'}}><a href="#education" onClick={closeMenu} style={{fontSize: '1.1rem'}}>{t.menu.educacion}</a></li>
            </ul>
            <div className="nav-controls" style={{display: 'flex', alignItems: 'center', marginLeft: '1rem'}}>
              <select
                value={idioma}
                onChange={(e) => setIdioma(e.target.value)}
                className="language-select"
                style={{fontSize: '1rem', padding: '0.2rem 0.5rem'}}
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="it">Italiano</option>
                <option value="fr">Français</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </nav>
          <div className="nav-responsive" onClick={toggleMenu} style={{marginLeft: '1rem'}}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>

      {/* CONTENIDO */}
      <section id="perfil" className="sobremi">
        <div className="contenido-seccion">
          <h2>{t.titulo}</h2>
          <p className="descripcion">
            {t.resumen}
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="contenido-seccion">
          <h2>{t.habilidades}</h2>
          <div className="fila">
            <div className="col">
              <h3>{t.skills.lenguajes}</h3>
              {[
                { name: "PHP", icon: "fa-brands fa-php" },
                { name: "MySQL", icon: "fa-solid fa-database" },
                { name: "JavaScript", icon: "fa-brands fa-js" },
                { name: "React", icon: "fa-brands fa-react" },
                { name: "Angular", icon: "fa-brands fa-angular" }
              ].map((skill, index) => (
                <div key={index} className={`skill ${animateSkills ? 'animate' : ''}`}>
                  <span>
                    {skill.name}
                    <i className={skill.icon}></i>
                  </span>
                </div>
              ))}
            </div>
            <div className="col derecha">
              <h3>{t.skills.frameworks}</h3>
              {[
                { name: "Node.js", icon: "fa-brands fa-node-js" },
                { name: "Tailwind CSS", icon: "fa-brands fa-css3" },
                { name: "APIs REST", icon: "fa-solid fa-globe" },
                { name: "Scrum", icon: "fa-solid fa-users" }
              ].map((skill, index) => (
                <div key={index} className={`skill ${animateSkills ? 'animate' : ''}`}>
                  <span>
                    {skill.name}
                    <i className={skill.icon}></i>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="proyecto">
        <div className="contenido-seccion">
          <h2>{t.experiencia}</h2>
          <div className="github-repos">
            {t.experienciaItems.map((item, idx) => (
              <div className="repo-card" key={idx}>
                <div className="repo-header">
                  <h3>{item.titulo}</h3>
                </div>
                <p className="repo-description">{item.descripcion}</p>
                <div className="repo-stats">
                  <span className="stat">{item.rol}</span>
                  <span className="stat">{item.periodo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="sobremi">
        <div className="contenido-seccion">
          <h2>{t.educacion}</h2>
          <div className="fila">
            <div className="col">
              <h3>{t.educacionTitulo}</h3>
              <ul>
                {t.educacionItems.map((item, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <div>
                      <strong>{item.titulo}</strong>
                      <span>{item.institucion}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="languages" className="skills">
        <div className="contenido-seccion">
          <h2>{t.idiomas}</h2>
          <div className="fila">
            <div className="col">
              <h3>{t.idiomasTitulo}</h3>
              <div className="skill">
                <span>Español - Nativo</span>
              </div>
              <div className="skill">
                <span>Inglés - A2–B1</span>
              </div>
            </div>
            <div className="col derecha">
              <h3>{t.nivelesTitulo}</h3>
              <div className="skill">
                <span>Portugués - A2</span>
              </div>
              <div className="skill">
                <span>Francés - A1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="#hero" className="arriba">
          <i className="fa-solid fa-angles-up"></i>
        </a>
        <div id="pochoclo">
          <a href="https://www.linkedin.com/in/sebastián-mina-23423a2b2/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/sebas-2901" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Sebastián Mina</p>
        <div style={{marginTop: '2rem'}}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#2563eb',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '0.7rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(36,99,235,0.12)',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#48b0e7';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            {t.descargar}
          </a>
        </div>
      </footer>
    </>
  );
}
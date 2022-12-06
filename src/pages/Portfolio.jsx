import { useState } from 'react'
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'

import styles from '../styles/pages/portfolio.module.css'

const list = [
  {
    id: 1,
    nome: 'Manas Digitais',
    descricao: 'Forma.....',
    imagem: '',

  },
  {
    id: 2,
    nome: 'Instituto Joga Junto | Carrefur',
    descricao: 'Bugou? QA tá on! Curso de formação em Quality Assurance ',
    imagem: 'file:///C:/Users/acws_/OneDrive/%C3%81rea%20de%20Trabalho/Certificados/QA_.pdf',

  },
  {
    id: 3,
    nome: 'DoWhile | Rockseat',
    descricao: 'Evento sobre ecossistema de tecnologia, com palestras, workshops e talks',
    imagem: '',

  },
  {
    id: 4,
    nome: 'Elas em Tech | {reprograma}',
    descricao: 'Mini Curso online distribuido em: HTML, CSS, lógica de programação e Javascript',
    imagem: '',

  },
  {
    id: 4,
    nome: 'Pretalab | onLab',
    descricao: 'bla bla bla.....',
    imagem: '',

  }

]

export function Portfolio() {

  const [reposFiltrados] = useState([])
  return (
    <>
      <Header title="Meu Portfolio" image={portfolioImg} />
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>Skills</h2>
        <div className={styles.cardsContainer}>
          {list.map(project => {
            return (
              <div className={styles.card} key={project.id}>
                <h1>{project.nome}</h1>
                <img className={styles.cardImage} src={project.imagem} />

              </div>
            )
          })}
        </div>
        <div className={styles.projectsContainer}>

          <div className={styles.projectsContainer}>
            <div className={styles.cardsRepoContainer}>
              {
                reposFiltrados.map(repo => {
                  return (
                    <div className={styles.cardRepo}>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
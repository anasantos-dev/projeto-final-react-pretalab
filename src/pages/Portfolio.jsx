import { useState } from 'react'
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'

const list = [
  {
    id: 1,
    nome: 'Joga Junto | Carrefour',
    descricao: 'Formação em Quality Assurance',
    imagem: 'https://camo.githubusercontent.com/49ea82d6251dbfa19aff784c08ce5fad1624dacb1379dddb628ba7d483c54a19/68747470733a2f2f692e696d6775722e636f6d2f466d4e785846502e6a7067',

  },
  {
    id: 2,
    nome: 'SCM | Manas Digitais',
    descricao: 'Women In Tech, Capacitação em QA',
    imagem: 'https://camo.githubusercontent.com/345604376be47db98b5a6f2b04fc91c8b855bd113dcb2a4b070aefff14ce0325/68747470733a2f2f692e696d6775722e636f6d2f4f4975525445492e6a7067',
  },
  {
    id: 3,
    nome: '{Reprograma}',
    descricao: 'Html, Css, Lógica de Programação e JS',
    imagem: 'https://camo.githubusercontent.com/de79e077ebd537effd474eab93d6e5e151e96c80b443184084c7631e8c12e3f6/68747470733a2f2f692e696d6775722e636f6d2f4741394a73614c2e6a7067',

  },
  {
    id: 4,
    nome: 'Rocketseat | DoWhile',
    descricao: 'Ecossistema de tecnologia ',
    imagem: 'https://camo.githubusercontent.com/b6ac0ed1235774d5f626cbeee7a8e2616c75909843cff0aac01f1b8155f3b553/68747470733a2f2f692e696d6775722e636f6d2f767157465956322e6a7067',

  }
  
]

export function Portfolio() {

  const [reposFiltrados] = useState([])
  return (
    <>
      <Header text="Meu Portfolio" image={portfolioImg} />
    
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsTitle}>Skills</h1>

        <div className={styles.cardsContainer}>
          {list.map(project => {
            return (
              <div className={styles.card} key={project.id}>

                <h3>{project.nome}</h3>
                <h4>{project.descricao}</h4>
                <img width={300} className={styles.cardImage} src={project.imagem} />

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
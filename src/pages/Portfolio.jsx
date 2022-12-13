import { useState } from 'react'
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'

const list = [
  {
    id: 1,
    nome: 'Joga Junto | Carrefour',
    descricao: 'Formação em Quality Assuranc',
    imagem: 'https://scontent.fbel15-1.fna.fbcdn.net/v/t39.30808-6/318717749_5719530758102243_5890316622243735856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGXUKysRqDMras7YFZxe8sWUgQnkCX5LENSBCeQJfksQ_7y_ZT0pDlbJyzzAlHTd1D7ri74pZg18-AICwZKF0Qt&_nc_ohc=UX6CeKuih60AX8ZFdrp&_nc_ht=scontent.fbel15-1.fna&oh=00_AfDOs8u2D9nIj6_1zLmAHXOnT5GScNtST32FsUREa_6yiA&oe=6397C600',

  },
  {
    id: 2,
    nome: 'SCM | Manas Digitais',
    descricao: 'Women In Tech , Capacitação em QA',
    imagem: 'https://scontent.fbel15-1.fna.fbcdn.net/v/t39.30808-6/318649952_5719726978082621_771953614842205521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFlZYqfyHNWhzsCLOdvQ-UrPGQL-WZOb7I8ZAv5Zk5vsjvNhx_ol5qKTvEZF-8BH8tnYuow3vd_623PoUDklZeG&_nc_ohc=BHVqUk3ZaoMAX91LtqQ&_nc_ht=scontent.fbel15-1.fna&oh=00_AfBfC88aLs97pr1il-kppZXTTG-Q_Lgdra5JGPI9xkYtCw&oe=63976AFD',
  },
  {
    id: 3,
    nome: '{Reprograma}',
    descricao: 'HTML, CSS, Lógica de programação e JS',
    imagem: 'https://scontent.fbel15-1.fna.fbcdn.net/v/t39.30808-6/319224555_5719450548110264_5845552035734317214_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFPw60XvuBSfoF788ODCGTg6cxqsZ9EeqfpzGqxn0R6p-TX3RqicJmWZhb7EWRqN4-aZ0z9jdgaG4eqr86-KUKv&_nc_ohc=sIB_JrB-v5wAX_v--2H&tn=scmbjLJ49EdJRlMP&_nc_ht=scontent.fbel15-1.fna&oh=00_AfCu091LBCaUHSeQeMYCv5bMmajl2bTaOqiDyrrJZzQ5Xg&oe=6396E4E1',

  },
  {
    id: 4,
    nome: 'Rocketseat | DoWhile',
    descricao: 'Ecossistema de tecnologia ',
    imagem: 'https://scontent.fbel15-1.fna.fbcdn.net/v/t39.30808-6/318124590_5719495371439115_4245195568270517354_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFbWqaTC9C886172w970def00cl852upm7TRyXzna6mblqaLPXkZ5n5c4KilAHkeUg2LQ-AWskj-bjuObwKFrMO&_nc_ohc=XY9_eUVGhw8AX-pg3g8&_nc_oc=AQk6ZWRLoCj1385WtAGfNkNel4UNm6sop4GinufozAGQwXPeWd5HfYP8M0gHMnf-oWU&_nc_ht=scontent.fbel15-1.fna&oh=00_AfDizclOjus2RiSPUeCMlrcddIPRg382UWG7ZZaiykd7Lw&oe=6397C448',

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
                <h3>{project.descricao}</h3>
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
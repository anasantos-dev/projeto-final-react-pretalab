import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'
import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
  return (
    <>
     <Header text="Meu site pessoal" image={homeImg} />
     
     <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        <Alien size={150} color="#68ac90" weight="thin" />
        <h2 className={styles.cardTitle}>Vida</h2>
        <p className={styles.cardText}>Um pouquinho sobre mim, curiosidades, minha formação, 
        história da minha migração de carreira e minhas projeções futuras</p>
      </div>
      <div className={styles.cardContainer}>       
       
        <BracketsCurly size={150} color="#68ac90" weight="thin"/>
        <h2 className={styles.cardTitle}>Portifólio</h2>
        <p className={styles.cardText}>Mostro a coleção do meu trabalho, tudo o que aprendi até o momento e 
        alguns dos projetos que criei enquanto estudante em migração de carreira para area de tecnologia.</p>
      </div>
      <div className={styles.cardContainer}>
        <AddressBook size={150} color="#68ac90" weight="thin"/>
        <h2 className={styles.cardTitle}>Estou ON</h2>
        <p className={styles.cardText}>Entre em contato comigo. Seja para emprego 
        como deva / QA ou para troca de ideias inovadoras ou estudos.</p>
      </div>
     </div>
    </>
  )
}

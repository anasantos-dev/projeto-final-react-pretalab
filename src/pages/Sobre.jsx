
import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
 {/*import siImg from '../assets/si.png' */}

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return (
    <>
      <Header text="Sobre mim" image={sobreImg} />
      <div className={styles.sobreContainer}>
      <div className={styles.bioContainer}>
          <h2 className={styles.bioTitle}>Olá! <p></p>Me chamo Ana Santos,</h2>
          <h1><p className={styles.bioText}> Sou paraense, com formação em Serviço Social, muito detalhista, amante da natureza e de esportes. 
            A tecnologia sempre aguçou minha curiosidade, decidi então migrar de carreira e me 
            dedicar a adquirir conhecimentos na área tecnologica, para atuar no mercado como DEV | QA.
            Para o fututo, pretendo unir minha formação na Área Social com a tecnológica, formar parcerias e compartilhar 
            o conhecimento adquirido com os menos favorecidos.</p></h1>
        </div>
      </div>
</>
  )
}
   

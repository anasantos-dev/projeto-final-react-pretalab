
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
          <p className={styles.bioText}> Sou paraense, com formação em Serviço Social, muito detalhista e
            amante da natureza. Observando os constantes avanços tecnológicos, decidi migrar de carreira. 
            Atualmente me dedico a adquirir conhecimentos na área da tecnologia, para atuar no mercado como DEV | QA.
            Para o fututo, pretendo unir minha formação na Área Social com a tecnológica, formar parcerias e compartilhar o conhecimento adquirido com os menos favorecidos.</p>
        </div>
      </div>
</>
  )
}
   

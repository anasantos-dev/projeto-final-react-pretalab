import styles from '../styles/components/footer.module.css'

export function Footer() {
  return(
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>Feito com ♡ por Ana Santos, durante o projeto guiado no módulo de ReactJS - Pretalab</p>
    </footer>
  )
}
import { useState } from 'react'
import { Header } from '../components/Header'
import contatoImg from '../assets/contato.svg'
//import { database } from '../services/firebase'
//import { ref, push, set } from 'firebase/database'

import styles from '../styles/pages/contato.module.css'

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputName(event) {
    setNome(event.target.value)
  }

  function handleInputEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputMessage(event) {
    setMensagem(event.target.value)
  }

  function createMessage(event) {
    event.preventDefault()
   
    console.log('nome: ', nome)
    console.log('email: ', email)
    console.log('mensagem: ', mensagem)

        //const mensagensListRef = ref(database, 'mensagens')
        //const novaMensagemRef = push(mensagensListRef)

       //set(novaMensagemRef, {
      //nome: nome,
      //email: email,
      //texto: mensagem
    //})

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return(
    <>
      <Header text="Me chame! Veja meus contatinhos" image={contatoImg} />
      <div className={styles.formContainer}>
        <form onSubmit={createMessage}className={styles.form}>
          <input 
          onChange={handleInputName} 
          placeholder="Digite seu nome" 
          className={styles.formInput} 
          value={nome} 
          />

          <input 
          onChange={handleInputEmail} 
          placeholder="Digite seu e-mail" 
          className={styles.formInput} 
          value={email} 
          />
          
          <textarea 
          onChange={handleInputMessage} 
          placeholder="Digite sua mensagem" 
          className={styles.formTextArea} 
          value={mensagem} 
          />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>

<br></br>
                    
          <h4>Visite meu linkedin clicando <a href="https://www.linkedin.com/in/claudia-santos-1560a4230/" target="_blank"  class="links">aqui</a> e meu Github <a href="https://github.com/anasantos-dev" target="_blank"  class="links">aqui</a></h4> 

        </form>
      </div>
    </>
  )
}
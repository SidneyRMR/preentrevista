import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site do Sidney</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Olá, Sidney aqui. {<br/>}Bem vindo ao meu programa.
        </h1>
        <p>Objetivo aqui é demonstar meus conhecimentos em desenvolvimento!</p>
        <div className={styles.grid}>

          <a href="pessoais" className={styles.card}>
            <h2>Dados Pessoais &rarr;</h2>
            <p>Ver os dados pessoais.</p>
          </a>

          <a href="redes" className={styles.card}>
            <h2>Redes Sociais &rarr;</h2>
            <p>Ver as redes sociais.</p>
          </a>

          <a href="perguntas" className={styles.card}>
            <h2>Pré-entrevista &rarr;</h2>
            <p>Ver as respostas da pré-entrevista.</p>
          </a>
        </div>
      </main>
    </div>
  )
}

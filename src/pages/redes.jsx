import Perguntas from "../components/perguntas"
import Respostas from "../components/respostas"

import listaSocial from "../data/redes-sociais"

import styles from '../styles/Home.module.css'
import Head from "next/head"

export default function Redes(props) {
    return (
        <div className={styles.container}>
        <Head>
          <title>Redes Sociais</title>
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Redes Sociais {'    '}
            <a href="/" className={styles.description}>Voltar</a>
            </h1>
            <div className={styles.grid}>
                <div>
                {/* Lendo valores de um objeto JS */}
                {Object.keys(listaSocial).map(function (rede, link) {
                    return (
                        <div className={styles.card} key={link}>
                            <Perguntas ask={rede} ></Perguntas>
                            <Respostas answer={<a target='_black' href={Object.values(listaSocial)[link]}>{Object.values(listaSocial)[link]}</a>} ></Respostas>   
                        </div>
                    )
                })
            }
            </div>
            </div>
        </main>
        </div>
    )

}
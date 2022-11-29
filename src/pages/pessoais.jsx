import Perguntas from "../components/perguntas"
import Respostas from "../components/respostas"

import listAsks from "../data/perguntas-pessoais"
import listAnswers from "../data/respostas-pessoais"

import styles from '../styles/Home.module.css'
import Head from "next/head"

export default function Pessoais(props) {
    return (
        <div className={styles.container}>
        <Head>
          <title>Respostas pré-entrevista</title>
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Dados Pessoais{'     '}
                <a href="/" className={styles.description}>Voltar</a> 
            </h1>
            <div className={styles.grid}>
                {/* Lendo valores de um array */}
                {listAsks.map(function (list, index) {
                    return (
                        <div className={styles.card} key={index}>
                            <Perguntas ask={list}></Perguntas>
                            <Respostas answer={listAnswers[index]}></Respostas>
                        </div>
                    )
                })
                }
            </div>
        </main>
            </div>
    )

}
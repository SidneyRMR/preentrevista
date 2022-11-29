import Perguntas from "../components/perguntas"
import Respostas from "../components/respostas"

import listaGeral from "../data/perguntas-gerais"

import styles from '../styles/Home.module.css'
import Head from "next/head"

export default function Pergunta(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Respostas pré-entrevista</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Respostas para pré-entrevista {'     '}
                    <a href="/" className={styles.description}>Voltar</a>

                </h1>
                <div className={styles.grid}>
                    <div>
                        {/* Lendo valores de um objeto JS */}
                        {Object.keys(listaGeral).map(function (pergunta, link) {
                            return (
                                <div className={styles.card} key={link}>
                                    <Perguntas ask={pergunta} ></Perguntas>
                                    <Respostas answer={Object.values(listaGeral)[link]} ></Respostas>
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
import Head from 'next/head'
import React from 'react'
import { LeaderboardCard } from '../components/LeaderboardCard'
import { Sidebar } from '../components/Sidebar'
import styles from './../styles/pages/Leaderboard.module.css'

const Leaderboard = () => {
    const user = {
        name:'Jerónimo Matavel',
        imageUrl: 'https://github.com/Jeronimo-MZ.png',
        level: 1,
        experience: 0,
        challengesCompleted: 0,
    }
    return (
        <>  
            <Head>
                <title>Leaderboard | move.it</title>
            </Head>
            <Sidebar/>
            <div className={styles.Container}>
                <h1>Leaderboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Usuário</th>
                            <th>Desafios</th>
                            <th>Experiência</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LeaderboardCard rank={1} user={user}/>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Leaderboard;
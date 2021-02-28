import Head from 'next/head'
import React from 'react'
import { LeaderboardCard } from '../components/LeaderboardCard'
import { Sidebar } from '../components/Sidebar'
import styles from './../styles/pages/Leaderboard.module.css'

const Leaderboard = () => {
    const user = {
        name:'Jerónimo Matavel',
        imageUrl: 'https://github.com/Jeronimo-MZ.png',
        level: 100,
        experience: 1000000,
        challengesCompleted: 100,
    }
    return (
        <>  
            <Head>
                <title>Leaderboard | move.it</title>
            </Head>
            <Sidebar/>
            <div className={styles.container}>
                <h1>Leaderboard</h1>

                <div className={styles.tableContainer}>
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
                            <LeaderboardCard rank={2} user={user}/>
                            <LeaderboardCard rank={3} user={user}/>
                            <LeaderboardCard rank={4} user={user}/>
                            <LeaderboardCard rank={5} user={user}/>
                            <LeaderboardCard rank={6} user={user}/>
                            <LeaderboardCard rank={7} user={user}/>
                            <LeaderboardCard rank={8} user={user}/>
                            <LeaderboardCard rank={9} user={user}/>
                            <LeaderboardCard rank={10} user={user}/>
                            <LeaderboardCard rank={11} user={user}/>
                            <LeaderboardCard rank={12} user={user}/>
                            <LeaderboardCard rank={13} user={user}/>
                            <LeaderboardCard rank={14} user={user}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Leaderboard;
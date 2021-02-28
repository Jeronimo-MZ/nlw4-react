import styles from './../styles/components/LeaderboardCard.module.css';
interface LeaderboardCardProps {
    rank: Number,
    user: {
        name:string
        imageUrl: string,
        level: Number,
        experience: Number,
        challengesCompleted: Number,
    },
}
export const LeaderboardCard = ({rank, user}:LeaderboardCardProps) => {
    return (
        <tr className={styles.cardContainer}>
            <td className={styles.rank}>{rank}</td>
            <td className={styles.user}>
                <img src={ user.imageUrl } alt={ user.name } />
                <div>
                    <strong>{ user.name }</strong>
                    <p><img src="/icons/level.svg" alt="level"/> Level { user.level }</p>
                </div>

            </td>
            <td className={styles.challengesCompleted}><span>{ user.challengesCompleted }</span> Completos</td>
            <td className={styles.experience}><span>{ user.experience }</span> xp</td>
        </tr>
    )
}

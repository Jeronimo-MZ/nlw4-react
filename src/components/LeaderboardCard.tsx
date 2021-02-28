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
        <tr>
            <td>{rank}</td>
            <td>
                <img src={ user.imageUrl } alt={ user.name } />
                { user.name }
                <p><img src="/icons/level.svg" alt="level"/> Level { user.level }</p>

            </td>
            <td>{ user.challengesCompleted }</td>
            <td>{ user.experience }</td>
        </tr>
    )
}

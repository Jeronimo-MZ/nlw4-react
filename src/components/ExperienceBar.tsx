import styles from './../styles/components/ExperienceBar.module.css'
 
export const ExperienceBar = () => {
    return ( 
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}} />
                <span className={styles.currentExperience}> 300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
     );
}
 
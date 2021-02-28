import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from './../styles/components/ExperienceBar.module.css'
 
export const ExperienceBar = () => {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);
    return ( 
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div>
                    <div style={{width: `${percentToNextLevel}%`}} />
                </div>
                <span className={styles.currentExperienceContainer}
                    style={{left:  `${percentToNextLevel}%`}}
                >
                    <span className={styles.currentExperience}>  {currentExperience} xp</span>
                    <span className={styles.currentExperienceTop}></span>                
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
     );
}
 
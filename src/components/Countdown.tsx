import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from './../styles/components/Countdown.module.css'

let countdownTimeout;

export function Countdown ({initialMinutes=0.05}) {
    const { startNewChallenge } = useContext(ChallengesContext);


    const [time, setTime] = useState(initialMinutes * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }
    
    function resetCountDown() {
        setIsActive(false);
        clearTimeout(countdownTimeout);
        setTime(initialMinutes*60);
    }

    useEffect(() =>{
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time <= 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])


    return (
        <div>

            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { (hasFinished) ?(
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <img src="/icons/tick.svg"/>
                </button>
            ):
                <>
                    {(isActive) ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountDown}
                        >
                            Abandonar ciclo
                            <img src="icons/stop.svg"/>
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountDown}
                        >
                            Iniciar um ciclo
                            <img src="icons/play.svg"/>
                        </button>
                    )}
                </>
            }

            

            
        </div>
    );
}
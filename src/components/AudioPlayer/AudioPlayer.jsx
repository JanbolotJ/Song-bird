

import React, { useEffect, useRef, useState } from 'react';
import Play from "../../assets/images/stopPlay/play/Без названия.png";
import Stop from "../../assets/images/stopPlay/stop/pause.png";
import cls from "../../assets/styles/questions/Questions.module.scss";
import { Components } from '..';
import { useSelector } from 'react-redux';

export default function AudioPlayer({src, bird, name}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState();
    const [currentTime, setCurrentsTime] = useState('00:00');
    const [duration, setDuration] = useState('00:00');
    const audioRef = useRef(null);
    const isAnswerCorrectly = useSelector((state) => state.score.isAnswerCorrectly)

    useEffect(() => {
        const audio = audioRef.current;
        if(audio) {
            const updateTime = () => {
                const current = audio.currentTime;
                const total = audio.duration;

                setProgress((current/total) * 100);

                setCurrentsTime(formatTime(current));
                setDuration(formatTime(total));
            };
            
            audio.addEventListener('timeupdate', updateTime)

            return () => {
                audio.removeEventListener('timeupdate', updateTime)
            }
        }
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const HandlePlayPause = () => {
        if(isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }

    const handleProgressClick = (e) => {
        const audio = audioRef.current;
        const progressBar = e.target.getBoundingClientRect();
        const clickPosition = e.clientX - progressBar.left;
        const clickPercentage = clickPosition / progressBar.width;
        const newTime = clickPercentage * audio.duration;

        audio.currentTime = newTime;
        setProgress(clickPercentage * 100);
    };
  return (
    <div className={cls.bar}>
        <div className={cls.photo}>
            <Components.BirdsPhoto src={bird} />
        </div>
        <div className={cls.navbar}>
            <div className={cls.name}>
                <h1>{!isAnswerCorrectly ? "******" : name}</h1>
            </div>
            <hr className={cls.hr}/>
            <div className={cls.audio_player}>
                <img 
                    src={isPlaying ? Stop : Play} 
                    alt={isPlaying ? 'Stop' : 'Play'} 
                    onClick={HandlePlayPause}
                    className={cls.ppbutton}
                />
                <div className={cls.player_controls}>
                    
                    <audio
                        ref={audioRef} 
                        src={src}
                    />
                    <div className={cls.timebar} onClick={handleProgressClick}>
                        <div className={cls.progress} role="progressbar" tabIndex={0}>
                            <div 
                                className={cls.progress_bar} 
                                role="progressbar" 
                                aria-valuenow={progress} 
                                aria-valuemin="0" 
                                aria-valuemax="100" 
                                aria-label="progressbar" 
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className={cls.timebar_circle} style={{ left: `${progress}%` }}></div>
                    </div>
                    <div className={cls.time_info}>
                        <div>{currentTime}</div>
                        <div>{duration}</div>
                    </div>
                </div>  
            </div>
        </div>

        

    </div>
  )
}

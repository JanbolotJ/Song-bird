

import React, { useEffect, useRef, useState } from 'react';
import Play from "../../assets/images/stopPlay/play/Без названия.png";
import Stop from "../../assets/images/stopPlay/stop/images.png";
import cls from "../../assets/styles/information/InfoPlayer.module.scss"
import { Components } from '..';

export default function InfoPlayer({src, bird, name, info}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState();
    const [currentTime, setCurrentsTime] = useState('00:00');
    const [duration, setDuration] = useState('00:00');
    const audioRef = useRef(null);
    

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
    <div className={cls.info_bar}>
        <div className={cls.audio_player}>
            <Components.BirdsPhoto src={bird} />
            <div className={cls.flex}>
                <h1 className={cls.name}>{name}</h1>
                <hr className={cls.hr}/>
                <div className={cls.navbar}>
                    
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
        <div className={cls.info}>
            <span className={cls.nt}>{info}</span>
        </div>
    </div>
  )
}

'use client';
import { ImVolumeMedium, ImVolumeMute, ImVolumeMute2 } from "react-icons/im";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Button, Slider } from "@nextui-org/react";
import Image from 'next/image';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const MusicPlayerSection = () => {
    const playerRef = useRef(null); // useRef to hold the player instance
    const [playing, setPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [played, setPlayed] = useState(0); // in percentage (0-1)
    const [duration, setDuration] = useState(0); // duration in seconds
    const [playbackRate, setPlaybackRate] = useState(1); // Default playback rate

    const MusicList = [
        {
            title: "Sea Breeze",
            artist: "Rafael Diogo",
            musicUrl: "https://gcs.earth.fm/wp-content/uploads/2023/03/earth-fm_Rafael-Diogo_Sea-Breeze-Parque-Natural-do-Sudoeste-Alentejano-e-Costa-Vicentina-Portugal.mp3",
            cover: "https://earth.fm/static/039d9ffca2b8837f7696a28fd972e7f0/26222/282_Sea-breeze-scaled.webp"
        },
        // Add more tracks here...
    ];

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    // Seek change handler
    const handleSeekChange = (value) => {
        setPlayed(value); // Set played percentage (0-1)
        if (playerRef.current) {
            playerRef.current.seekTo(value); // Seek to the new value in real-time
        }
    };

    const handleProgress = (state) => {
        setPlayed(state.played); // Update played percentage when not seeking
    };

    const handleReady = (player) => {
        playerRef.current = player; // Assign the player instance to the ref
        console.log('Player Ref is ready:', playerRef.current);
    };

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const togglePlaybackRate = () => {
        const rates = [0.75, 1.0, 1.25, 1.5]; // Define your playback rates
        const currentIndex = rates.indexOf(playbackRate);
        const nextIndex = (currentIndex + 1) % rates.length; // Cycle through the rates
        setPlaybackRate(rates[nextIndex]); // Update the playback rate
    };


    const rewind = () => {
        if (playerRef.current) {
            const newTime = Math.max(0, playerRef.current.getCurrentTime() - 15); // Rewind 15 seconds
            playerRef.current.seekTo(newTime);
        }
    };

    const forward = () => {
        if (playerRef.current) {
            const newTime = Math.min(duration, playerRef.current.getCurrentTime() + 15); // Forward 15 seconds
            playerRef.current.seekTo(newTime);
        }
    };

    return (
        <div className="w-full">
            <ReactPlayer
                ref={playerRef}
                url={MusicList[currentTrack].musicUrl}
                playing={playing}
                controls={false}
                onDuration={(d) => setDuration(d)}
                onProgress={handleProgress}
                onReady={handleReady}
                muted={isMuted}
                playbackRate={playbackRate} // Set playback rate
                width="0px"
                height="0px"
            />
            <div className="rounded-full mx-auto my-2 w-full flex items-center gap-3 py-1 sm:py-2 px-3 bg-beta backdrop-blur-md">
                <div className="flex justify-center items-center gap-4 flex-shrink-0">
                    {!playing ? (
                        <div className="text-alpha">
                            <BsPlayCircleFill size={60} onClick={handlePlay} className="cursor-pointer text-xl focus:outline-none" />
                        </div>
                    ) : (
                        <div className="text-alpha">
                            <BsPauseCircleFill size={60} onClick={handlePause} className="cursor-pointer text-xl focus:outline-none" />
                        </div>
                    )}
                </div>
                <div className="flex-grow flex flex-col px-2 overflow-hidden rounded-2xl">
                    <div className="text-center text-sm font-medium select-none">
                        Audio by voicehero
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm">
                            {formatDuration(played * duration)}
                        </div>
                        <Slider
                            size="md"
                            step={0.001}
                            maxValue={1}
                            minValue={0}
                            aria-label="Music Slider"
                            value={played} // played is in percentage (0-1)
                            onChange={handleSeekChange} // Update during seeking
                            hideThumb
                            className="max-w-md"
                            classNames={{
                                filler: "rounded-full"
                            }}
                        />
                        <div className="text-sm">
                            {formatDuration(duration)}
                        </div>
                        <Button variant="light" size="sm" isIconOnly className="h-7 flex-shrink-0" onClick={() => setIsMuted(!isMuted)}>
                            {isMuted ?
                                <ImVolumeMute2 size={18} />
                                :
                                <ImVolumeMedium size={18} />
                            }
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:gap-8">
                        <Button variant="light" size="sm" isIconOnly className="h-6" onClick={rewind}>
                            <Image className="size-4" src={'/icon/backward-15.svg'} height={18} width={18} alt='Backward 15 seconds' />
                        </Button>
                        <Button variant="light" size="sm" onClick={togglePlaybackRate} className="font-semibold text-xs leading-4 h-6">{playbackRate.toFixed(1)}X</Button>
                        <Button variant="light" size="sm" isIconOnly className="h-6" onClick={forward}>
                            <Image className="size-4" src={'/icon/forward-15.svg'} height={18} width={18} alt='Forward 15 seconds' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayerSection;
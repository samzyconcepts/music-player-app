import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
    audioRef,
    isPlaying,
    setIsPlaying,
    songInfo,
    setSongInfo,
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
}) => {
    // Event Handler
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    const skipTrackHandler = async(direction) => {
        const currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );

        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1])
                if(isPlaying) audioRef.current.play()
                return;
            }

            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }

        if(isPlaying) audioRef.current.play()
    };

    const activeLibraryHandler = (nextPrev) => {
        const newSong = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSong);
    }

    // animation for time tracker
    const trackAnimation = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
                    }}
                    className="track"
                >
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"
                    />
                    <div style={trackAnimation} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-back")}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-forward")}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
};

Player.propTypes = {
    isPlaying: PropTypes.bool,
    setIsPlaying: PropTypes.func,
    songInfo: PropTypes.object,
    setSongInfo: PropTypes.func,
    audioRef: PropTypes.object,
    songs: PropTypes.array,
    setSongs: PropTypes.func,
    currentSong: PropTypes.object,
    setCurrentSong: PropTypes.func,
};
export default Player;

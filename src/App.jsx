import { useState, useRef } from "react";
// Styles
import "./styles/app.scss";

// Adding component
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

// Import util
import data from "./data";
import { playAudio } from "./util";

function App() {
    // Ref
    const audioRef = useRef(null);

    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        // calculate percentage
        const roundedCurrent = Math.round(currentTime);
        const roundedDuration = Math.round(duration);
        const animatedTime = Math.round(
            (roundedCurrent / roundedDuration) * 100
        );

        setSongInfo({
            ...songInfo,
            currentTime,
            duration,
            animationPercentage: animatedTime,
        });
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        playAudio(isPlaying, audioRef);
        return;
    };

    return (
        <div className={`App ${libraryStatus ? "library-active" : ""}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Song currentSong={currentSong} />
            <Player
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songs={songs}
                setSongs={setSongs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
            />

            <Library
                songs={songs}
                setSongs={setSongs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                libraryStatus={libraryStatus}
            />

            <audio
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={songEndHandler}
                src={currentSong.audio}
            ></audio>
        </div>
    );
}

export default App;

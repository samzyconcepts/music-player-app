import { useState, useRef } from "react";
// Styles
import "./styles/app.scss";

// Adding component
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

// Import util
import data from "./util";

function App() {
    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSongs] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        setSongInfo({ ...songInfo, currentTime, duration });
    };

    // Reference
    const audioRef = useRef(null);

    return (
        <div className="App">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
            />

            <Library
                songs={songs}
                setSongs={setSongs}
                setCurrentSongs={setCurrentSongs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                libraryStatus={libraryStatus}
            />

            <audio
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                src={currentSong.audio}
            ></audio>
        </div>
    );
}

export default App;

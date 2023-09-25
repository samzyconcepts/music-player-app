import { useState } from "react";
// Styles
import "./styles/app.scss";

// Adding component
import Player from "./components/Player";
import Song from "./components/Song";

// Import util
import data from "./util";

function App() {
    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSongs] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
            />
        </div>
    );
}

export default App;

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

    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player currentSong={currentSong} />
        </div>
    );
}

export default App;

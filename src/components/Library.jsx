import PropTypes from "prop-types";

// component
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSongs, audioRef, isPlaying }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        key={song.id}
                        song={song}
                        songs={songs}
                        setCurrentSongs={setCurrentSongs}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                    />
                ))}
            </div>
        </div>
    );
};

Library.propTypes = {
    audioRef: PropTypes.object,
    isPlaying: PropTypes.bool,
    songs: PropTypes.array,
    setCurrentSongs: PropTypes.func,
};
export default Library;

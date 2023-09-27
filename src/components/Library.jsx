import PropTypes from "prop-types";

// component
import LibrarySong from "./LibrarySong";

const Library = ({
    songs,
    setSongs,
    setCurrentSong,
    audioRef,
    isPlaying,
    libraryStatus,
}) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        key={song.id}
                        id={song.id}
                        song={song}
                        songs={songs}
                        setSongs={setSongs}
                        setCurrentSong={setCurrentSong}
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
    setSongs: PropTypes.func,
    setCurrentSong: PropTypes.func,
    libraryStatus: PropTypes.bool,
};
export default Library;

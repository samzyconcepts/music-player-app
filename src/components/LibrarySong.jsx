import PropTypes from "prop-types";

const LibrarySong = ({ song, songs, setCurrentSongs, audioRef, isPlaying }) => {
    const songSelectHandler = () => {
        setCurrentSongs(song);
        // check if the song is playing
        if (isPlaying) {
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioRef.current.play();
                });
            }
        }
    };
    return (
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

LibrarySong.propTypes = {
    audioRef: PropTypes.object,
    isPlaying: PropTypes.bool,
    song: PropTypes.object,
    songs: PropTypes.array,
    setCurrentSongs: PropTypes.func,
};
export default LibrarySong;

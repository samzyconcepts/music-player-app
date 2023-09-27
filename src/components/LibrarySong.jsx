import PropTypes from "prop-types";
import { playAudio } from "../util";

const LibrarySong = ({
    id,
    song,
    songs,
    setSongs,
    setCurrentSong,
    audioRef,
    isPlaying,
}) => {
    const songSelectHandler = () => {
        setCurrentSong(song);
        // change Active state of song
        const newSong = songs.map((song) => {
            if (song.id === id) {
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
        setSongs(newSong)

        playAudio(isPlaying, audioRef)
    };
    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

LibrarySong.propTypes = {
    id: PropTypes.string,
    audioRef: PropTypes.object,
    isPlaying: PropTypes.bool,
    song: PropTypes.object,
    songs: PropTypes.array,
    setSongs: PropTypes.func,
    setCurrentSong: PropTypes.func,
};
export default LibrarySong;

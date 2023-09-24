import PropTypes from "prop-types";

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

Song.propTypes = {
    currentSong: PropTypes.object.isRequired,
};
export default Song;

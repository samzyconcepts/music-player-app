export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    audioRef.current.play();
                })
                .catch((error) => console.log(error));
        }
    }
};

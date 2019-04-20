export const selectedSong = song => {
  //Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

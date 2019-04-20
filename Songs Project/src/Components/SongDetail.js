import React from "react";

import { connect } from "react-redux";
import { selectedSong } from "../actions";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please Select a Song</div>;
  }
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(
  mapStateToProps,
  { selectedSong }
)(SongDetail);

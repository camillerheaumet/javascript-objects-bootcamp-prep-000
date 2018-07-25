var playlist = {"artist name": "song title"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(songTitle, artistName) {
  delete playlist.songTitle ;
  return playlist
}
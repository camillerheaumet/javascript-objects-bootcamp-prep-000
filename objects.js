var playlist = {artist: song}
Object.assign({}, playlist, {artist : [song]})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(songTitle, artistName) {
  delete playlist.songTitle ;
  return playlist
}
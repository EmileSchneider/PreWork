function player(){
  this.tracklist = [];
  this.curentTrack = 0;

  this.add = function (track) {
    this.tracklist.push(track);
  };
  this.play = function (){
    console.log("Playing: " + this.tracklist[currentTrack].title + "by " + this.tracklist[currentTrack].artist);
  };

  this.next = function () {
    if(this.currentTrack++ > this.tracklist.length) {
      this.currentTrack = 0;
    } else {
      this.currentTrack++;
    }
  };
  this.previous = function () {
    if(this.currentTrack-- < 0){
      this.currentTrack = this.tracklist.length;
    } else {
      this.currentTrack--;
    }
  };
}

function track(artist, title, album) {
  this.artist = artist;
  this.title = title;
  this.album = album;
}
var musicPlayer = new player;

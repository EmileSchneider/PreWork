function player(){
    this.tracks = [];
    this.currentTrack = '';
    this.isPlayed = false;
}

player.prototype.addTrack = function(trackName){
    this.tracks.append(trackName);
}
player.prototype.playCurrentTrack = function(){
    this.isPlayed = true;
}
player.prototype.nextTrack = function(){
    this.currentTrack = this.tracks[(this.tracks.indexOf(this.currentTrack) + 1)]
}
player.prototype.prevTrack = function(){
    this.currentTrack = this.tracks[(this.tracks.indexOf(this.currentTrack) - 1)]    
}
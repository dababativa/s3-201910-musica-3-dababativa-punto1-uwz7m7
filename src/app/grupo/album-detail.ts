
export class AlbumDetail {
  id: number;
  grupo: string;
  title: string;
  description: string;
  songs: Array<Song> = [];
  

}

class Song {
  title: string;
  length: string;
}
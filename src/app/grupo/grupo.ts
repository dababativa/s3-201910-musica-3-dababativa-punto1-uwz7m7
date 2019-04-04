export class Grupo {
  name: string;
  image: string;
  albums: Array <AlbumGrupo> = [];
}

class AlbumGrupo {
    id: number;
  title: string;
}
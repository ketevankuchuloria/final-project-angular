export interface ArtResult {
  objectID: number;
  title: string;
  accessionYear: number;
  classification: string;
  artistAlphaSort: string;
  artistDisplayBio: string;
  creditLine: string;
  primaryImageSmall: string;
}
export interface Art {
  objectID: number;
  title: string;
  imageUrl: string;
  credits: string;
  artistBio: string;
  artist: string;
}

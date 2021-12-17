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

export interface ArtBody {
  objectIds: number;
  uid: string | null | undefined;
  rating: number;
  review: string;
}

export type ArtWithId = ArtBody & { id: string };

export interface ListItem {
  data: ArtWithId;
  art: ArtResult;
}

export type IBlob = {
  _id: string;
  length: number;
  chunkSize: number;
  uploadDate: Date;
  filename: string;
  metadata: any;
}

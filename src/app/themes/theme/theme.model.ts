
export class Theme {
  public header: string;
  public creator: string;
  public lastComent: string;
  public numberOfComents: number;

  constructor(header: string, creator: string, lastComent: string, numberOfComents: number) {
    this.header = header;
    this.creator = creator;
    this.lastComent = lastComent;
    this.numberOfComents = numberOfComents;
  }
}

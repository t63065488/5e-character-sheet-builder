export class Race {
  constructor(
    private name: string,
    private size: string,
    private speed: number,
  ) {}

  public getName(): string {
    return this.name;
  }
}

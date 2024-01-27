export class Race {
  constructor(
    private name: string,
    private size: string,
    private speed: number,
    private features: any[],
    private heightRange?: string,
  ) {}

  public getName(): string {
    return this.name;
  }
}

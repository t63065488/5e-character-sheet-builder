import { Race } from "./race";

export default class CharacterInfo {
  public constructor(
    private name: string,
    private race: Race,
    private age?: number,
    private height?: number,
  ) {}
}

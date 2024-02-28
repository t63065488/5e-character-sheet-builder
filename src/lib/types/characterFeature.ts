import { Source } from "$lib/enums/source";
import AbilityType from "./abilityType";

export interface CharacterTrait {
    source: Source
    bonusScore?: number
    abilityType?: AbilityType
}
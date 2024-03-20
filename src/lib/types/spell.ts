import SpellComponent from "$lib/enums/spellComponents";

export interface Spell {
  // Required Properties
  name: string;
  description: string;
  range: string;
  components: SpellComponent[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  level: number;
  school: any;
  classes: any;
  //Optional properties
  higherLevelCasting?: string;
  material?: string;
  attackType?: string;
  damage?: { [key: string]: any };
  subclasses?: any;
}

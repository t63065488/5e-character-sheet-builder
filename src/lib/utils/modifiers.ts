function calculateModifier(abilityScore: number): number {
  return Math.floor((abilityScore - 10) / 2);
}

export { calculateModifier };

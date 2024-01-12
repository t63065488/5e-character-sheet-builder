function calculateModifier(abilityScore: number): number {
  return (abilityScore - 10) / 2;
}

export { calculateModifier };

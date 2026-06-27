// "Meet the Pack" featured dogs (CLAUDE.md §2 art direction). Placeholder roster
// until the brand shoot lands — deliberately a range of breeds, not just doodles,
// to prove the "every kind of dog" differentiator. Swap `image` per dog later.

export interface PackDog {
  name: string;
  breed: string;
  /** Tailwind background class for the soft solid backdrop */
  backdrop: string;
  /** true when the backdrop is dark and text should be cream */
  onDark?: boolean;
  image?: string;
  icon?: 'paw' | 'leaf' | 'bone' | 'heart';
}

export const pack: PackDog[] = [
  { name: 'Dexter', breed: 'Golden Retriever', backdrop: 'bg-sage-soft', icon: 'paw' },
  { name: 'Willow', breed: 'Border Collie', backdrop: 'bg-teal', onDark: true, icon: 'heart' },
  { name: 'Juno', breed: 'Goldendoodle', backdrop: 'bg-camel/30', icon: 'leaf' },
  { name: 'Boone', breed: 'German Shepherd', backdrop: 'bg-sage/35', icon: 'bone' },
];

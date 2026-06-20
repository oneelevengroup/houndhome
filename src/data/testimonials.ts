// Placeholder testimonial slots (CLAUDE.md §5). OEG collects real quotes; these
// are clearly-marked stand-ins so the layout is built and ready for the swap.
// Set `placeholder: true` so the UI can label them honestly until real ones land.

export interface Testimonial {
  quote: string;
  author: string;
  dog: string;
  program: string;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Placeholder quote. Real client testimonials will live here after the brand shoot and outreach. This card shows how a quote, the owner, their dog, and the program will appear together.',
    author: 'Client Name',
    dog: 'Dog’s Name',
    program: 'Stay & Train',
    placeholder: true,
  },
  {
    quote:
      'Placeholder quote. Replace with a real story about the change a family saw and the support they felt afterward.',
    author: 'Client Name',
    dog: 'Dog’s Name',
    program: 'Behavioral Modification',
    placeholder: true,
  },
  {
    quote:
      'Placeholder quote. A shorter, punchy testimonial works well here to vary the rhythm of the grid.',
    author: 'Client Name',
    dog: 'Dog’s Name',
    program: 'Puppy Program',
    placeholder: true,
  },
];

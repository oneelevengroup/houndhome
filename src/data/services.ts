// Service architecture (CLAUDE.md §5). Three pillars — Play | Stay | Train —
// are the structural spine of the brand. Individual programs live under a pillar
// and each renders its own page via /services/[program].astro.
//
// `status`: 'live' | 'soon'  — flips a "coming soon" treatment without removing
// the structure, so pages are ready when Taylor launches them (§9 open item #4).

export type ProgramStatus = 'live' | 'soon';

export interface Program {
  slug: string;
  name: string;
  pillar: 'play' | 'stay' | 'train';
  status: ProgramStatus;
  length?: string;
  tagline: string;
  forWho: string;
  includes: string[];
  goesHomeKnowing: string[];
  supportAfter: string;
}

export interface Pillar {
  key: 'play' | 'stay' | 'train';
  word: string; // Play / Stay / Train
  title: string;
  status: ProgramStatus;
  summary: string;
  icon: 'paw' | 'house' | 'leaf';
}

export const pillars: Pillar[] = [
  {
    key: 'play',
    word: 'Play',
    title: 'Daycare',
    status: 'soon',
    summary:
      'Structured, social days in a real home environment. Enrichment and rest in balance, never a free-for-all.',
    icon: 'paw',
  },
  {
    key: 'stay',
    word: 'Stay',
    title: 'Board & Train and Boarding',
    status: 'live',
    summary:
      'Your dog lives and learns here. Days are structured and enriching, and they go home with new skills, a clear plan, and support for life.',
    icon: 'house',
  },
  {
    key: 'train',
    word: 'Train',
    title: 'Training Sessions',
    status: 'live',
    summary:
      'One-on-one guidance that gets to the root of what is actually going on, in person within programs and virtually from anywhere.',
    icon: 'leaf',
  },
];

export const programs: Program[] = [
  // -------------------------------------------------------------- STAY
  {
    slug: 'puppy-program-3-week',
    name: '3-Week Puppy Program',
    pillar: 'stay',
    status: 'live',
    length: '3 weeks',
    tagline: 'A confident, well-mannered start for your young dog.',
    forWho:
      'Puppies in the window where habits form fastest. For families who want to start right rather than undo problems later.',
    includes: [
      'Three weeks living and learning in a real home',
      'Foundation manners: name, sit, down, place, and polite greetings',
      'Crate comfort, potty routine, and calm settling',
      'Early socialization done thoughtfully, never overwhelming',
      'Daily enrichment, hikes, and an evening brush-out',
    ],
    goesHomeKnowing: [
      'The building blocks of listening and self-control',
      'How to settle calmly in a busy home',
      'A head start on the manners that make daily life easy',
    ],
    supportAfter:
      'A go-home session to transfer everything to you, plus check-ins and lifelong support as your puppy grows.',
  },
  {
    slug: 'puppy-program-4-week',
    name: '4-Week Puppy Program',
    pillar: 'stay',
    status: 'live',
    length: '4 weeks',
    tagline: 'More time, deeper foundations, steadier habits.',
    forWho:
      'Puppies who need extra time to absorb the work, or families who want the most thorough possible start.',
    includes: [
      'Everything in the 3-Week Puppy Program, with an extra week to solidify',
      'Stronger duration and distraction work on the foundations',
      'Early leash skills and confident exposure to the wider world',
      'Daily enrichment, trail time, and an evening brush-out',
    ],
    goesHomeKnowing: [
      'Reliable foundation manners that hold up at home',
      'Greater focus and impulse control for their age',
      'Comfort and confidence in new places and situations',
    ],
    supportAfter:
      'A go-home session to hand everything off, plus check-ins and lifelong support.',
  },
  {
    slug: 'stay-and-train',
    name: 'Stay & Train (3 / 4 / 6 Week)',
    pillar: 'stay',
    status: 'live',
    length: '3, 4, or 6 weeks',
    tagline: 'Real-world manners and reliability, built to last.',
    forWho:
      'Adolescent and adult dogs who need manners, focus, and follow-through. Choose the length together in your consult based on your goals and your dog.',
    includes: [
      'Your dog lives in a structured, loving home for the full program',
      'Obedience and real-life manners: leash work, recall, place, and settling',
      'Work around the distractions of everyday life, not just a quiet room',
      'Breed-fulfilling enrichment, hikes and trail walks, homemade treats',
      'An evening brush-out and a clean, calm space to rest',
    ],
    goesHomeKnowing: [
      'Reliable obedience that holds up in the real world',
      'How to walk politely, come when called, and settle on cue',
      'Calmer, more confident behavior rooted in understanding, not just rules',
    ],
    supportAfter:
      'Go-home sessions so the skills transfer to you, plus ongoing check-ins and support for life.',
  },
  {
    slug: 'behavioral-modification',
    name: 'Behavioral Modification Stay & Train',
    pillar: 'stay',
    status: 'live',
    length: 'Scoped in consult',
    tagline: 'For the dogs other programs give up on.',
    forWho:
      'Dogs working through reactivity, anxiety, fear, or other serious behavior challenges. This is careful, individualized work, never a one-size-fits-all fix.',
    includes: [
      'A full assessment of the root cause, not just the symptom',
      'A custom plan built for your specific dog and family',
      'Patient, structured work in a calm and safe environment',
      'Daily enrichment and decompression to support real change',
      'Honest guidance about what is realistic and what it will take',
    ],
    goesHomeKnowing: [
      'New, healthier patterns in place of the old ones',
      'More confidence and less reactivity in their triggers',
      'A clear path forward that you understand and can maintain',
    ],
    supportAfter:
      'Thorough go-home sessions, a written plan, and lifelong support, because this work continues at home.',
  },
  {
    slug: 'breeder-packages',
    name: 'Breeder Packages',
    pillar: 'stay',
    status: 'live',
    length: 'Custom',
    tagline: 'Discounted puppy programs and virtual material for your buyers.',
    forWho:
      'Breeders who want their puppies to go home with a real foundation and their families set up to succeed.',
    includes: [
      'Discounted puppy programs for your litters',
      'Virtual training material to share with your puppy buyers',
      'A trusted, experienced partner your families can keep working with',
      'Flexible structure built around your program',
    ],
    goesHomeKnowing: [
      'Foundation manners and confidence before they ever reach their new home',
      'A smoother transition for puppy and family alike',
    ],
    supportAfter:
      'Ongoing support for your buyers and a standing relationship with your program.',
  },
  // -------------------------------------------------------------- TRAIN
  {
    slug: 'virtual-sessions',
    name: 'Virtual One-on-One Sessions',
    pillar: 'train',
    status: 'live',
    length: 'Per session',
    tagline: 'Expert guidance, wherever you and your dog are.',
    forWho:
      'Owners who want hands-on coaching without travel, families maintaining a program, or anyone who wants a knowledgeable partner in their corner.',
    includes: [
      'Live one-on-one coaching tailored to your dog and your goals',
      'A real look at the root of what is going on, not generic tips',
      'A clear, doable plan you can put to work right away',
      'Follow-up guidance so progress actually sticks',
    ],
    goesHomeKnowing: [
      'Exactly what to work on and how to do it well',
      'The why behind your dog’s behavior, so you can adapt as you go',
    ],
    supportAfter:
      'Continued sessions as needed and a partner you can return to as your dog grows.',
  },
  // -------------------------------------------------------------- PLAY
  {
    slug: 'daycare',
    name: 'Daycare',
    pillar: 'play',
    status: 'soon',
    length: 'Coming soon',
    tagline: 'Structured, social, enriching days, coming soon.',
    forWho:
      'Local families who want their dog cared for in a real home with structure and enrichment, not a loud commercial kennel.',
    includes: [
      'Structured days that balance play, enrichment, and rest',
      'Breed-fulfilling activities and time outdoors',
      'A clean, calm, genuinely safe environment',
      'The same attentive, individualized care as every program here',
    ],
    goesHomeKnowing: [
      'A happily tired, well-cared-for dog at the end of the day',
    ],
    supportAfter:
      'Reach out to be among the first to know when daycare opens.',
  },
];

export const programsByPillar = (key: Pillar['key']) =>
  programs.filter((p) => p.pillar === key);

export const getProgram = (slug: string) =>
  programs.find((p) => p.slug === slug);

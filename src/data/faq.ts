// FAQ seeded from the questions Taylor answers constantly (CLAUDE.md §5),
// written in her warm, plain voice. OEG to refine answers as needed.

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'What is the investment?',
    a: 'Every dog and every family is a little different, so I match programs in a consultation rather than selling a fixed package off a shelf. Once we talk through what is going on and what you are hoping for, I will walk you through the investment for the program that actually fits. The best first step is a quick conversation.',
  },
  {
    q: 'What does the booking process look like?',
    a: 'It is meant to be the easy part. You tell me a little about your dog through a short form, we book a consultation to talk it through, and together we land on the program that makes sense for where you both are. No pressure and no scripts, just a conversation.',
  },
  {
    q: 'Which program is right for my dog?',
    a: 'That is exactly what the consultation is for. Some dogs need a few weeks of foundation work, some need focused behavioral help, and some families just want virtual coaching. I will listen first, then recommend honestly, even if that means a smaller program than you expected.',
  },
  {
    q: 'What does the day-to-day look like?',
    a: 'Structured and enriching, never a free-for-all. Days include breed-fulfilling activities, one-on-one training, hikes and trail walks, an evening brush-out, homemade treats, and plenty of calm rest in a clean, safe home. Your dog learns in the same kind of real-life environment they will go home to.',
  },
  {
    q: 'Do you work with all breeds?',
    a: 'Yes, every kind of dog, not just the easy ones. Thirteen years across shelters, show dogs, and sport dogs means I have worked with a huge range of breeds and temperaments. I treat your dog the way I would want mine treated.',
  },
  {
    q: 'What support do I get after my dog goes home?',
    a: 'A lot, because training that ends when the stay ends has not really helped anyone. Every program includes go-home sessions to transfer the skills to you, follow-up check-ins, and my support for the life of your dog. A dog who only learns to follow rules has not really changed, and a family who does not understand their dog has not really been helped.',
  },
  {
    q: 'Where are you located, and do clients travel to you?',
    a: 'Hound & Home is in Ararat, Virginia, right near the Mount Airy, North Carolina border. For board-and-train and stay-and-train, families travel here from the surrounding region and beyond. It is a destination, and your dog stays in a real home the whole time.',
  },
];

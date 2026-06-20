// Single source of truth for business info. Keeping NAP here guarantees it is
// identical everywhere (CLAUDE.md §8). Update the `PLACEHOLDER` fields once the
// open decisions in §9 are locked (domain, handles, brand email, embed URLs).

export const site = {
  name: 'Hound & Home',
  tagline: 'play | stay | train',
  description:
    'Boutique dog daycare, boarding, and training in Ararat, VA. A real home for your dog, not a kennel. Thirteen years of experience, every breed, root-cause training.',

  // Contact / NAP — confirmed in the brief
  phone: '(336) 325-0846',
  phoneHref: 'tel:+13363250846',
  address: {
    street: '1806 Ararat Hwy',
    city: 'Ararat',
    region: 'VA',
    postalCode: '24053',
    country: 'US',
  },

  // OPEN (§9): not yet secured. Marked so nothing fake ships.
  email: 'PLACEHOLDER@houndandhome.com',
  domain: 'houndandhome.com',
  url: 'https://houndandhome.com',
  instagram: '', // PLACEHOLDER — handle to move from "Taylor Trains Doodles"

  hours: [
    { days: 'Monday – Friday', time: 'By appointment' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],

  // OPEN (§7, §9): third-party embed URLs. Swap when Taylor's accounts are live.
  embeds: {
    honeybookInquiry: '', // HoneyBook lead form embed URL
    honeybookContact: '', // HoneyBook contact form embed URL
    calendly: '', // Calendly consult scheduler URL
    brevoSignup: '', // Brevo email-capture form action
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Investment', href: '/investment' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

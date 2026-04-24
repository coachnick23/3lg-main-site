import VerticalHero from '../components/VerticalHero';
import BmsSection from '../components/BmsSection';
import FourteenSystems from '../components/FourteenSystems';
import Pricing from '../components/Pricing';
import SocialProof from '../components/SocialProof';
import CtaFooter from '../components/CtaFooter';

const CARDS = [
  { id: 'front-desk', name: '3LG Front Desk', blurb: 'Every customer heard. Every opportunity caught.' },
  { id: 'financial', name: '3LG Financial Center', blurb: 'Money in, money out, books clean for funding.' },
  { id: 'home-office', name: '3LG Home Office', blurb: 'Operations, team, and filings — centralized.' },
  { id: 'email-text', name: 'Email & Text Center', blurb: 'Customer comms that build the relationship.' },
  { id: 'command', name: 'Command Center', blurb: 'Run the business from wherever you stand.' },
  { id: 'squad', name: '3LG Squad', blurb: 'Your team, your partners, your projects.' },
  { id: 'meet', name: '3LG Meet', blurb: 'Client meetings that produce outcomes.' },
  { id: 'vision', name: '3LG Vision', blurb: 'The legacy you\'re building — visible every day.' },
];

export default function BlackOwnedBusinesses() {
  return (
    <>
      <VerticalHero
        headline="Built For Black-Owned Businesses."
        subline="The operating system for founders who are already moving and ready to scale."
      />
      <BmsSection heading="The Platform for Black-Owned Businesses" cards={CARDS} />
      <FourteenSystems />
      <Pricing />
      <SocialProof />
      <CtaFooter />
    </>
  );
}

import VerticalHero from '../components/VerticalHero';
import BmsSection from '../components/BmsSection';
import FourteenSystems from '../components/FourteenSystems';
import Pricing from '../components/Pricing';
import SocialProof from '../components/SocialProof';
import CtaFooter from '../components/CtaFooter';

const CARDS = [
  { id: 'front-desk', name: '3LG Front Desk', blurb: 'Every inquiry captured. Every showing scheduled.' },
  { id: 'financial', name: '3LG Financial Center', blurb: 'Commissions, splits, and closings tracked clean.' },
  { id: 'home-office', name: '3LG Home Office', blurb: 'Listings, docs, and deals in one workspace.' },
  { id: 'email-text', name: 'Email & Text Center', blurb: 'Follow-ups that actually get sent.' },
  { id: 'command', name: 'Command Center', blurb: 'Talk to your database. From anywhere.' },
  { id: 'squad', name: '3LG Squad', blurb: 'Your team, your TC, your vendors — synced.' },
  { id: 'meet', name: '3LG Meet', blurb: 'Listing presentations that convert on the first call.' },
  { id: 'vision', name: '3LG Vision', blurb: 'The practice you said you\'d build — running.' },
];

export default function RealEstate() {
  return (
    <>
      <VerticalHero
        headline="Every Lead. Every Listing."
        subline="The operating system for agents, teams, and brokerages ready to scale without burning out."
      />
      <BmsSection heading="The Platform for Real Estate" cards={CARDS} />
      <FourteenSystems />
      <Pricing />
      <SocialProof />
      <CtaFooter />
    </>
  );
}

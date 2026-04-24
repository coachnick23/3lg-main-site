import VerticalHero from '../components/VerticalHero';
import BmsSection from '../components/BmsSection';
import FourteenSystems from '../components/FourteenSystems';
import Pricing from '../components/Pricing';
import SocialProof from '../components/SocialProof';
import CtaFooter from '../components/CtaFooter';

const CARDS = [
  { id: 'front-desk', name: '3LG Front Desk', blurb: 'Every call answered. Every missed job recovered.' },
  { id: 'financial', name: '3LG Financial Center', blurb: 'Invoices out, payments in, books closed.' },
  { id: 'home-office', name: '3LG Home Office', blurb: 'Dispatch, schedule, and crew files in one place.' },
  { id: 'email-text', name: 'Email & Text Center', blurb: 'Quotes, confirmations, and follow-ups on autopilot.' },
  { id: 'command', name: 'Command Center', blurb: 'Talk to every system from the truck.' },
  { id: 'squad', name: '3LG Squad', blurb: 'Every job, every crew, every tag — one board.' },
  { id: 'meet', name: '3LG Meet', blurb: 'Estimates and walkthroughs that close on the call.' },
  { id: 'vision', name: '3LG Vision', blurb: 'The shop you said you\'d build — operating.' },
];

export default function HomeServices() {
  return (
    <>
      <VerticalHero
        headline="Built For The Trades."
        subline="The operating system for plumbers, HVAC, electrical, and every crew running a real shop."
      />
      <BmsSection heading="The Platform for Home Services" cards={CARDS} />
      <FourteenSystems />
      <Pricing />
      <SocialProof />
      <CtaFooter />
    </>
  );
}

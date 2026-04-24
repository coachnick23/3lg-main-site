import VerticalHero from '../components/VerticalHero';
import BmsSection from '../components/BmsSection';
import FourteenSystems from '../components/FourteenSystems';
import Pricing from '../components/Pricing';
import SocialProof from '../components/SocialProof';
import CtaFooter from '../components/CtaFooter';

const CARDS = [
  { id: 'front-desk', name: '3LG Front Desk', blurb: 'Every order captured. Every supplier replied to.' },
  { id: 'financial', name: '3LG Financial Center', blurb: 'Cash in, costs tracked, margin visible.' },
  { id: 'home-office', name: '3LG Home Office', blurb: 'Routes, deliveries, compliance — centralized.' },
  { id: 'email-text', name: 'Email & Text Center', blurb: 'Customer updates and driver comms — reliable.' },
  { id: 'command', name: 'Command Center', blurb: 'Run the depot from the truck or the desk.' },
  { id: 'squad', name: '3LG Squad', blurb: 'Drivers, vendors, ops — one board.' },
  { id: 'meet', name: '3LG Meet', blurb: 'Supplier and partner meetings that produce deals.' },
  { id: 'vision', name: '3LG Vision', blurb: 'Essentials delivered. Trust built every day.' },
];

export default function FoodWater() {
  return (
    <>
      <VerticalHero
        headline="Infrastructure For The Essentials."
        subline="The operating system for food and water businesses serving real communities."
      />
      <BmsSection heading="The Platform for Food & Water" cards={CARDS} />
      <FourteenSystems />
      <Pricing />
      <SocialProof />
      <CtaFooter />
    </>
  );
}

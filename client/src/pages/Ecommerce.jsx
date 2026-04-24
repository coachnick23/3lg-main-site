import VerticalHero from '../components/VerticalHero';
import BmsSection from '../components/BmsSection';
import FourteenSystems from '../components/FourteenSystems';
import Pricing from '../components/Pricing';
import SocialProof from '../components/SocialProof';
import CtaFooter from '../components/CtaFooter';

const CARDS = [
  { id: 'front-desk', name: '3LG Front Desk', blurb: 'Cart questions, returns, WISMO — all answered.' },
  { id: 'financial', name: '3LG Financial Center', blurb: 'Revenue, refunds, and margin — one view.' },
  { id: 'home-office', name: '3LG Home Office', blurb: 'Catalog, fulfillment, and team — organized.' },
  { id: 'email-text', name: 'Email & Text Center', blurb: 'Abandoned cart, post-purchase, and winbacks.' },
  { id: 'command', name: 'Command Center', blurb: 'Your store, your agents, your inbox — all connected.' },
  { id: 'squad', name: '3LG Squad', blurb: 'Ops and CX working from the same board.' },
  { id: 'meet', name: '3LG Meet', blurb: 'Vendor calls and ops syncs that move orders.' },
  { id: 'vision', name: '3LG Vision', blurb: 'The brand you said you\'d build — scaling.' },
];

export default function Ecommerce() {
  return (
    <>
      <VerticalHero
        headline="From Storefront To Shipping."
        subline="The operating system for DTC brands and operators ready for the next $1M in sales."
      />
      <BmsSection heading="The Platform for E-Commerce" cards={CARDS} />
      <FourteenSystems />
      <Pricing />
      <SocialProof />
      <CtaFooter />
    </>
  );
}

import VerticalHero from '../components/VerticalHero';
import BmsSection from '../components/BmsSection';
import Pricing from '../components/Pricing';
import CtaFooter from '../components/CtaFooter';

// Sports & coaching vertical, featuring the first live build on the 3LG platform: Clifton's Tennis Academy.
const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || '';

const CARDS = [
  { id: 'front-desk', name: '3LG Front Desk', blurb: 'Lesson requests, court quotes and STOP-compliant texts.' },
  { id: 'financial', name: '3LG Financial Center', blurb: 'Contribution margin on every racquet, bundle and lesson.' },
  { id: 'home-office', name: '3LG Home Office', blurb: 'Bookings, students, vendors and payouts in one sidebar.' },
  { id: 'email-text', name: 'Email & Text Center', blurb: 'One promotional text a month, max. Useful follow-ups always.' },
  { id: 'command', name: 'Just Speak™', blurb: '“Show Saturday lessons awaiting court confirmation.” Done.' },
  { id: 'squad', name: 'Partner Program', blurb: '50/50 membership referrals, 5–25% on gear, tracked to the cent.' },
  { id: 'meet', name: 'Vendor Intelligence', blurb: 'Landed cost across suppliers before you reorder.' },
  { id: 'vision', name: 'Ad Intelligence', blurb: 'What competitors run, labeled by evidence.' },
];

const FACTS = [
  ['$80 / $120 / $160', 'Private lessons · 60 / 90 / 120 min'],
  ['50 mi', 'Court search radius from Lithonia, GA 30058'],
  ['$0 → $97', 'Free, Player, Competitor and Elite memberships'],
  ['100', 'Founding Elite reseller storefronts'],
];

export default function Tennis() {
  return (
    <>
      <VerticalHero
        headline="Coaching Businesses, Fully Booked."
        subline="Lessons, courts, memberships, gear and partners on one platform. The first academy built on 3LG: Clifton’s Tennis Academy."
      />
      <section className="bg-soft-gray section-pad">
        <div className="container-tight">
          <p className="eyebrow">Case study · Clifton’s Tennis Academy</p>
          <h2 className="mt-3 text-3xl md:text-5xl text-body-dark">A tennis academy and a tennis store, run from one Home Office.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map(([n, l]) => (
              <div key={l} className="card p-6">
                <div className="font-display tracking-display text-3xl text-brand-blue">{n}</div>
                <div className="mt-2 text-sm text-muted">{l}</div>
              </div>
            ))}
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 text-body-dark">
            <li className="card p-6"><b>Request is never a reservation.</b> Players enter a ZIP, Clifton’s calendar is matched to an eligible court, and a text quote shows coaching and court rental separately.</li>
            <li className="card p-6"><b>Charged only after the court is confirmed.</b> Cards are authorized first and captured once the facility confirms, with idempotent payments that never double-charge.</li>
            <li className="card p-6"><b>Margins before markdowns.</b> Every promotion is checked against supplier cost, shipping, card fees and commissions. Anything below the floor needs owner approval.</li>
            <li className="card p-6"><b>No fake numbers.</b> Dashboards show only recorded transactions, and research is labeled verified, observed or needs verification.</li>
          </ol>
          {ACADEMY_URL ? (
            <a href={ACADEMY_URL} className="btn-green-lg mt-10" target="_blank" rel="noreferrer">Visit Clifton’s Tennis Academy</a>
          ) : (
            <p className="mt-10 text-sm text-muted">Clifton’s Tennis Academy launches at its own domain. Ask us for the preview link.</p>
          )}
        </div>
      </section>
      <BmsSection heading="The Platform for Coaches & Academies" cards={CARDS} />
      <Pricing />
      <CtaFooter />
    </>
  );
}

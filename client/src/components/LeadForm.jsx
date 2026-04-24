import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';

export default function LeadForm({ source = 'generic', ctaLabel = 'Claim Your Spot', onWhite = false, compact = false }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const tier = useAppStore((s) => s.tier);
  const submitLead = useAppStore((s) => s.submitLead);
  const submitting = useAppStore((s) => s.leadSubmitting);
  const submitted = useAppStore((s) => s.leadSubmitted);
  const error = useAppStore((s) => s.leadError);
  const resetLead = useAppStore((s) => s.resetLead);

  const onSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    await submitLead({ email: trimmed, name: name.trim(), tier, source });
  };

  if (submitted) {
    return (
      <div className={`${onWhite ? 'bg-soft-gray' : 'bg-white/10 border border-white/20'} rounded-xl p-6 text-center`}>
        <div className={`font-display tracking-display text-2xl ${onWhite ? 'text-body-dark' : 'text-white'}`}>
          You're in.
        </div>
        <p className={`mt-2 text-sm ${onWhite ? 'text-muted' : 'text-white/80'}`}>
          Check your inbox. The Front Desk AI will reach out shortly.
        </p>
        <button
          type="button"
          onClick={resetLead}
          className="mt-4 font-mono text-xs tracking-[0.2em] uppercase link-blue"
        >
          Submit another
        </button>
      </div>
    );
  }

  const inputBase = onWhite
    ? 'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-body-dark placeholder-muted focus:outline-none focus:border-bright-blue'
    : 'w-full px-4 py-3 rounded-lg border border-white/30 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:border-white';

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? 'sm:grid-cols-[1fr,1fr,auto]' : 'sm:grid-cols-2'} items-start`}>
      {!compact && (
        <input
          type="text"
          placeholder="First name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputBase}
        />
      )}
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputBase}
      />
      <button type="submit" disabled={submitting} className="btn-green-lg disabled:opacity-60">
        {submitting ? 'Sending…' : ctaLabel}
      </button>
      {error && (
        <div className={`text-sm ${onWhite ? 'text-brand-red' : 'text-white/80'} sm:col-span-full`}>
          Something went wrong: {error}. Please try again.
        </div>
      )}
    </form>
  );
}

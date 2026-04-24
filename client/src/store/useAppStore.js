import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Resolve API base — matches Vite's BASE_URL so subpath deploys (e.g. /main/) work.
const API = (import.meta.env.BASE_URL || '/') + 'api';

export const useAppStore = create(
  persist(
    (set, get) => ({
      // ─── Tier state ───
      tier: null, // 'L1' | 'L2' | 'L3' | null
      setTier: (tier) => set({ tier }),

      // ─── Founding 100 counter ───
      foundingTotal: 100,
      foundingClaimed: 0,
      foundingLoading: false,
      foundingError: null,
      fetchFounding: async () => {
        set({ foundingLoading: true, foundingError: null });
        try {
          const res = await fetch(`${API}/founding`);
          const data = await res.json();
          if (data && typeof data.total === 'number') {
            set({
              foundingTotal: data.total,
              foundingClaimed: data.claimed || 0,
              foundingLoading: false,
            });
          } else {
            set({ foundingLoading: false, foundingError: data.error || 'empty' });
          }
        } catch (err) {
          set({ foundingLoading: false, foundingError: err.message });
        }
      },

      // ─── Lead capture ───
      leadSubmitting: false,
      leadSubmitted: false,
      leadError: null,
      submitLead: async ({ email, name, tier, source, extra }) => {
        set({ leadSubmitting: true, leadError: null });
        try {
          const res = await fetch(`${API}/lead`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, tier, source, extra }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || 'submit failed');
          set({ leadSubmitting: false, leadSubmitted: true });
          // Refresh founding counter after any lead that chose Founding 100
          if (source === 'founding-100') await get().fetchFounding();
          return data;
        } catch (err) {
          set({ leadSubmitting: false, leadError: err.message });
          return null;
        }
      },
      resetLead: () => set({ leadSubmitted: false, leadError: null }),
    }),
    {
      name: '3lg-main-site-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ tier: state.tier }),
    },
  ),
);

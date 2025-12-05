import { create } from "zustand";

interface UIState {
  // Header state
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  
  // Actions
  setIsScrolled: (isScrolled: boolean) => void;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSearch: () => void;
  setSearchOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isScrolled: false,
  isMobileMenuOpen: false,
  isSearchOpen: false,
  
  setIsScrolled: (isScrolled) => set({ isScrolled }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  setSearchOpen: (open) => set({ isSearchOpen: open }),
}));


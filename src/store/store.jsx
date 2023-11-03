import { create } from 'zustand';

const useUserStore = create((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
}));

export default useUserStore;
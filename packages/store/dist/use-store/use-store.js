import create from 'zustand';
export const useResourceStore = create((set) => ({
    currentResource: 'people',
    currentResourceDetails: null,
    setCurrentResource: (item) => set((state) => ({ currentResource: item })),
    setCurrentResourceDetails: (item) => set((state) => ({ currentResourceDetails: item })),
}));

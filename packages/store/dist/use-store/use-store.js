import create from 'zustand';
export const useResourceStore = create((set) => ({
    currentResource: 'people',
    setCurrentResource: (resource) => set((state) => ({ currentResource: resource })),
}));

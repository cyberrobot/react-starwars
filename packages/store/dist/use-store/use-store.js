import create from 'zustand';
export const useResourceStore = create((set) => ({
    currentResource: 'people',
    currentDataBy: '',
    setCurrentResource: (item) => set((state) => ({ currentResource: item })),
    setCurrentDataBy: (item) => set((state) => ({ currentDataBy: item })),
}));

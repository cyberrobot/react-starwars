import create from 'zustand';

type ResourceStore = {
  currentResource: string;
  currentDataBy: string;
  setCurrentResource: (item: string) => void;
  setCurrentDataBy: (item: string) => void;
};

export const useResourceStore = create<ResourceStore>((set) => ({
  currentResource: 'people',
  currentDataBy: '',
  setCurrentResource: (item) => set((state) => ({ currentResource: item })),
  setCurrentDataBy: (item) => set((state) => ({ currentDataBy: item })),
}));

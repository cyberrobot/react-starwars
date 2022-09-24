import create from 'zustand';

type ResourceStore = {
  currentResource: string;
  setCurrentResource: (resource: string) => void;
};

export const useResourceStore = create<ResourceStore>((set) => ({
  currentResource: 'people',
  setCurrentResource: (resource) =>
    set((state) => ({ currentResource: resource })),
}));

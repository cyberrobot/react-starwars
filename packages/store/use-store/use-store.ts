import { Entity } from 'api';
import create from 'zustand';

type ResourceStore = {
  currentResource: string;
  currentResourceDetails: Entity | null;
  setCurrentResource: (item: string) => void;
  setCurrentResourceDetails: (item: Entity | null) => void;
};

export const useResourceStore = create<ResourceStore>((set) => ({
  currentResource: 'people',
  currentResourceDetails: null,
  setCurrentResource: (item) => set((state) => ({ currentResource: item })),
  setCurrentResourceDetails: (item) =>
    set((state) => ({ currentResourceDetails: item })),
}));

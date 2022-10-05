import { Entity } from 'api';
declare type ResourceStore = {
    currentResource: string;
    currentResourceDetails: Entity | null;
    setCurrentResource: (item: string) => void;
    setCurrentResourceDetails: (item: Entity | null) => void;
};
export declare const useResourceStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ResourceStore>>;
export {};
//# sourceMappingURL=use-store.d.ts.map
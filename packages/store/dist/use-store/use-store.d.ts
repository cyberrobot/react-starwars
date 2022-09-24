declare type ResourceStore = {
    currentResource: string;
    setCurrentResource: (resource: string) => void;
};
export declare const useResourceStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ResourceStore>>;
export {};
//# sourceMappingURL=use-store.d.ts.map
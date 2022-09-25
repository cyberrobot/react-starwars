declare type ResourceStore = {
    currentResource: string;
    currentDataBy: string;
    setCurrentResource: (item: string) => void;
    setCurrentDataBy: (item: string) => void;
};
export declare const useResourceStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ResourceStore>>;
export {};
//# sourceMappingURL=use-store.d.ts.map
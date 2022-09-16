export declare type FakeAPIFetchProps = {
    url: string;
};
export declare function fakeAPIFetch(options: FakeAPIFetchProps): Promise<unknown>;
export declare type IndividualRequestProps = {
    url: string;
    list: any[];
    modifierFn?: (item: any) => any;
};
export declare type ListRequestProps = {
    url: string;
    list: any[];
    modifierFn?: (item: any) => any;
};
//# sourceMappingURL=fake-backend.d.ts.map
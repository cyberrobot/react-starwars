/// <reference types="react" />
import { Entity } from 'api';
declare type LinksProps = {
    data: Entity[] | undefined;
    resourceDetails: Entity | null;
    onClick: (resource: Entity) => void;
};
export default function Links({ data, resourceDetails, onClick }: LinksProps): JSX.Element;
export {};
//# sourceMappingURL=Links.d.ts.map
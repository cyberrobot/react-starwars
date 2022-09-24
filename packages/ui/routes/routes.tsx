import { Route } from '@tanstack/react-location';
import { Resources } from '../pages/resources';

export const routes: Route[] = [
  {
    path: '/',
    element: <Resources />,
  },
];

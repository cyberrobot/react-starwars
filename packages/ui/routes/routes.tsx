import { Route } from '@tanstack/react-location';
import { People } from '../pages/people';

export const routes: Route[] = [
  {
    path: 'people',
    element: <People />,
  },
];

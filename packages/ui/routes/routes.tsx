import { Route } from '@tanstack/react-location';
import { Resources } from '../pages/resources';

export const routes: Route[] = [
  {
    path: ':resource',
    element: <Resources />,
    children: [
      {
        path: ':id',
        element: <Resources />,
      },
    ],
  },
];

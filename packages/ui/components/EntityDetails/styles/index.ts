import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  page: {
    marginLeft: '300px',
  },
  content: {
    paddingTop: theme.spacing.xl,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.md,
    maxWidth: 600,
  },
  descriptionTermList: {
    ['*']: {
      fontWeight: 600,
    },
  },
  descriptionDetailsList: {
    ['*']: {
      textTransform: 'capitalize',
    },
  },
  number: {
    textTransform: 'lowercase',
  },
}));

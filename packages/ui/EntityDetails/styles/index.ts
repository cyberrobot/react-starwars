import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 400,
    paddingTop: theme.spacing.xl,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.md,
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
}));

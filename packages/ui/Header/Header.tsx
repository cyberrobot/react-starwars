import { createStyles, Container, Tabs, Header } from '@mantine/core';
import { useNavigate } from '@tanstack/react-location';
import { StarWars } from '../Icons';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
}));

interface HeaderTabsProps {}

export function HeaderTabs({}: HeaderTabsProps) {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const tabs = ['Home', 'People', 'Planets', 'Starships'];

  const items = tabs.map((tab) => (
    <Tabs.Tab
      value={tab}
      key={tab}
      onClick={() =>
        navigate({ to: tab.toLowerCase() === 'home' ? '/' : tab.toLowerCase() })
      }
    >
      {tab}
    </Tabs.Tab>
  ));

  return (
    <Header height={50} className={classes.header}>
      <Tabs
        defaultValue="Home"
        variant="outline"
        classNames={{
          root: classes.tabs,
          tabsList: classes.tabsList,
          tab: classes.tab,
        }}
      >
        <Tabs.List>{items}</Tabs.List>
      </Tabs>
    </Header>
  );
}

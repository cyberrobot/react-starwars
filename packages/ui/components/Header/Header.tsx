import { createStyles, Tabs, Header } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getResources } from 'api';
import { useResourceStore } from 'store';

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
  const { data } = useQuery(['resources'], async () => await getResources(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const setCurrentResource = useResourceStore(
    (state) => state.setCurrentResource,
  );

  let tabs: string[] = Object.keys(data || {}).map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1),
  );

  const items = tabs.map((tab) => (
    <Tabs.Tab
      value={tab}
      key={tab}
      onClick={() => setCurrentResource(tab.toLowerCase())}
    >
      {tab}
    </Tabs.Tab>
  ));

  return (
    <Header
      height={50}
      className={classes.header}
    >
      <Tabs
        defaultValue="People"
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

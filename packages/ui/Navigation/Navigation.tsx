import { useState } from 'react';
import { createStyles, Loader, Navbar } from '@mantine/core';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { getResource } from 'api';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

export function Navigation() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('');
  const currentResource = useResourceStore((state) => state.currentResource);
  const { isLoading, data } = useQuery(
    ['resource', currentResource],
    async () => await getResource({ resource: currentResource })
  );

  const links = data?.results.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.name === active,
      })}
      href="#"
      key={item.name}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.name);
      }}
    >
      <span>{item.name}</span>
    </a>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md">
      {isLoading && <Loader />}
      {!isLoading && <Navbar.Section grow>{links}</Navbar.Section>}
    </Navbar>
  );
}

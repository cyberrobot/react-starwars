import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        link: Object.assign(Object.assign({}, theme.fn.focusStyles()), { display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: theme.fontSizes.sm, color: theme.colorScheme === 'dark'
                ? theme.colors.dark[1]
                : theme.colors.gray[7], padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`, borderRadius: theme.radius.sm, fontWeight: 500, '&:hover': {
                backgroundColor: theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            } }),
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
        container: {
            overflowY: 'auto',
            width: 300,
        },
        listContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: '72px',
            right: 0,
            overflowY: 'auto',
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            paddingTop: theme.spacing.md,
        },
        navbarFooter: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '72px',
            padding: theme.spacing.md,
            ['button']: {
                width: '100%',
            },
        },
    };
});

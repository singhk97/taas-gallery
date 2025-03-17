'use client';

import { makeStyles, tokens } from '@fluentui/react-components';

export default makeStyles({
  root: {
    padding: tokens.spacingHorizontalXXL,
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: tokens.spacingVerticalXXXL,
    maxWidth: '800px',
    margin: '0 auto',
    padding: `${tokens.spacingVerticalXXL} 0`,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingVerticalXXL,
  },
  title: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  titleIcon: {
    width: '40px',
    height: '40px',
  },
  subtitle: {
    fontSize: tokens.fontSizeBase400,
    color: tokens.colorNeutralForeground2,
    lineHeight: tokens.lineHeightBase500,
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: tokens.spacingHorizontalXXL,
    maxWidth: '1000px',
    margin: '0 auto',
  },
}); 
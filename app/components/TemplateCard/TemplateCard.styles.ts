'use client';

import { makeStyles, tokens } from '@fluentui/react-components';

export default makeStyles({
  card: {
    width: '100%',
    maxWidth: '280px',
    height: 'fit-content',
    cursor: 'pointer',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground2,
    }
  },
  preview: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    backgroundColor: tokens.colorNeutralBackground3,
    borderTopLeftRadius: tokens.borderRadiusLarge,
    borderTopRightRadius: tokens.borderRadiusLarge,
  },
  content: {
    padding: tokens.spacingVerticalS + ' ' + tokens.spacingHorizontalM,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  title: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorNeutralForeground1,
    lineHeight: tokens.lineHeightBase300,
  },
  description: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    lineHeight: tokens.lineHeightBase200,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
    maxHeight: `calc(${tokens.lineHeightBase200} * 2)`,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    marginTop: tokens.spacingVerticalXS,
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground3,
  },
  authorText: {
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground3,
  },
}); 
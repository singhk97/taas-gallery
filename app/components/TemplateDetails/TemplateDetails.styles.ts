'use client';

import { makeStyles, tokens } from '@fluentui/react-components';

export default makeStyles({
  container: {
    maxWidth: '1200px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: `${tokens.spacingHorizontalXXXL} calc(${tokens.spacingHorizontalXXXL} * 2)`,
    position: 'relative',
  },
  header: {
    top: 0,
    backgroundColor: tokens.colorNeutralBackground1,
    paddingTop: tokens.spacingVerticalXL,
    paddingBottom: tokens.spacingVerticalXL,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    marginBottom: tokens.spacingVerticalXL,
  },
  mainContent: {
    display: 'flex',
    position: 'relative',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      gap: tokens.spacingVerticalXL,
    }
  },
  leftColumn: {
    position: 'relative',
    flex: '1 1 350px',
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    paddingRight: `calc(${tokens.spacingHorizontalXXXL} * 2)`,
    '@media (max-width: 800px)': {
      flex: '1 1 auto',
      borderRight: 'none',
      paddingRight: 0,
    }
  },
  leftColumnContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXL,
    position: 'sticky',
    top: tokens.spacingVerticalXXL,
    maxHeight: 'calc(100vh - 200px)',
    '@media (max-width: 800px)': {
      position: 'relative',
      top: 0,
      maxHeight: 'none',
    }
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXXL,
    flex: '2 1 700px',
    paddingLeft: `calc(${tokens.spacingHorizontalXXXL} * 2)`,
    '@media (max-width: 800px)': {
      paddingLeft: 0,
    }
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: tokens.borderRadiusLarge,
    overflow: 'hidden',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },
  title: {
    fontSize: tokens.fontSizeHero700,
    lineHeight: tokens.lineHeightHero700,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  description: {
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground1,
  },
  titleMeta: {
    display: 'flex',
    gap: tokens.spacingHorizontalXL,
    marginBottom: tokens.spacingVerticalL,
  },
  metaSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  metaLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    fontWeight: tokens.fontWeightSemibold,
  },
  metaContent: {
    fontSize: tokens.fontSizeBase400,
    color: tokens.colorNeutralForeground1,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
  },
  language: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    fontSize: tokens.fontSizeBase300,
  },
  languageDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  separator: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase300,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalXS,
  },
  tag: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground3,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
  },
  contentBox: {
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase600,
    lineHeight: tokens.lineHeightBase600,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    paddingBottom: tokens.spacingVerticalM,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    marginBottom: tokens.spacingVerticalL,
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground1,
    display: 'flex',
    alignItems: 'flex-start',
    gap: tokens.spacingHorizontalS,
    '&::before': {
      content: '"•"',
      color: tokens.colorNeutralForeground3,
      fontSize: tokens.fontSizeBase500,
      lineHeight: tokens.lineHeightBase500,
      marginRight: tokens.spacingHorizontalS,
    },
  },
  demoContainer: {
    width: '100%',
    borderRadius: tokens.borderRadiusLarge,
    overflow: 'hidden',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  demo: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
}); 
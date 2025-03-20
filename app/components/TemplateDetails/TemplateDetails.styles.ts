'use client';

import { makeStyles, tokens } from '@fluentui/react-components';

export default makeStyles({
  container: {
    width: '1200px',
    maxWidth: '90vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: `calc(${tokens.spacingHorizontalXXXL} * 3)`,
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
  },
  mainContent: {
    padding: tokens.spacingVerticalXXL,
    paddingTop: 0,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: tokens.spacingVerticalS,
  },
  overview: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },
  imageContainer: {
    width: '100%',
    marginBottom: tokens.spacingVerticalXXL,
    borderRadius: tokens.borderRadiusLarge,
    overflow: 'hidden',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXXL,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    marginBottom: tokens.spacingVerticalL,
  },
  title: {
    fontSize: tokens.fontSizeHero900,
    lineHeight: tokens.lineHeightBase600,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  titleMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    marginLeft: tokens.spacingHorizontalM,
  },
  language: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
  },
  languageDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
  separator: {
    color: tokens.colorNeutralForeground3,
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
  actions: {
    marginTop: tokens.spacingVerticalM,
  },
  readme: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    padding: tokens.spacingHorizontalL,
  },
  contentBox: {
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusXLarge,
    padding: tokens.spacingHorizontalXL,
  },
  description: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    color: tokens.colorNeutralForeground1,
  },
  sectionTitle: {
    fontSize: tokens.fontSizeHero800,
    lineHeight: tokens.lineHeightHero800,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    marginBottom: tokens.spacingVerticalM,
  },
  link: {
    color: tokens.colorBrandForegroundLink,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  features: {
    marginTop: tokens.spacingVerticalM,
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
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightHero700,
    color: tokens.colorNeutralForeground1,
    display: 'flex',
    alignItems: 'flex-start',
    gap: tokens.spacingHorizontalS,
  },
  demoContainer: {
    width: '100%',
    borderRadius: tokens.borderRadiusLarge,
    overflow: 'hidden',
    // border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  demo: {
    height: 'auto',
    display: 'block',
  },
}); 
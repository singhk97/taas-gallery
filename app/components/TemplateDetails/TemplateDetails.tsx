'use client';

import { FC } from 'react';
import { Button, Text, Link, tokens } from '@fluentui/react-components';
import { ArrowLeft24Regular, Open16Regular } from '@fluentui/react-icons';
import Modal from '../Modal/Modal';
import useStyles from './TemplateDetails.styles';
import config from '../../../next.config';

interface TemplateDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  longDescription: string;
  featuresList: string[];
  githubUrl: string;
  language: string;
  tags: string[];
  imageUrl: string;
  demoUrlGif: string;
  author: string;
}

const processMarkdownLinks = (text: string): JSX.Element[] => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, index) => {
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      const [, text, url] = linkMatch;
      return (
        <Link key={index} href={url} target="_blank">
          {text}
        </Link>
      );
    }
    return <span key={index}>{part.split('\n').map((line, i) => (
      i === 0 ? line : <><br /><br />{line}</>
    ))}</span>;
  });
};

const processMarkdownBold = (text: string): JSX.Element => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        const boldMatch = part.match(/\*\*(.*?)\*\*/);
        if (boldMatch) {
          return <b key={index}>{boldMatch[1]}</b>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const TemplateDetails: FC<TemplateDetailsProps> = ({
  isOpen,
  onClose,
  title,
  longDescription,
  featuresList,
  githubUrl,
  language,
  tags,
  imageUrl,
  demoUrlGif,
  author,
}) => {
  const classes = useStyles();

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'JavaScript':
        return "#f1e05a";
      case 'Python':
        return "#3572A5";
      case 'TypeScript':
        return "#2b7489";
      case 'C#':
        return "#178600";
      default:
        return tokens.colorBrandBackground;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Button
            appearance="subtle"
            icon={<ArrowLeft24Regular />}
            onClick={onClose}
          >
            Back to Gallery
          </Button>

          <Button
            appearance="subtle"
            icon={<Open16Regular />}
            as="a"
            href={githubUrl}
            target="_blank"
            size="small"
          >
            View on GitHub
          </Button>
        </div>

        <div className={classes.mainContent}>
          <div className={classes.imageContainer}>
            <img
              src={`${config.basePath}${imageUrl}`}
              alt={title}
              className={classes.image}
            />
          </div>

          <div className={classes.content}>
            <div className={classes.section}>
              <div className={classes.titleRow}>
                <Text as="h1" className={classes.title}>{title}</Text>
                <div className={classes.titleMeta}>
                  <div className={classes.language}>
                    <span className={classes.languageDot} style={{ backgroundColor: getLanguageColor(language) }} />
                    <Text>{language}</Text>
                  </div>
                  <Text className={classes.separator}>•</Text>
                  <div className={classes.tags}>
                    {tags.map((tag, index) => (
                      <span key={index} className={classes.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={classes.contentBox}>
                <div className={classes.description}>
                  {processMarkdownLinks(longDescription)}
                </div>
              </div>
            </div>

            <div className={classes.section}>
              <Text as="h2" className={classes.sectionTitle}>Features</Text>
              <div className={classes.contentBox}>
                <ul className={classes.featuresList}>
                  {featuresList.map((feature, index) => (
                    <li key={index} className={classes.featureItem}>
                      {processMarkdownBold(feature)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={classes.section}>
              <Text as="h2" className={classes.sectionTitle}>Demo</Text>
              <div className={classes.demoContainer}>
                <img
                  src={demoUrlGif}
                  alt={`${title} demo`}
                  className={classes.demo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

TemplateDetails.displayName = 'TemplateDetails';

export default TemplateDetails; 
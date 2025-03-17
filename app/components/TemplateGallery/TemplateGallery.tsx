'use client';

import { FC } from 'react';
import Image from 'next/image';
import TemplateCard from '../TemplateCard/TemplateCard';
import NavBar from '../NavBar/NavBar';
import useStyles from './TemplateGallery.styles';
import config from '../../../next.config';

// Sample data - In a real app, this would come from an API or database
const templates = [
  {
    id: '1',
    title: 'AI Chat Assistant',
    description: 'A Teams bot that leverages Azure OpenAI to provide intelligent responses and assist users with their queries.',
    author: 'Microsoft',
    imageUrl: '',
  },
  {
    id: '2',
    title: 'Document Analysis Agent',
    description: 'Process and analyze documents using AI capabilities while seamlessly integrating with Teams conversations.',
    author: 'Microsoft',
    imageUrl: '',
  },
  {
    id: '3',
    title: 'Meeting Insights Bot',
    description: 'AI-powered bot that provides meeting summaries, action items, and key insights from Teams meetings.',
    author: 'Microsoft',
    imageUrl: '',
  },
];

const TemplateGallery: FC = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.titleContainer}>
          <Image 
              src={`${config.basePath}/teams.svg`}
              alt="Microsoft Teams"
              width={40}
              height={40}
              className={classes.titleIcon}
            />
            <h1 className={classes.title}>Explore AI-Powered Teams Apps</h1>
          </div>
          <p className={classes.subtitle}>
            Ready-to-use samples showcasing AI agent integration with Microsoft Teams to enhance collaboration and productivity. ✨
          </p>
        </div>
        <div className={classes.grid}>
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              imageUrl={template.imageUrl}
              author={template.author}
            />
          ))}
        </div>
      </div>
    </>
  );
};

TemplateGallery.displayName = 'TemplateGallery';

export default TemplateGallery; 
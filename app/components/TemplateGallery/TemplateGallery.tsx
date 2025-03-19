'use client';

import { FC } from 'react';
import {
  Text,
  Input,
  Checkbox,
} from '@fluentui/react-components';
import { Search24Regular } from '@fluentui/react-icons';
import TemplateCard from '../TemplateCard/TemplateCard';
import useStyles from './TemplateGallery.styles';

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
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.sidebar}>
            <Text className={classes.sidebarTitle}>Filter Templates</Text>
            <div className={classes.searchContainer}>
              <Input
                placeholder="Search templates..."
                contentBefore={<Search24Regular />}
              />
            </div>
            <div className={classes.filterSection}>
              <Text className={classes.filterTitle}>Use Case</Text>
              <div>
                <Checkbox label="AI Chat" />
                <Checkbox label="Document Analysis" />
                <Checkbox label="Meeting Intelligence" />
              </div>
            </div>
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
      </div>
    </>
  );
};

TemplateGallery.displayName = 'TemplateGallery';

export default TemplateGallery; 
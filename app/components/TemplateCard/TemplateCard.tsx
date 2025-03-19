'use client';

import { FC } from 'react';
import {
  Card,
  CardPreview,
  Text,
} from '@fluentui/react-components';
import useStyles from './TemplateCard.styles';
import config from '../../../next.config';

export interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

const TemplateCard: FC<TemplateCardProps> = ({ title, description, imageUrl, author }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardPreview className={classes.preview}>
        <img 
          src={imageUrl || `${config.basePath}/placeholder-img.svg`} 
          alt={title}
          className={classes.previewImage}
        />
      </CardPreview>
      <div className={classes.content}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.description}>{description}</Text>
        <div className={classes.author}>
          <Text className={classes.authorText}>by {author}</Text>
        </div>
      </div>
    </Card>
  );
};

TemplateCard.displayName = 'TemplateCard';

export default TemplateCard; 
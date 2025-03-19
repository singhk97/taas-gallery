"use client"

import TemplateGallery from './components/TemplateGallery/TemplateGallery';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    padding: tokens.spacingHorizontalXXL,
    maxWidth: '1200px',
    margin: '0 auto',
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <main>
      <NavBar />
      <Header />
      <div className={classes.root}>
        <TemplateGallery />
      </div>
    </main>
  );
}

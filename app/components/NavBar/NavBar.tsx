'use client';

import { FC } from 'react';
import { Text, Button } from '@fluentui/react-components';
import { FaGithub } from 'react-icons/fa';
import useStyles from './NavBar.styles';

const NavBar: FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <a href="/" className={classes.logo}>
        <Text className={classes.logoText}>🤖 Teams Agent Accelerator Samples</Text>
      </a>
      <div className={classes.navLinks}>
        <a href="/about" className={classes.link}>About</a>
        <a 
          href="https://github.com/microsoft/teams-agent-accelerator-samples" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={classes.iconLink}
        >
          <FaGithub className={classes.icon} />
        </a>
      </div>
    </nav>
  );
};

NavBar.displayName = 'NavBar';

export default NavBar; 
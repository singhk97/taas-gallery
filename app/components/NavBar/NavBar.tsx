'use client';

import { FC, useContext } from 'react';
import { Text, Button } from '@fluentui/react-components';
import { WeatherMoon24Regular, WeatherSunny24Regular } from '@fluentui/react-icons';
import { FaGithub } from 'react-icons/fa';
import useStyles from './NavBar.styles';
import { ThemeContext } from '../../contexts/ThemeContext';

const NavBar: FC = () => {
  const classes = useStyles();
  const { isDark, toggleTheme } = useContext(ThemeContext);

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
        <Button
          icon={isDark ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
          appearance="subtle"
          onClick={toggleTheme}
          title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        />
      </div>
    </nav>
  );
};

NavBar.displayName = 'NavBar';

export default NavBar; 
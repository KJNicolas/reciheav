import React from 'react';
import Text from '../text/Text';
import Title from '../text/Title';
import classes from './About.module.scss';

function About() {
  return (
    <div className={classes.about}>
      <Title className={classes.title}>Food for thoughts</Title>
      <Text>
        “It’s not about passion. Passion is something that we tend to overemphasize, that we certainly place too much importance on. Passion ebbs and flows. To me, it’s about desire. If you have constant, unwavering desire to be a cook, then you’ll be a great cook.” – Thomas Keller
        <br />
        <br />
        "A recipe has no soul. You, as the cook, must bring soul to the recipe." — Thomas Keller
      </Text>
    </div>
  );
}

export default About;

import React from 'react';
import Image from 'next/image';
import classes from './HeroSection.module.scss';
import HeroImg from '../../images/meal2.png';
import Text from '../text/Text';
import ButtonWithLink from '../button/Button';

function HeroSection() {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__info}>
          <h1 className={classes.hero__title}>
            Find your perfect
            {' '}
            <span>meal recipe</span>
            {' '}

          </h1>
          {' '}
          {/* <Text> a listing website of meal recipe</Text> */}
          <div className={classes.hero__buttons}>
            <ButtonWithLink link="/meals" variant="primary">Explore Recipe</ButtonWithLink>
            <ButtonWithLink link="/savedMeals">Saved Recipe</ButtonWithLink>
          </div>
        </div>
        <div className={classes.hero__img}>
          <Image src={HeroImg} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import React from 'react';
import Image from 'next/image';
import classes from './Footer.module.scss';
import Logo from '../../images/reciheav.png';
import Text from '../text/Text';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={Logo} />
      <Text>
        Find the perfect
        meal recipe
      </Text>
      <Text className={classes.copyright}>
        © KiingJayNiic 2022 All right reserved.
      </Text>
    </footer>
  );
}

export default Footer;

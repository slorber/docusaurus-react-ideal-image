import React from 'react';
import IdealImage from '../IdealImage';
import icons from '../icons';
import theme from '../theme';

const IdealImageWithDefaults = ({
  icons: iconsProp = icons,
  theme: themeProp = theme,
  ...props
}) => <IdealImage {...props} icons={iconsProp} theme={themeProp} />;

IdealImageWithDefaults.propTypes = IdealImage.propTypes;

export default IdealImageWithDefaults;

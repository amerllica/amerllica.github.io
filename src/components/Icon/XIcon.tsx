import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const XIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
      <path
          d="M20.396 2.223h4.62L15.59 14.262 26.115 29h-9.184l-7.11-10.115L1.678 29H-2.94l10.058-12.286L-1.264 2.223h9.5l6.242 8.934 6.25-8.934Zm-1.615 24.397h2.553L6.508 4.455H3.726L18.78 26.62Z"
          fill="currentColor"
      />
  </Icon>
));

export default XIcon;

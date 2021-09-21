/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/DotsThreeOutlineVertical';
import duotone from '../duotone/DotsThreeOutlineVertical';
import fill from '../fill/DotsThreeOutlineVertical';
import light from '../light/DotsThreeOutlineVertical';
import regular from '../regular/DotsThreeOutlineVertical';
import thin from '../thin/DotsThreeOutlineVertical';

function DotsThreeOutlineVertical({ weight, color, size, style }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    style: contextStyle,
  } = useContext(IconContext);

  const IconComponent = useMemo(() => {
    const iconWeight = weight ?? contextWeight;

    const weightMap = {
      bold,
      duotone,
      fill,
      light,
      regular,
      thin,
    };

    return weightMap[iconWeight];
  }, [weight, contextWeight]);

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={{
        ...contextStyle,
        ...style,
      }}
    />
  );
}

export default DotsThreeOutlineVertical;

/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/CaretCircleDoubleLeft';
import duotone from '../duotone/CaretCircleDoubleLeft';
import fill from '../fill/CaretCircleDoubleLeft';
import light from '../light/CaretCircleDoubleLeft';
import regular from '../regular/CaretCircleDoubleLeft';
import thin from '../thin/CaretCircleDoubleLeft';

function CaretCircleDoubleLeft({ weight, color, size, style }: IconProps) {
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

export default CaretCircleDoubleLeft;

/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/CaretCircleDoubleUp';
import duotone from '../duotone/CaretCircleDoubleUp';
import fill from '../fill/CaretCircleDoubleUp';
import light from '../light/CaretCircleDoubleUp';
import regular from '../regular/CaretCircleDoubleUp';
import thin from '../thin/CaretCircleDoubleUp';

function CaretCircleDoubleUp({ weight, color, size, style }: IconProps) {
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

export default CaretCircleDoubleUp;

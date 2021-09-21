/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/MonitorPlay';
import duotone from '../duotone/MonitorPlay';
import fill from '../fill/MonitorPlay';
import light from '../light/MonitorPlay';
import regular from '../regular/MonitorPlay';
import thin from '../thin/MonitorPlay';

function MonitorPlay({ weight, color, size, style }: IconProps) {
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

export default MonitorPlay;

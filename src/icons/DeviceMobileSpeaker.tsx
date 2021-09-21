/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/DeviceMobileSpeaker';
import duotone from '../duotone/DeviceMobileSpeaker';
import fill from '../fill/DeviceMobileSpeaker';
import light from '../light/DeviceMobileSpeaker';
import regular from '../regular/DeviceMobileSpeaker';
import thin from '../thin/DeviceMobileSpeaker';

function DeviceMobileSpeaker({ weight, color, size, style }: IconProps) {
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

export default DeviceMobileSpeaker;

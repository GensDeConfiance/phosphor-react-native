/* GENERATED FILE */
import React, { useContext, useMemo } from 'react'
import { IconProps, IconContext } from '../lib'

import bold from '../bold/Recycle'
import duotone from '../duotone/Recycle'
import fill from '../fill/Recycle'
import light from '../light/Recycle'
import regular from '../regular/Recycle'
import thin from '../thin/Recycle'

function Recycle({ weight, color, size, style, mirrored }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    mirrored: contextMirrored = false, 
    style: contextStyle,
  } = useContext(IconContext)

  const IconComponent = useMemo(() => {
    const iconWeight = weight ?? contextWeight

    const weightMap = {
      bold,
      duotone,
      fill,
      light,
      regular,
      thin,
    }

    return weightMap[iconWeight]
  }, [weight, contextWeight])

  const mirroredValue = mirrored ?? contextMirrored

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={{
        ...contextStyle,
        ...style,
        ...(mirroredValue && {
          transform: [{ scaleX: -1 }],
        }),
      }}
    />
  )
}

export default Recycle
  
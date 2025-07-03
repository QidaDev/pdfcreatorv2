/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, Svg } from '@react-pdf/renderer'

type RightArrowSvgProps = {
  style?: any
  height?: string
  width?: string
  color?: string
}

export const RightArrowSvg: React.FC<RightArrowSvgProps> = ({
  style,
  height = '20px',
  width = '20px',
  color = '#000000',
}) => (
  <Svg style={style} height={height} width={width} viewBox="0 0 24 24">
    <Path
      fill={color}
      d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
    />
  </Svg>
)

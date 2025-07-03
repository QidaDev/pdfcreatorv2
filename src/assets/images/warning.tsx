/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, Svg } from '@react-pdf/renderer'

interface WarningProps {
  style?: any
  height?: string
  width?: string
  color?: string
}

export const Warning: React.FC<WarningProps> = ({
  style,
  height = '24px',
  width = '24px',
  color = '#000000',
}) => (
  <Svg style={style} height={height} width={width} viewBox="0 0 32 32">
    <Path
      d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"
    />
    <Path
      fill={color}
      d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"
    />
    <Path
      fill={color}
      d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"
    />
  </Svg>
)

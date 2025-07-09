import { Svg, Path } from '@react-pdf/renderer'

interface IconLaunchProps {
  color?: string
  width?: string
  height?: string
}

export const IconLaunch: React.FC<IconLaunchProps> = ({ 
  color = '#333333',
  width = '16',
  height = '17',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 17"
  >
    <Path 
      d="M12.5 15H2.5C2.23489 14.9996 1.98075 14.8942 1.79329 14.7067C1.60583 14.5193 1.50036 14.2651 1.5 14V4C1.50036 3.73489 1.60583 3.48075 1.79329 3.29329C1.98075 3.10583 2.23489 3.00036 2.5 3H7.5V4H2.5V14H12.5V9H13.5V14C13.4996 14.2651 13.3942 14.5193 13.2067 14.7067C13.0193 14.8942 12.7651 14.9996 12.5 15Z" 
      fill={color}
    />
    <Path 
      d="M9.5 2V3H12.793L8.5 7.293L9.207 8L13.5 3.707V7H14.5V2H9.5Z" 
      fill={color}
    />
  </Svg>
) 
import { Text, View } from 'react-native'
import SVG, { Circle, CircleProps } from 'react-native-svg';

type RingProgressProps = {
    radius?: number,
    strokeWidth?: number,
};

const color = '#EE0F55';

const RingProgress = ({radius = 100, strokeWidth=35}:RingProgressProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;
    return (
        <View style={{
            width: radius * 2, 
            height: radius * 2, 
            alignSelf: 'center'
            
            }}
            >
            <SVG>
                <Circle 
                cx={radius} 
                cy={radius} 
                r={innerRadius} 
                stroke={color} 
                strokeWidth={strokeWidth}
                opacity={0.2}
                />
                <Circle 
                cx={radius} 
                cy={radius} 
                originX={radius}
                originY={radius}
                r={innerRadius} 
                stroke={color} 
                strokeWidth={strokeWidth}
                strokeDasharray={[circumference * 0.2 ,circumference]}
                strokeLinecap='round'
                rotation={-90}
                />
            </SVG>

        </View>
    )
}

export default RingProgress;
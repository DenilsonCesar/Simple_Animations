import React, { Component } from 'react'
import { Text, View, Button, Animated, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export default class Index extends Component{
    constructor(props){
        super(props);
            this.state = {
                animate: new Animated.Value(30),
                animateXY: new Animated.ValueXY({x: 0, y: 0}),
                radius: new Animated.Value(0)

            }
            this.animateInterpolete = this.state.animateXY.x.interpolate({
                inputRange: [0 ,150],
                outputRange: ['rgba(255,0,0,0.3)' ,'rgba(0,0,255,0.3)']
            })
    }

    componentDidMount(){
        Animated.sequence([
            Animated.timing(this.state.animateXY, {
                toValue: {x: height / 2, y: 0},
                duration: 6000
            }),
            Animated.timing(this.state.animate, {
                toValue: 60,
                duration: 6000
            }),
            Animated.timing(this.state.radius, {
                toValue: 40,
                duration: 2000
            })
        ]).start()
    }

    render(){
        return (
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center', 
                    backgroundColor: 'black',
                }}>
                    <Animated.View 
                        style={{ width: this.state.animate,
                         height: this.state.animate, 
                         backgroundColor: this.animateInterpolete,
                         position: 'absolute',
                         top: this.state.animateXY.x,
                         left: this.state.animateXY.y,
                         borderRadius: this.state.radius,
                         //transform: [{scale: this.animateInterpolete}]
                         }}/>
            </View>
        )
    }
}


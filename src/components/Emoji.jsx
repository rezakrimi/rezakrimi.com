import React, { Component } from 'react'

export class Emoji extends Component {
    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0
        }
        this.mouseMove = this.mouseMove.bind(this);
        this.leftEye = React.createRef();
        this.rightEye = React.createRef();
        this.leftEyePosition = this.leftEyePosition.bind(this)
        this.rightEyePosition = this.rightEyePosition.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.mouseMove);
      }

    mouseMove(e){
        this.leftEyePosition()
        this.rightEyePosition()
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    leftEyePosition(){
        if(this.state && this.leftEye.current && this.rightEye.current){
            var baseX = 20;
            var offX = Math.tanh((this.state.x - this.leftEye.current.getBoundingClientRect().left)/400)*10
            var baseY = 30
            var offY = Math.tanh((this.state.y - this.leftEye.current.getBoundingClientRect().top)/400)*10
            this.leftEyeStyle={
                position: "absolute",
                borderRadius:"50%",
                backgroundColor:"white",
                width:`15%`,
                height: `20%`,
                top: `${baseY+offY}%`,
                left: `${baseX+offX}%`
            }    
        }
    }

    rightEyePosition(){
        if(this.state && this.leftEye.current && this.rightEye.current){
            var baseX = 65;
            var offX = Math.tanh((this.state.x - this.rightEye.current.getBoundingClientRect().left)/400)*10
            var baseY = 30
            var offY = Math.tanh((this.state.y - this.rightEye.current.getBoundingClientRect().top)/400)*10
            this.rightEyeStyle={
                position: "absolute",
                borderRadius:"50%",
                backgroundColor:"white",
                width:`15%`,
                height: `20%`,
                top: `${baseY+offY}%`,
                left: `${baseX+offX}%`
            }    
        }
    }

    emojiStyle={
        display: "inline-block",
        position: "relative",
        borderRadius:"50%",
        backgroundColor:"#212325",
        width:`${this.props.width}`,
        height: `${this.props.width}`
    }


    rightEyeStyle={
        position: "absolute",
        borderRadius:"50%",
        backgroundColor:"white",
        width:`15%`,
        height: `20%`,
        top: `${30}%`,
        left: `${100-15-20}%`
    }

    leftEyeStyle={
        position: "absolute",
        borderRadius:"50%",
        backgroundColor:"white",
        width:`15%`,
        height: `20%`,
        top: `${30}%`,
        left: `${20}%`
    }
    render() {
        return (
        <div>
            <div style={this.emojiStyle}>
                <div style={this.leftEyeStyle} ref={this.leftEye}></div>
                <div style={this.rightEyeStyle} ref={this.rightEye}></div>
            </div>
            </div>
        )
    }
}

export default Emoji

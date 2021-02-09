import React, { Component } from 'react'
import {Button} from 'react-bootstrap'


export default class chrono extends Component {

    state = {
        count: 0,
        show: true,

    }


    handelClickStart = () => {
        
         this.interval = setInterval(() => { 
            this.setState({
                count: this.state.count + 1

            })
        }, 1000)

        this.setState({
            show : !this.state.show
        })
    }

    handelClickStop = () => {
        clearInterval(this.interval)

        this.setState({
            show : !this.state.show
        })

    }
  
    handelClickReset =()=>{
        this.setState({
            count: 0
        })
        clearInterval(this.interval)
    }

    render() {

        return (
            <div style={{width:"400px" , height:"300px",backgroundColor:"rgb(0,0,0,0.8)", display:"flex" , flexDirection:"column" , justifyContent:"center", alignItems:"center" }}>
                <h1 style={{fontSize: "50px",color:"white"}}>{this.state.count}</h1>
                {/* onclick */}
                <div  style={{display:"flex" , justifyContent:"space-between"}}>
                {this.state.show ? <Button variant="success"  style={{size:"lg"}} onClick={this.handelClickStart}>Start</Button> :<Button   style={{size:"lg"}} variant="warning" onClick={this.handelClickStop}>Stop</Button>}
                <Button style={{marginLeft:"40px"}}  variant="danger" onClick={this.handelClickReset}>Reset</Button>
                </div>

            </div>
        )
    }
}

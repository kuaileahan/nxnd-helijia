import React, { Component} from 'react'
import { Carousel  } from 'antd-mobile';

export default class index extends Component {
  constructor(){
    super()
    this.state={
      data:[1,2,3]
    }
  }
    render() {
        return (
            <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: "100px",background:"red" }}
              >
                
              </a>
            ))}
          </Carousel>

        )
    }
}

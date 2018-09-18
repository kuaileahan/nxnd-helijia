import React, { Component,Fragment} from 'react'
import { Carousel ,Grid } from 'antd-mobile';

const data = Array.from(new Array(20)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

export default class index extends Component {
  constructor(){
    super()
    this.state={
      data:[1,2,3]
    }
  }
    render() {
        return (
          <Fragment>
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
          <div className="sub-title">Carousel</div>
          <Grid data={data}  columnNum={5} isCarousel onClick={_el => console.log(_el)} />
        </Fragment>
        )
    }
}

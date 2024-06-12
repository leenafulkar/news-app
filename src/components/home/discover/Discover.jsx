import React from "react"
import { discover } from "../../../dummyData"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Discover = () => {
  return (
    <section className='discover'>
      <div className='container'>
        <Heading title='Discover' />
        <div className='content'>
          {discover.map((val, index) => (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h1 className='title'>{val.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Discover

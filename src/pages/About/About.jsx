import React from 'react'
import AboutCardRight from '../../components/AboutCards/AboutCardRight'
import AboutCard from '../../components/AboutCards/AboutCard'
import Events from '../Events/Events'

function About() {
  return (
    <div>
      <Events />
      <div className="col-span-2 mt-12">
        <h2 className="text-4xl font-bold text-white">
          About <span className="text-[#AF66DF]">KnowHow</span>
        </h2>
      </div>
    </div>
  )
}

export default About

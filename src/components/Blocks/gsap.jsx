import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'



function fetchFakeData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          color: 'red'
        }, {
          id: 2,
          color: 'blue'
        }, {
          id: 3,
          color: 'green'
        }, {
          id: 4,
          color: 'yellow'
        },
      ])
    }, 2000)
  })
}

function Box({ children }) {
  return <div className='box'>{children} </div>
}


export default function Gsap() {

  const [loading, setLoading] = useState()

  const [data, setData] = useState([])


  const el = useRef()
  const q = gsap.utils.selector(el)

  function handleLoading() {
    setLoading('start')
  }

  useEffect(() => {
    if (loading !== 'start') return

    async function loadingData() {
      let Data = await fetchFakeData()
      setData(Data)
      setLoading('complete')
    }
    loadingData()
  }, [loading])


  useLayoutEffect(() => {
    if (loading !== 'complete') return

    gsap.to(q('.box'), {
      x: 100,
      stagger: .2,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    })
  }, [loading])

  return (
    <div className="gsap" ref={el}>
      {!loading ? <button onClick={handleLoading}>click me</button> : null}
      {loading === 'start' ? <p>feathing fake data....</p> : null}
      {loading === 'complete' ? data.map(item => <Box key={item.id} color={item.color} >box {item.id}</Box>) : null}
    </div>
  )
}


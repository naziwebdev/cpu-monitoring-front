import React from 'react'
import './App.css'
import IO from 'socket.io-client'
import { useState,useEffect } from 'react'
import CpuChart from './components/CpuChart'


export default function App() {

 const [cpuData , setCpuData] = useState([])

 useEffect(() => {

  const socket = IO('http://localhost:4003')

  socket.on('connect' , () => {
    socket.on('cpu' , data => {
      
     setCpuData(data)
    })
  })

 },[])




  return (
    <div className='wrapper'>
      <h1 className='title'>CPU Monitoring</h1>
      <CpuChart data={cpuData}/>
    </div>
  )
}

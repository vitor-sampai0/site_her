import React, {useEffect, useState} from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Loading.css'

const texts = [
  'Preparando uma surpresa...',
  'Organizando meus pensamentos...',
  'Quase lá...',
  'Só mais alguns segundos...'
]

export default function Loading({onFinish}){
  const [idx,setIdx]=useState(0)
  useEffect(()=>{
    const it = setInterval(()=> setIdx(i=> (i+1)%texts.length), 900)
    return ()=> clearInterval(it)
  },[])

  return (
    <div className="loading-wrap">
      <h3>{texts[idx]}</h3>
      <ProgressBar duration={3800} onFinish={onFinish} />
    </div>
  )
}

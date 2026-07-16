import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard/GlassCard'
import './WrongPerson.css'

export default function WrongPerson(){
  const [showClose,setShowClose]=useState(false)
  useEffect(()=>{
    const t = setTimeout(()=> setShowClose(true), 3200)
    return ()=> clearTimeout(t)
  },[])

  function handleClose(){
    if(window.close) window.close()
    else alert('Fechar não disponível neste navegador')
  }

  return (
    <div className="center-wrap">
      <GlassCard>
        <h2>Acho que esse site não era para você.</h2>
        <p>Me desculpe por fazer você perder seu tempo.</p>
        <p>Espero que você tenha um ótimo dia. Boa sorte em tudo! ❤️</p>
        {showClose && <button className="btn" onClick={handleClose}>Fechar</button>}
      </GlassCard>
    </div>
  )
}

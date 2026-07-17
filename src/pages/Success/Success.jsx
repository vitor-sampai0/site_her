import React, {useState, useEffect} from 'react'
import Confetti from 'react-confetti'
import FloatingHearts from '../../components/FloatingHearts/FloatingHearts'
import Fireworks from '../../components/Fireworks/Fireworks'
import GlassCard from '../../components/GlassCard/GlassCard'
import './Success.css'

export default function Success(){
  const [size, setSize] = useState({w: window.innerWidth, h: window.innerHeight})
  const [showDecline, setShowDecline] = useState(false)
  useEffect(()=>{
    const onR = ()=> setSize({w:window.innerWidth,h:window.innerHeight})
    window.addEventListener('resize', onR)
    const t = setTimeout(()=> setShowDecline(true), 4000)
    return ()=> { window.removeEventListener('resize', onR); clearTimeout(t) }
  },[])

  function handleDecline(){
    setShowDecline(false)
    const msg = encodeURIComponent('Na verdade... não estou tão pronta ainda. Preciso de mais tempo para pensar.  😊')
    window.open(`https://wa.me/5581998326632?text=${msg}`, '_blank')
  }

  return (
    <div className="center-wrap">
      <GlassCard>
        <h2>Você acabou de deixar meu dia muito mais feliz! ❤️</h2>
        {showDecline && (
          <div className="decline-section">
            <p className="small-text">Espera, mudei de ideia...</p>
            <button className="btn" onClick={handleDecline}>Não, não estou pronta ainda</button>
          </div>
        )}
      </GlassCard>
      <Confetti width={size.w} height={size.h} recycle={false} numberOfPieces={300} />
      <Fireworks />
      <FloatingHearts />
    </div>
  )
}

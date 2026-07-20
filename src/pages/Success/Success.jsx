import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import FloatingHearts from '../../components/FloatingHearts/FloatingHearts'
import Fireworks from '../../components/Fireworks/Fireworks'
import GlassCard from '../../components/GlassCard/GlassCard'
import './Success.css'

export default function Success(){
  const [size, setSize] = useState({w: window.innerWidth, h: window.innerHeight})
  const [showDecline, setShowDecline] = useState(false)
  const navigate = useNavigate()
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

  function restartFlow(){
    navigate('/')
  }

  return (
    <div className="center-wrap">
      <GlassCard>
        <div className="success-content">
          <div className="heart-badge">❤️</div>
          <p className="eyebrow">Final feliz</p>
          <h2>Te espero quando você estiver pronta.</h2>
          <p className="success-copy">
            O mais importante era você se sentir à vontade. Agora ficou tudo no tempo certo,
            do jeito certo, e com o carinho que você merece.
          </p>
          <p className="success-copy success-copy--strong">
            Seja qual for o próximo passo, eu vou ficar feliz de te ver por aqui. ❤️
          </p>
          <p className="success-footnote">Se quiser, pode voltar e ver tudo de novo quando bater vontade.</p>
          <button className="btn success-restart" onClick={restartFlow}>Quero ver de novo</button>
          {showDecline && (
            <div className="decline-section">
              <p className="small-text">Espera, mudei de ideia...</p>
              <button className="btn" onClick={handleDecline}>Não, não estou pronta ainda</button>
            </div>
          )}
        </div>
      </GlassCard>
      <Confetti width={size.w} height={size.h} recycle={false} numberOfPieces={300} />
      <Fireworks />
      <FloatingHearts />
    </div>
  )
}

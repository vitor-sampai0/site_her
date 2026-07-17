import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard/GlassCard'
import FloatingHearts from '../../components/FloatingHearts/FloatingHearts'
import './Invitation.css'

export default function Invitation(){
  const [msg,setMsg]=useState(null)
  const navigate = useNavigate()

  function accept(){
    setMsg('Você acabou de deixar meu dia muito mais feliz! ❤️')
    setTimeout(()=>{
      const msg = encodeURIComponent('Sim, eu aceito! Mal posso esperar pelo filme com você! Que legal esse site que você fez. 💖😊🍿')
      window.open(`https://wa.me/5581998326632?text=${msg}`, '_blank')
      navigate('/success')
    },3000)
  }

  function decline(){
    setMsg('Tudo bem ❤️\nObrigado por responder com sinceridade. Eu respeito totalmente sua decisão. Desejo que a gente resolva isso de uma forma saudável e que possamos continuar nos relacionando bem. Se mudar de ideia, é só me chamar! 💖')
    setTimeout(()=>{
      const msg = encodeURIComponent('não estou preparada para isso, sinto muito 💖')
      window.open(`https://wa.me/5581998326632?text=${msg}`, '_blank')
      navigate('/success')
    },3000)
  }

  return (
    <div className="center-wrap">
      <GlassCard>
        <div className="intro">
          <p className="line">Nádia...</p>
          <p className="line">Pensei bastante em como fazer esse convite.</p>
          <p className="line">Então resolvi criar este site especialmente para você.</p>
        </div>
        <h3>Você aceita ir comigo assistir ao novo filme do Homem-Aranha?</h3>
        {!msg ? (
          <div className="actions">
            <button className="btn" onClick={accept}>❤️ Eu aceito!</button>
            <button className="btn" onClick={decline}>😊 Não</button>
          </div>
        ) : (
          <div className="msg">{msg}</div>
        )}
      </GlassCard>
      <FloatingHearts />
    </div>
  )
}

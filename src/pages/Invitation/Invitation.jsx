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
      window.open('https://wa.me/5581998326632?text=Oi!%20Eu%20aceito%20o%20convite%20para%20assistir%20ao%20filme%20do%20Homem-Aranha%20com%20você!%20%F0%9F%92%96%F0%9F%98%8A', '_blank')
      navigate('/success')
    },3000)
  }

  function decline(){
    setMsg('Tudo bem ❤️\nObrigado por responder com sinceridade. Eu respeito totalmente sua decisão. Desejo que você seja muito feliz.')
    setTimeout(()=>{
      window.open('https://wa.me/5581998326632?text=Oi!%20Muito%20obrigada%20pelo%20convite.%20Infelizmente%20n%C3%A3o%20vou%20conseguir%20aceitar.%20Mas%20agrade%C3%A7o%20muito%20pelo%20carinho.%20%F0%9F%92%96', '_blank')
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

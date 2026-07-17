import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard/GlassCard'
import './ComfortQuestion.css'

export default function ComfortQuestion(){
  const [msg,setMsg]=useState(null)
  const navigate = useNavigate()

  function yes(){
    setMsg('Fico muito feliz em saber disso ❤️')
    setTimeout(()=> navigate('/invite'),2000)
  }

  function no(){
    setMsg('Obrigado por me contar. Quero sempre respeitar como você se sente. Se em algum momento eu fiz você se sentir desconfortável, peço desculpas. Quero conversar sobre isso e entender melhor. ❤️')
    setTimeout(()=>{
      const msg = encodeURIComponent('Na verdade não estou me sentindo muito confortável com a forma como estamos nos relacionando. Precisamos conversar sobre isso com sinceridade. Quer marcar um momento para gente conversar? 💕')
      window.open(`https://wa.me/5581998326632?text=${msg}`, '_blank')
    },3200)
  }

  return (
    <div className="center-wrap">
      <GlassCard>
        <h3>Antes de continuar...</h3>
        <p className="muted">Queria te perguntar uma coisa importante.</p>
        <p className="question">Você está confortável com o jeito que eu estou conversando e interagindo com você?</p>
        {!msg ? (
          <div className="actions">
            <button className="btn" onClick={yes}>❤️ Sim</button>
            <button className="btn" onClick={no}>😊 Não</button>
          </div>
        ) : (
          <p className="response">{msg}</p>
        )}
      </GlassCard>
    </div>
  )
}

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
      window.open('https://wa.me/5581998326632?text=Oi!%20Respondi%20que%20n%C3%A3o%20estou%20me%20sentindo%20confort%C3%A1vel%20com%20a%20forma%20como%20estamos%20interagindo.%20Quis%20te%20avisar%20para%20que%20a%20gente%20possa%20conversar%20sobre%20isso.', '_blank')
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

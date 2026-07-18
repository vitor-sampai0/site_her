import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard/GlassCard'
import FloatingHearts from '../../components/FloatingHearts/FloatingHearts'
import './Invitation.css'

export default function Invitation(){
  const [feedback,setFeedback]=useState(null)
  const [selectedId,setSelectedId]=useState(null)
  const [sushiUnlocked,setSushiUnlocked]=useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    setSushiUnlocked(window.localStorage.getItem('sushiUnlocked') === 'true')
  },[])

  const dateOptions = [
    {
      id: 'cinema',
      title: '1. Filme no cinema',
      subtitle: 'vc tem o poder de escolher o filme kkkkkkkkkkk.',
      screenMessage: 'Boa escolha ❤️ Um cinema já começou muito bem.',
      whatsappMessage: 'Escolhi o filme no cinema (coloque aqui o filme que vc gostaria de assistir ). Quero muito viver esse date com você, comer uma pipoca e te ver sorrindo do meu lado. ❤️🍿'
    },
    {
      id: 'house',
      title: '2. Date na minha casa',
      subtitle: 'Cozinhar juntos e tomar um vinho, ou algo na vibe.',
      screenMessage: 'Essa é especial ❤️ Cozinhar juntos deixa tudo mais nosso.',
      whatsappMessage: 'Escolhi o date na sua casa. Quero cozinhar com você, abrir um vinho e deixar a noite leve, gostosa e cheia de carinho. 🍷✨'
    },
    {
      id: 'acai',
      title: '3. Açaí de boa',
      subtitle: 'Um rolê leve, tranquilo e sem pressa.',
      screenMessage: 'Perfeito ❤️ Um açaí de boa combina demais com nós dois.',
      whatsappMessage: 'Escolhi o açaí de boa. Quero um encontro leve com você, sem pressa, só conversando, rindo e curtindo o momento. 💖🥣'
    },
    {
      id: 'sushi',
      title: '4. Sushi da esteira',
      subtitle: 'Bloqueado: só libera depois de um dos encontros escolhidos.',
      screenMessage: 'Sushi na esteira bloqueado 🔒 Essa opção só vai estar disponível depois de você escolher um dos outros encontros.',
      whatsappMessage: 'Queria liberar o sushi na esteira, mas ele vai ficar para depois de um dos nossos encontros escolhidos. Aí sim a gente marca esse bônus especial. 🍣'
    }
  ]

  function chooseDate(option){
    if(option.id === 'sushi'){
      setFeedback(option.screenMessage)
      return
    }

    setSelectedId(option.id)
    setFeedback(option.screenMessage)
    window.localStorage.setItem('sushiUnlocked', 'true')
    setSushiUnlocked(true)
    setTimeout(()=>{
      const msg = encodeURIComponent(option.whatsappMessage)
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
        <h3>Escolhe um date que mais combina com você:</h3>
        {!selectedId ? (
          <div className="date-grid">
            {dateOptions.map(option => (
              <button
                key={option.id}
                className={`date-option ${option.id === 'sushi' && !sushiUnlocked ? 'date-option--locked' : ''}`}
                onClick={() => chooseDate(option)}
                type="button"
                disabled={option.id === 'sushi' && !sushiUnlocked}
              >
                <strong>{option.title}</strong>
                <span>{option.subtitle}</span>
              </button>
            ))}
          </div>
        ) : null}
        {feedback ? <div className="msg">{feedback}</div> : null}
      </GlassCard>
      <FloatingHearts />
    </div>
  )
}

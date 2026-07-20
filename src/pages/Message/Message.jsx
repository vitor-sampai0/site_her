import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard/GlassCard'
import './Message.css'

export default function Message(){
  const navigate = useNavigate()
  const [showAudienceModal, setShowAudienceModal] = useState(true)
  const [audienceNote, setAudienceNote] = useState('')

  function handleAudienceChoice(choice){
    if(choice === 'nadia'){
      window.localStorage.setItem('siteAudience', 'nadia')
      setShowAudienceModal(false)
      setTimeout(()=> navigate('/invite'), 2200)
      return
    }

    if(choice === 'showing'){
      window.localStorage.setItem('siteAudience', 'showing')
      setAudienceNote('Sai para lá vai, mo vergonha kkkkkkk 👀')
      setShowAudienceModal(false)
      setTimeout(()=> navigate('/invite'), 2600)
      return
    }

    navigate('/wrong')
  }

  return (
    <div className="center-wrap">
      <GlassCard>
        <div className="message-content">
          <p>Voltou para o site? kkkkkk que bom ❤️</p>
          <p>Eu sei que você já tinha visto tudo antes, então deixei esse momento mais leve. Quando estiver pronta, escolhe com calma o que mais combina com você.</p>
          {audienceNote ? <p className="message-warning">{audienceNote}</p> : null}
        </div>
      </GlassCard>
      {showAudienceModal ? (
        <div className="audience-modal" role="dialog" aria-modal="true" aria-labelledby="audience-title">
          <div className="audience-modal__backdrop" />
          <div className="audience-modal__card">
            <p className="audience-modal__eyebrow">Depois do loading</p>
            <h2 id="audience-title">Quem está vendo esse site?</h2>
            <div className="audience-modal__actions">
              <button className="btn" onClick={()=> handleAudienceChoice('nadia')}>Sou a Nádia</button>
              <button className="ghost-btn" onClick={()=> handleAudienceChoice('showing')}>Estou mostrando para uma pessoa</button>
              <button className="ghost-btn" onClick={()=> handleAudienceChoice('other')}>Sou outra pessoa</button>
            </div>
            <p className="audience-modal__hint">Se for a Nádia, segue o fluxo normal. Se estiver mostrando para alguém, segue também, mas com uma brincadeira. Se não for nenhum dos dois, vai para a página errada.</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

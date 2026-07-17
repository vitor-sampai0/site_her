import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard/GlassCard'
import './Message.css'

export default function Message(){
  const navigate = useNavigate()

  useEffect(()=>{
    const t = setTimeout(()=> navigate('/comfort'), 5500)
    return ()=> clearTimeout(t)
  },[navigate])

  return (
    <div className="center-wrap">
      <GlassCard>
        <div className="message-content">
          <p>Não se preocupe, responda com sinceridade pois não quero criar um clima ruim entre a gente e eu adoro fazer sites então não foi um problema, pode ficar em paz mas fiz com muito carinho kkkkkkk ❤️</p>
        </div>
      </GlassCard>
    </div>
  )
}

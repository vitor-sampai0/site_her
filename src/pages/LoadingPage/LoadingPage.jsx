import React from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard/GlassCard'
import Loading from '../../components/Loading/Loading'
import './LoadingPage.css'

export default function LoadingPage(){
  const navigate = useNavigate()
  return (
    <div className="loading-page center-wrap">
      <GlassCard className="small">
        <Loading onFinish={()=> setTimeout(()=> navigate('/comfort'), 300)} />
      </GlassCard>
    </div>
  )
}

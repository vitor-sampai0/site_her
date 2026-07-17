import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import normalizeName from '../../utils/normalizeName'
import GlassCard from '../../components/GlassCard/GlassCard'
import './Home.css'

export default function Home(){
  const [name,setName]=useState('')
  const navigate = useNavigate()

  function handleEnter(e){
    e.preventDefault()
    const n = normalizeName(name)
    if(n === 'nadia') navigate('/loading')
    else navigate('/wrong')
  }

  return (
    <div className="center-wrap">
      <GlassCard>
        <h1>Olá ❤️</h1>
        <p className="muted">Antes de continuar, gostaria de saber quem está entrando neste site. (digite só seu primeiro nome)</p>
        <form onSubmit={handleEnter} className="home-form">
          <input aria-label="Nome" placeholder="Digite seu nome" value={name} onChange={e=>setName(e.target.value)} />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </GlassCard>
    </div>
  )
}

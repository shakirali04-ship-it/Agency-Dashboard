import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import MetaAds from './pages/MetaAds'
import GoogleAds from './pages/GoogleAds'
import { SocialMedia, WhatsApp, GMBReviews, ExecutiveSummary } from './pages/OtherPages'
import { clients } from './data'

export default function App() {
  const [activeNav, setActiveNav] = useState('overview')
  const [activeClientId, setActiveClientId] = useState(1)
  const client = clients.find(c => c.id === activeClientId)

  const pages = {
    overview:  <Overview client={client} />,
    meta:      <MetaAds />,
    google:    <GoogleAds />,
    social:    <SocialMedia />,
    whatsapp:  <WhatsApp />,
    gmb:       <GMBReviews />,
    executive: <ExecutiveSummary client={client} />,
  }

  return (
    <div className="flex min-h-screen bg-surface-2">
      <Sidebar
        active={activeNav}
        onNav={setActiveNav}
        client={client}
        clients={clients}
        onClientChange={setActiveClientId}
      />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-8 py-8">
          {pages[activeNav]}
        </div>
      </main>
    </div>
  )
}

import React from 'react'
import {
  LayoutDashboard, TrendingUp, Search, Share2,
  MessageCircle, MapPin, FileText, ChevronDown
} from 'lucide-react'

const navItems = [
  { id: 'overview',  icon: LayoutDashboard, label: 'Overview' },
  { id: 'meta',      icon: TrendingUp,      label: 'Meta Ads' },
  { id: 'google',    icon: Search,          label: 'Google Ads' },
  { id: 'social',    icon: Share2,          label: 'Social Media' },
  { id: 'whatsapp',  icon: MessageCircle,   label: 'WhatsApp' },
  { id: 'gmb',       icon: MapPin,          label: 'GMB + Reviews' },
  { id: 'executive', icon: FileText,        label: 'Executive Summary' },
]

export default function Sidebar({ active, onNav, client, onClientChange, clients }) {
  return (
    <aside className="w-60 min-h-screen bg-ink-primary flex flex-col">
      <div className="px-5 pt-6 pb-4 border-b border-white/10">
        <div className="font-display text-white font-bold text-lg leading-tight">Agency</div>
        <div className="font-display text-brand-500 font-bold text-lg leading-tight">Intelligence</div>
        <div className="text-white/40 text-xs mt-1 font-mono">v1.0 · Platform</div>
      </div>

      <div className="px-4 py-3 border-b border-white/10">
        <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Client</label>
        <div className="relative">
          <select
            value={client.id}
            onChange={e => onClientChange(parseInt(e.target.value))}
            className="w-full appearance-none bg-white/10 text-white text-sm rounded-lg px-3 py-2 pr-8 border border-white/20 focus:outline-none focus:border-brand-500 cursor-pointer"
          >
            {clients.map(c => (
              <option key={c.id} value={c.id} className="bg-ink-primary">{c.name}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-brand-500 text-white'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
            >
              <Icon size={16} />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500 text-xs font-bold">
            AM
          </div>
          <div>
            <p className="text-white text-xs font-medium">Account Manager</p>
            <p className="text-white/40 text-xs">Admin view</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

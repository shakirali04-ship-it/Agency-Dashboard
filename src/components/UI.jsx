import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

export function KpiCard({ label, value, change, changeLabel, accent, delay = 0 }) {
  const positive = change >= 0
  return (
    <div
      className="animate-fadeUp bg-white rounded-2xl p-5 border border-surface-3"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-xs font-medium text-ink-tertiary uppercase tracking-widest mb-3">{label}</p>
      <p className="font-display text-2xl font-bold text-ink-primary mb-2">{value}</p>
      <div className={`flex items-center gap-1 text-xs font-medium ${positive ? 'text-emerald-600' : 'text-red-500'}`}>
        {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        {positive ? '+' : ''}{change}% {changeLabel || 'vs last week'}
      </div>
    </div>
  )
}

export function SectionHeader({ title, subtitle, badge }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h2 className="font-display text-xl font-bold text-ink-primary">{title}</h2>
        {subtitle && <p className="text-sm text-ink-tertiary mt-0.5">{subtitle}</p>}
      </div>
      {badge && (
        <span className="text-xs font-medium bg-brand-50 text-brand-600 px-3 py-1 rounded-full border border-brand-100">
          {badge}
        </span>
      )}
    </div>
  )
}

export function StatusBadge({ status }) {
  const styles = {
    active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    paused: 'bg-amber-50 text-amber-700 border-amber-200',
    top: 'bg-brand-50 text-brand-600 border-brand-100',
    weak: 'bg-red-50 text-red-600 border-red-100',
    average: 'bg-gray-50 text-gray-600 border-gray-200',
    high: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    low: 'bg-amber-50 text-amber-700 border-amber-200',
    positive: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    negative: 'bg-red-50 text-red-600 border-red-100',
  }
  const labels = { active: 'Active', paused: 'Paused', top: 'Top', weak: 'Weak', average: 'Average', high: 'High intent', low: 'Low intent', positive: 'Positive', negative: 'Negative' }
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${styles[status] || styles.average}`}>
      {labels[status] || status}
    </span>
  )
}

export function ScoreBar({ score, max = 10 }) {
  const pct = (score / max) * 100
  const color = score >= 8 ? '#10b981' : score >= 6 ? '#f59e0b' : '#ef4444'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-surface-2 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-xs font-mono font-medium text-ink-secondary w-6 text-right">{score}</span>
    </div>
  )
}

export function Card({ children, className = '', noPad = false }) {
  return (
    <div className={`bg-white rounded-2xl border border-surface-3 ${noPad ? '' : 'p-6'} ${className}`}>
      {children}
    </div>
  )
}

export function LiveBadge() {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
      <div className="w-2 h-2 rounded-full bg-emerald-500 live-dot" />
      Live
    </div>
  )
}

export function FeeCalculator({ spend }) {
  const fee = Math.round(spend * 0.3)
  const total = spend + fee
  const fmt = (n) => '₹' + n.toLocaleString('en-IN')
  return (
    <div className="bg-surface-1 rounded-xl p-4 space-y-2 border border-surface-3">
      <div className="flex justify-between text-sm">
        <span className="text-ink-tertiary">Actual spend</span>
        <span className="font-medium font-mono text-ink-primary">{fmt(spend)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-ink-tertiary">Agency fee (30%)</span>
        <span className="font-medium font-mono text-brand-600">{fmt(fee)}</span>
      </div>
      <div className="border-t border-surface-3 pt-2 flex justify-between">
        <span className="text-sm font-semibold text-ink-primary">Total billing</span>
        <span className="font-display font-bold text-ink-primary">{fmt(total)}</span>
      </div>
    </div>
  )
}

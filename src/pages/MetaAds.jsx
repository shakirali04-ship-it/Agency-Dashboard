import React, { useState } from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { KpiCard, Card, SectionHeader, StatusBadge, ScoreBar, FeeCalculator, LiveBadge } from '../components/UI'
import { metaData } from '../data'

const weeks = ['W1','W2','W3','W4','W5','W6','W7','W8']
const weeklyData = weeks.map((w, i) => ({ week: w, leads: metaData.weeklyLeads[i], spend: metaData.weeklySpend[i] / 1000 }))

export default function MetaAds() {
  const [customSpend, setCustomSpend] = useState(metaData.spend)

  return (
    <div className="animate-fadeUp">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-1">Meta Ads</p>
          <h1 className="font-display text-3xl font-bold text-ink-primary">Campaign Performance</h1>
          <p className="text-ink-tertiary text-sm mt-1">May 1 – May 8, 2026</p>
        </div>
        <LiveBadge />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Clicks" value="8,420" change={18} delay={0} />
        <KpiCard label="Impressions" value="198.4K" change={12} delay={100} />
        <KpiCard label="CTR" value="4.24%" change={0.6} delay={200} />
        <KpiCard label="Leads generated" value="312" change={24} delay={300} />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <SectionHeader title="Weekly leads trend" />
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="gLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4361ee" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4361ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e4e8f0', fontSize: 12 }} />
              <Area type="monotone" dataKey="leads" stroke="#4361ee" strokeWidth={2.5} fill="url(#gLeads)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SectionHeader title="Billing breakdown" badge="Admin only" />
          <div className="mb-4">
            <label className="text-xs text-ink-tertiary mb-1.5 block">Ad spend (₹)</label>
            <input
              type="number"
              value={customSpend}
              onChange={e => setCustomSpend(Number(e.target.value))}
              className="w-full border border-surface-3 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-brand-500"
            />
          </div>
          <FeeCalculator spend={customSpend} />
          <p className="text-xs text-ink-muted mt-3">Fee auto-hidden in client view</p>
        </Card>
      </div>

      <Card className="mb-6">
        <SectionHeader title="Campaign performance" subtitle="All active campaigns this period" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-3">
                {['Campaign', 'Status', 'Clicks', 'Leads', 'CPL (₹)', 'Quality score'].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-ink-muted uppercase tracking-wider pb-3 pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-2">
              {metaData.campaigns.map((c, i) => (
                <tr key={i} className="hover:bg-surface-1 transition-colors">
                  <td className="py-3 pr-6 font-medium text-ink-primary">{c.name}</td>
                  <td className="py-3 pr-6"><StatusBadge status={c.status} /></td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary">{c.clicks.toLocaleString()}</td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary">{c.leads}</td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary">₹{c.cpl}</td>
                  <td className="py-3 w-36"><ScoreBar score={c.score} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <SectionHeader title="AI creative analysis" badge="AI powered" />
        <div className="grid grid-cols-2 gap-4">
          {metaData.creatives.map((cr, i) => (
            <div key={i} className={`rounded-xl p-4 border ${cr.status === 'top' ? 'bg-brand-50 border-brand-100' : cr.status === 'weak' ? 'bg-red-50 border-red-100' : 'bg-surface-1 border-surface-3'}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-medium text-sm text-ink-primary">{cr.name}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{cr.type}</p>
                </div>
                <StatusBadge status={cr.status} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                  <span className="w-16">Hook</span><ScoreBar score={cr.hook} />
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                  <span className="w-16">Visual</span><ScoreBar score={cr.visual} />
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                  <span className="w-16">CTA</span><ScoreBar score={cr.cta} />
                </div>
              </div>
              {cr.status === 'weak' && (
                <div className="mt-3 text-xs text-red-600 bg-red-50 rounded-lg p-2 border border-red-100">
                  AI: Weak hook + low CTR. Suggest refreshing creative with stronger opening 3 seconds.
                </div>
              )}
              {cr.status === 'top' && (
                <div className="mt-3 text-xs text-brand-600 bg-brand-50 rounded-lg p-2 border border-brand-100">
                  AI: High engagement. Replicate hook angle + visual format in next 2 creatives.
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

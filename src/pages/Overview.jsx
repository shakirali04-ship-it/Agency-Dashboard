import React from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { KpiCard, Card, SectionHeader, LiveBadge } from '../components/UI'
import { metaData, googleData, socialData } from '../data'

const weeks = ['W1','W2','W3','W4','W5','W6','W7','W8']
const combinedLeads = weeks.map((w, i) => ({
  week: w,
  Meta: metaData.weeklyLeads[i],
  Google: googleData.weeklyLeads[i],
}))

const channelShare = [
  { name: 'Meta Ads', value: 312, color: '#4361ee' },
  { name: 'Google Ads', value: 214, color: '#10b981' },
  { name: 'WhatsApp', value: 184, color: '#f59e0b' },
  { name: 'Organic', value: 48, color: '#6b7592' },
]

export default function Overview({ client }) {
  const totalLeads = channelShare.reduce((a, b) => a + b.value, 0)

  return (
    <div className="animate-fadeUp">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-1">Performance overview</p>
          <h1 className="font-display text-3xl font-bold text-ink-primary">{client.name}</h1>
          <p className="text-ink-tertiary text-sm mt-1">May 1 – May 8, 2026 · All channels</p>
        </div>
        <LiveBadge />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Total leads" value={totalLeads} change={22} delay={0} />
        <KpiCard label="Meta clicks" value="8,420" change={18} delay={100} />
        <KpiCard label="Google CTR" value="6.7%" change={0.8} delay={200} />
        <KpiCard label="Reviews (this month)" value="48" change={14} delay={300} />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <SectionHeader title="Weekly leads — all channels" subtitle="Meta + Google combined" />
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={combinedLeads}>
              <defs>
                <linearGradient id="gMeta" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4361ee" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4361ee" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gGoogle" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e4e8f0', fontSize: 12 }} />
              <Area type="monotone" dataKey="Meta" stroke="#4361ee" strokeWidth={2} fill="url(#gMeta)" />
              <Area type="monotone" dataKey="Google" stroke="#10b981" strokeWidth={2} fill="url(#gGoogle)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SectionHeader title="Lead source split" />
          <div className="flex justify-center mb-4">
            <PieChart width={140} height={140}>
              <Pie data={channelShare} cx={65} cy={65} innerRadius={40} outerRadius={65} dataKey="value" strokeWidth={0}>
                {channelShare.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </div>
          <div className="space-y-2">
            {channelShare.map((c, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} />
                  <span className="text-ink-secondary">{c.name}</span>
                </div>
                <span className="font-mono font-medium text-ink-primary text-xs">{c.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <SectionHeader title="Channel health scorecard" />
        <div className="grid grid-cols-4 gap-4">
          {[
            { channel: 'Meta Ads', health: 87, trend: '+12%', color: '#4361ee' },
            { channel: 'Google Ads', health: 82, trend: '+8%', color: '#10b981' },
            { channel: 'Social Media', health: 76, trend: '+21%', color: '#f59e0b' },
            { channel: 'GMB', health: 91, trend: '+5%', color: '#6366f1' },
          ].map((ch, i) => (
            <div key={i} className="bg-surface-1 rounded-xl p-4 border border-surface-3">
              <div className="flex justify-between items-start mb-3">
                <p className="text-xs font-medium text-ink-tertiary">{ch.channel}</p>
                <span className="text-xs text-emerald-600 font-medium">{ch.trend}</span>
              </div>
              <p className="font-display text-3xl font-bold mb-2" style={{ color: ch.color }}>{ch.health}</p>
              <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${ch.health}%`, background: ch.color }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

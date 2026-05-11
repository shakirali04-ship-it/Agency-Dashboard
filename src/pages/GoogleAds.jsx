import React, { useState } from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { KpiCard, Card, SectionHeader, StatusBadge, FeeCalculator, LiveBadge } from '../components/UI'
import { googleData } from '../data'

const weeks = ['W1','W2','W3','W4','W5','W6','W7','W8']
const weeklyData = weeks.map((w, i) => ({ week: w, leads: googleData.weeklyLeads[i] }))
const COLORS = ['#4361ee','#10b981','#f59e0b']

export default function GoogleAds() {
  const [customSpend, setCustomSpend] = useState(googleData.spend)

  return (
    <div className="animate-fadeUp">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-1">Google Ads</p>
          <h1 className="font-display text-3xl font-bold text-ink-primary">Search Performance</h1>
          <p className="text-ink-tertiary text-sm mt-1">May 1 – May 8, 2026</p>
        </div>
        <LiveBadge />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Clicks" value="5,641" change={21} delay={0} />
        <KpiCard label="Impressions" value="84.2K" change={14} delay={100} />
        <KpiCard label="CTR" value="6.7%" change={0.8} delay={200} />
        <KpiCard label="Leads" value="214" change={31} delay={300} />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <SectionHeader title="Weekly leads trend" />
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="gG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e4e8f0', fontSize: 12 }} />
              <Area type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={2.5} fill="url(#gG)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <SectionHeader title="Billing" badge="Admin only" />
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
        </Card>
      </div>

      <Card className="mb-6">
        <SectionHeader title="Keyword performance" subtitle="Intent classification by AI" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-3">
                {['Keyword', 'Intent', 'Clicks', 'Leads', 'CPL (₹)'].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-ink-muted uppercase tracking-wider pb-3 pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-2">
              {googleData.topKeywords.map((kw, i) => (
                <tr key={i} className="hover:bg-surface-1 transition-colors">
                  <td className="py-3 pr-6 font-medium text-ink-primary">{kw.kw}</td>
                  <td className="py-3 pr-6"><StatusBadge status={kw.intent} /></td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary">{kw.clicks.toLocaleString()}</td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary">{kw.leads}</td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary">₹{kw.cpl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <SectionHeader title="Device split" />
          <div className="flex items-center gap-6">
            <PieChart width={120} height={120}>
              <Pie data={googleData.deviceSplit} cx={55} cy={55} innerRadius={32} outerRadius={55} dataKey="pct" strokeWidth={0}>
                {googleData.deviceSplit.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
            </PieChart>
            <div className="space-y-3 flex-1">
              {googleData.deviceSplit.map((d, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS[i] }} />
                    <span className="text-ink-secondary">{d.device}</span>
                  </div>
                  <span className="font-mono font-medium text-ink-primary text-xs">{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card>
          <SectionHeader title="Location breakdown" />
          <div className="space-y-3">
            {googleData.locationSplit.map((l, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink-secondary">{l.loc}</span>
                  <span className="font-mono text-xs text-ink-primary font-medium">{l.pct}%</span>
                </div>
                <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 rounded-full" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

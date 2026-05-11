import React from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { KpiCard, Card, SectionHeader, StatusBadge, LiveBadge } from '../components/UI'
import { socialData, whatsappData, gmbData } from '../data'

const weeks = ['W1','W2','W3','W4','W5','W6','W7','W8']
const reachData = weeks.map((w, i) => ({ week: w, reach: Math.round(socialData.weeklyReach[i] / 1000) }))

export function SocialMedia() {
  return (
    <div className="animate-fadeUp">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-1">Social Media</p>
          <h1 className="font-display text-3xl font-bold text-ink-primary">Content Performance</h1>
        </div>
        <LiveBadge />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Total reach" value="182.4K" change={21} />
        <KpiCard label="Engagement rate" value="4.8%" change={0.4} />
        <KpiCard label="Followers" value="28.4K" change={8.2} changeLabel="growth" />
        <KpiCard label="Reel views" value="94.2K" change={32} />
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card className="col-span-2">
          <SectionHeader title="Weekly reach trend" />
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={reachData}>
              <defs>
                <linearGradient id="gReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ba3be' }} axisLine={false} tickLine={false} unit="K" />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e4e8f0', fontSize: 12 }} formatter={v => [v + 'K', 'Reach']} />
              <Area type="monotone" dataKey="reach" stroke="#f59e0b" strokeWidth={2.5} fill="url(#gReach)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <Card>
        <SectionHeader title="Post performance" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-3">
                {['Post', 'Type', 'Reach', 'Engagement', 'Likes', 'Comments'].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-ink-muted uppercase tracking-wider pb-3 pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-2">
              {socialData.posts.map((p, i) => (
                <tr key={i} className="hover:bg-surface-1 transition-colors">
                  <td className="py-3 pr-6 font-medium text-ink-primary">{p.title}</td>
                  <td className="py-3 pr-6"><span className="text-xs bg-surface-2 text-ink-secondary px-2 py-0.5 rounded-full">{p.type}</span></td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary text-xs">{p.reach.toLocaleString()}</td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary text-xs">{p.eng}%</td>
                  <td className="py-3 pr-6 font-mono text-ink-secondary text-xs">{p.likes.toLocaleString()}</td>
                  <td className="py-3 font-mono text-ink-secondary text-xs">{p.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export function WhatsApp() {
  return (
    <div className="animate-fadeUp">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-1">WhatsApp Marketing</p>
          <h1 className="font-display text-3xl font-bold text-ink-primary">Campaign Tracking</h1>
        </div>
        <LiveBadge />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Messages sent" value="4,200" change={12} />
        <KpiCard label="Read rate" value="78.7%" change={3.2} />
        <KpiCard label="Click rate" value="45.0%" change={5.8} />
        <KpiCard label="Leads generated" value="184" change={18} />
      </div>
      <Card className="mb-6">
        <SectionHeader title="Delivery funnel" />
        <div className="flex items-end gap-4 h-40">
          {[
            { label: 'Sent', val: 4200, pct: 100, color: '#6b7592' },
            { label: 'Delivered', val: 4116, pct: 98, color: '#4361ee' },
            { label: 'Read', val: 3240, pct: 77, color: '#10b981' },
            { label: 'Clicked', val: 1890, pct: 45, color: '#f59e0b' },
            { label: 'Replied', val: 620, pct: 15, color: '#f97316' },
            { label: 'Leads', val: 184, pct: 4.4, color: '#ef4444' },
          ].map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <p className="text-xs font-mono font-medium text-ink-primary">{s.val.toLocaleString()}</p>
              <div className="w-full rounded-t-lg" style={{ height: `${s.pct * 0.9 + 10}%`, background: s.color, opacity: 0.85 }} />
              <p className="text-xs text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <SectionHeader title="Campaign breakdown" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-3">
                {['Campaign', 'Sent', 'Read rate', 'Click rate', 'Leads'].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-ink-muted uppercase tracking-wider pb-3 pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-2">
              {whatsappData.campaigns.map((c, i) => (
                <tr key={i} className="hover:bg-surface-1 transition-colors">
                  <td className="py-3 pr-6 font-medium text-ink-primary">{c.name}</td>
                  <td className="py-3 pr-6 font-mono text-xs text-ink-secondary">{c.sent.toLocaleString()}</td>
                  <td className="py-3 pr-6 font-mono text-xs text-ink-secondary">{c.read}%</td>
                  <td className="py-3 pr-6 font-mono text-xs text-ink-secondary">{c.click}%</td>
                  <td className="py-3 font-mono text-xs text-emerald-600 font-medium">{c.leads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export function GMBReviews() {
  const { reviews } = gmbData
  const posPct = Math.round((reviews.positive / reviews.total) * 100)
  return (
    <div className="animate-fadeUp">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-1">Google Business Profile</p>
          <h1 className="font-display text-3xl font-bold text-ink-primary">GMB + Reviews</h1>
        </div>
        <LiveBadge />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Phone calls" value="284" change={9} />
        <KpiCard label="Website clicks" value="1,840" change={14} />
        <KpiCard label="Direction requests" value="412" change={7} />
        <KpiCard label="Avg rating" value="4.6★" change={0.2} />
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card>
          <SectionHeader title="Review summary" />
          <div className="text-center mb-4">
            <p className="font-display text-5xl font-bold text-ink-primary mb-1">{reviews.total}</p>
            <p className="text-xs text-ink-muted">reviews this month</p>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-emerald-600 font-medium">Positive</span>
                <span className="font-mono text-xs">{reviews.positive} · {posPct}%</span>
              </div>
              <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${posPct}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-red-500 font-medium">Negative</span>
                <span className="font-mono text-xs">{reviews.negative} · {100 - posPct}%</span>
              </div>
              <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{ width: `${100 - posPct}%` }} />
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <SectionHeader title="Positive topics" badge="AI tagged" />
          <div className="space-y-2">
            {reviews.positiveTopics.map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-ink-secondary">{t.topic}</span>
                <span className="text-xs font-mono font-medium text-emerald-600">{t.count}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionHeader title="Negative topics" badge="AI tagged" />
          <div className="space-y-2 mb-4">
            {reviews.negativeTopics.map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-ink-secondary">{t.topic}</span>
                <span className="text-xs font-mono font-medium text-red-500">{t.count}</span>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-100 text-xs text-amber-700">
            AI action: Waiting time flagged as top issue. Recommend briefing reception team.
          </div>
        </Card>
      </div>
      <Card>
        <SectionHeader title="Recent reviews" />
        <div className="space-y-4">
          {reviews.recent.map((r, i) => (
            <div key={i} className={`rounded-xl p-4 border ${r.sentiment === 'positive' ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-surface-3 flex items-center justify-center text-xs font-bold text-ink-secondary">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-primary">{r.name}</p>
                    <div className="flex gap-0.5">{'★'.repeat(r.rating)}<span className="text-surface-3">{'★'.repeat(5 - r.rating)}</span></div>
                  </div>
                </div>
                <StatusBadge status={r.sentiment} />
              </div>
              <p className="text-sm text-ink-secondary">{r.text}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export function ExecutiveSummary({ client }) {
  const totalLeads = 312 + 214 + 184
  return (
    <div className="animate-fadeUp">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-1">Executive summary</p>
          <h1 className="font-display text-3xl font-bold text-ink-primary">Monthly Intelligence Brief</h1>
          <p className="text-ink-tertiary text-sm mt-1">{client.name} · May 2026 · AI generated</p>
        </div>
        <span className="text-xs bg-brand-50 text-brand-600 font-medium px-3 py-1.5 rounded-full border border-brand-100">AI powered</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="bg-brand-500 border-brand-600 text-white">
          <p className="text-brand-200 text-xs uppercase tracking-widest mb-2">Total leads</p>
          <p className="font-display text-4xl font-bold text-white">{totalLeads}</p>
          <p className="text-brand-200 text-sm mt-1">All channels combined</p>
        </Card>
        <Card>
          <p className="text-ink-muted text-xs uppercase tracking-widest mb-2">Top channel</p>
          <p className="font-display text-2xl font-bold text-emerald-600">Meta Ads</p>
          <p className="text-ink-tertiary text-sm mt-1">312 leads · 24% growth</p>
        </Card>
        <Card>
          <p className="text-ink-muted text-xs uppercase tracking-widest mb-2">Avg review rating</p>
          <p className="font-display text-4xl font-bold text-amber-500">4.6★</p>
          <p className="text-ink-tertiary text-sm mt-1">48 reviews this month</p>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card>
          <SectionHeader title="What's working" />
          <div className="space-y-3">
            {[
              { title: 'Meta Q5 Test Drive campaign', detail: 'Highest lead volume at lowest CPL (₹412)' },
              { title: 'Google high-intent keywords', detail: 'Banjara Hills + Jubilee Hills driving 52% of conversions' },
              { title: 'Lifestyle reels on Instagram', detail: 'Avg 42K reach per reel vs 24K for static posts' },
              { title: 'WhatsApp Weekend Offer campaign', detail: '82% read rate — highest performing message type' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-primary">{item.title}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionHeader title="Needs attention" />
          <div className="space-y-3">
            {[
              { title: 'A6 retargeting campaign paused', detail: 'CPL ₹618 — above threshold. Targeting review needed' },
              { title: 'Waiting time complaints in reviews', detail: '4 of 7 negative reviews mention long wait. Ops issue' },
              { title: 'Low-intent keywords draining budget', detail: '"luxury cars India" — 0 conversions in 3 weeks' },
              { title: 'A4 static creative fatigue', detail: 'CTR dropped 2.1% week-on-week. Refresh creative' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-primary">{item.title}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <SectionHeader title="Action plan — June 2026" badge="Recommended" />
        <div className="grid grid-cols-3 gap-4">
          {[
            { priority: '01', action: 'Launch Q5 Monsoon Test Drive campaign', channel: 'Meta + Google', impact: 'High' },
            { priority: '02', action: 'Refresh A4 static creatives with new hook', channel: 'Meta', impact: 'Medium' },
            { priority: '03', action: 'Add negative keywords (low-intent terms)', channel: 'Google', impact: 'High' },
            { priority: '04', action: 'Relaunch A6 with tighter audience targeting', channel: 'Meta', impact: 'Medium' },
            { priority: '05', action: 'Brief reception team on wait time management', channel: 'Operations', impact: 'High' },
            { priority: '06', action: 'Scale WhatsApp campaigns to 6,000 sends', channel: 'WhatsApp', impact: 'Medium' },
          ].map((a, i) => (
            <div key={i} className="bg-surface-1 rounded-xl p-4 border border-surface-3">
              <p className="font-display font-bold text-2xl text-surface-3 mb-2">{a.priority}</p>
              <p className="text-sm font-medium text-ink-primary mb-2">{a.action}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-ink-muted">{a.channel}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.impact === 'High' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{a.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

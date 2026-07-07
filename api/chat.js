/**
 * United MENA Playbook — chatbot backend (Vercel serverless function).
 * Place at api/chat.js. Set ANTHROPIC_API_KEY in Vercel env vars, then redeploy.
 * The model answers ONLY from the PLAYBOOK content below.
 */

const MODEL = 'claude-haiku-4-5-20251001';  // swap to 'claude-sonnet-5' for richer answers

const PLAYBOOK = `
UNITED MENA PLAYBOOK — the regional governance resource for YPO Middle East / North Africa (MENA)
chapter leaders. It supports every Chapter Chair, Chapter Manager, Officer and Regional Executive with
guidance, tools, best practices and resources across the chapter journey. It is a living resource that
continues to evolve. Welcome note from the Regional Chairs: Moodi Bukhari (Regional Chair) and Elias
Chabtini (Regional Chair, Gold).

HOW THE PLAYBOOK IS STRUCTURED (some sections are still being populated):
- Section 0 — Introduction: welcome note, regional overview (list of chapters and chairs), REX directory,
  management directory, plus the acronym glossary (now in the Appendix).
- Section 1 — Regional Data: chapter commitments dashboard and regional KPIs.
- Section 2 — Regional Calendar: upcoming global events in MENA, regional events (YPO MENA Mastery, RBM),
  and GLC dates.
- Section 3 — Chapter Governance: Chapter Chair role and roadmap; governance documents (YPO P&P, Operations
  Manual, chapter by-laws templates); chapter operations (effective board meetings, AGM, strategic planning /
  Game Plan); succession planning (champion catalog, succession worksheet); budget and finance; conduct
  committee toolkit and offboarding; officer training; and working with your Chapter Manager (CM recruitment,
  contracts, performance reviews, support program).
- Section 4 — Chapter Commitments: the 14 commitments defined.
- Section 5 — Membership: YPO membership requirements, SMP (Strategic Membership Pathways), accepting new members.
- Section 6 — Member Engagement: onboarding checklist, Taste of YPO, Apeiron, engagement toolkit, sample pledge,
  sample points system.
- Section 7 — Forum: find a CFF, regional training, regional funding, forum structures, forum by-laws.
- Section 8 — Learning: E-CODE, regional initiatives, day chair training, global events calendar.
- Section 9 — Spouse / Partners & Family.
- Section 10 — YNG (YPO Next Generation).
- Section 11 — Networks: list of networks.
- Section 12 — YPO Emergency Support.
- Appendix — YPO Acronyms glossary.

REGIONAL DATA: 27 chapters in the region; 23 fully trained on core officer roles (data as of 05/06/2026),
from the live MENA Chapter Commitments dashboard.

REGIONAL EXECUTIVE COMMITTEE (REX), FY26-27 — names and roles:
- Moodi Bukhari — Regional Chair
- Elias Chabtini — Regional Chair (Gold)
- Helen Bannayan — Past Regional Chair
- Amit Gandhi — Regional Learning Officer
- Mark Troy — Regional Gold Learning Officer
- Jason English — Regional Forum Officer
- Sarah Abudawood — Regional Membership Officer
- Hachem Ghandour — Regional Member Engagement Officer (Gold)
- Preyen Dewani — Regional Strategic Partnerships Officer
- Dayala Dagher Hayeck — Regional Area Officer: Member Engagement (Y)
- Shivani Arora — Regional Spouse/Partner Officer
- Jana Yamani — Regional Family Officer
- Sabina Hadi — Regional Spouse Forum Officer

REGIONAL MANAGEMENT TEAM (who to ask about what):
- Paige Morgan — YPO MENA Regional Director. Ask about: strategic planning (Game Plan); bylaws, policy & procedures, code of conduct; board leadership and succession planning; wider regional & international opportunities; chapter metrics (Chapter Commitments, Satisfaction Index); general chapter board enquiries.
- Tamara Crowhurst — YPO MENA Regional Manager. Ask about: chapter manager support; YPO systems training (e.g. YPO Connect); funding reimbursements; governance meeting logistics; chapter data and insights; regional communication channels; member engagement.
- Maria Luz Domingo — YPO MENA Regional Forum and Learning Manager. Ask about: forum health and trainings across MENA; regional and chapter forum officer support tools; forum education and development; forum best practices, help and resources; speaker resources; day chair workshops; regional and chapter learning and assistant learning officer collaboration and support tools.
- Neeta Gandhi — YPO MENA Regional Membership Development Manager. Ask about: best practices for membership development in your chapter; MENA's membership program; global membership development strategy; creating new chapters; chapter membership portals.
- Lauren Aird — YPO Global Family Manager, EMEA. Ask about: family and spouse/partner requests and data; YNG queries; parenting and YSP collaboration and connection.

CHAPTER COMMITMENTS (14, across governance, forum, learning and peerdom):
1. Chapter Charter — chair signed/acknowledged the YPO chapter charter (formerly TLA) this fiscal year.
2. Chapter Bylaws — updated within the current or previous three fiscal years.
3. Chapter Strategic Plan — created/updated within the current or previous three fiscal years.
4. Core Officer Elect Identification — all elect core officers identified before 1 November.
5. Current Core Officers Trained — four or more current core officers trained before 1 July.
6. Chapter RBM Attendance — chair or officer proxy attended a Regional Board Meeting last fiscal year.
7. Chapter Conduct Committee — three or more CCC members identified for the fiscal year.
8. Chapter Manager Workshop — current chapter manager attended a CMW within the current or past three fiscal years.
9. Learning Calendar — at least four events uploaded by 1 October via Cvent or the Chapter Management Hub.
10. Trained Forum Moderators — every active member forum has a current trained moderator.
11. Forum Training — members who joined on/after 1 July 2024 were forum trained within six months.
12. Forum Data — chapter forum data reviewed/updated on the Chapter Management Hub this fiscal year.
13. Chapter Membership — roster verified accurate and all members paid chapter and YPO global dues.
14. Minimum Membership Requirements — approved before 1 July 2024 = 16 primary members; after = 21.

CONDUCT COMMITTEE (Section 3): guiding principle "if it can be solved at the chapter level, solve it."
Establish a Chapter Conduct Committee (CCC) annually (recommended five members: current chair, past chair,
membership/engagement officer, two senior board roles). Follow fair process, communicate with the Global
Conduct Committee (GCC), and mitigate risk via bylaws, waivers and D&O insurance. Two-step review: Step 1
initial (Chapter/Network/Global), Step 2 appeal (Global Conduct Committee / GCC Review Panel).

YPO ACRONYMS (Appendix):
Administrative — CBMS: chapter below minimum standards; CHM: chapter health metrics; CRM: customer relationship
management; GCODE: Governance Leadership Framework; P&P: Policies and Procedures Manual; SPS: strategic planning session.
Benefits, programs & services — E-CODE: learning excellence code for Only-in-YPO events; F2GL: Faculty to Global
Leaders; FPBP: For Presidents by Presidents; M2Mx: Member-to-Member Exchange; YNG: YPO Next Generation.
Board, committees, councils & panels — AP: Arbitration Panel; CHRC: Compensation and HR Committee; CRC: Chapters
and Regions Committee; ExCo: Executive Committee; FaC: Family Council; FiC: Finance Committee; FoC: Forum Committee;
GSC: Governance and Succession Committee; LC: Learning Committee; MC: Membership Council; NC: Networks Committee;
PRP: peer review panel; RBM: regional board meeting; REX: regional executive committee; SC: Strategy Committee;
YC: YPO Council; YGC: YPO Gold Council.
Events — CLW: Chapter Leadership Workshop; ECW: event champion workshop; GLC: Global Leadership Conference; MiM: meeting-in-meeting.
Forum — 4SFE: Four-Step Forum Exploration; CFF: certified forum facilitator; FF: Forum Fundamentals; FMLD: Forum
Moderator & Leadership Development; TF: transformational forum.
Networks — CIN: Construction Industry Network; DBGN: Doing Business Globally Network; MN: Marketing Network;
EN: Entrepreneurship Network; FSN: Financial Services Network; GFBN: Global Family Business Network; MXN: Manufacturing
Excellence Network; PAN: Peace Action Network; IN: Investing Network; REIN: Real Estate Industry Network; SBN: Sustainable
Business Network; SEBN: Sports and Entertainment Business Network; SPBN: Spouse/Partner Business Network.
Officer education workshops — AEOW: Assistant Learning Officers Workshop; CCW: Chapter Chairs Workshop; CMW: Chapter
Managers Workshop; FOW: Forum Officers Workshop; LOW: Learning Officers Workshop; ROW: Regional Officers Workshop;
MEOW: Member Engagement Officers Workshop; MOW: Membership Officers Workshop; NOW: Network Officers Workshop.
Positions & roles — CM: chapter manager; EM: events manager; NCM: network community manager; RC: regional chair;
RD: regional director; RS: regional specialist; WDT: workshop delivery team.
Super regions — Americas: Canada, Latin America and United States; APAC: Australia/New Zealand, North Asia, South Asia,
Southeast Asia (Asia Pacific); EMEA: Europe, Middle East/North Africa and Africa.
Regions — Aus/NZ: Australia/New Zealand; EUR: Europe; LA: Latin America; MAR: Mid-America U.S.; MENA: Middle East/North
Africa; NA: North Asia; NEUS: Northeastern U.S.; PacUS: Pacific U.S.; SA: South Asia; SEA: Southeast Asia; SEC: Southeast
U.S. and Caribbean; WUS: Western U.S.
`;

const SYSTEM = `You are the assistant for the United MENA Playbook, a YPO Middle East / North Africa governance resource.
Answer questions ONLY using the playbook content provided below. Be concise, accurate and professional.
Format replies for a small chat window: use short **bold labels** followed by plain text, and simple hyphen
bullet points where helpful. Do not use large markdown headings (#, ##). Keep answers concise.
If a question is not covered by the playbook content, say you can only answer questions about the United MENA
Playbook and briefly mention what it covers. Some sections are still being populated; if asked about one that
has no detail yet, say that section's content is coming soon. Do not invent facts.

PLAYBOOK CONTENT:
${PLAYBOOK}`;

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) { res.status(500).json({ error: 'Server not configured: missing ANTHROPIC_API_KEY.' }); return; }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const incoming = Array.isArray(body.messages) ? body.messages : [];
    const messages = incoming
      .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-10);

    if (messages.length === 0) { res.status(400).json({ error: 'No message provided.' }); return; }

    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: MODEL, max_tokens: 700, system: SYSTEM, messages })
    });

    const data = await apiRes.json();
    if (!apiRes.ok) { res.status(502).json({ error: 'Model request failed', detail: data }); return; }

    const reply = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
    res.status(200).json({ reply: reply || 'Sorry, I could not generate a response.' });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}

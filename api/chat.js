/**
 * United MENA Playbook — chatbot backend (Vercel serverless function).
 *
 * Place this file at:  api/chat.js  (in the same project as index.html)
 * Set an environment variable in Vercel:  ANTHROPIC_API_KEY = sk-ant-...
 *   (Vercel: Project > Settings > Environment Variables, then redeploy.)
 *
 * The key stays on the server and is never exposed to visitors.
 * The model is instructed to answer ONLY from the playbook content below.
 */

const MODEL = 'claude-haiku-4-5-20251001';  // swap to 'claude-sonnet-5' for richer answers

// ---- Playbook knowledge the assistant is allowed to use ----
const PLAYBOOK = `
UNITED MENA PLAYBOOK — a governance resource for YPO Middle East / North Africa (MENA) chapter leaders.

REGIONAL DATA
- The region has 27 chapters; 23 are fully trained on core-officer roles (data as of 05/06/2026).
- Source is the MENA GLC Registrations / Chapter Commitments dashboard, which updates live.

CHAPTER COMMITMENTS (14 total, across chapter governance, forum, learning and peerdom):
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

CONDUCT COMMITTEE BEST PRACTICES
- Guiding principle: "If it can be solved at the chapter level, solve it."
- Establish a Chapter Conduct Committee (CCC) annually. Recommended five members: current chair, past chair,
  membership/engagement officer, and two senior board roles. Avoid two members from the same forum. Update
  chapter health data quarterly.
- Follow good process: member-led inquiry to gather facts; give the member under review a fair chance to
  respond; use YPO's review process, uniform sanction guidelines and process diagram.
- Communicate with the Global Conduct Committee (GCC): ask questions early; submit a Fact Finding Form or
  Decision Notice when action is taken.
- Mitigate risk: refine chapter bylaws (conduct, insurance, indemnification provisions), implement chapter
  waivers, and obtain chapter/RALE Directors & Officers (D&O) coverage.
- Two-step review: Step 1 is the initial fact-finding review (by the Chapter, Network, or Global committee
  depending on context); Step 2 is the appeal, focused on due process and fairness (Global Conduct Committee,
  or the GCC Review Panel for global matters).
- Report concerns via: EthicsPoint, the Global Conduct Committee Chair, the CEO, the Chief People Officer, or
  the Chapter Chair / Network Committee Chair.

OFFICER ROADMAP (the chapter chair journey; chairs are appointed in November for a term beginning in July):
- Pre-term (November): explore the role.
- January–March: review the role and resources, connect with outgoing/incoming chairs, build a chapter conduct
  committee, attend the Chapter Chair Workshop at the Global Leadership Conference.
- April–June: define vision, objectives and goals; run the chapter health survey; attend the Q4 regional
  governance meeting (e.g. RBM); host a strategic planning / game-plan session.
- July–September: term begins; 1:1 onboarding with the regional chair; review chapter commitments; host
  ExCo/board meetings; support membership renewals; allocate financial support to officers.
- October–December: attend the Q2 regional governance meeting; put the chapter succession plan in place by
  1 November; promote Officer Essentials and GLC attendance.
- January–March (year two): review chapter health metrics; transition knowledge to your successor; encourage
  the chapter manager to attend the Chapter Manager Workshop.
- April–May: prepare for the YPO Global Awards Program; support the incoming chair with a planning session.
- June: ensure a proper handover; host a graduation ceremony; celebrate the year.
`;

const SYSTEM = `You are the assistant for the United MENA Playbook, a YPO Middle East / North Africa governance resource.
Answer questions ONLY using the playbook content provided below. Be concise, accurate and professional.
If a question is not covered by the playbook content, say you can only answer questions about the United MENA
Playbook and briefly mention what it covers (regional data, chapter commitments, conduct committee best
practices, and the officer roadmap). Do not invent facts, and do not answer questions unrelated to the playbook.

PLAYBOOK CONTENT:
${PLAYBOOK}`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server not configured: missing ANTHROPIC_API_KEY.' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const incoming = Array.isArray(body.messages) ? body.messages : [];

    // keep only clean {role, content} pairs, last 10 turns
    const messages = incoming
      .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-10);

    if (messages.length === 0) {
      res.status(400).json({ error: 'No message provided.' });
      return;
    }

    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        system: SYSTEM,
        messages
      })
    });

    const data = await apiRes.json();

    if (!apiRes.ok) {
      res.status(502).json({ error: 'Model request failed', detail: data });
      return;
    }

    const reply = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n')
      .trim();

    res.status(200).json({ reply: reply || 'Sorry, I could not generate a response.' });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}

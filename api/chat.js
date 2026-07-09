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
- Section 3 — Chapter Chair Resources: Chapter Chair role and roadmap; governance documents (YPO P&P, Operations
  Manual, chapter by-laws templates); chapter operations (effective board meetings, AGM, strategic planning /
  Game Plan); succession planning (champion catalog, succession worksheet); budget and finance; conduct
  committee toolkit and offboarding; officer training; and working with your Chapter Manager (CM recruitment,
  contracts, performance reviews, support program).
- Section 4 — Chapter Commitments: the 14 commitments defined.
- Section 5 — Membership Resources: membership officer role and roadmap, YPO membership requirements, the role-based verification framework, new chapter / integrated chapter development, and the member preboarding toolkit.
- Section 6 — Member Engagement Resources: member engagement officer role and roadmap, new member onboarding checklist,
  Apeiron, the engagement toolkit, sample pledge, engagement score dashboard and executive education.
- Section 7 — Forum Resources: forum officer role and roadmap, find a CFF, regional training, regional funding, the
  different types of YPO forums, and sample forum by-laws.
- Section 8 — Learning Resources: E-CODE, chapter learning officer role and roadmap, regional initiatives, day chair
  training and toolkit, and the global events calendar.
- Section 9 — Spouse / Partner & Family Resources.
- Section 10 — YNG Resources (YPO Next Generation).
- Section 11 — Network Resources: YPO Networks overview, featured offerings and the full networks directory.
- Section 12 — YPO Emergency Support: M2Mx (Member-to-Member Exchange) support for business, health and personal challenges.
- Appendix — YPO Acronyms glossary.

REGIONAL DATA: 27 chapters in the region; 23 fully trained on core officer roles (data as of 05/06/2026),
from the live MENA Chapter Commitments dashboard.

REGIONAL OVERVIEW — CHAPTERS AND DEMOGRAPHICS:
Demographics: 27 total chapters in the region (21 Integrated + 3 YPO + 3 YPO Gold); 1,600+ MENA members;
15 MENA countries. Globally: 490+ chapters, 37,000+ members, 150+ countries.
YPO Integrated Chapters (21): YPO Bahrain Integrated; YPO Capital Pakistan Integrated; YPO Cairo Integrated;
YPO Dubai Downtown Integrated; YPO Dubai Integrated; YPO Emirates Integrated; YPO Indus Integrated; YPO Iraq
Integrated; YPO Jordan Integrated; YPO Khaleej Integrated; YPO Kuwait Integrated; YPO Levant Integrated;
YPO MENA Gulf Regional Integrated; YPO MENA One Regional Integrated; YPO Morocco Integrated; YPO Oman Integrated;
YPO Olive MENA Regional Integrated; YPO Palestine Integrated; YPO Qatar Integrated; YPO Tunisia Integrated;
YPO UAE Integrated.
YPO Chapters (3): YPO Lebanon; YPO Pakistan; YPO Saudi.
YPO Gold Chapters (3): YPO Gold Lebanon; YPO Gold Pakistan; YPO Gold Saudi.

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

M2MX / YPO EMERGENCY SUPPORT (Section 12). M2Mx — "Connections You Can Count On". Got a challenge? Business, health,
or personal — M2Mx gets you answers fast, tapping thousands of trusted YPO peers who have been there and know what works.
How we help:
- Business: growth or development advice; company connections and referrals; legal or sourcing support.
- Health: doctor referrals and medical access; peer feedback and advice; substance abuse and mental health crisis support.
- Personal: parenting support; family challenges; local connection support.
Fast and confidential: every request is matched quickly and discreetly with members and spouse/partners. Quick.
Confidential. Global.
To get help, members can submit a request through the YPO Concierge "request assistance" page linked in the playbook,
email m2mx@ypo.org, or call +1 469 770 3395.

YPO NETWORKS (Section 11, Network Resources). Networks unlock the full power of YPO by building deeper relationships
with members and spouses/partners who share your business interests and personal passions. More than 30 YPO Networks
strengthen these global connections through virtual and in-person opportunities, with customized learning programs, idea
exchange and events tailored to what matters most to you.
Featured network offerings: Forum (network forums, with a networks forum toolkit), MicroForum, Events, and Business
Marketplace.
Find your network(s): Business Networks foster powerful connections around shared business interests and industries,
giving insights, support and learning from global peers. Personal Networks create meaningful connections through shared
passions outside of work — lifestyle, impact, or family-focused communities that offer enriching experiences for members
and spouses/partners.
The playbook links to the full Networks Directory on YPO Connect, a "see all networks" PDF, and the YPO Networks
community page, plus "learn more" PDFs for Business Networks and Personal Networks.

CHAPTER CHAIR ROLE AND RESPONSIBILITIES (Section 3, above the roadmap). One-year term.
Mission: lead the executive committee in creating a high-value chapter experience for members, using best practices and
YPO resources and tools to drive member engagement and create a healthy chapter.
Key goals: lead the executive committee's strategic planning, budget development and succession planning processes;
ensure the chapter follows the YPO Policies and Procedures Manual and that officers receive training; promote a culture
of recognition and gratitude; ensure a trained, competent and passionate leader succeeds you.
Qualifying criteria: member in good standing; served as a chapter officer in several roles, preferably also as chapter
learning officer.
Time commitment (varies by chapter): lead the annual strategic planning session (one day); lead all chapter executive
committee meetings (monthly/quarterly); attend 10 to 20 chapter events; meet the chapter manager regularly
(weekly/monthly); attend regional board meetings, usually in Q2 and Q4; complete the forum officer essentials training.
Responsibilities: oversee strategic planning (assess needs, use chapter health tools, develop the annual strategic plan
at retreat); lead the chapter (lead the executive committee, select incoming officers, mentor your successor); oversee
operations (monitor goals and governance, integrate and transition members, improve programs); represent the chapter
(serve on the regional board, promote officer education, drive membership and diversity); recognize members,
spouses/partners and others making a positive impact; elevate champions so talented members are known beyond the chapter;
oversee finances (finalize the chapter budget, practice fiscal responsibility, monitor dues).
Experience gained: chapter strategic planning tools and experience; leader engagement and onboarding; collaboration
skills; peer leadership; understanding of YPO's strategy, policies and procedures; building relationships with YPO
management associates; influence without authority; conflict resolution; presentation and communication skills.
Resources: chapter manager; peers and predecessor; regional director; regional chair; chapter executive committee/board;
Chapter Chairs group on Connect; Chapter Chair Toolkit; Strategic Planning Toolkit; YPO Policies and Procedures Manual.
Source: YPO Champion Catalog.

CHAPTER CHAIR ROADMAP (Section 3, Chapter Chair Resources — the chapter chair journey). Chairs are appointed in November for a
one-year term beginning in July. A downloadable PDF of the roadmap is available in the playbook.
- Pre-term (November): chapters appoint chapter chairs for the one-year journey beginning in July.
- January–March: review your role description and watch the chapter chair essentials video; review dedicated
  chapter chair resources and assess data; connect with peers (outgoing and incoming chairs) to begin transition;
  learn about the focus areas in your future chapter ExCo/board; build a chapter conduct committee; attend the
  Chapter Chair Workshop at the Global Leadership Conference.
- April–June: define your vision, objectives and goals for the year; conduct the chapter health survey and review
  other data; if applicable attend the Q4 regional governance meeting (e.g. RBM) and review pre-reads; host a
  strategic planning and/or game plan session for your ExCo/board to finalize smart goals and secure approval.
- July–September: the chapter chair year begins; engage in the chapter chair community; schedule 1:1 onboarding
  with your regional chair; review chapter commitments and how chapter health is measured; explore future
  leadership roles in YPO; host chapter ExCo/board meetings (many chapters do this bi-monthly); support membership
  renewal efforts; allocate financial support to your ExCo/board officers.
- October–December: attend the Q2 regional governance meeting and review pre-reads; continue hosting ExCo/board
  meetings; collaborate with your ExCo/board to get the chapter succession plan in place by 1 November; promote
  Officer Essentials and GLC attendance to the incoming ExCo/board; review your goals and identify actions.
- January–March (second calendar year): host ExCo/board meetings; start planning for the graduation of
  transitioning members; review chapter health metrics and identify improvements; start transitioning knowledge to
  your successor; encourage your chapter manager to attend the Chapter Manager Workshop.
- April–May: if applicable attend the Q4 regional governance meeting; continue hosting ExCo/board meetings;
  prepare for the YPO Global Awards Program; support your incoming chair with a strategic planning / game plan session.
- June: ensure a proper handover to the incoming chapter chair; send farewell emails to your ExCo/board and chapter
  members; host a graduation ceremony; celebrate achievements and recognize your peers.
The roadmap includes: monthly emails of support; timely, actionable information; a step-by-step planning guide;
access to tools and global best practices; opportunities for cross-chapter collaboration; benefits from regional
and global initiatives. YPO management support comes from the Regional Director; for more information email champion@ypo.org.

CHAPTER CHAIR ON THE REGIONAL BOARD (Section 3, Chapter Chair Resources — regional board overview for chapter chairs):
- Regional board function: Chapter Link — communicate chapter needs to the YPO Global Board of Directors and inform
  chapters of global updates and initiatives; Support — apply regional and global support to chapters; Activities —
  organize activities and initiatives to engage members and chapters; Best Practices — give space for chapters to
  share best practices; Identify Champions — recruit passionate member champions to serve at the chapter, regional
  and global level.
- Regional board structure: the regional board is comprised of elected regional officers serving on the regional
  executive committee (REX) plus chapter chairs from the region. The regional chair leads the regional board.
- The chapter chair's role on the board: Meetings — attend Regional Board Meetings (RBM) to conduct the business of
  the region and share best practices, and attend regional board calls as needed. Vote — vote as a chapter
  representative on regional board matters, and identify a proxy if unavailable for a vote.
Roadmaps for all chapter officer roles are available to download from YPO Connect, and the Chapter Chair Roadmap
PDF can be downloaded from the playbook.

CHAPTER OPERATIONS — HOLDING AN EFFECTIVE BOARD MEETING (Section 3, Chapter Operations sub-section, alongside AGM
content still being added):
1. Set a board meeting schedule in advance — there is likely not enough going on to justify monthly meetings; consider
   meeting quarterly and holding chapter board conference calls in between; meetings should not last more than two hours.
2. Meeting prep is critical — the key to an effective meeting is the work done beforehand. Work with the Chapter Manager
   (CM) to show where the chapter stands against YPO chapter health metrics. Officers should submit written updates to
   the CM at least a week ahead of each meeting (using the forum update as a template for director reports) and chapter
   financials should be included in advance materials, which should be reviewed before the meeting so discussion begins
   where the materials end.
3. Meeting agenda — roll call (confirm quorum; if not achieved, no official business can take place); approval of
   minutes; committee reports (officers raise anything beyond their written update, without turning into a serial
   download session); treasurer's report (executive summary of chapter finances); old business; new business (new
   opportunities, plus regional/global content if a regional representative is present); open mic (comments and
   recognition); adjourn.
4. Tips for effective meetings — conduct forum connection activities at the start; stay on topic (it's everyone's job
   to call a point of order); invite a REX member or regional director at least once a year; hold meetings at
   interesting locations; invite a member to share a learning story; consider evening meetings that roll into a fun
   activity; use a messaging tool (WhatsApp/Slack) to keep the board connected between meetings.
Downloads: Board Meeting Guiding Principles; Chapter Board Officer Handover Document — a sample Guiding Principles and
Statement of Commitment for board members to sign (professionalism, respect and effective governance) plus a handover
document signed by incoming/outgoing officers. Hosting an AGM: content to be added.

MEMBERSHIP OFFICER ROLE AND RESPONSIBILITIES (Section 5). One-year term.
Mission: strategically recruit and build a diversified and engaged membership, creating a stronger YPO global community.
Key goals: develop a membership strategic plan that grows the chapter and stays compliant with YPO policy; identify,
recruit and help integrate quality new members; deliver a fulfilling membership experience, including transitions to
YPO Gold. Qualifying criteria: preferably prior chapter leadership experience, notably learning officer or chapter
chair. Responsibilities: assess chapter needs; collaborate with the diversity and inclusion officer; build a
membership committee; review membership criteria; create a strategic plan; recruit new members; integrate and
transition members. A Membership Officer Roadmap (November appointment, July start, phases through the year with
quarterly collaboration calls hosted by the Regional Membership Officer) mirrors the Chapter Chair roadmap structure.
Source: YPO Champion Catalog 2023.

YPO MEMBERSHIP REQUIREMENTS (Section 5). A prospective member's eligibility is evaluated on the strength and impact of
their achievements and leadership success.
- Age: under 45 years old.
- Who qualifies: top operational leader of the company or division, with final decision-making authority, full P&L
  accountability, hire/fire authority across the company or division, and leadership across core business functions.
- Number of employees: 50 full-time employees, or 15+ full-time employees and minimum $2,750,000 USD annual employee
  compensation.
- Revenue by company type: Sales/Service/Manufacturing $16,000,000+ USD; Financial Institution $330,000,000+ USD AUM;
  Agency $13,000,000+ USD revenue or $27,000,000+ USD enterprise value.
Full requirements are on ypo.org.

ROLE-BASED VERIFICATION FRAMEWORK (Section 5, Membership Resources). Effective 1 July 2026.
What's changing: YPO is moving away from a predetermined list of qualifying titles to a role-based verification
framework. Titles alone don't determine eligibility — it requires demonstrated top operational authority, final
decision-making power and full P&L accountability, for the individual responsible for both strategic leadership and
day-to-day management of a company or qualifying division. The goal is fair, consistent, globally relevant membership
decisions that strengthen peerdom.
Non-qualified titles that may still meet the role (reviewed as title clearances): Executive Director for NGOs; titles
representing the top position in a market, e.g. General Partner, General Manager, Director General.
Qualified titles that may not meet the role: MD/President/Managing Partner reporting to a CEO; Market President
reporting to regional leadership; Chairman of the Board in private equity (representing investors, no day-to-day
authority) or otherwise not involved in day-to-day operations; divisional leaders needing routine approval who aren't
fully responsible for a complete operation.
How validation works: chapters and management partner on initial vetting, the Regional Membership Officer (RMO)
reviews complex cases, and the Peer Review Panel (PRP) Chair confirms final eligibility. Local vetting never replaces
required documentation/verification. An org chart is required when the role involves a comparable executive
title/level, a financial institution or professional-services firm, or division-based qualification; a qualifying
division must show both operational and financial autonomy (its own P&L).
Membership Officer verification checklist: final decision-making authority; full P&L accountability; hire/fire
authority across the org or division; oversight of core functions; public recognition as the top operational leader.
Escalate to the RMO for shared leadership (e.g. Co-CEOs), transitional/phased leadership (e.g. family businesses), or
a qualifying division inside a multinational with centralized/shared/matrixed support functions where the prospect
otherwise clearly meets the authority standard. If true authority is missing, do not escalate — title waivers are
discontinued; eligibility is based on demonstrated authority, not title.
Operational Leadership Confirmation (used during vetting/interview/site visit) checks: (1) Top Operational Authority —
does the candidate hold the highest operational authority, not reporting to another operational leader; (2) Final
Decision-Making Authority — strategy, budgets, major investments, operations without routine approval; (3) Full P&L
Accountability — revenue, cost, budget and financial performance ownership; (4) Hire/Fire Authority — unilateral
authority across the org or division (for professional services/financial institutions, only staff the prospect can
unilaterally hire/fire count, not partners or peer owners).

NEW CHAPTER / INTEGRATED CHAPTER DEVELOPMENT (Section 5, Membership Resources): resources on chapter development,
including a Chapter Development Fast Facts sheet and an Integrated Chapters & New Chapter Creation FAQ. Source:
YPO Chapter Development Fast Facts and Chapter Development Updates FAQ, April 2025.

MEMBER PREBOARDING TOOLKIT (Section 5, Membership Resources). "Strengthening peerdom in the prospect journey."
Preboarding is a new, mandatory step in the YPO application process, launching 1 July 2025 and approved by the Global
Board of Directors — it prepares prospective members before they officially join, so they feel welcomed and ready to
engage. Preboarding goals: Protect Peerdom (ensure every new member who joins is a peer); Set the Stage for Success
(align prospects with YPO's community standards, culture and expectations before they join). Resources: FAQ, Talking
Points, Overview Presentation and video. Source: YPO Preboarding Toolkit, May 2025.

MEMBER ENGAGEMENT OFFICER ROLE AND RESPONSIBILITIES (Section 6). One-year term.
Mission: be an active resource to members, helping them identify and engage with YPO in ways that enhance their
experience; partner with fellow officers to educate, connect and engage members. Key goals: connect members to YPO's
products and services; integrate new members and keep them informed on core products; YPO Gold MEOs engage tenured
members with products relevant as their journey continues to Gold. Qualifying criteria: an experienced-member role
that should succeed the chapter chair position. Responsibilities: know your members; understand products and
services; onboard new members; identify at-risk members and re-engage them; ensure network sign-up; encourage Connect
profile updates. A Member Engagement Officer Roadmap follows the same November-appointment/July-start structure with
quarterly collaboration calls. Source: YPO Champion Catalog 2024.

NEW MEMBER ONBOARDING (Section 6, Member Engagement Resources): onboarding resources include a sample New Member
Questionnaire (to better understand new members and support new-member announcements), a sample New Member Welcome
Email, a sample Membership Pledge (aligns new members with chapter expectations), and an Onboarding Process for
Officers outline.

APEIRON (Section 6, Member Engagement Resources): YPO's immersive onboarding experience for new members,
spouses/partners and tenured members who want to re-engage. YPO Apeiron (uh-PEER-on) is the jumping-off point for a
YPO journey — resources, relationships, information, inspiration and a grounding in YPO's core values and principles,
plus a forum experience, peer connections and exposure to ideas beyond the chapter. Runs as in-person events in cities
across the region and world (e.g. Nairobi, Vancouver, Jakarta, Pittsburgh, Istanbul, New York City, Dallas-Fort Worth,
San Diego) and as recurring virtual sessions for the Americas and EMEA/APAC time zones. Register via the Apeiron
event link; assets include Fast Facts, the Apeiron Hub for new members, an information toolkit, FAQ and branding.

OTHER MEMBER ENGAGEMENT RESOURCES (Section 6): Member Engagement Toolkit (resources and best practices for MEOs);
Sample Pledge (adapted from YPO Emirates Integrated, covering forum training, event attendance, dues and chapter
courtesy); YPO Engagement Score Dashboard — a Tableau-backed score (0–100) across six categories (Champion, Event,
Peer-to-Peer, Content, Chapter and Network Engagement) placing members into Highly Engaged, Engaged, Somewhat Engaged
or Passive/Not Engaged tiers; Executive Education — Only-in-YPO programs with world-class universities, powered by
forum principles, for members, spouses/partners and YNG.

FORUM OFFICER ROLE AND RESPONSIBILITIES (Section 7). One- or two-year term.
Mission: ensure chapter forum programming is beneficial, participation is high, sharing is meaningful and forum
protocol is followed. Key goals: ensure ExCo supports forum's central role; ensure a certified forum facilitator (CFF)
properly trains all forum participants; ensure fair, timely forum placement for members and spouses/partners; ensure a
trained, competent successor. Qualifying criteria: completed Forum Basics/Fundamentals and Forum Moderator
Foundations/FMLD training, and be a member of a forum. Responsibilities: develop your program (assess forum health,
build your team, set goals, update the chapter forum database); secure financial support; develop forum policy;
promote forum education; ensure moderator effectiveness; place members fairly and quickly. A Forum Officer Roadmap
follows the standard November/July officer-year structure. Source: YPO Champion Catalog 2024.

TYPES OF YPO FORUMS (Section 7, Forum Resources): Chapter-Based Member Forums (small groups of 8–12 members from the
same chapter, also open to spouses/partners and young adult children 18–32; the forum officer is a new member's
primary resource for orientation, education and placement, typically first-come, first-served); Spouse/Partner Forums
(open to spouses/partners of current members, an antidote to isolation); Couples Forums (chapter-based, especially
popular in YPO Gold with multi-day meetings); Network Forums (structured like regional forums, shared professional or
personal interest via network membership); Regional Forums (culturally diverse, wider network, same protocol but
greater time commitment due to travel); YPO NextGen Forums (for adult children ages 18–32, ~700 participants across
80+ forums, one 4-hour monthly meeting plus Forum Fundamentals training required — contact yng@ypo.org); Virtual
Forums (for members who live far apart, using calls/web/video conferencing with a peer-elected moderator). The Four
Core Forum Success Principles are Confidentiality, Commitment, Forum Protocol and Meeting Structure (alongside
Membership, Leadership, Renewal, and Shared vision/purpose/values).
A sample Forum By-Laws document is downloadable for forums to amend to their own needs.

OTHER FORUM RESOURCES (Section 7): Find a CFF (Certified Forum Facilitator Directory); Forum Hub (destination for
network/regional forum opportunities and chapter forum info); Virtual Forum Training (Forum Basics and Forum
Moderator training, virtual); Forum Officer/Spouse Forum Officer/Forum Moderator Toolkit; Forum Toolkit (exercises,
icebreakers, update forms); Forum Health Survey (10-question forum health assessment). Regional Training and Regional
Funding: content to be added.

E-CODE — A FRAMEWORK FOR DELIVERING ONLY-IN-YPO LEARNING EXPERIENCES (Section 8). Five pillars: Engage Peers (safe
haven for open idea exchange, peer-to-peer interaction); Compelling Content (impactful content, clear takeaways,
diverse perspectives); Open Minds (thought leadership, whole-person engagement); Deliver Value (know the audience,
reflect well on YPO's brand, respect cultural differences); Extraordinary Resources (remarkable, relevant expertise,
varied delivery methods). Learning boundaries (protecting YPO's Safe Haven): be transparent (fact-based, no
harm/violence/illegal/reputation-damaging content); require opt-in/opt-out; focus on explanation, learning and
relationships, not solicitation; encourage member-to-member idea exchange; let members draw their own conclusions;
prioritize idea exchange and diversity of perspectives (views expressed are individuals', not YPO's); the Global
Conduct Committee may review and sanction violators — report abuses to the event champion or management associate.

CHAPTER LEARNING OFFICER ROLE AND RESPONSIBILITIES (Section 8). One-year term.
Mission: deliver a program that encourages lifelong learning and helps members, spouses/partners and families grow
and transform. Responsibilities: execute a value-driven learning program (logistics, marketing, budget, day chair
selection/training); use E-CODE and YPO tools; collaborate regionally and with networks; share lessons learned;
evaluate events. Qualifying criteria: passion and time, interest in creating memorable impact, preferably prior
experience as day chair, family officer or assistant learning officer. Time commitment: widely considered the most
time-consuming chapter role — plans and executes the full 10-month learning calendar, works with a learning
sub-committee, and may attend up to ~30 events a year. A Chapter Learning Officer Roadmap follows the standard
officer-year structure with quarterly collaboration calls hosted by the Regional Learning Officer.

OTHER LEARNING RESOURCES (Section 8): Day Chair Toolkit (materials to run a Day Chair Workshop at chapter or regional
level); Global Events Calendar — flagship events include GBS Istanbul (3–5 Nov 2026, members only, nonsolicitation
policy lifted so members can pitch/partner/transact freely), GLC Bangkok (15–16 March 2027), GLC San Diego (3–4 May
2027), EDGE San Diego (4–6 May 2027, members and spouses/partners), and GBS Singapore (2–4 Nov 2027); Learning Hub
(Speaker Directory, Event in a Box, The Source, Champion Resources); Strategic Learning Partnerships (world-class
organizations for chapter/region/network programming); 2025 Global Learning Survey Topline Results (5,400+ responses
on members' and spouses/partners' learning needs); Speaker Directory (searchable by name, keyword or filters).
Regional Initiatives: content to be added.

CHAPTER SPOUSE/PARTNER OFFICER ROLE AND RESPONSIBILITIES (Section 9). One-year term.
Mission: oversee the needs and interests of the spouse/partner audience, advocating for a diversified program that
deepens personal and virtual connections through the spouse/partner community, and ensuring programs deliver
take-home value. Key goals: be an effective ambassador for the spouses/partners program; promote family networks and
the Spouse/Partner Community; encourage YPO Connect profile completion; co-create programs; support member
integration and retention using the spouse/partner integration guide. Preferred criteria: open only to
spouses/partners, passionate about and engaged in YPO. Responsibilities: assess your chapter; design your program;
market your program; plan events; enhance the experience with E-CODE and forum code; promote community events.
Source: YPO Champion Catalog, 2023.

SPOUSE/PARTNER BENEFITS AND COMMUNITY (Section 9): spouses/partners can access networks, forums, events and learning
— joining most Personal Networks and all Social Impact and Family Networks (25+ networks). Family Networks include
the Spouse/Partner Community, Spouse/Partner Business Subnetwork, Male Spouse/Partner Subnetwork and Parenting
Community. The Powered By You Mentoring program matches spouses/partners globally as mentor/mentee on topics like
Leadership Development, Career and Work, Family and Personal Development, Legacy and Philanthropy, Personal
Investing, Innovation/Entrepreneurship, and Sales and Business Development. Featured forums include the
Spouse/Partner Business Forum, Regional and International Spouse/Partner Forums, Male Spouse/Partner Forum, and
Spouse/Partner Family Business Forum. The Male Spouse/Partner Subnetwork supports male spouses/partners with
learning, peer networking and virtual/in-person events. The Spouse/Partner Business Subnetwork has 1,300+ members and
runs two Executive Education Programs a year at Harvard Business School and London Business School. Explore The
Source (curated thought-leadership library), M2Mx, and Strategic Alliance Partners (50+ organizations, plus
GetAbstract business-publication summaries). Spouses/partners can connect via the YSP Social Media channel and
WhatsApp Community.

YNG RESOURCES (Section 10) — Young Next Generation, MENA & North Asia. Eligibility: ages 18–30, with an automatic age
waiver up to 32. Annual dues: $395 USD; no family discount. YNGers can access global events, leadership roles and
networking opportunities beyond chapter participation. The FY26–27 YNG MENA Board includes a Chair, Vice Chair, Forum
Officer, Membership Officer, Engagement Officer (and Assistant), Learning Officer, Assistant Learning and Impact
Officer, Finance Officer, Mentorship Officer (and Assistant), Board Advisors, and a YNG Virtual Manager for MENA &
North Asia. Get involved via the YNG Community, the YNG Group on Connect, or enroll a child at yponextgen.org/enroll;
questions to yng@ypo.org.

GLOBAL AWARDS RESOURCES (Section 13): recognition is about celebrating others in the moment. The YPO Awards toolkit
offers ideas and resources for meaningful peer-to-peer spotlight opportunities, boosting engagement and cultivating a
culture of gratitude across the chapter, member and family community.

WELCOME NOTE (Section 0, Introduction): the United MENA Playbook is a practical resource supporting every YPO MENA
Chapter Chair, Chapter Manager, Officer and Regional Executive throughout the year, covering Chapter Commitments, New
Member Onboarding, Governance, Portfolio Leadership and operational guidance in one place. It is a living resource
that continues to evolve, reflecting the region's belief in learning from one another. Signed by Moodi Bukhari
(Regional Chair) and Elias Chabtini (Regional Chair, Gold).

GOVERNANCE DOCUMENTS (Section 3): The YPO Policies and Procedures Manual (P&P) and the YPO Operations Manual set
the standards that apply to every chapter; chapter by-laws sit alongside them, tailored to the country of legal
incorporation and reviewed with a locally licensed attorney. The playbook links to the P&P and governance documents
on YPO Connect, and to a downloadable sample chapter by-laws PDF.

SUCCESSION PLANNING (Section 3): Succession planning identifies the next chair, and the chair after that, early —
so leaders arrive prepared, officers have time to train, relationships carry across transitions and chapter strategy
survives a change at the top. It also widens the leadership pool by surfacing quieter champions and giving members a
visible path into service. Chapters are expected to have a succession plan in place by 1 November. The playbook links
to a downloadable Succession Planning Worksheet (maps the leadership ladder three years ahead) and to the Champion
Catalog, an overview of champion positions available across YPO at chapter, regional, global and network level.

STRATEGIC PLANNING / GAME PLAN (Section 3, its own sub-section). Game Plan is simple, memorable, strategic,
engaging and measurable. The methodology was developed in and by the EMEA super-region so every incoming board could
prepare for their year in leadership and governance. Since inception, 140+ sessions have run for chapters, networks and
REX; 38 chapters have repeated sessions and their Chapter Health score rose 13.5% between first and last session; the
average session rating is 4.61 out of 5.
Vision: to elevate the YPO experience for every member, spouse/partner and family in the world. Mission: to empower
boards through strategic planning sessions, helping them prepare and deliver only-in-YPO value.
Session facilitation: sessions are facilitated by certified Game Plan Coaches, who are YPO members with chapter and
regional board experience. Coaches provide facilitation at no charge as their way of giving back; the only cost is the
coach's travel to the meeting location.
Modules: deep dives into specific topics or issues a chapter needs to address, recommended by the coach based on the
chapter's major challenges. Examples: Vision, Values, Learning, Forum, Membership, Member Engagement, Spouse
Engagement, Governance.
Outcomes: alignment on deliverables using data as the foundation; clear comprehension and application of best practices
in how officer roles interconnect; development of SMART goals creating accountability for officers and membership.
Formats: sessions run in 50-minute sprints with 10-minute breaks. 4 hours — one session (a four-hour virtual session is
only for repeat sessions); outcome: Chapter Playbook including SMART goals. 6 hours — two 3-hour sessions on different,
ideally consecutive days for virtual, or one day physical; outcome: Chapter Playbook, SMART goals, and a deep dive into
one module. 8 hours — two 4-hour sessions on different, ideally consecutive days for virtual, or one day physical;
outcome: Chapter Playbook, SMART goals, a deep dive into one module, and completion of the chapter's vision and values.
The playbook links to a "Request your Game Plan" form and a Game Plan video.

CHAPTER SUPPORT PROGRAM (CSP) (Section 3, within Working with your Chapter Manager). The CSP connects chapters with
trained virtual chapter managers (VCMs) who provide short- or long-term operational support to select chapters facing
time-sensitive needs. It ensures continuity, stability and a consistent member experience for chapters in transition
(until a permanent chapter manager is recruited and trained) or assists new chapters during development.
New chapter development support: a VCM provides hands-on operational support during the start-up phase — opening bank
accounts and setting up financial processes and documentation; establishing basic governance, reporting and admin
processes; onboarding and training chapter officers; managing early events and meetings during launch; supporting
recruitment, training and a smooth handover to a permanent chapter manager.
Existing chapter support: VCMs can step in quickly with customized support — covering maternity leave or other planned
absences; bridging gaps after a chapter manager's departure; providing extra capacity during transitions or busy
periods; supporting recruitment, training and handover to a new chapter manager.
How to request support: (1) the chapter submits a support application online or by email to chaptersupportprogram@ypo.org;
(2) chapters are matched with a VCM based on availability, or given a shortlist of VCM profiles; (3) an interview call is
arranged with the VCM candidate(s); (4) after selection, the chapter contracts directly with the VCM, referring to the
sample CM contract. Questions go to chaptersupportprogram@ypo.org.

BUDGET AND FINANCE (Section 3). Setting a chapter budget for a new fiscal year is difficult because it is hard to know
how much to spend in each category. The purpose of a budget is to guide spending for the fiscal year and ensure focus
across all portfolio buckets to maintain a healthy chapter. Available funds depend on renewals and prior-year revenue;
expenses vary by chapter, costs depend on membership size, and costs also depend on the location of events and resources.
Recommended percentage ranges (guidance, not a fixed split — they overlap and are not meant to total 100%):
- Education / Learning: 35%-60%. Have a world-class learning program that helps members learn, connect and grow.
- Family: 10%-15%. Family funding contributes to chapter engagement and stickiness, making a healthier chapter.
- Spouse / Partners: 10%-15%. Inclusiveness makes YPO real for spouses/partners and kids, who receive value themselves.
- Forum: 5%-10%. Forum participation varies; budget based on the chapter's forum goals.
- Membership: 4%-6%. Supports prospective member recruitment events, candidate meetings and referral bonus campaigns.
- Administrative / Employee: 15%-20%. Chapter administrator funding is key to chapter success; CAs range from part-time
  to full-time. Investing in your CA benefits the chapter.
- Operative: 3%-5%. Marketing, postage, bank fees, office, internet and phone.
- Legal / Professional Fees: 3%-5%. Yearly training for officers and chapter administrators; send at least one officer
  to the GLC and CLW; the CA must attend the Chapter Administrator Workshop (CAW) every two years; because the chapter is
  its own legal entity, budget for tax preparation.
A downloadable Chapter Budget Template is available in the playbook.

STRATEGIC PARTNERSHIPS FOR CHAPTERS (Section 3). Chapter strategic alliance partners add value by enhancing the chapter
budget and providing learning content and other resources. Best practices:
- Value: think beyond cash — how can the partner provide member value through learning content, resources, venues and
  experiences?
- Connect: touch base regularly to check expectations are being met by both sides and address emerging issues.
- Opportunities: create meaningful opportunities for the partner to meet chapter members. You cannot guarantee new
  customers, but you can position them with opportunities.
- Agreement: work with legal counsel to create a written agreement defining what is expected by both sides.
- Privacy: never share member contact information with a strategic partner, for any reason.
- Code of Conduct: ensure the partner adheres to YPO's Code of Conduct for non-solicitation and confidentiality.
A Sample Chapter Strategic Partnerships Agreement is downloadable from the playbook.

CHAPTER CONDUCT COMMITTEE / OFF-BOARDING (Section 3): YPO policies provide clear guidelines for addressing inappropriate
member conduct so the safe haven of trust is protected for every member. A standing Chapter Conduct Committee gives a
chapter a fair, consistent process to review conduct issues, vet champions, and mitigate risk and liability, rather
than improvising under pressure. Having the committee in place before an issue arises protects the members involved,
the chapter's leadership and the culture. Chapter chairs are strongly encouraged to lead their members through
implementing the recommended steps. The toolkit PDF is downloadable from the playbook.

Off-boarding: the Conduct Committee Toolkit provides guidelines on off-boarding members from a chapter.
The process: (1) Identification — concern identified and documented by the Chapter Manager in consultation with the
Chapter Chair (CC) and/or Chapter Membership Officer (CMO). (2) Chapter Conduct Committee (CCC) review — concern
reviewed against YPO standards, chapter expectations and relevant facts; documentation and context assessed.
(3) Decision point, resolved at CCC level — recommendation agreed upon and documented. (4) Not resolved / complex case
— escalated to the Global Conduct Committee (GCC) for further review and guidance. (5) Closure and documentation —
outcome documented, appropriate records maintained for transparency and consistency.

OFFICER TRAINING (Section 3): Global Leadership Conference (GLC) dates for FY26-27 are GLC Bangkok, Thailand,
15-17 March 2027, and GLC San Diego, USA, 3-5 May 2027. Registration opens in Q2. Virtual sessions will be announced
closer to the time.

WORKING WITH YOUR CHAPTER MANAGER (Section 3): The Chapter Manager (CM) partnership with the chapter executive
committee is crucial to the chapter's success. CMs serve as the chapter operations manager, wearing many hats,
executing daily operations and providing direct support for chapter officers, members and spouse/partners.
Best practices: Give direction — before the chair year begins, discuss chapter priorities and the strategic plan with
your CM, give clear direction on time allocation, and reprioritize together as new projects arise. Set member
expectations — tell officers and members what to expect from the CM, and ensure the CM is not used for non-YPO
requests better handled by a personal assistant. Be connected — meet weekly or bi-weekly, include the CM in ExCo
calls and discussions, and resolve issues before they escalate. Tap their knowledge — CMs hold institutional
knowledge and help identify strategic priorities. Safe haven — in line with the YPO Code of Conduct, provide trust,
respect and confidentiality for your CM. Provide feedback — critical to their development; conduct an annual review
in May or June as the chair year closes. Encourage training — workshops, webinars and ad hoc training keep the CM
current. Contract review — review the CM contract or employment agreement annually in June.
Additional CM resources available in the playbook: Insights on the CM role, CM timeline, CM contract template, and two
CM assessment options.

CONDUCT COMMITTEE (Section 3, Chapter Chair Resources): guiding principle "if it can be solved at the chapter level, solve it."Establish a Chapter Conduct Committee (CCC) annually (recommended five members: current chair, past chair,
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

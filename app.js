const occupations = [
  {name:"Customer Service Representatives",sector:"Business services",exposure:88,outlook:-5,edge:"Empathy & escalation",employment:2.9,summary:"Routine requests are increasingly handled by AI agents. Human work is concentrating around exceptions, retention, relationship repair, and AI quality control.",skills:["Conflict resolution","AI supervision","Knowledge design"],shift:"Fewer repetitive interactions; more complex case ownership and workflow tuning."},
  {name:"Software Developers",sector:"Technology",exposure:86,outlook:17,edge:"System judgment",employment:1.9,summary:"Code generation accelerates implementation, but demand remains strong for people who can frame problems, integrate systems, verify output, and own reliability.",skills:["Architecture","Evaluation","Security"],shift:"Less time drafting boilerplate; more time reviewing, integrating, and specifying behavior."},
  {name:"Paralegals & Legal Assistants",sector:"Legal",exposure:82,outlook:1,edge:"Risk & context",employment:.38,summary:"Search, summarization, and first-pass document review are highly exposed. Case strategy, privileged context, and accountable verification remain human-heavy.",skills:["Citation checking","Case context","Client judgment"],shift:"Document throughput rises while verification and exception review become central."},
  {name:"Bookkeeping Clerks",sector:"Finance",exposure:79,outlook:-5,edge:"Exception review",employment:1.7,summary:"Transaction coding and reconciliation are becoming easier to automate. Complex exceptions, controls, and stakeholder communication are more resilient.",skills:["Controls","Audit readiness","Exception handling"],shift:"Routine entry declines; oversight and financial operations coordination expand."},
  {name:"Financial Analysts",sector:"Finance",exposure:76,outlook:9,edge:"Decision framing",employment:.38,summary:"AI can draft models and commentary, shifting analyst value toward scenario design, data governance, and clear recommendations under uncertainty.",skills:["Scenario modeling","Data governance","Narrative"],shift:"Faster analysis cycles increase the premium on assumptions and executive communication."},
  {name:"Market Research Analysts",sector:"Marketing",exposure:74,outlook:8,edge:"Interpretation",employment:.9,summary:"AI compresses desk research and synthesis while expanding the volume of testable ideas. Research design and customer interpretation remain differentiators.",skills:["Research design","Experimentation","Synthesis"],shift:"Less manual synthesis; more rapid experimentation and validation."},
  {name:"Registered Nurses",sector:"Healthcare",exposure:43,outlook:6,edge:"Care & accountability",employment:3.3,summary:"Documentation and decision support are exposed, while hands-on care, accountability, and patient trust make the core role difficult to substitute.",skills:["Clinical judgment","Patient care","Care coordination"],shift:"Ambient documentation may return time to care while adding new oversight duties."},
  {name:"Teachers, Secondary School",sector:"Education",exposure:51,outlook:1,edge:"Motivation & care",employment:1.1,summary:"Planning, feedback drafts, and administrative tasks can be augmented. Classroom management, motivation, and social development remain deeply interpersonal.",skills:["Facilitation","Assessment","AI literacy"],shift:"Content preparation speeds up; coaching and source verification grow in importance."},
  {name:"Logisticians",sector:"Logistics",exposure:55,outlook:19,edge:"Operational response",employment:.25,summary:"Forecasting and route planning are increasingly AI-assisted, but disruptions and cross-party coordination keep experienced operators in the loop.",skills:["Exception response","Systems thinking","Vendor coordination"],shift:"Planning becomes more predictive; disruption management becomes more valuable."},
  {name:"Electricians",sector:"Skilled trades",exposure:18,outlook:11,edge:"Physical dexterity",employment:.78,summary:"Physical installation and repair remain lightly exposed. AI may improve diagnostics and scheduling while electrification supports continued labor demand.",skills:["Diagnostics","Controls","Safety"],shift:"Digital diagnostic support grows without removing hands-on field work."},
  {name:"Home Health & Personal Care Aides",sector:"Healthcare",exposure:12,outlook:21,edge:"Human presence",employment:4.0,summary:"Care takes place in changing physical environments and depends on trust, observation, and presence. Scheduling and reporting may be augmented.",skills:["Observation","Personal care","Communication"],shift:"Administrative work may shrink while direct care demand grows with demographics."},
  {name:"Construction Laborers",sector:"Skilled trades",exposure:16,outlook:7,edge:"Adaptive physical work",employment:1.6,summary:"Unstructured sites and varied physical tasks limit near-term AI substitution. Planning, estimating, and safety monitoring are more exposed than field execution.",skills:["Site safety","Equipment use","Coordination"],shift:"Digital planning improves while physical execution remains human-led."}
];

const programs = {
  business:{name:"Business & Management",score:86,approach:"Embedded across the major",focus:"decision-making and accountable automation",courses:[
    ["AI-Supported Business Decisions","Use AI to research, model scenarios, and communicate recommendations while documenting assumptions.","Required core","high"],
    ["Workflow Automation Lab","Redesign a real business process with human review, controls, and measurable outcomes.","2-credit practicum","high"],
    ["Data Storytelling & Governance","Build decision-ready dashboards and evaluate data quality, privacy, and provenance.","Existing course module","medium"],
    ["Human Leadership in Automated Teams","Practice delegation, conflict resolution, change management, and responsible adoption.","Senior seminar","medium"]],coverage:[88,84,82,78,90]},
  education:{name:"Education",score:88,approach:"Practice-based faculty sequence",focus:"learning design and student agency",courses:[
    ["AI-Enhanced Learning Design","Design instruction that uses AI to support learning without outsourcing student thinking.","Required methods course","high"],
    ["Assessment in the Age of AI","Create authentic assessments, oral defenses, process evidence, and equitable AI policies.","Required methods module","high"],
    ["Learning Analytics & Privacy","Interpret student data while protecting privacy and avoiding automated high-stakes decisions.","3-credit course","medium"],
    ["AI Tools for Educator Workflows","Evaluate tools for planning, differentiation, accessibility, and administrative tasks.","Clinical lab","medium"]],coverage:[91,94,75,95,92]},
  healthcare:{name:"Healthcare & Nursing",score:90,approach:"Clinical integration model",focus:"clinical judgment and safe AI use",courses:[
    ["Clinical AI Literacy","Interpret AI-supported recommendations, confidence, limitations, and escalation requirements.","Required clinical core","high"],
    ["Health Data, Privacy & Governance","Apply consent, security, documentation, and bias safeguards to health information.","Existing course module","high"],
    ["Human-Centered Care with AI","Preserve patient trust, empathy, and shared decision-making in augmented workflows.","Simulation lab","high"],
    ["Digital Quality & Safety","Audit AI-assisted documentation and identify workflow risks or unsafe automation.","Senior practicum","medium"]],coverage:[78,96,82,98,94]},
  computing:{name:"Computer Science & IT",score:92,approach:"Technical spine plus capstone",focus:"reliable and responsible AI systems",courses:[
    ["AI Systems Engineering","Build evaluated AI applications using retrieval, tool use, monitoring, and human fallback.","Required technical core","high"],
    ["Model Evaluation & Reliability","Test accuracy, robustness, bias, security, cost, and failure behavior.","Required lab","high"],
    ["Secure AI Development","Address prompt injection, data leakage, access control, and software supply-chain risk.","Cybersecurity module","high"],
    ["Responsible Deployment Studio","Ship a documented system with stakeholder research and post-launch monitoring.","Capstone","medium"]],coverage:[98,95,96,93,80]},
  communications:{name:"Communications & Media",score:84,approach:"Studio-based integration",focus:"editorial judgment and audience trust",courses:[
    ["Synthetic Media Literacy","Identify manipulated media, verify provenance, and communicate uncertainty.","Required core","high"],
    ["AI-Assisted Content Studio","Use AI for ideation and production while preserving voice, accuracy, and rights.","Production lab","high"],
    ["Audience Research & Experimentation","Combine qualitative insight, analytics, and responsible personalization.","Existing course module","medium"],
    ["Editorial Verification","Build fact-checking, source evaluation, disclosure, and correction workflows.","Senior seminar","high"]],coverage:[86,96,72,91,90]},
  humanities:{name:"Humanities",score:82,approach:"Human inquiry across courses",focus:"interpretation, ethics, and original inquiry",courses:[
    ["AI, Culture & Human Agency","Examine how AI shapes knowledge, culture, power, authorship, and citizenship.","General education core","high"],
    ["Digital Research Methods","Use computational tools while evaluating sources, archives, and representational bias.","Methods course","high"],
    ["Public-Facing Interpretation","Translate complex ideas into credible writing, exhibits, or digital experiences.","Studio elective","medium"],
    ["Original Inquiry Capstone","Defend a sustained human argument with transparent documentation of any AI use.","Capstone","high"]],coverage:[76,97,68,94,96]},
  trades:{name:"Skilled Trades & Technical",score:85,approach:"Hands-on technical integration",focus:"diagnostics, safety, and smart systems",courses:[
    ["AI-Assisted Diagnostics","Use digital diagnostic tools while independently validating faults and repairs.","Required shop module","high"],
    ["Smart Equipment & Controls","Work with sensors, connected systems, automation controls, and maintenance data.","Technical course","high"],
    ["Automation Safety & Cyber Awareness","Recognize physical, data, and network risks in connected equipment.","Safety certification","high"],
    ["Customer Communication & Estimating","Use AI to support estimates and documentation while retaining professional judgment.","Apprenticeship module","medium"]],coverage:[68,88,74,92,84]},
  policy:{name:"Public Policy & Administration",score:89,approach:"Policy lab plus governance core",focus:"algorithmic accountability and public value",courses:[
    ["Algorithmic Accountability","Assess fairness, transparency, due process, accessibility, and public impact.","Required policy core","high"],
    ["AI Procurement & Governance","Write requirements, evaluate vendors, allocate liability, and plan oversight.","Applied policy lab","high"],
    ["Evidence, Data & Public Decisions","Use data and AI analysis without obscuring uncertainty or affected communities.","Methods course","high"],
    ["Technology Policy Simulation","Respond to a live policy scenario through hearings, memos, and stakeholder negotiation.","Capstone","medium"]],coverage:[80,98,88,99,92]}
};

const competencyNames=["AI literacy","Verification & critical thinking","Data literacy","Responsible AI","Human skills"];
const assessmentPatterns=[
  ["Baseline demonstration","Complete a core task without AI to demonstrate independent knowledge and judgment."],
  ["AI-assisted performance","Use approved tools on a more complex task and explain where AI added or reduced value."],
  ["Process evidence","Submit prompts, sources, revisions, decision logs, and an AI-use disclosure."],
  ["Oral defense","Explain choices, validate key claims, and respond to a changed scenario in real time."]
];

const competencySignals=[
  {name:"AI literacy",keywords:["artificial intelligence","generative ai","machine learning","automation","algorithm","prompt","ai tools"]},
  {name:"Verification & critical thinking",keywords:["critical thinking","source evaluation","research","evidence","fact-check","verification","analysis"]},
  {name:"Data literacy",keywords:["data","statistics","analytics","visualization","spreadsheet","database","quantitative"]},
  {name:"Responsible AI",keywords:["ethics","privacy","bias","fairness","copyright","security","governance","accessibility"]},
  {name:"Human skills",keywords:["communication","teamwork","leadership","collaboration","presentation","empathy","client","community"]}
];
const gapSuggestions=[
  "Add an applied AI literacy module with tool selection, prompting, limitations, and human accountability.",
  "Require source verification, evidence comparison, and an oral defense in a core course.",
  "Embed a data interpretation and visualization assignment using authentic program data.",
  "Add privacy, bias, copyright, accessibility, and AI-use disclosure to program outcomes.",
  "Use a team-based client project that assesses communication, judgment, and collaboration."
];
const sampleCatalogs={
  business:"BUS 210 Business Analytics: Spreadsheet modeling, statistics, data visualization, and evidence-based decisions.\nBUS 330 Organizational Leadership: Teamwork, communication, negotiation, and change management.\nBUS 410 Strategic Management: Client research, market analysis, and executive presentations.",
  education:"EDU 220 Learning Sciences: Research-based instructional design and critical analysis of learning evidence.\nEDU 315 Assessment: Design valid assessments and communicate feedback to diverse learners.\nEDU 440 Clinical Practice: Collaborative teaching, accessibility, family communication, and reflective practice.",
  healthcare:"NUR 240 Evidence-Based Practice: Evaluate clinical research, data, and patient outcomes.\nNUR 330 Health Informatics: Electronic records, privacy, security, and clinical data analysis.\nNUR 470 Clinical Leadership: Team communication, patient advocacy, ethics, and care coordination.",
  computing:"CS 250 Data Structures and Algorithms: Design, analyze, and test computational solutions.\nCS 340 Database Systems: Data modeling, security, privacy, and governance.\nCS 480 Software Engineering: Teamwork, client requirements, testing, and technical communication.",
  communications:"COM 220 Media Research: Source evaluation, audience analytics, evidence, and fact-checking.\nCOM 310 Digital Production: Collaborative content production, copyright, and accessibility.\nCOM 430 Campaign Studio: Client strategy, data visualization, presentation, and teamwork.",
  humanities:"HUM 210 Research Methods: Primary sources, evidence, interpretation, and critical analysis.\nHUM 320 Ethics and Society: Fairness, power, privacy, and cultural responsibility.\nHUM 490 Public Humanities: Community collaboration, digital exhibits, and public presentation.",
  trades:"TEC 120 Technical Safety: Equipment safety, documentation, and team communication.\nTEC 240 Digital Controls: Sensors, automation, diagnostics, and system data.\nTEC 390 Field Practicum: Client service, troubleshooting, estimates, and collaborative work.",
  policy:"POL 230 Policy Analysis: Quantitative data, research evidence, and public communication.\nPOL 340 Ethics in Government: Fairness, privacy, accountability, and accessibility.\nPOL 470 Policy Lab: Community collaboration, stakeholder negotiation, and executive presentation."
};

const state={filter:"all",sector:"all",search:"",selected:occupations[0].name,saved:new Set(JSON.parse(localStorage.getItem("workshiftSaved")||"[]")),program:"business",curriculumTab:"courses"};
const rows=document.querySelector("#occupationRows");
const detail=document.querySelector("#roleDetail");
const empty=document.querySelector("#emptyState");
const search=document.querySelector("#roleSearch");
const sector=document.querySelector("#sectorSelect");

const exposureLevel=value=>value>=70?"high":value>=35?"medium":"low";
const exposureColor=value=>value>=70?"var(--red)":value>=35?"var(--yellow)":"var(--green)";
const esc=value=>String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");

function filteredOccupations(){
  const query=state.search.trim().toLowerCase();
  return occupations.filter(item=>{
    const matchesFilter=state.filter==="all"||exposureLevel(item.exposure)===state.filter;
    const matchesSector=state.sector==="all"||item.sector===state.sector;
    const haystack=[item.name,item.sector,item.edge,item.summary,...item.skills].join(" ").toLowerCase();
    return matchesFilter&&matchesSector&&(!query||haystack.includes(query));
  });
}

function renderRows(){
  const items=filteredOccupations();
  rows.innerHTML=items.map(item=>`
    <button class="occupation-row ${item.name===state.selected?"active":""}" type="button" data-role="${esc(item.name)}">
      <span class="role-name"><strong>${esc(item.name)}</strong><small>${esc(item.sector)}</small></span>
      <span class="exposure-cell"><span class="mini-track"><i style="width:${item.exposure}%;background:${exposureColor(item.exposure)}"></i></span><b>${item.exposure}</b></span>
      <span class="outlook ${item.outlook>=0?"positive":"negative"}">${item.outlook>=0?"+":""}${item.outlook}%</span>
      <span class="human-edge">${esc(item.edge)}</span><span class="chevron">›</span>
    </button>`).join("");
  empty.hidden=items.length>0;
  if(items.length&&!items.some(item=>item.name===state.selected)){state.selected=items[0].name;renderRows();renderDetail();}
}

function renderDetail(){
  const item=occupations.find(role=>role.name===state.selected)||occupations[0];
  const saved=state.saved.has(item.name);
  detail.innerHTML=`
    <div class="detail-top"><div><span class="detail-sector">${esc(item.sector)}</span><h3>${esc(item.name)}</h3></div><button class="save-button ${saved?"saved":""}" type="button" aria-label="${saved?"Remove from":"Add to"} comparison" title="Save role">${saved?"★":"☆"}</button></div>
    <p class="detail-summary">${esc(item.summary)}</p>
    <div class="detail-stats"><div><span>Exposure index</span><strong>${item.exposure}/100</strong></div><div><span>US employment</span><strong>${item.employment}M</strong></div></div>
    <div class="detail-block"><h4>Skills gaining value</h4><div class="skill-list">${item.skills.map(skill=>`<span>${esc(skill)}</span>`).join("")}</div></div>
    <div class="detail-block"><h4>Likely task shift</h4><p>${esc(item.shift)}</p></div>`;
  detail.querySelector(".save-button").addEventListener("click",()=>{
    saved?state.saved.delete(item.name):state.saved.add(item.name);
    localStorage.setItem("workshiftSaved",JSON.stringify([...state.saved]));renderDetail();
  });
}

function renderSectors(){
  [...new Set(occupations.map(item=>item.sector))].sort().forEach(value=>sector.insertAdjacentHTML("beforeend",`<option value="${esc(value)}">${esc(value)}</option>`));
}

document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
  state.filter=button.dataset.filter;document.querySelectorAll("[data-filter]").forEach(item=>item.classList.toggle("active",item===button));renderRows();
}));
search.addEventListener("input",event=>{state.search=event.target.value;renderRows();});
sector.addEventListener("change",event=>{state.sector=event.target.value;renderRows();});
rows.addEventListener("click",event=>{const button=event.target.closest("[data-role]");if(!button)return;state.selected=button.dataset.role;renderRows();renderDetail();});

const programSelect=document.querySelector("#programSelect");
const curriculumContent=document.querySelector("#curriculumContent");
function renderProgramOptions(){
  programSelect.innerHTML=Object.entries(programs).map(([key,program])=>`<option value="${key}">${esc(program.name)}</option>`).join("");
}
function analyzerMarkup(){
  return `<div class="gap-analyzer">
    <div class="analyzer-intro"><div><h3>Analyze an existing catalog</h3><p>Paste course titles, descriptions, and learning outcomes. The analyzer looks for explicit evidence of the five readiness competencies.</p></div><span class="analysis-status" id="analysisStatus">Ready to analyze</span></div>
    <div class="catalog-input"><label for="catalogInput">Catalog or program text</label><textarea id="catalogInput" placeholder="Paste course descriptions or learning outcomes here..."></textarea></div>
    <div class="analyzer-actions"><button class="secondary-action" id="loadSample" type="button">Load sample catalog</button><button class="primary-action" id="analyzeCatalog" type="button">Analyze coverage</button></div>
    <div class="gap-results" id="gapResults" hidden></div>
    <p class="analyzer-disclaimer">This transparent keyword model is an initial curriculum-screening tool. Faculty review should confirm whether competencies are taught and assessed in practice.</p>
  </div>`;
}
function analyzeCatalogText(text){
  const normalized=text.toLowerCase();
  const lengthBonus=text.length>500?8:0;
  return competencySignals.map((competency,index)=>{
    const matches=competency.keywords.filter(keyword=>normalized.includes(keyword));
    return {name:competency.name,score:Math.min(100,matches.length*24+lengthBonus),matches,suggestion:gapSuggestions[index]};
  });
}
function bindAnalyzer(){
  const input=document.querySelector("#catalogInput");
  const results=document.querySelector("#gapResults");
  const status=document.querySelector("#analysisStatus");
  document.querySelector("#loadSample").addEventListener("click",()=>{
    input.value=sampleCatalogs[state.program];
    status.textContent="Sample loaded";
    input.focus();
  });
  document.querySelector("#analyzeCatalog").addEventListener("click",()=>{
    const text=input.value.trim();
    if(text.length<40){status.textContent="Add more catalog detail";input.focus();return;}
    const analysis=analyzeCatalogText(text);
    const overall=Math.round(analysis.reduce((sum,item)=>sum+item.score,0)/analysis.length);
    const gapCount=analysis.filter(item=>item.score<60).length;
    const summary=gapCount===0?"Strong documented coverage":gapCount<=2?"Targeted updates recommended":"Foundational updates recommended";
    results.hidden=false;
    results.innerHTML=`<div class="analysis-overview"><div class="coverage-score"><span>Documented coverage</span><strong>${overall}%</strong></div><div class="coverage-summary"><span>Program signal</span><strong>${summary}</strong><p>${gapCount?`${gapCount} of 5 competency areas need clearer curriculum evidence.`:"All five areas appear in the supplied text; confirm depth through assessment review."}</p></div></div><div class="gap-list">${analysis.map(item=>`<div class="gap-row"><strong>${esc(item.name)}</strong><span class="coverage-badge ${item.score>=60?"covered":""}">${item.score>=60?"Covered":"Gap"} · ${item.score}%</span><p>${item.score>=60?`Evidence found: ${esc(item.matches.slice(0,3).join(", "))}. Validate with a scored assignment.`:esc(item.suggestion)}</p></div>`).join("")}</div>`;
    status.textContent="Analysis complete";
  });
}
function renderCurriculum(){
  const program=programs[state.program];
  document.querySelector("#programApproach").textContent=program.approach;
  document.querySelector("#readinessValue").textContent=program.score;
  document.querySelector("#readinessRing").style.strokeDashoffset=106.8*(1-program.score/100);
  document.querySelector("#implementationTitle").textContent=`Build ${program.focus}`;
  document.querySelector("#implementationSteps").innerHTML=[
    `Map where ${program.focus} already appears in the program.`,
    "Select two courses for a faculty-led pilot and define measurable learning outcomes.",
    "Create shared AI-use, disclosure, privacy, and assessment guidelines.",
    "Validate the proposed skills with students, alumni, and an employer advisory group."
  ].map(step=>`<li>${esc(step)}</li>`).join("");

  if(state.curriculumTab==="courses"){
    curriculumContent.innerHTML=program.courses.map((course,index)=>`
      <article class="module-row"><span class="module-number">0${index+1}</span><div class="module-copy"><h3>${esc(course[0])}</h3><p>${esc(course[1])}</p><small>${esc(course[2])}</small></div><span class="priority-tag ${course[3]}">${course[3]} priority</span></article>`).join("");
  }else if(state.curriculumTab==="skills"){
    curriculumContent.innerHTML=`<div class="skill-matrix">${competencyNames.map((name,index)=>`<div class="skill-row"><strong>${esc(name)}</strong><span class="skill-bar"><i style="width:${program.coverage[index]}%"></i></span><span>${program.coverage[index]}% target</span></div>`).join("")}</div>`;
  }else if(state.curriculumTab==="assessment"){
    curriculumContent.innerHTML=`<div class="assessment-list">${assessmentPatterns.map(item=>`<article class="assessment-item"><strong>${esc(item[0])}</strong><p>${esc(item[1])}</p></article>`).join("")}</div>`;
  }else{
    curriculumContent.innerHTML=analyzerMarkup();
    bindAnalyzer();
  }
}
programSelect.addEventListener("change",event=>{state.program=event.target.value;renderCurriculum();});
document.querySelectorAll("[data-curriculum-tab]").forEach(button=>button.addEventListener("click",()=>{
  state.curriculumTab=button.dataset.curriculumTab;
  document.querySelectorAll("[data-curriculum-tab]").forEach(item=>item.classList.toggle("active",item===button));
  renderCurriculum();
}));

const adoption=document.querySelector("#adoption");
const augmentation=document.querySelector("#augmentation");
const reinvestment=document.querySelector("#reinvestment");
const fmt=value=>`${value<0?"−":"+"}${Math.abs(value).toFixed(1)}M`;
function updateScenario(){
  const a=Number(adoption.value)/100,u=Number(augmentation.value)/100,r=Number(reinvestment.value)/100;
  document.querySelector("#adoptionOut").value=`${adoption.value}%`;
  document.querySelector("#augmentOut").value=`${augmentation.value}%`;
  document.querySelector("#reinvestOut").value=`${reinvestment.value}%`;
  const touched=155*a*.55;
  const hours=touched*2000*(.075+.13*a)/1000;
  const displacement=touched*(1-u)*.19;
  const creation=touched*u*r*.105;
  const net=creation-displacement;
  document.querySelector("#touchedResult").textContent=`${touched.toFixed(1)}M`;
  document.querySelector("#hoursResult").textContent=`${hours.toFixed(1)}B`;
  document.querySelector("#jobsResult").textContent=fmt(net);
  document.querySelector("#jobsCaption").textContent=net>=0?"more creation than displacement":"more displacement than creation";
  const max=Math.max(displacement,creation,1);
  document.querySelector("#displacementBar").style.width=`${(displacement/max)*90}%`;
  document.querySelector("#creationBar").style.width=`${(creation/max)*90}%`;
  const posture=net>.5?"expansionary":net<-.5?"displacement-heavy":"near-balanced";
  document.querySelector("#scenarioNarrative").textContent=`This ${posture} scenario redirects ${Math.round(u*100)}% of affected tasks toward augmentation. Outcomes are most sensitive to whether productivity gains create new demand.`;
}
[adoption,augmentation,reinvestment].forEach(input=>input.addEventListener("input",updateScenario));

document.querySelector("#themeToggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("workshiftTheme",document.body.classList.contains("dark")?"dark":"light");});
if(localStorage.getItem("workshiftTheme")==="dark")document.body.classList.add("dark");
const sections=[...document.querySelectorAll("main section[id],header[id]")];
const navLinks=[...document.querySelectorAll(".sidebar nav a")];
new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${visible.target.id}`));},{rootMargin:"-20% 0px -65%",threshold:[0,.2,.5]}).observe(sections[0]);
sections.slice(1).forEach(section=>new IntersectionObserver(entries=>{if(entries[0].isIntersecting)navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${section.id}`));},{rootMargin:"-20% 0px -65%",threshold:.1}).observe(section));

renderSectors();renderRows();renderDetail();renderProgramOptions();renderCurriculum();updateScenario();

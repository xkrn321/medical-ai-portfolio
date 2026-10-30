const projects = [
  {id:"researchos",title:"ResearchOS Alpha｜生命科学智能科研工作流",short:"ResearchOS Alpha",category:"科研系统",group:"research",stage:"持续在研",art:"evidence",summary:"我和团队用 Codex 搭建生命科学科研工作流原型，把研究任务、文献证据、进度和研究记录放到一个可继续编辑的工作区里。",role:"我参与产品流程和前端原型，拆解研究角色、Research Run、证据链、候选比较、研究画布和研究记忆等模块。",skills:["AI科研工作流设计","任务拆分","来源可追溯","Codex协同开发"],outputs:["研究任务与 Research Run 原型","文献证据链和候选比较","研究画布与记录模块"],steps:[{title:"拆分研究任务",text:"我先把研究问题拆成角色、任务和阶段，明确每一步需要留下什么记录。",art:"evidence"},{title:"整理文献和候选",text:"我把来源、证据位置和候选关系放进同一条工作流程，方便回来查看。",art:"metabolomics"},{title:"保存研究进度",text:"我把任务状态、画布和研究记录整理成后续可以接着做的内容。",art:"evidence"}]},
  {id:"trace-em",title:"TRACE-EM｜阿里红 × 非小细胞肺癌证据图谱",short:"TRACE-EM",category:"民族药科研",group:"research",stage:"在研研究工作流",art:"evidence",summary:"围绕新疆药材阿里红与非小细胞肺癌研究，构建药材—成分—靶点—效应的候选证据关系，并为每条线索保留来源、证据类别和待核查状态。",role:"我使用 Codex 协助整理多来源研究资料、建立候选关系表并参与设计证据门控流程。一轮内部工作集记录 77 条候选关系；其中 5 条缺少直接证据的候选轴标记为“暂不判断”，作为后续验证优先级线索。",skills:["民族药证据图谱","文献与数据库线索整合","来源回链","候选靶点优先级","研究缺口标注"],outputs:["77 条候选关系的内部工作集","证据类别与来源位置记录","5 条直接证据不足候选轴的暂不判断标记","下一步核查清单"],steps:[{title:"拆解研究链条",text:"围绕阿里红与非小细胞肺癌，把药材、成分、靶点和效应拆成可检查的关系。",art:"herb"},{title:"为关系补上证据",text:"把实验文献、数据库关联和计算预测分别记录，并保留原文出处。",art:"evidence"},{title:"根据缺口安排核查",text:"直接证据不足时不强行下结论，而是列出需要补查的研究材料和候选优先级。",art:"metabolomics"}]},
  {id:"ethnoevidence",title:"EthnoEvidence｜民族药理证据门控方法",short:"EthnoEvidence",category:"方法学研究",group:"research",stage:"内部审阅与方法迭代",art:"evidence",summary:"这项方法工作关注如何在民族药多组分研究中处理证据稀疏、来源强弱不一和时间信息泄漏，让候选靶点排序过程能够复核。",role:"我参与整理文献证据台账与方法稿件，记录研究时间、对象、实验方法和原文结果位置，协助区分直接实验支持、数据库关联与预测线索，并完善待核查规则。",skills:["证据分级与审计","时间信息记录","候选关系优先级","研究流程复核","论文与图表协作"],outputs:["民族药理证据台账","证据门控与待核查规则","方法稿及配套图表"],steps:[{title:"明确要判断的关系",text:"先确定药材、成分、靶点和效应之间要回答的问题。",art:"evidence"},{title:"记录证据及其边界",text:"逐条标注来源时间、研究对象、实验方法与结果位置，避免把预测写成实验结论。",art:"herb"},{title:"形成可复核排序",text:"在证据强度与缺口清楚的基础上整理候选优先级，为后续查证和实验设计提供线索。",art:"metabolomics"}]},
  {id:"metabolomics",title:"胃癌混合代谢组学分析协作",short:"胃癌代谢组学",category:"生命科学数据",group:"research",stage:"分析协作",art:"metabolomics",summary:"我参与胃癌混合代谢组学分析协作，主要整理脚本、结果文件和图表，涉及差异结果、NMF 模块及外部队列验证材料。",role:"我协同维护 R / Python 分析脚本、结果文件和图表，把分析输入、处理步骤与团队结果对应起来。",skills:["R / Python 协作","组学结果整理","分析图表","验证流程复核"],outputs:["差异分析与代谢景观图","NMF 模块和轨迹图","外部队列与敏感性分析材料"],steps:[{title:"整理分析输入",text:"我先核对发现队列、建模输入和验证队列各自对应的文件。",art:"metabolomics"},{title:"维护脚本和图表",text:"我协同整理分析步骤、候选筛选结果和功能模块图。",art:"evidence"},{title:"对照验证结果",text:"我把建模、外部验证和敏感性分析的结果分开整理。",art:"bone"}]},
  {id:"rural-ai",title:"乡村 AI 医疗｜疼痛病例助手",short:"乡村疼痛助手",category:"基层医疗",group:"clinical",stage:"交互原型",art:"clinic",summary:"我把村医记录疼痛病例的需求整理成网页交互原型，围绕问诊字段、病例记录和填写流程展开。",role:"我梳理疼痛特点、病史和记录步骤，设计页面顺序、填写提示，并把需要人工确认的内容放进原型。",skills:["基层需求拆解","病例字段结构化","交互流程","Web原型"],outputs:["疼痛病例问诊网页原型","病例字段与页面流程","方言识别后续需求清单"],steps:[{title:"梳理记录内容",text:"我从村医记录病例的实际步骤出发，列出需要采集的信息。",art:"clinic"},{title:"安排表单顺序",text:"我把疼痛特点、病史和病例记录排成清楚的填写流程。",art:"evidence"},{title:"做成网页原型",text:"我用 Codex 迭代页面和填写提示，并整理后续方言识别需求。",art:"rehab"}]},
  {id:"tongyuan",title:"同源康复｜实时动作分析演示",short:"同源康复",category:"康复产品",group:"clinical",stage:"本地演示原型",art:"rehab",summary:"我做了一个本地实时动作演示，用摄像头姿态关键点呈现动作变化，并配合康复服务流程设计反馈界面。",role:"我用 Codex 迭代演示页面，整理摄像头输入、动作展示和反馈步骤，做成可现场说明的原型。",skills:["姿态关键点原型","康复服务流程","实时页面交互","风险边界"],outputs:["本地实时动作演示","姿态关键点展示","康复服务流程与汇报材料"],steps:[{title:"显示动作变化",text:"我用摄像头姿态关键点把动作过程显示在页面上。",art:"rehab"},{title:"安排反馈步骤",text:"我把动作练习、提示和服务人员查看结果放进同一流程。",art:"clinic"},{title:"整理演示说明",text:"我说明页面如何使用，并把它作为康复服务流程演示。",art:"bone"}]},
  {id:"bone-mirror",title:"时珍骨镜｜颈椎影像理解与康复随访",short:"时珍骨镜",category:"骨科影像 AI",group:"clinical",stage:"产品概念与方案",art:"bone",summary:"我围绕颈椎影像查看、医生核对、患者解释和复诊随访整理产品方案，把不同使用者的任务放进一套流程。",role:"我梳理医生端和患者端的使用步骤，规划影像说明、来源回链、医生审核和康复随访页面，并完成多版汇报材料。",skills:["临床流程梳理","医疗产品概念设计","界面叙事","证据回链意识"],outputs:["颈椎影像理解产品方案","医生审核和患者说明流程","康复随访与汇报材料"],steps:[{title:"分别梳理使用任务",text:"我把医生读片、患者理解结果和复诊随访分成不同需求。",art:"clinic"},{title:"设计审核页面",text:"我规划影像说明、依据来源和医生确认的位置。",art:"bone"},{title:"串起随访记录",text:"我把症状记录、康复计划和复诊信息放进连续流程。",art:"rehab"}]},
  {id:"herbarium",title:"重走时珍路——本草数字标本馆",short:"本草数字标本馆",category:"数字本草",group:"culture",stage:"已上线网页",art:"herb",url:"https://herbarium-shizhen.netlify.app/",summary:"我参与制作本草数字标本馆网页，连接本草条目卡片、图片和 GLB 三维模型，访客可以从药材卡片进入模型查看。",role:"我协助整理主页条目，核对药材卡片与 3D 模型的对应关系，并检查线上资源路径和网页发布。",skills:["静态网页","3D GLB交互","内容结构","链接与模型映射检查"],outputs:["本草数字展馆网页","药材卡片与 GLB 模型入口","线上项目页面"],steps:[{title:"整理本草条目",text:"我核对药材名称、卡片图片和详情入口之间的对应关系。",art:"herb"},{title:"接入三维模型",text:"我检查卡片能否把正确模型带入 GLB 查看页面。",art:"metabolomics"},{title:"检查线上页面",text:"我核对网页和模型资源路径，确保发布后的入口能打开。",art:"evidence"}]},
  {id:"hotan",title:"新疆和田药项目｜“金种子”国家级立项负责人",short:"和田药项目",category:"和田药 / 项目负责",group:"culture",stage:"国家级立项",art:"herb",photoCaption:"和田药茶项目交流：围绕民族药与 AI 发展前景交流，研究探索方向获得肯定。交流对象：中国工程院院士阿吉艾克拜尔·艾萨。",summary:"我担任和田药材与维吾尔民族医药方向“金种子”国家级立项项目负责人，从新疆本地药材与民族药文化出发，推进项目主题、材料和实践内容梳理。",role:"我负责项目主题与材料梳理，结合新疆民族药资源设计项目表达与实践方向；在和田药茶项目交流中，与中国工程院院士阿吉艾克拜尔·艾萨讨论民族药与 AI 的发展前景，我的探索方向得到肯定。",skills:["民族药项目策划","研究主题与材料统筹","新疆药材文化表达","AI 融合方向探索","跨领域沟通"],outputs:["“金种子”国家级立项项目负责人经历","和田药项目主题与实践材料","和田药茶交流及民族药 AI 发展思路"],steps:[{title:"从新疆药材资源提炼问题",text:"结合和田药材与维吾尔民族医药文化，明确项目的研究与实践切入点。",art:"herb"},{title:"组织项目材料与实践表达",text:"统筹项目主题、实践任务和展示内容，让地方药材资源与 AI 研究方向形成清晰连接。",art:"silk"},{title:"交流民族药与 AI 的发展前景",text:"在和田药茶项目交流中分享探索方向，并将交流所得转化为后续项目思考。",art:"evidence"}]},
  {id:"kunlun",title:"昆仑之水｜和田药茶文化产品与品牌体验",short:"昆仑之水",category:"文化产品",group:"culture",stage:"策划与视觉实践",art:"herb",summary:"我围绕和田药茶整理品牌介绍、网站页面和产品体验内容，把地域文化放进用户能读懂的页面。",role:"我用 Codex 梳理多页网站结构和项目文案，并按了解、体验和分享的顺序整理内容。",skills:["品牌内容结构","网站页面","文化产品体验","AI协同制作"],outputs:["和田药茶项目网站","产品与地域文化介绍","用户体验页面结构"],steps:[{title:"整理项目背景",text:"我把和田药茶相关的地域背景整理成网站内容。",art:"herb"},{title:"安排浏览顺序",text:"我按用户了解项目、查看体验和继续参与的顺序组织页面。",art:"silk"},{title:"制作网站页面",text:"我用 Codex 搭出页面并持续修改内容和视觉结构。",art:"evidence"}]},
  {id:"atlas",title:"艾特莱斯丝绸 AI 纹样设计与创新",short:"艾特莱斯 AI 纹样",category:"文化视觉 AI",group:"culture",stage:"挑战杯省级奖项",art:"silk",summary:"我以维吾尔艾特莱斯丝绸纹样为灵感做 AI 辅助图案设计，预科期间参加挑战杯并获省级奖项。",role:"我把传统纹样中的色彩和节奏转为数字设计方向，用 AI 辅助探索图案，再整理为竞赛展示材料。",skills:["AI视觉构思","传统纹样数字表达","设计迭代","竞赛项目表达"],outputs:["艾特莱斯 AI 纹样设计","挑战杯省级奖项项目","竞赛展示材料"],steps:[{title:"观察纹样特点",text:"我从艾特莱斯的色彩、重复节奏和纹样形态中选设计方向。",art:"silk"},{title:"用 AI 探索图案",text:"我用 AI 辅助生成视觉方案，再挑选并整理适合的图案。",art:"herb"},{title:"完成竞赛展示",text:"我把设计思路和纹样成果整理成挑战杯参赛内容。",art:"evidence"}]},
  {id:"pet-app",title:"知三屿｜宠物洗护与零食店服务小程序",short:"知三屿小程序",category:"小程序产品",group:"product",art:"pet",stage:"设计交付",summary:"我为宠物洗护与零食店梳理小程序流程，覆盖商品浏览、洗护预约、宠物档案、订单和门店管理。",role:"我完成 20 多个用户端页面的视觉与交互方案，并整理商城、预约、档案和订单之间的页面关系。",skills:["用户流程","小程序信息架构","页面交互","服务产品设计"],outputs:["20 多个用户端页面方案","商城和洗护预约流程","宠物档案与订单页面"],steps:[{title:"列清用户任务",text:"我分别整理宠物主人和门店需要完成的事情。",art:"pet"},{title:"安排页面顺序",text:"我把浏览、购买、预约、档案和订单状态连起来。",art:"evidence"},{title:"完成页面方案",text:"我制作各页面视觉稿和交互说明，交付给项目继续使用。",art:"silk"}]},
  {id:"pet-agent",title:"宠物智能穿戴与照护 Agent",short:"宠物照护 Agent",category:"AI 硬件构想",group:"product",art:"pet",stage:"概念与工程准备",summary:"我整理过宠物智能项圈和照护 Agent 的产品构想，关注传感数据、个体活动基线、行为标签和照护周报。",role:"我用 Codex 梳理数据从项圈进入产品、形成提醒并反馈给照护者的流程，列出下一步工程验证事项。",skills:["AI硬件产品思考","传感数据流程","Agent体验","验证规划"],outputs:["项圈数据与照护流程图","行为识别和个体基线方案","工程验证任务清单"],steps:[{title:"列出设备数据",text:"我整理项圈传感器和设备状态可能提供的信息。",art:"pet"},{title:"规划个体记录",text:"我按宠物自身的活动和休息规律组织数据。",art:"metabolomics"},{title:"设计照护周报",text:"我把变化提醒和照护者可以采取的行动放在一起。",art:"evidence"}]},
  {id:"mini-editor",title:"AI 小程序模板编辑器",short:"AI 模板编辑器",category:"AI 产品构想",group:"product",art:"pet",stage:"需求与交互构想",summary:"我构思过 AI 小程序模板编辑器，设想通过文字指令和二维画布调整页面里的图片、位置和尺寸。",role:"我整理模板选择、画布操作、元素属性和自然语言指令之间的产品流程，并列出后续原型任务。",skills:["需求拆解","二维画布交互","AI产品构思","原型规划"],outputs:["模板编辑流程图","自然语言指令与画布操作方案","下一步原型任务清单"],steps:[{title:"说清要改什么",text:"我把用户可能提出的图片替换、移动和尺寸调整需求列出来。",art:"pet"},{title:"对应到画布元素",text:"我规划文字指令如何对应到具体图片和位置属性。",art:"evidence"},{title:"安排预览和确认",text:"我把预览、撤销和保存步骤放进编辑流程。",art:"silk"}]},
  {id:"portfolio",title:"医学 AI 作品集与在读实习简历",short:"个人作品集",category:"个人品牌 / Web",group:"product",art:"evidence",stage:"已上线",summary:"我用 Codex 整理自己的学习和项目经历，制作这个作品集、圆形项目转盘以及可编辑简历。",role:"我先汇总项目和研究材料，再调整内容结构、设计页面交互并逐项检查项目详情和简历。",skills:["需求到网页","内容结构","响应式交互","项目叙事"],outputs:["个人作品集网站","PDF 与 Word 简历","15 条项目与构想记录"],steps:[{title:"汇总项目材料",text:"我从 Codex 工作区和已有文件里整理项目经历、竞赛和研究写作。",art:"evidence"},{title:"设计项目浏览方式",text:"我把项目排进圆形转盘，并为每项补上图片、步骤和成果。",art:"bone"},{title:"制作简历和网站",text:"我用 Codex 调整网页、检查内容，并导出 PDF 和可编辑简历。",art:"silk"}]}
];

projects.forEach(project => { project.image = `assets/independent/project-${project.id}.jpg`; });

const wheel = document.getElementById("projectWheel");
const viewport = document.getElementById("wheelViewport");
const dots = document.getElementById("wheelDots");
const filters = document.getElementById("projectFilters");
const dialog = document.getElementById("projectDialog");
const dialogContent = document.getElementById("dialogContent");
let currentGroup = "all";
let visibleProjects = projects.slice();
let activeIndex = 0;
let dragStart = null;
let dragged = false;

const artClass = art => `art-${art || "evidence"}`;
const projectImage = project => project.image
  ? `<img src="${project.image}" alt="${project.short}项目界面或成果材料" loading="lazy">`
  : "";

function buildFilters(){
  const groups = [{id:"all",label:"全部"},{id:"research",label:"科研与数据"},{id:"clinical",label:"医疗与康复"},{id:"culture",label:"民族药与文化"},{id:"product",label:"产品设计"}];
  filters.innerHTML = groups.map(g=>`<button class="filter-chip ${g.id===currentGroup?"active":""}" data-group="${g.id}" type="button">${g.label}</button>`).join("");
  filters.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{
    currentGroup=button.dataset.group;
    visibleProjects=currentGroup==="all"?projects.slice():projects.filter(p=>p.group===currentGroup);
    activeIndex=0;buildFilters();renderWheel();
  }));
}

function renderWheel(){
  wheel.innerHTML=visibleProjects.map((p,i)=>`<button class="project-node" type="button" data-index="${i}" aria-label="选择项目 ${String(i+1).padStart(2,"0")}：${p.title}"><span class="node-index">${String(i+1).padStart(2,"0")}</span>${p.image?`<img src="${p.image}" alt="" loading="lazy">`:""}</button>`).join("");
  dots.innerHTML=visibleProjects.map((_,i)=>`<button class="wheel-dot ${i===activeIndex?"active":""}" type="button" aria-label="选择第 ${i+1} 个项目" data-index="${i}"></button>`).join("");
  wheel.querySelectorAll(".project-node").forEach(node=>node.addEventListener("click",()=>setActive(Number(node.dataset.index))));
  dots.querySelectorAll("button").forEach(dot=>dot.addEventListener("click",()=>setActive(Number(dot.dataset.index))));
  setActive(activeIndex,false);
}

function setActive(index,update=true){
  if(!visibleProjects.length)return;
  activeIndex=(index+visibleProjects.length)%visibleProjects.length;
  const width=viewport.clientWidth;
  const height=viewport.clientHeight;
  const rx=Math.max(120,Math.min(width*.43,470));
  const ry=Math.max(105,Math.min(height*.30,168));
  const step=360/visibleProjects.length;
  const cards=[...wheel.querySelectorAll(".project-node")];
  cards.forEach((card,i)=>{
    let delta=i-activeIndex;
    if(delta>visibleProjects.length/2)delta-=visibleProjects.length;
    if(delta<-visibleProjects.length/2)delta+=visibleProjects.length;
    const theta=delta*step*Math.PI/180;
    const x=Math.sin(theta)*rx;
    const y=Math.cos(theta)*ry;
    const depth=(Math.cos(theta)+1)/2;
    const scale=i===activeIndex?1.17:.74+depth*.18;
    const opacity=.42+depth*.58;
    card.style.transform=`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) scale(${scale})`;
    card.style.opacity=opacity;
    card.style.zIndex=String(Math.round(10+depth*30));
    card.classList.toggle("is-active",i===activeIndex);
    card.setAttribute("aria-current",i===activeIndex?"true":"false");
  });
  [...dots.children].forEach((dot,i)=>dot.classList.toggle("active",i===activeIndex));
  const p=visibleProjects[activeIndex];
  document.getElementById("activeProjectIndex").textContent=`${String(activeIndex+1).padStart(2,"0")} / ${String(visibleProjects.length).padStart(2,"0")}`;
  document.getElementById("activeProjectCategory").textContent=p.category;
  document.getElementById("activeProjectTitle").textContent=p.short;
  document.getElementById("activeProjectStage").textContent=p.stage;
  const cover=document.getElementById("activeProjectCover");
  cover.className="active-cover";
  cover.style.backgroundImage=p.image?`url("${p.image}")`:"";
  if(update)document.getElementById("activeProjectTitle").setAttribute("aria-live","polite");
}

function next(step){setActive(activeIndex+step)}
document.getElementById("prevProject").addEventListener("click",()=>next(-1));
document.getElementById("nextProject").addEventListener("click",()=>next(1));
document.getElementById("openActiveProject").addEventListener("click",()=>openProject(visibleProjects[activeIndex]));
viewport.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){e.preventDefault();next(1)}if(e.key==="ArrowLeft"){e.preventDefault();next(-1)}if(e.key==="Enter")openProject(visibleProjects[activeIndex])});

viewport.addEventListener("pointerdown",e=>{dragStart={x:e.clientX,last:e.clientX};dragged=false;viewport.classList.add("dragging");viewport.setPointerCapture(e.pointerId)});
viewport.addEventListener("pointermove",e=>{
  if(!dragStart)return;
  const dx=e.clientX-dragStart.last;
  if(Math.abs(e.clientX-dragStart.x)>5)dragged=true;
  if(Math.abs(dx)>33){const step=Math.trunc(dx/33);next(-step);dragStart.last=e.clientX}
});
function endDrag(){if(dragged)setTimeout(()=>dragged=false,90);dragStart=null;viewport.classList.remove("dragging")}
viewport.addEventListener("pointerup",endDrag);viewport.addEventListener("pointercancel",endDrag);viewport.addEventListener("lostpointercapture",endDrag);
viewport.addEventListener("wheel",e=>{if(Math.abs(e.deltaX)>Math.abs(e.deltaY)){e.preventDefault();next(e.deltaX>0?1:-1)}},{passive:false});
window.addEventListener("resize",()=>setActive(activeIndex,false));

function openProject(project){
  if(!project)return;
  const heroStyle=`background-image:linear-gradient(0deg,rgba(17,36,60,.65),transparent 70%),url('${project.image}')`;
  const heroClass="detail-hero has-image";
  dialogContent.innerHTML=`<div class="${heroClass} ${project.image?"":""}" style="${heroStyle}"><div class="detail-hero-copy"><span>${project.category}　·　${project.stage}</span><h2 id="dialogTitle">${project.title}</h2></div></div>
    <div class="detail-body"><p class="detail-summary">${project.summary}</p><div class="detail-meta">${project.skills.map(x=>`<span>${x}</span>`).join("")}</div>
      <section class="detail-block"><h3>我在项目里做了什么</h3><p>${project.role}</p></section>
      <section class="detail-block"><h3>我怎么推进</h3><div class="detail-steps">${project.steps.map((step,i)=>`<article class="detail-step"><div class="step-visual sprite ${artClass(step.art)}"></div><div class="step-copy"><span>第 0${i+1} 步</span><h4>${step.title}</h4><p>${step.text}</p></div></article>`).join("")}</div></section>
      <section class="detail-block"><h3>留下的成果</h3><div class="detail-outcomes">${project.outputs.map(x=>`<span>${x}</span>`).join("")}</div></section>
      ${project.photoCaption?`<p class="detail-photo-caption">${project.photoCaption}</p>`:""}
      ${project.url?`<a class="detail-external" href="${project.url}" target="_blank" rel="noopener">打开本草数字标本馆 ↗</a>`:""}
    </div>`;
  dialog.showModal();
}

document.getElementById("closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
dialog.addEventListener("close",()=>{dialogContent.innerHTML=""});

window.addEventListener("scroll",()=>{
  const page=document.documentElement;
  const progress=(page.scrollTop/(page.scrollHeight-page.clientHeight))*100;
  document.getElementById("scrollProgress").style.width=`${progress}%`;
},{passive:true});

buildFilters();
renderWheel();
const revealTargets = document.querySelectorAll(
  ".section-heading, .capability-card, .agenda-card, .research-focus, .paper-card, .wheel-frame, .career-card, .recognition-item, .education-card, .about-context, .contribution-grid article, .internship-preference, .closing-section > div"
);
revealTargets.forEach((element, index) => {
  element.classList.add("reveal-item");
  element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
revealTargets.forEach(element => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll(".topbar nav a")];
const navSections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-32% 0px -58% 0px", threshold: 0 });
navSections.forEach(section => navObserver.observe(section));

document.querySelectorAll(".capability-card, .agenda-card, .paper-card, .career-card, .recognition-item, .contribution-grid article").forEach(card => {
  card.addEventListener("pointermove", event => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  }, { passive: true });
});

const heroArt = document.querySelector(".hero-art");
if (heroArt && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelector(".hero").addEventListener("pointermove", event => {
    const rect = heroArt.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
    heroArt.style.setProperty("--hero-x", `${dx * 12}px`);
    heroArt.style.setProperty("--hero-y", `${dy * 12}px`);
  }, { passive: true });
  document.querySelector(".hero").addEventListener("pointerleave", () => {
    heroArt.style.setProperty("--hero-x", "0px");
    heroArt.style.setProperty("--hero-y", "0px");
  });
}

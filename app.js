/* Mudassir Ahmed portfolio v2 */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOB=matchMedia('(pointer:coarse)').matches||innerWidth<760;
const rvIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rvIO.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
function observe(){$$('.rv:not(.in)').forEach((el,k)=>{const sib=el.parentElement?[...el.parentElement.children].filter(c=>c.classList.contains('rv')):[];const n=Math.max(0,sib.indexOf(el));el.style.transitionDelay=Math.min(n,6)*.07+'s';rvIO.observe(el)})}
const SB={url:'https://pejrfxhufsyoxdihvovq.supabase.co',key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlanJmeGh1ZnN5b3hkaWh2b3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNjYxNjksImV4cCI6MjEwODg0MjE2OX0.SMHFIyC9pfqqM5RMEgeFK6D1raH6PMJRKVfDxvuJxnM',table:'reviews',bucket:'review-photos'};
const esc=t=>String(t==null?'':t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sbOn=()=>!!(SB.url&&SB.key),AD={t:sessionStorage.getItem('adm')||''};
const sbq=(path,o={})=>fetch(SB.url+'/rest/v1/'+path,{...o,headers:{apikey:SB.key,Authorization:'Bearer '+(AD.t||SB.key),'Content-Type':'application/json',Prefer:'return=representation',...(o.headers||{})}}).then(r=>r.ok?r.json().catch(()=>[]):Promise.reject(r));
const vt=v=>!v.title||/^(Film|Reel) \d+$/.test(v.title),pick=(v,d)=>vt(v)&&d.title?d.title:(v.title||d.title||'');
const vId=u=>(String(u).match(/(\d{6,})/)||[])[1],fmt=t=>Math.floor(t/60)+':'+String(Math.round(t%60)).padStart(2,'0');
const vOembed=id=>fetch('https://vimeo.com/api/oembed.json?width=720&url='+encodeURIComponent('https://vimeo.com/'+id)).then(r=>r.ok?r.json():Promise.reject());
const TVIDS=[];
const stars=n=>{n=Math.max(0,Math.min(5,Math.round(+n||0)));return'★'.repeat(n)+'☆'.repeat(5-n)},okImg=u=>/^(https:\/\/|data:image\/)/.test(u||'');
const sbH=()=>({apikey:SB.key,Authorization:'Bearer '+SB.key});
const shrink=f=>new Promise((ok,no)=>{const im=new Image(),u=URL.createObjectURL(f);im.onload=()=>{const c=document.createElement('canvas');c.width=c.height=160;const x=c.getContext('2d'),q=Math.max(160/im.width,160/im.height);x.drawImage(im,(160-im.width*q)/2,(160-im.height*q)/2,im.width*q,im.height*q);URL.revokeObjectURL(u);c.toBlob(b=>b?ok(b):no(),'image/jpeg',.82)};im.onerror=no;im.src=u});
const b2u=b=>new Promise(ok=>{const r=new FileReader();r.onload=()=>ok(r.result);r.readAsDataURL(b)});
async function rvList(){if(sbOn()){const r=await fetch(`${SB.url}/rest/v1/${SB.table}?select=name,rating,text,photo_url,created_at&order=created_at.desc&limit=40`,{headers:sbH()});if(!r.ok)throw 0;return r.json()}
 try{return JSON.parse(localStorage.getItem('rv_demo')||'[]')}catch(e){return[]}}
async function rvAdd(row,file){const b=file?await shrink(file).catch(()=>null):null;
 if(sbOn()){if(b){const p=Date.now()+'-'+Math.random().toString(36).slice(2,8)+'.jpg',u=await fetch(`${SB.url}/storage/v1/object/${SB.bucket}/${p}`,{method:'POST',headers:{...sbH(),'Content-Type':'image/jpeg'},body:b});if(u.ok)row.photo_url=`${SB.url}/storage/v1/object/public/${SB.bucket}/${p}`}
  const r=await fetch(`${SB.url}/rest/v1/${SB.table}`,{method:'POST',headers:{...sbH(),'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(row)});if(!r.ok)throw 0}
 else{if(b)row.photo_url=await b2u(b);try{const a=JSON.parse(localStorage.getItem('rv_demo')||'[]');a.unshift(row);localStorage.setItem('rv_demo',JSON.stringify(a.slice(0,30)))}catch(e){}}
 return row}
let RVS=[];
// Vimeo metadata, fetched once per video
const META={};const meta=id=>META[id]||(META[id]=vOembed(id).catch(()=>({})));
const big=(u,w)=>u?u.replace(/-d_\d+(x\d+)?/,'-d_'+w):u;

// ---------- work grid ----------
let showAll=false;
function workCard(v,i,feat){const id=vId(v.vimeo);
 return `<button class="work rv${feat?' feat':''}" data-i="${i}" aria-label="Play ${esc(v.title||'film')}"><div class="thumb"><img alt="" decoding="async"${feat?'':' loading="lazy"'}><span class="pl"></span></div><div class="meta"><b>${esc(v.title||'Untitled')}</b><span>${esc(v.tag||'Film')}</span></div></button>`}
function drawVideos(){const lim=MOB?4:5,list=showAll?VIDEOS:VIDEOS.slice(0,lim);
 $('#works').innerHTML=list.map((v,i)=>workCard(v,i,i===0)).join('');
 const mb=$('#moreBtn');mb.hidden=VIDEOS.length<=lim;mb.textContent=showAll?'Show fewer films':'Show all films ('+VIDEOS.length+')';
 $$('#works .work').forEach(el=>{const i=+el.dataset.i,v=VIDEOS[i],id=vId(v.vimeo);el.onclick=()=>openVid(i,0);if(!id)return;
  meta(id).then(d=>{const im=el.querySelector('img');if(d.thumbnail_url){im.onload=()=>im.classList.add('ok');im.src=big(d.thumbnail_url,i===0?1920:1280)}
   el.querySelector('b').textContent=pick(v,d)||'Untitled';if(d.duration)el.querySelector('.meta span').textContent=(v.tag||'Film')+'  ·  '+fmt(d.duration)})});
 observe()}
$('#moreBtn').onclick=()=>{showAll=!showAll;drawVideos()};
function drawReels(){$('#reelRow').innerHTML=REELS.map((v,i)=>`<button class="reel" data-i="${i}" aria-label="Play ${esc(v.title||'reel')}"><div class="thumb"><img alt="" loading="lazy" decoding="async"><span class="pl"></span></div><div class="meta"><b>${esc(v.title||'Reel')}</b><span>${esc(v.tag||'Reel')}</span></div></button>`).join('');
 $$('#reelRow .reel').forEach(el=>{const i=+el.dataset.i,v=REELS[i],id=vId(v.vimeo);el.onclick=()=>openVid(i,1);if(!id)return;
  meta(id).then(d=>{const im=el.querySelector('img');if(d.thumbnail_url){im.onload=()=>im.classList.add('ok');im.src=big(d.thumbnail_url,720)}
   el.querySelector('b').textContent=pick(v,d)||'Reel';if(d.duration)el.querySelector('.meta span').textContent=fmt(d.duration)})})}
{const row=$('#reelRow'),step=()=>row.clientWidth*.8;$('#rPrev').onclick=()=>row.scrollBy({left:-step(),behavior:'smooth'});$('#rNext').onclick=()=>row.scrollBy({left:step(),behavior:'smooth'})}
// add hover-play cue on reels too
document.head.insertAdjacentHTML('beforeend','<style>.reel:hover .pl,.reel:focus-visible .pl{transform:none;opacity:1}.reel:hover .thumb img{transform:scale(1.045)}</style>');

// push videos whose Vimeo thumbnail is a flat single colour (no real frame) to the end, so the featured slot always shows real work
const FLAT={};
function flatness(url){return FLAT[url]||(FLAT[url]=new Promise(ok=>{const im=new Image();im.crossOrigin='anonymous';im.onload=()=>{try{const c=document.createElement('canvas');c.width=32;c.height=18;const x=c.getContext('2d');x.drawImage(im,0,0,32,18);const d=x.getImageData(0,0,32,18).data;let s=0,s2=0,n=0;for(let i=0;i<d.length;i+=4){const l=.3*d[i]+.59*d[i+1]+.11*d[i+2];s+=l;s2+=l*l;n++}ok(Math.sqrt(Math.max(0,s2/n-(s/n)*(s/n))))}catch(e){ok(99)}};im.onerror=()=>ok(99);im.src=url}))}
let ranked='';
async function rankFilms(){const sd=await Promise.all(VIDEOS.map(v=>{const id=vId(v.vimeo);return id?meta(id).then(d=>d.thumbnail_url?flatness(big(d.thumbnail_url,320)):99):99}));
 let bi=0;sd.forEach((x,i)=>{if(x>sd[bi])bi=i});
 const order=VIDEOS.map((v,i)=>({v,i,flat:sd[i]<13,best:i===bi})).sort((a,b)=>(b.best-a.best)||(a.flat-b.flat)||(a.i-b.i)),key=order.map(o=>o.v.vimeo).join();
 if(key===VIDEOS.map(v=>v.vimeo).join())return;VIDEOS.splice(0,VIDEOS.length,...order.map(o=>o.v));drawVideos();ringTextures()}
drawVideos();drawReels();rankFilms();

// ---------- reviews (adapted from 21st.dev "Animated Testimonials") ----------
const AT={i:0,list:[],paused:false,rot:[],vis:false};
const atReal=r=>r&&r.text&&r.text.trim().length>=25&&!/^test/i.test(r.text.trim());
function rvDraw(a){AT.list=a.filter(atReal);if(AT.i>=AT.list.length)AT.i=0;AT.rot=AT.list.map(()=>Math.floor(Math.random()*15)-7);
 $('#at').classList.toggle('empty',!AT.list.length);$('#at').classList.toggle('single',AT.list.length===1);
 $('#atStack').innerHTML=(AT.list.length?AT.list:[{name:'M'}]).map(r=>`<div class="at-card">${okImg(r.photo_url)?`<img src="${esc(r.photo_url)}" alt="" loading="lazy" decoding="async">`:`<div class="mono">${esc((r.name||'?').trim().charAt(0).toUpperCase())}</div>`}</div>`).join('');
 atShow(false)}
function atShow(anim){const n=AT.list.length,r=AT.list[AT.i];
 $$('#atStack .at-card').forEach((c,k)=>{const on=k===AT.i;c.classList.toggle('on',on&&anim);c.style.zIndex=on?99:n+2-k;c.style.opacity=on?1:.5;c.style.transform=on?'none':`translateZ(-90px) scale(.93) rotate(${AT.rot[k]||0}deg)`});
 if(!r){$('#atStars').textContent='';$('#atQ').textContent='No reviews yet. Be the first to share your experience.';$('#atN').textContent='';$('#atR').textContent='';return}
 $('#atStars').textContent=stars(r.rating);
 $('#atQ').innerHTML=esc(r.text).split(/\s+/).map((w,k)=>`<span style="${anim?'animation-delay:'+(k*.02).toFixed(2)+'s':'animation:none'}">${w}</span>`).join(' ');
 $('#atN').textContent=r.name||'Client';$('#atR').textContent=r.created_at?new Date(r.created_at).toLocaleDateString('en-GB',{month:'long',year:'numeric'}):'';
 $('#atC').textContent=String(AT.i+1).padStart(2,'0')+' / '+String(n).padStart(2,'0')}
function atGo(d){const n=AT.list.length;if(n<2)return;AT.i=(AT.i+d+n)%n;atShow(!reduce)}
{const at=$('#at');$('#atPrev').onclick=()=>atGo(-1);$('#atNext').onclick=()=>atGo(1);
 ['pointerenter','focusin'].forEach(e=>at.addEventListener(e,()=>AT.paused=true));['pointerleave','focusout'].forEach(e=>at.addEventListener(e,()=>AT.paused=false));
 new IntersectionObserver(es=>es.forEach(e=>AT.vis=e.isIntersecting)).observe(at);
 setInterval(()=>{if(!reduce&&!AT.paused&&AT.vis&&!VMOPEN&&!rwdOpen&&!document.hidden)atGo(1)},6500)}
let rwdOpen=false;const rwd=$('#rwd');
function rwdShow(on){rwdOpen=on;rwd.classList.toggle('on',on);lockScroll(on);if(on)setTimeout(()=>$('#rwf').rname.focus({preventScroll:true}),60);else $('#rwOpen').focus({preventScroll:true})}
$('#rwOpen').onclick=()=>rwdShow(true);$('#rwClose').onclick=()=>rwdShow(false);
rwd.addEventListener('click',e=>{if(e.target===rwd)rwdShow(false)});addEventListener('keydown',e=>{if(e.key==='Escape'&&rwdOpen)rwdShow(false)});
rvDraw([]);rvList().then(a=>{RVS=a;rvDraw(RVS)}).catch(()=>{});
{let rate=0;const sts=$$('#rws button'),paint=n=>sts.forEach((b,i)=>b.classList.toggle('on',i<n)),f=$('#rwf'),m=$('#rwm');
 sts.forEach((b,i)=>{b.onclick=()=>{rate=i+1;paint(rate)};b.onmouseenter=()=>paint(i+1);b.onmouseleave=()=>paint(rate)});
 f.rphoto.onchange=()=>{$('#rwpn').textContent=f.rphoto.files[0]?'Photo added ✓':'Add photo'};
 f.addEventListener('submit',async e=>{e.preventDefault();if(f.rweb.value)return;const name=f.rname.value.trim(),text=f.rtext.value.trim();
  if(!rate||name.length<2||text.length<10){m.textContent='Please add a star rating, your name and a short review.';return}
  const btn=f.querySelector('[type=submit]');btn.disabled=true;m.textContent='Sending…';
  try{const r=await rvAdd({name:name.slice(0,60),rating:rate,text:text.slice(0,500),photo_url:null,created_at:new Date().toISOString()},f.rphoto.files[0]);RVS.unshift(r);rvDraw(RVS);AT.i=0;atShow(true);f.reset();rate=0;paint(0);$('#rwpn').textContent='Add photo';m.textContent='Thank you, your review is now live.';setTimeout(()=>{rwdShow(false);m.textContent=''},1600)}
  catch(err){m.textContent='Could not send right now. Please try again.'}btn.disabled=false})}
function drawTV(){const w=$('#rwv');w.hidden=!TVIDS.length;w.innerHTML=TVIDS.map((v,i)=>`<button class="work" data-t="${i}"><div class="thumb"><img alt="" loading="lazy"><span class="pl"></span></div><div class="meta"><b>${esc(v.title||'Client video')}</b><span>Video review</span></div></button>`).join('');
 $$('#rwv .work').forEach(e=>{const i=+e.dataset.t,id=vId(TVIDS[i].vimeo);e.onclick=()=>openVid(i,2);if(id)meta(id).then(d=>{const im=e.querySelector('img');if(d.thumbnail_url){im.onload=()=>im.classList.add('ok');im.src=big(d.thumbnail_url,960)}})})}
drawTV();
const drawAll=()=>{drawVideos();drawReels();drawTV();ringTextures();rankFilms()};
async function loadProjects(){if(!sbOn())return;try{const a=await sbq('projects?select=*&order=sort.asc,created_at.asc'),g=k=>a.filter(x=>x.kind===k).map(x=>({id:x.id,title:x.title||'',tag:x.tag||'',vimeo:x.vimeo}));
 const f=g('film'),r=g('reel');if(f.length)VIDEOS.splice(0,VIDEOS.length,...f);if(r.length)REELS.splice(0,REELS.length,...r);TVIDS.splice(0,TVIDS.length,...g('testimonial'));drawAll()}catch(e){}}

// ---------- settings + static content ----------
let SETTINGS=null;
const undash=s=>String(s).replace(/\s*[—–]\s*/g,', ').replace(/, ([a-z])/g,', $1');
async function loadSettings(){try{const a=await sbq('settings?select=*&id=eq.1&limit=1');if(!a||!a[0])return;const d=SETTINGS=a[0];
 if(d.config)Object.assign(CONFIG,d.config);if(d.skills&&d.skills.length)SKILLS=d.skills;if(d.profile_url)A.profile=d.profile_url;
 if(d.text)$$('[data-edit]').forEach(el=>{const k=el.getAttribute('data-edit');if(d.text[k]!=null&&d.text[k]!=='')el.textContent=undash(d.text[k])});
 if(d.text&&d.text.name)document.title=d.text.name+' | Motion Designer and 3D Artist'}catch(e){}}
function drawStatic(){
 $('#chips').innerHTML=SKILLS.map(s=>`<span>${esc(s)}</span>`).join('');
 $('#xp').innerHTML=EXPERIENCE.map(e=>`<li><b>${esc(e[0])}</b><span>${esc(e[1])}</span><small>${esc(e[2])}</small></li>`).join('');
 $('#pf').src=A.profile;$('#hstat').textContent=CONFIG.status;
 $('#mail').href='mailto:'+CONFIG.email;$('#mailT').textContent=CONFIG.email;$('#mmail').textContent=CONFIG.email;
 const links=Object.entries(CONFIG.links||{}).filter(([k,u])=>u&&u!=='#'&&!/mudassirportfolio\.vercel\.app/.test(u));
 $('#cgrid').innerHTML=`<div><h4>Contact</h4><a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a><a href="tel:${esc(CONFIG.phone.replace(/\s/g,''))}">${esc(CONFIG.phone)}</a><a href="https://wa.me/${esc(CONFIG.wa)}" target="_blank" rel="noopener">WhatsApp ↗</a></div>`+
  `<div><h4>Elsewhere</h4>${links.length?links.map(([k,u])=>`<a href="${esc(u)}" target="_blank" rel="noopener">${esc(k)} ↗</a>`).join(''):'<span>Links coming soon</span>'}</div>`+
  `<div><h4>Based in</h4><span>${esc(CONFIG.place)}</span><span>Working with clients worldwide</span></div>`}
drawStatic();loadSettings().then(()=>{drawStatic();loadProjects()});

// ---------- hidden admin panel: open yoursite.com/#admin ----------
// ---- hidden admin panel: open  yoursite.com/#admin  (login required, only you can edit) ----
const KN={film:'Films (16:9)',reel:'Reels (9:16)',testimonial:'Video testimonials'};let adm=null;
async function admLogin(f){const m=$('#adm_m');try{const r=await fetch(SB.url+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:SB.key,'Content-Type':'application/json'},body:JSON.stringify({email:f.e.value,password:f.p.value})}),d=await r.json();if(!r.ok||!d.access_token)throw 0;AD.t=d.access_token;sessionStorage.setItem('adm',AD.t);admRender('p')}catch(x){m.textContent='Wrong email or password.'}}
function admOut(){AD.t='';sessionStorage.removeItem('adm');admRender('p')}
async function admRender(tab){if(!adm){adm=document.createElement('div');adm.id='adm';document.body.appendChild(adm);
  adm.addEventListener('change',admChange);adm.addEventListener('click',admClick);adm.addEventListener('submit',e=>{e.preventDefault();const f=e.target;if(f.id==='adl')admLogin(f);else if(f.id==='adc')admSaveSettings(f);else admAdd(f)})}
 adm.style.display='block';const top=`<div class="adh"><h3>Admin</h3><div><button class="b" data-x="c">Content</button> <button class="b" data-x="p">Projects</button> <button class="b" data-x="r">Reviews</button> <button class="b" data-x="out">Log out</button> <button class="b w" data-x="close">Close</button></div></div>`;
 if(!sbOn()){adm.innerHTML='<div class="adw"><h3>Admin</h3><p>Add your Supabase URL and key in the SB settings first.</p><button class="b" data-x="close">Close</button></div>';return}
 if(!AD.t){adm.innerHTML='<form class="adw" id="adl"><h3>Admin login</h3><input name="e" type="email" placeholder="Email" required><input name="p" type="password" placeholder="Password" required><div class="ads" id="adm_m"></div><div><button class="b w">Log in</button> <button type="button" class="b" data-x="close">Close</button></div></form>';return}
 adm.dataset.tab=tab;let h='<div class="adw">'+top;
 try{if(tab==='c'){
   const d=SETTINGS||{},t=d.text||{},cfg=d.config||{};
   const F=(k,v,ph)=>`<input data-f="${k}" value="${esc(v||'')}" placeholder="${ph||k}">`;
   h+=`<form class="adr af" id="adc" style="display:block">
    <h4>Branding</h4>
    <div class="adg">${F('t.name',t.name,'Name')}${F('t.eyebrow',t.eyebrow,'Eyebrow (e.g. Motion Designer)')}</div>
    <label class="ads">Profile picture</label><div class="adg"><input type="file" data-f="profile_file" accept="image/*"><input data-f="profile_url" value="${esc(d.profile_url||'')}" placeholder="or paste image URL"></div>
    <h4>Hero</h4>${F('t.heroTitle',t.heroTitle,'Hero title')}${F('t.heroSub',t.heroSub,'Hero subtitle')}
    <h4>About</h4>${F('t.aboutHeading',t.aboutHeading,'About heading')}${F('t.firstName',t.firstName,'First name (highlighted)')}
    <textarea data-f="t.aboutBio" placeholder="About bio">${esc(t.aboutBio||'')}</textarea>${F('t.aboutTag',t.aboutTag,'About tagline')}
    <label class="ads">Skills (comma separated)</label><input data-f="skills" value="${esc((d.skills||[]).join(', '))}" placeholder="Graphic Design, Video Editing, 3D Modelling">
    <h4>How I work: 3 steps</h4>
    <div class="adg">${F('t.st1t',t.st1t,'Step 1 title')}${F('t.st1d',t.st1d,'Step 1 text')}</div>
    <div class="adg">${F('t.st2t',t.st2t,'Step 2 title')}${F('t.st2d',t.st2d,'Step 2 text')}</div>
    <div class="adg">${F('t.st3t',t.st3t,'Step 3 title')}${F('t.st3d',t.st3d,'Step 3 text')}</div>
    <h4>Services: 4 cards</h4>
    <div class="adg">${F('t.sv1t',t.sv1t,'Service 1 title')}${F('t.sv1d',t.sv1d,'Service 1 text')}</div>
    <div class="adg">${F('t.sv2t',t.sv2t,'Service 2 title')}${F('t.sv2d',t.sv2d,'Service 2 text')}</div>
    <div class="adg">${F('t.sv3t',t.sv3t,'Service 3 title')}${F('t.sv3d',t.sv3d,'Service 3 text')}</div>
    <div class="adg">${F('t.sv4t',t.sv4t,'Service 4 title')}${F('t.sv4d',t.sv4d,'Service 4 text')}</div>
    <h4>Contact</h4>
    <div class="adg">${F('cfg.email',cfg.email,'Email')}${F('cfg.phone',cfg.phone,'Phone')}</div>
    <div class="adg">${F('cfg.wa',cfg.wa,'WhatsApp number (digits only)')}${F('cfg.place',cfg.place,'Location')}</div>
    ${F('t.footer',t.footer,'Footer text')}
    <div class="ads" id="adm_m"></div>
    <button class="b w" style="margin-top:8px">Save &amp; publish</button></form>`;
 }else if(tab==='r'){const rs=await sbq('reviews?select=id,name,rating,text,created_at&order=created_at.desc&limit=100');
   h+=rs.length?rs.map(r=>`<div class="adr rr" data-id="${r.id}"><div><b>${esc(r.name)}</b> <span class="rws">${stars(r.rating)}</span><p>${esc(r.text)}</p></div><button class="ab2" data-x="delr">✕</button></div>`).join(''):'<p>No reviews yet.</p>'}
  else{const ps=await sbq('projects?select=*&order=sort.asc,created_at.asc');
   h+=`<form class="adr af"><select name="k"><option value="film">Film 16:9</option><option value="reel">Reel 9:16</option><option value="testimonial">Video testimonial</option></select><input name="t" placeholder="Title (blank = Vimeo title)"><input name="g" placeholder="Tag"><input name="v" placeholder="Vimeo link" required><button class="b w">Add</button></form><p class="ads" id="adm_m">Upload the video on Vimeo first, then paste its link here. Changes save automatically.</p>`;
   for(const k in KN){h+=`<h4>${KN[k]}</h4>`+ps.filter(x=>x.kind===k).map(x=>`<div class="adr" data-id="${x.id}" data-k="${k}"><input data-f="title" value="${esc(x.title)}" placeholder="Title"><input data-f="tag" value="${esc(x.tag)}" placeholder="Tag"><input data-f="vimeo" value="${esc(x.vimeo)}"><button class="ab2" data-x="up">↑</button><button class="ab2" data-x="dn">↓</button><button class="ab2" data-x="del">✕</button></div>`).join('')}}
 }catch(e){if(e&&e.status===401){AD.t='';sessionStorage.removeItem('adm');return admRender(tab)}h+='<p>Could not load. Check your Supabase tables.</p>'}
 adm.innerHTML=h+'</div>'}
async function admChange(e){const t=e.target,row=t.closest('[data-id]');if(!row||!t.dataset.f)return;if(t.dataset.f==='vimeo'&&!vId(t.value)){$('#adm_m').textContent='That does not look like a Vimeo link.';return}
 try{await sbq('projects?id=eq.'+row.dataset.id,{method:'PATCH',body:JSON.stringify({[t.dataset.f]:t.value.trim()})});$('#adm_m').textContent='Saved ✓';loadProjects()}catch(x){$('#adm_m').textContent='Could not save.'}}
function setPath(o,path,v){const ks=path.split('.');let c=o;for(let i=0;i<ks.length-1;i++){c[ks[i]]=c[ks[i]]||{};c=c[ks[i]]}c[ks[ks.length-1]]=v}
async function admSaveSettings(f){const m=$('#adm_m');m.textContent='Saving…';
 try{const d={text:{},config:{}};
  f.querySelectorAll('[data-f]').forEach(el=>{if(el.type==='file')return;const k=el.dataset.f;if(k==='skills'){d.skills=el.value.split(',').map(s=>s.trim()).filter(Boolean)}else if(k==='theme_a'||k==='theme_b'||k==='profile_url'){d[k]=el.value}else setPath(d,k,el.value)});
  const fileEl=f.querySelector('[data-f="profile_file"]');
  if(fileEl&&fileEl.files&&fileEl.files[0]){const file=fileEl.files[0],p='profile/'+Date.now()+'-'+file.name.replace(/[^a-z0-9.]/gi,'_');
   const u=await fetch(`${SB.url}/storage/v1/object/${SB.bucket}/${p}`,{method:'POST',headers:{apikey:SB.key,Authorization:'Bearer '+AD.t,'Content-Type':file.type},body:file});
   if(u.ok)d.profile_url=`${SB.url}/storage/v1/object/public/${SB.bucket}/${p}`}
  await sbq('settings',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=representation'},body:JSON.stringify({id:1,...d})});
  m.textContent='Saved. Live for everyone now.';await loadSettings();location.reload()
 }catch(x){m.textContent='Could not save. Check the settings table/policies.'}}
async function admAdd(f){if(f.id==='adl')return;if(!vId(f.v.value)){$('#adm_m').textContent='Please paste a valid Vimeo link.';return}
 try{const a=await sbq('projects?select=sort&kind=eq.'+f.k.value+'&order=sort.desc&limit=1');await sbq('projects',{method:'POST',body:JSON.stringify({kind:f.k.value,title:f.t.value.trim(),tag:f.g.value.trim(),vimeo:f.v.value.trim(),sort:(a[0]?a[0].sort:0)+1})});loadProjects();admRender('p')}catch(x){$('#adm_m').textContent='Could not add.'}}
async function admClick(e){const b=e.target.closest('[data-x]');if(!b)return;const x=b.dataset.x,row=b.closest('[data-id]');
 if(x==='close'){location.hash='';return}if(x==='out')return admOut();if(x==='p'||x==='r'||x==='c')return admRender(x);
 try{if(x==='delr'){if(confirm('Delete this review?')){await sbq('reviews?id=eq.'+row.dataset.id,{method:'DELETE'});admRender('r')}}
  else if(x==='del'){if(confirm('Delete this project?')){await sbq('projects?id=eq.'+row.dataset.id,{method:'DELETE'});loadProjects();admRender('p')}}
  else{const rows=[...adm.querySelectorAll('.adr[data-k="'+row.dataset.k+'"]')],i=rows.indexOf(row),j=x==='up'?i-1:i+1;if(j<0||j>=rows.length)return;
   const ids=rows.map(r=>r.dataset.id);[ids[i],ids[j]]=[ids[j],ids[i]];await Promise.all(ids.map((id,n)=>sbq('projects?id=eq.'+id,{method:'PATCH',body:JSON.stringify({sort:n})})));loadProjects();admRender('p')}}catch(er){}}
const admHash=()=>{if(location.hash==='#admin')admRender('p');else if(adm)adm.style.display='none'};addEventListener('hashchange',admHash);admHash();
// ---------- video lightbox ----------
let VMOPEN=false;
function openVid(i,r){const v=(r===2?TVIDS:r?REELS:VIDEOS)[i],id=vId(v&&v.vimeo);if(!id)return;
 $('#vf').className=r===1?'reel':'';
 $('#vf').innerHTML=`<iframe src="https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(v.title||'Video')}"></iframe>`;
 const vm=$('#vm');vm.classList.add('on');requestAnimationFrame(()=>vm.classList.add('in'));
 lockScroll(true);VMOPEN=true;
 if(!history.state||!history.state.vm)history.pushState({vm:1},'');
 setTimeout(()=>$('#vx').focus({preventScroll:true}),50)}
function closeVid(fromPop){if(!VMOPEN)return;VMOPEN=false;const vm=$('#vm');vm.classList.remove('in');lockScroll(false);
 setTimeout(()=>{if(!VMOPEN){vm.classList.remove('on');$('#vf').innerHTML=''}},300);
 if(!fromPop&&history.state&&history.state.vm)history.back()}
addEventListener('popstate',()=>closeVid(true));
$('#vx').onclick=()=>closeVid();$('#vm').addEventListener('click',e=>{if(e.target.id==='vm')closeVid()});addEventListener('keydown',e=>{if(e.key==='Escape')closeVid()});

// ---------- nav, menu, reveal ----------
{const nav=$('#nav');let last=0;
 const onS=()=>{const y=scrollY;nav.classList.toggle('solid',y>40);nav.classList.toggle('hide',y>innerHeight&&y>last+4&&!$('#mnav').classList.contains('on'));if(y<last-4)nav.classList.remove('hide');last=y};
 addEventListener('scroll',onS,{passive:true});onS();
 const mb=$('#mb'),mn=$('#mnav'),tog=on=>{mb.classList.toggle('on',on);mn.classList.toggle('on',on);mb.setAttribute('aria-expanded',on);mb.setAttribute('aria-label',on?'Close menu':'Open menu');lockScroll(on)};
 mb.onclick=()=>tog(!mn.classList.contains('on'));$$('#mnav a').forEach(a=>a.addEventListener('click',()=>tog(false)));
 const ls=$$('.links a'),io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id;ls.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id))}}),{rootMargin:'-45% 0px -50% 0px'});
 ['work','reels','reviews','services','process','about','contact'].forEach(id=>io.observe(document.getElementById(id)));
 $('#toTop').onclick=()=>window.lenis?lenis.scrollTo(0,{duration:1.6}):scrollTo({top:0,behavior:reduce?'auto':'smooth'})}
observe();
// count-up on stats
{const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const b=e.target,to=+b.dataset.cnt,suf=b.dataset.suf||'',t0=performance.now();
  if(reduce)return;const f=now=>{const k=Math.min(1,(now-t0)/1200),v=Math.round(to*(1-Math.pow(1-k,3)));b.textContent=v+suf;if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
 $$('[data-cnt]').forEach(b=>io.observe(b))}

// ---------- realtime 3D world: one scene behind the whole site, driven by scroll + pointer ----------
let ringTextures=()=>{};
const WORLD={ready:false};
(function world(){
 const cv=$('#gl');if(!window.THREE){document.body.classList.add('no3d');return}
 const T=THREE;let R;try{R=new T.WebGLRenderer({canvas:cv,antialias:!MOB,powerPreference:'high-performance',alpha:false})}catch(e){document.body.classList.add('no3d');return}
 const DPR=Math.min(devicePixelRatio,MOB?1.4:1.75);R.setPixelRatio(DPR);R.setClearColor(0x0b0b0c,1);
 const scene=new T.Scene(),cam=new T.PerspectiveCamera(35,1,.1,120);scene.fog=null;

 // ---- sculpture: noise-displaced sphere, studio lit, satin graphite with an orange rim ----
 const NOISE=`
 vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
 vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
 float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;
 const SU={uT:{value:0},uAmp:{value:.32},uFreq:{value:.9},uRim:{value:.6},uDim:{value:1},uTw:{value:0},uM:{value:new T.Vector2()},uIn:{value:0}};
 const sculpt=new T.Mesh(new T.IcosahedronGeometry(1.6,MOB?40:96),new T.ShaderMaterial({uniforms:SU,
  vertexShader:NOISE+`uniform float uT,uAmp,uFreq,uTw;uniform vec2 uM;varying vec3 vN,vV;varying float vD;
  vec3 disp(vec3 p){vec3 q=p;float a=uTw*q.y;q.xz=mat2(cos(a),-sin(a),sin(a),cos(a))*q.xz;
   float n=snoise(q*uFreq+vec3(uT*.16,uT*.1+uM.y*.4,uM.x*.4))*.86+snoise(q*uFreq*1.9-uT*.1)*.14;return q+normalize(p)*n*uAmp;}
  void main(){vec3 p=position;vec3 d=disp(p);
   vec3 tg=normalize(cross(normal,abs(normal.y)<.99?vec3(0.,1.,0.):vec3(1.,0.,0.)));vec3 bt=normalize(cross(normal,tg));
   float e=.02;vec3 n2=normalize(cross(disp(p+tg*e)-d,disp(p+bt*e)-d));
   vD=length(d)-1.6;vN=normalize(normalMatrix*n2);vec4 mv=modelViewMatrix*vec4(d,1.);vV=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
  fragmentShader:`uniform float uRim,uDim,uIn;varying vec3 vN,vV;varying float vD;
  void main(){vec3 N=normalize(vN);if(!gl_FrontFacing)N=-N;vec3 V=normalize(vV);
   vec3 L1=normalize(vec3(-.55,.75,.6)),L2=normalize(vec3(.85,-.15,-.5)),L3=normalize(vec3(.1,-1.,.2));
   float d1=max(dot(N,L1),0.),d2=pow(max(dot(N,L2),0.),1.5),d3=max(dot(N,L3),0.);
   float fr=pow(1.-max(dot(N,V),0.),2.6);
   vec3 c=mix(vec3(.035,.035,.04),vec3(.82,.8,.76),pow(d1,1.2)*.9);
   c+=vec3(.12,.12,.13)*d3;
   c+=vec3(1.,.36,.12)*d2*(.35+.9*uRim);
   c+=fr*mix(vec3(.55,.55,.6),vec3(1.,.42,.16),uRim)*.55;
   c+=pow(max(dot(reflect(-L1,N),V),0.),48.)*.55;
   c+=vec3(1.,.4,.15)*smoothstep(.15,.45,vD)*.12*uRim;
   c*=uDim;gl_FragColor=vec4(c*uIn+vec3(.043,.043,.047)*(1.-uIn),1.);}`}));
 const SG=new T.Group();SG.add(sculpt);scene.add(SG);

 // ---- orbiting ring of real project frames ----
 const ringG=new T.Group();SG.add(ringG);
 const N=MOB?9:12,RAD=3.3,STEP=Math.PI*2/N,ARC=STEP*.86,H=RAD*ARC*9/16;
 const pvs=`varying vec2 vUv;varying float vZ;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vZ=-mv.z;gl_Position=projectionMatrix*mv;}`;
 const pfs=`uniform sampler2D map;uniform float uHov,uIn;varying vec2 vUv;varying float vZ;
 void main(){vec3 c=texture2D(map,vUv).rgb;if(!gl_FrontFacing)c=vec3(dot(c,vec3(.3,.59,.11)))*.12;else c*=.62+.38*uHov;
  float e=smoothstep(0.,.012,vUv.x)*smoothstep(0.,.012,1.-vUv.x)*smoothstep(0.,.02,vUv.y)*smoothstep(0.,.02,1.-vUv.y);
  gl_FragColor=vec4(c*e,uIn*e);}`;
 const panels=[];
 function blankTex(i){const k=document.createElement('canvas');k.width=512;k.height=288;const x=k.getContext('2d');x.fillStyle='#151517';x.fillRect(0,0,512,288);
  x.fillStyle='rgba(255,255,255,.07)';x.font='800 120px Archivo, Arial';x.textBaseline='middle';x.fillText(String(i+1).padStart(2,'0'),22,150);
  x.fillStyle='#ff5a1f';x.beginPath();x.arc(480,32,6,0,6.283);x.fill();return new T.CanvasTexture(k)}
 for(let i=0;i<N;i++){const a=i*STEP;const m=new T.Mesh(new T.CylinderGeometry(RAD,RAD,H,24,1,true,a-ARC/2,ARC),
  new T.ShaderMaterial({uniforms:{map:{value:blankTex(i)},uHov:{value:0},uIn:{value:0}},vertexShader:pvs,fragmentShader:pfs,side:T.DoubleSide,transparent:true,depthWrite:false}));
  m.userData={i};panels.push(m);ringG.add(m)}
 ringG.rotation.set(.32,0,-.12);
 ringTextures=()=>{const src=[...VIDEOS.map((v,i)=>({v,i,r:0})),...REELS.map((v,i)=>({v,i,r:1}))].filter(o=>vId(o.v.vimeo));if(!src.length)return;
  panels.forEach((m,k)=>{const o=src[k%src.length];m.userData.src=o;
   meta(vId(o.v.vimeo)).then(d=>{if(!d.thumbnail_url)return;const im=new Image();im.crossOrigin='anonymous';im.onload=()=>{
    const k2=document.createElement('canvas');k2.width=512;k2.height=288;const x=k2.getContext('2d'),s=Math.max(512/im.width,288/im.height);
    x.drawImage(im,(512-im.width*s)/2,(288-im.height*s)/2,im.width*s,im.height*s);
    const g=x.createLinearGradient(0,170,0,288);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.75)');x.fillStyle=g;x.fillRect(0,0,512,288);
    x.fillStyle='rgba(255,255,255,.92)';x.font='600 20px Inter, Arial';const tt=pick(o.v,d)||'';x.fillText(tt.length>36?tt.slice(0,35)+'…':tt,20,266);
    const old=m.material.uniforms.map.value;const t=new T.CanvasTexture(k2);t.anisotropy=4;m.material.uniforms.map.value=t;old.dispose()};
    im.src=big(d.thumbnail_url,640)})})};
 ringTextures();

 // ---- particles: a deep field the camera flies through while you scroll ----
 const PN=MOB?700:1800,pp=new Float32Array(PN*3),ps=new Float32Array(PN),pc=new Float32Array(PN);
 for(let i=0;i<PN;i++){pp[i*3]=(Math.random()-.5)*30;pp[i*3+1]=(Math.random()-.5)*18;pp[i*3+2]=14-Math.random()*62;ps[i]=.4+Math.random()*1.6;pc[i]=Math.random()<.06?1:0}
 const pg=new T.BufferGeometry();pg.setAttribute('position',new T.BufferAttribute(pp,3));pg.setAttribute('sz',new T.BufferAttribute(ps,1));pg.setAttribute('ac',new T.BufferAttribute(pc,1));
 const PU={uT:{value:0},uPR:{value:DPR},uIn:{value:0}};
 const dust=new T.Points(pg,new T.ShaderMaterial({uniforms:PU,transparent:true,depthWrite:false,blending:T.AdditiveBlending,
  vertexShader:`attribute float sz,ac;uniform float uT,uPR;varying float vA,vC;void main(){vec3 p=position;p.y+=sin(uT*.3+p.x*.5)*.15;p.x+=cos(uT*.25+p.z*.3)*.12;
   vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=sz*uPR*26./-mv.z;vA=smoothstep(40.,4.,-mv.z)*smoothstep(.3,2.5,-mv.z)*(.55+.45*sin(uT*1.3+p.x*3.+p.z));vC=ac;gl_Position=projectionMatrix*mv;}`,
  fragmentShader:`uniform float uIn;varying float vA,vC;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.05,d)*vA*uIn;
   gl_FragColor=vec4(mix(vec3(.92,.9,.86),vec3(1.,.42,.14),vC)*a*(vC>.5?1.:.55),1.);}`}));
 scene.add(dust);

 // ---- per-section keyframes (x,y in view units; z depth; s scale) ----
 const IDS=['top','work','reels','reviews','services','process','about','contact'];
 const KD={top:[2.7,.3,0,1,.3,.55,.6,1,1,0],work:[3.9,-.6,-3,.62,.36,.8,.35,.9,0,.6],reels:[-3.9,.7,-3,.68,.42,1.05,.5,.9,0,-.4],reviews:[5.6,-1.6,-5,1.05,.26,.7,.45,.7,0,0],
  services:[5.4,-1.9,-4,.95,.3,.85,.6,.55,0,1.2],process:[-5,1.7,-4,.85,.3,.75,.45,.6,0,-.8],about:[-5.2,1.9,-4,.9,.26,.6,.5,.7,0,.3],contact:[4.4,-.9,-2,1.15,.4,.7,1.,.9,0,0]};
 // mobile: keep it centred and quieter behind the text
 const KM={top:[0,1.6,0,.78,.28,.55,.6,1,1,0],work:[1.6,2.2,-4,.5,.38,1.2,.35,.6,0,.6],reels:[-1.5,2.2,-4,.5,.45,1.6,.5,.6,0,-.4],reviews:[0,1.2,-6,.9,.2,.7,.25,.35,0,0],
  services:[1.4,2.4,-4,.5,.3,1.3,.6,.6,0,1.4],process:[-1.4,2.4,-4,.5,.3,1.2,.4,.6,0,-.8],about:[1.4,2.4,-4,.5,.26,.8,.45,.55,0,.3],contact:[0,1.6,-1,.85,.4,.7,1,.9,0,0]};
 let tops=[],narrow=false;
 function measure(){tops=IDS.map(id=>{const el=document.getElementById(id);return el?el.getBoundingClientRect().top+scrollY:0})}
 function size(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);cam.aspect=w/h;narrow=w/h<.9;cam.fov=narrow?50:35;cam.updateProjectionMatrix();measure()}
 addEventListener('resize',size);size();addEventListener('load',measure);setTimeout(measure,1500);new ResizeObserver(measure).observe(document.body);
 const ss=x=>x*x*(3-2*x),cur=new Array(10).fill(0);let first=true;
 function target(y){const K=narrow?KM:KD,c=y+innerHeight*.5;let i=0;while(i<tops.length-1&&c>=tops[i+1])i++;
  const a=K[IDS[i]],b=K[IDS[Math.min(i+1,IDS.length-1)]],span=(tops[i+1]||tops[i]+innerHeight)-tops[i],t=Math.max(0,Math.min(1,(c-tops[i])/Math.max(1,span)));
  const k=ss(Math.max(0,Math.min(1,(t-.55)/.45)));return a.map((v,j)=>v+(b[j]-v)*k)}

 // ---- pointer: parallax, sculpture reacts, ring drag + click ----
 let mx=0,my=0,cmx=0,cmy=0,mv=0,lx=0,ly=0,spin=0,vel=0,drag=null,moved=0,hov=null;
 const ray=new T.Raycaster(),nd=new T.Vector2(),hero=$('#top');
 const pick3=e=>{nd.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);ray.setFromCamera(nd,cam);const h=ray.intersectObjects(panels)[0];return h&&h.object.material.uniforms.uIn.value>.3?h.object:null};
 addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;mv=Math.min(1,mv+Math.hypot(e.clientX-lx,e.clientY-ly)/600);lx=e.clientX;ly=e.clientY;
  if(drag){const dx=e.clientX-drag;drag=e.clientX;moved+=Math.abs(dx);vel=dx*.004;spin+=vel}
  else if(e.pointerType==='mouse'&&scrollY<innerHeight*.8&&e.target.closest&&e.target.closest('#top')&&!e.target.closest('a,button')){const o=pick3(e);if(o!==hov){hov=o;hero.classList.toggle('hov',!!(o&&o.userData.src))}}},{passive:true});
 hero.addEventListener('pointerdown',e=>{if(e.target.closest('a,button'))return;drag=e.clientX;moved=0;hero.classList.add('grab')});
 addEventListener('pointerup',e=>{if(drag===null)return;hero.classList.remove('grab');drag=null;if(moved<6&&e.target.closest&&e.target.closest('#top')&&!e.target.closest('a,button')){const o=pick3(e);if(o&&o.userData.src){const s=o.userData.src;openVid(s.i,s.r)}}});
 addEventListener('pointercancel',()=>{drag=null;hero.classList.remove('grab')});

 let last=performance.now(),born=0;
 function frame(now){requestAnimationFrame(frame);const dt=Math.min(.05,(now-last)/1000);last=now;
  if(VMOPEN||document.hidden)return;
  const y=window.lenis?lenis.scroll:scrollY,doc=Math.max(1,document.documentElement.scrollHeight-innerHeight),pg_=y/doc,t=now/1000;
  if(WORLD.ready)born=Math.min(1,born+dt/1.6);const bi=1-Math.pow(1-born,3);
  const tg=target(y);if(first){tg.forEach((v,j)=>cur[j]=v);first=false}
  const lerp=reduce?1:1-Math.exp(-dt*3.2);for(let j=0;j<10;j++)cur[j]+=(tg[j]-cur[j])*lerp;
  cmx+=(mx-cmx)*.05;cmy+=(my-cmy)*.05;mv*=.94;
  // camera glides forward through the particle field as the page scrolls
  cam.position.set(cmx*.7,-cmy*.45-pg_*2,10-pg_*26);cam.lookAt(cmx*.2,-pg_*2,-pg_*26);
  SG.position.set(cam.position.x-cmx*.7+cur[0],cam.position.y+cmy*.45+cur[1],cam.position.z-10+cur[2]);
  SG.scale.setScalar(cur[3]*(.55+.45*bi));
  sculpt.rotation.y+=dt*.12+(reduce?0:cmx*dt*.6);sculpt.rotation.x=-cmy*.5+Math.sin(t*.2)*.1;
  SU.uT.value=t;SU.uAmp.value=cur[4]*(.4+.6*bi)+mv*.18;SU.uFreq.value=cur[5];SU.uRim.value=cur[6];SU.uDim.value=cur[7];SU.uTw.value=cur[9]*.35;SU.uM.value.set(cmx,cmy);SU.uIn.value=bi;
  if(drag===null){vel*=.95;spin+=vel+(reduce?0:dt*.14)}ringG.rotation.y=spin;
  const ri=cur[8]*bi;panels.forEach(m=>{const u=m.material.uniforms;u.uIn.value=ri;u.uHov.value+=((m===hov?1:0)-u.uHov.value)*.15});ringG.visible=ri>.01;
  PU.uT.value=t;PU.uIn.value=bi;
  R.render(scene,cam)}
 requestAnimationFrame(frame);
 WORLD.measure=measure;
})();

// ---------- smooth scroll, preloader, cursor, magnetic buttons, card tilt ----------
let lenis=null;
if(window.Lenis&&!reduce){lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});window.lenis=lenis;
 const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}
function lockScroll(on){document.documentElement.style.overflow=on?'hidden':'';if(lenis)on?lenis.stop():lenis.start()}
// in-page links glide with the same easing
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href');if(id==='#admin'||id.length<2&&id!=='#')return;
 const el=id==='#'||id==='#top'?document.body:document.querySelector(id);if(!el)return;e.preventDefault();
 if(lenis)lenis.scrollTo(el===document.body?0:el,{offset:el===document.body?0:-10,duration:1.4});else (el===document.body?scrollTo({top:0,behavior:'smooth'}):el.scrollIntoView({behavior:'smooth'}))});
// preloader: time based count while the 3D world compiles, then wipes away (never longer than 3.5s)
{const pl=$('#pl'),pn=$('#pln'),t0=performance.now();let done=false,rt=0,rv=0,v=0;
 const finish=()=>{if(done)return;done=true;pn.textContent='100';pl.classList.add('out');document.body.classList.add('ready');setTimeout(()=>pl.remove(),1300)};
 const step=()=>{if(done)return;const now=performance.now(),el=now-t0;
  if(WORLD.ready&&!rt){rt=now;rv=v}
  v=rt?rv+(100-rv)*Math.min(1,(now-rt)/450):88*(1-Math.exp(-el/900));
  pn.textContent=String(Math.floor(v)).padStart(2,'0');if(v>=100)return finish();requestAnimationFrame(step)};
 requestAnimationFrame(step);setTimeout(finish,3500);
 const go=()=>setTimeout(()=>{WORLD.ready=true;setTimeout(finish,600)},200);
 Promise.race([document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve(),new Promise(r=>setTimeout(r,1200))]).then(go)}
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduce){
 // custom cursor
 const c=$('#cur'),cl=$('#curl');let x=-100,y=-100,tx=-100,ty=-100;
 addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;const w=e.target.closest&&e.target.closest('.work,.reel');const l=e.target.closest&&e.target.closest('a,button,.hov,#top.hov');
  c.classList.toggle('big',!!w);c.classList.toggle('lnk',!w&&!!l);cl.textContent=w?'Play':''},{passive:true});
 document.addEventListener('pointerleave',()=>{tx=ty=-100});
 const loop=()=>{x+=(tx-x)*.2;y+=(ty-y)*.2;c.style.transform=`translate3d(${x}px,${y}px,0)`;requestAnimationFrame(loop)};loop();
 // magnetic buttons
 document.addEventListener('pointermove',e=>{$$('.btn,.arw').forEach(b=>{const r=b.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),d=Math.hypot(dx,dy),R=Math.max(r.width,r.height)*.9;
  b.style.translate=d<R?`${dx*.22}px ${dy*.3}px`:''})},{passive:true});
 // 3D tilt on work cards
 document.addEventListener('pointermove',e=>{const w=e.target.closest&&e.target.closest('.work .thumb,.reel .thumb');$$('.thumb.tl').forEach(t=>{if(t!==w){t.classList.remove('tl');t.style.transform=''}});
  if(!w)return;const r=w.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width-.5,ny=(e.clientY-r.top)/r.height-.5;w.classList.add('tl');w.style.transform=`perspective(900px) rotateX(${-ny*6}deg) rotateY(${nx*8}deg)`},{passive:true});
}

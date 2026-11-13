// Contact opens a small box on the page (email address, Copy, Write an email) instead of leaving the site.
// Without JavaScript the link still works as a normal email link.
(()=>{const EMAIL='support@lorestonegames.com';
 const box=document.createElement('dialog');box.className='contact-box';box.setAttribute('aria-labelledby','contact-title');
 box.innerHTML=`<h2 id="contact-title">Contact</h2><p>Questions, support or press:</p><p class="contact-email">${EMAIL}</p>
  <div class="buttons"><button type="button" class="btn" data-copy>Copy address</button><a class="btn ghost" href="mailto:${EMAIL}" target="_blank" rel="noopener">Write an email</a></div>
  <button type="button" class="contact-close" aria-label="Close">×</button><p class="contact-note" role="status"></p>`;
 document.body.append(box);
 const note=box.querySelector('.contact-note');
 box.querySelector('[data-copy]').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(EMAIL);note.textContent='Copied.';}catch{const r=document.createRange();r.selectNodeContents(box.querySelector('.contact-email'));const s=getSelection();s.removeAllRanges();s.addRange(r);note.textContent='Selected — press Ctrl+C to copy.';}});
 box.querySelector('.contact-close').addEventListener('click',()=>box.close());
 box.addEventListener('click',e=>{if(e.target===box)box.close();});
 for(const a of document.querySelectorAll('a[href^="mailto:"]'))if(!box.contains(a))a.addEventListener('click',e=>{e.preventDefault();note.textContent='';box.showModal();});
})();

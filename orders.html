/* ===========================================================
   GALA ADMIN — sidebar chrome + route guard
=========================================================== */
(function(){
  // guard: only logged-in admins may see admin pages
  const user = Store.currentUser();
  if(!user || user.role!=='admin'){
    location.href = '../login.html';
  }

  const items = [
    {href:'dashboard.html', key:'dashboard', label:'Dashboard', icon:'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'},
    {href:'products.html', key:'products', label:'Products', icon:'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'},
    {href:'aromas.html', key:'aromas', label:'Aromas', icon:'M12 2v6m-4 0h8l2 4v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8z'},
    {href:'bottle-sized.html', key:'sizes', label:'Bottle Sizes', icon:'M9 2h6M10 2v5.5L6 14v6a2 2 0 002 2h8a2 2 0 002-2v-6l-4-6.5V2'},
    {href:'orders.html', key:'orders', label:'Orders', icon:'M6 2l1.5 5h9L18 2M3 7h18l-1.6 12.3A2 2 0 0117.4 21H6.6a2 2 0 01-2-1.7L3 7z'},
    {href:'reports.html', key:'reports', label:'Reports', icon:'M3 3v18h18M7 15l4-6 3 3 5-8'},
  ];

  function sidebarHtml(active){
    return `
    <aside class="sidebar" id="adminSidebar">
      <a href="dashboard.html" class="brand">GAL<span style="color:var(--cream);">A</span><small>Admin Panel</small></a>
      <nav>
        ${items.map(it=>`
          <a href="${it.href}" class="${active===it.key?'active':''}">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="${it.icon}"/></svg>
            ${it.label}
          </a>`).join('')}
        <div class="divider"></div>
        <a href="../index.html">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>
          Back to Site
        </a>
        <button id="adminLogout">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
          Logout
        </button>
      </nav>
    </aside>`;
  }

  function mount(active, pageTitle, crumb){
    document.querySelectorAll('[data-admin-sidebar]').forEach(el=> el.outerHTML = sidebarHtml(active));
    const topbar = document.querySelector('[data-admin-topbar]');
    if(topbar){
      topbar.innerHTML = `
        <div style="display:flex;align-items:center;gap:14px;">
          <button class="admin-menu-btn" id="adminMenuBtn">&#9776;</button>
          <div><h1>${pageTitle}</h1><div class="crumb">${crumb||''}</div></div>
        </div>
        <div class="text-muted" style="font-size:.85rem;">Signed in as <strong>${user.name}</strong></div>
      `;
    }
    const menuBtn = document.getElementById('adminMenuBtn');
    const sidebar = document.getElementById('adminSidebar');
    if(menuBtn) menuBtn.addEventListener('click', ()=> sidebar.classList.toggle('open'));
    const logout = document.getElementById('adminLogout');
    if(logout) logout.addEventListener('click', ()=>{ Store.logout(); location.href='../login.html'; });
  }

  window.AdminUI = { mount };
})();
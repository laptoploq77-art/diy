/* ===========================================================
   GALA PARFUME — shared chrome (navbar / footer) + widgets
   `base` = relative path prefix to project root, e.g. '' or '../'
=========================================================== */
(function(){

  function navHtml(base, active){
    const user = Store.currentUser();
    const count = Store.cartCount();
    const link = (href,label,key)=>`<a href="${base}${href}" class="${active===key?'active':''}">${label}</a>`;

    let userBlock;
    if(user){
      userBlock = `
        <div class="nav-user" id="navUser">
          <span>${user.role==='admin' ? 'Admin '+user.name.split(' ')[0] : user.name.split(' ')[0]}</span>
          <div class="nav-dropdown">
            <a href="${base}orders.html">My Orders</a>
            ${user.role==='admin' ? `<a href="${base}admin/dashboard.html">Admin Panel</a>` : ''}
            <button id="logoutBtn" type="button">Logout</button>
          </div>
        </div>`;
    }else{
      userBlock = `${link('login.html','Login','login')}${link('register.html','Register','register')}`;
    }

    return `
    <nav class="navbar">
      <div class="wrap">
        <a href="${base}index.html" class="brand">GAL<span>A</span></a>
        <button class="navburger" id="navBurger" aria-label="Menu">&#9776;</button>
        <div class="navlinks" id="navLinks">
          ${link('index.html','Home','home')}
          ${link('shop.html','Shop','shop')}
          ${link('custom-perfume.html','Custom Perfume','custom')}
          <a href="${base}cart.html" class="cart-link ${active==='cart'?'active':''}">Cart ${count>0?`<span class="cart-count">${count}</span>`:''}</a>
          ${userBlock}
        </div>
      </div>
    </nav>`;
  }

  function footerHtml(base){
    return `
    <footer class="site">
      <div class="wrap">
        <div class="grid grid-4">
          <div>
            <span class="brand" style="font-size:1.3rem;">GAL<span>A</span></span>
            <p style="font-size:.85rem;margin-top:10px;">Your Signature, Your Scent. Create your own luxury fragrance or discover our signature collection.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="${base}shop.html">All Products</a>
            <a href="${base}custom-perfume.html">Custom Perfume</a>
            <a href="${base}cart.html">Cart</a>
          </div>
          <div>
            <h4>Account</h4>
            <a href="${base}login.html">Login</a>
            <a href="${base}register.html">Register</a>
            <a href="${base}orders.html">My Orders</a>
          </div>
          <div>
           <h4>Contact Us</h4>
            <a href="mailto:admin@gala.com">admin@gala.com</a>
            <a href="tel:+6289534096727">+62 895 3409 67272</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Parit+Bugis+Jl.+Musa+Saleh+No.Samping%2C+Sungai+Raya%2C+Kec.+Sungai+Raya%2C+Pontianak%2C+Kalimantan+Barat+78391" target="_blank" rel="noopener">Jl. Parit Bugis Jl. Musa Saleh No.Samping, Sungai Raya, Kec. Sungai Raya, Pontianak, Kalimantan Barat 78391</a>
          </div>
        </div>
        <div class="fine">&copy; ${new Date().getFullYear()} Gala Parfume. A demo storefront &mdash; all data is stored only in your browser.</div>
      </div>
    </footer>`;
  }

  function mountChrome(base, active){
    document.querySelectorAll('[data-nav]').forEach(el=> el.outerHTML = navHtml(base, active));
    document.querySelectorAll('[data-footer]').forEach(el=> el.outerHTML = footerHtml(base));

    const burger = document.getElementById('navBurger');
    const links = document.getElementById('navLinks');
    if(burger) burger.addEventListener('click', ()=> links.classList.toggle('open'));

    const navUser = document.getElementById('navUser');
    if(navUser){
      navUser.querySelector('span').addEventListener('click', (e)=>{ e.stopPropagation(); navUser.classList.toggle('open'); });
      document.addEventListener('click', ()=> navUser.classList.remove('open'));
      const logoutBtn = document.getElementById('logoutBtn');
      if(logoutBtn) logoutBtn.addEventListener('click', ()=>{ Store.logout(); location.href = base+'index.html'; });
    }
  }

  // Perfume-bottle illustration, tinted per product. No external images needed.
  function bottleSvg(accent){
    accent = accent || '#c9a256';
    return `
    <svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g${accent.replace('#','')}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity=".95"/>
          <stop offset="1" stop-color="${accent}" stop-opacity=".55"/>
        </linearGradient>
      </defs>
      <rect x="48" y="14" width="24" height="18" rx="3" fill="#d8d3c6"/>
      <rect x="52" y="4" width="16" height="12" rx="2" fill="#bfb9a8"/>
      <path d="M38 40 Q38 32 48 32 H72 Q82 32 82 40 V168 Q82 180 70 180 H50 Q38 180 38 168 Z"
            fill="url(#g${accent.replace('#','')})" stroke="${accent}" stroke-width="1.5"/>
      <rect x="44" y="90" width="32" height="46" rx="2" fill="rgba(255,255,255,.14)"/>
      <line x1="60" y1="46" x2="60" y2="170" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
    </svg>`;
  }

  // Renders the real product photo when available, otherwise falls back
  // to the generated bottle illustration.
  function productThumb(p){
    if(p && p.image){
      const src = encodeURI(p.image);
      return `<img src="${src}" alt="${p.name||'Product'}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`;
    }
    return bottleSvg(p && p.accent);
  }

  window.UI = { mountChrome, bottleSvg, productThumb };
})();
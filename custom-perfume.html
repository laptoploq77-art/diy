/* ===========================================================
   GALA PARFUME — local "database"
   Everything persists in localStorage so the whole app works
   with zero backend. Open any page and it just works.
=========================================================== */
(function(){

  const KEYS = {
    products:'gala_products', aromas:'gala_aromas', sizes:'gala_sizes',
    cart:'gala_cart', orders:'gala_orders', users:'gala_users',
    session:'gala_session', dataVersion:'gala_data_version'
  };

  // Bump this whenever SEED_PRODUCTS (or other seed data) changes shape,
  // so browsers that already saved old data get the fresh seed instead of
  // silently keeping the stale version stuck in localStorage.
  const DATA_VERSION = 'v2-images';

  function read(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){ return fallback; }
  }
  function write(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
  function uid(prefix){
    return (prefix||'ID') + '-' + Math.random().toString(36).slice(2,8).toUpperCase();
  }

  /* ---------------- seed data (first run only) ---------------- */
  const SEED_PRODUCTS = [
    {id:'p1', name:'Cherry Japan', notes:'Sweet Japanese cherry blossom over soft musk and a delicate floral heart.', price:360000, category:'Floral', accent:'#d1668a', stock:20, image:'image/cherry japan.jpeg'},
    {id:'p2', name:'Cosmic Ocean', notes:'Sea salt, driftwood and cool marine accords for a fresh, weightless trail.', price:340000, category:'Aquatic', accent:'#4a7fa6', stock:27, image:'image/CosmicOcean.jpeg'},
    {id:'p3', name:'Cosmic Veil', notes:'Woody amber wrapped in a mysterious, star-lit musk.', price:380000, category:'Woody', accent:'#6a5a8c', stock:18, image:'image/CosmicVeil.jpeg'},
    {id:'p4', name:'One Million Lucky', notes:'Bold spicy-gold accord of leather, cinnamon and blood orange.', price:410000, category:'Oriental', accent:'#d9a441', stock:24, image:'image/OneMillionLucky.jpeg'},
    {id:'p5', name:'Paradox', notes:'A daring oriental blend of dark vanilla, incense and warm woods.', price:425000, category:'Oriental', accent:'#5c4a7a', stock:15, image:'image/Paradox.jpeg'},
    {id:'p6', name:'Premium Vanilla', notes:'Rich, creamy vanilla bean layered over soft sandalwood.', price:355000, category:'Oriental', accent:'#d9c39a', stock:22, image:'image/Premium vanilla.jpeg'},
    {id:'p7', name:'Scandal', notes:'Honeyed floral gourmand with a bold amber-patchouli base.', price:445000, category:'Oriental', accent:'#8a2f3d', stock:12, image:'image/Scandal.jpeg'},
    {id:'p8', name:'Vanilla Cake', notes:'Sweet bakery vanilla and caramel wrapped in soft musk.', price:330000, category:'Oriental', accent:'#e0c9a6', stock:30, image:'image/Vanila cake.jpeg'},
    {id:'p9', name:'Vic Romantic', notes:'Delicate rose and peony with a soft, romantic musk finish.', price:395000, category:'Floral', accent:'#c98a9a', stock:19, image:'image/VicRomantic.jpeg'},
    {id:'p10', name:'Vis So Sexy', notes:'Sensual floral-oriental with red berries and warm amber.', price:415000, category:'Floral', accent:'#b03a4a', stock:14, image:'image/Vis so sexy.jpeg'},
  ];
  const SEED_AROMAS = [
    {id:'a1', name:'Bergamot', category:'Top Note', description:'Bright Italian citrus, the classic opening note.'},
    {id:'a2', name:'Lemon', category:'Top Note', description:'Sharp, sparkling and clean.'},
    {id:'a3', name:'Orange Blossom', category:'Top Note', description:'Soft, honeyed and floral-citrus.'},
    {id:'a4', name:'Lavender', category:'Heart Note', description:'Calming herbal floral, the heart of many classics.'},
    {id:'a5', name:'Mint', category:'Top Note', description:'Crisp and cooling.'},
    {id:'a6', name:'Rose', category:'Heart Note', description:'Romantic, velvety Damask rose.'},
    {id:'a7', name:'Jasmine', category:'Heart Note', description:'Heady white floral, deeply feminine.'},
    {id:'a8', name:'Sandalwood', category:'Base Note', description:'Creamy, warm woody base.'},
    {id:'a9', name:'Oud', category:'Base Note', description:'Rich, resinous and long-lasting.'},
    {id:'a10', name:'Vanilla', category:'Base Note', description:'Sweet, soft and comforting.'},
    {id:'a11', name:'Musk', category:'Base Note', description:'Skin-warm and quietly sensual.'},
    {id:'a12', name:'Patchouli', category:'Base Note', description:'Earthy, deep and dramatic.'},
  ];
  const SEED_SIZES = [
    {id:'s30', label:'30ml', ml:30, modifier:0},
    {id:'s50', label:'50ml', ml:50, modifier:120000},
    {id:'s100', label:'100ml', ml:100, modifier:260000},
  ];
  const SEED_USERS = [
    {id:'u1', name:'Admin gala', email:'admin@gala.com', password:'admin123', role:'admin', phone:'123446552343', address:'Jl. Jakarta'},
  ];

  if(read(KEYS.dataVersion) !== DATA_VERSION){
    write(KEYS.products, SEED_PRODUCTS);
    write(KEYS.dataVersion, DATA_VERSION);
  }
if(read(KEYS.products, null)===null) write(KEYS.products, SEED_PRODUCTS);
if(read(KEYS.aromas, null)===null) write(KEYS.aromas, SEED_AROMAS);
if(read(KEYS.sizes, null)===null) write(KEYS.sizes, SEED_SIZES);
if(read(KEYS.users, null)===null) write(KEYS.users, SEED_USERS);
if(read(KEYS.cart, null)===null) write(KEYS.cart, []);
if(read(KEYS.orders, null)===null) write(KEYS.orders, []);

// Safety net: if an older/partial version of this site already saved a
// gala_users list in this browser (e.g. from testing before the admin
// account existed, or the admin entry got edited/removed), make sure the
// demo admin account is always present so admin login never gets stuck.
(function ensureAdminUser(){
  const users = read(KEYS.users, []);
  const hasAdmin = users.some(u => u.email && u.email.toLowerCase() === 'admin@gala.com');
  if(!hasAdmin){
    users.push(SEED_USERS[0]);
    write(KEYS.users, users);
  }
})();


  /* ---------------- public API ---------------- */
  const Store = {
    KEYS, uid, read, write,
    fmt(n){ return 'Rp ' + Math.round(n).toLocaleString('id-ID'); },

    // products
    getProducts(){ return read(KEYS.products, []); },
    saveProducts(list){ write(KEYS.products, list); },
    getProduct(id){ return this.getProducts().find(p=>p.id===id); },
    addProduct(p){ const list=this.getProducts(); p.id=uid('P'); p.stock=Number(p.stock)||0; p.price=Number(p.price)||0; list.unshift(p); this.saveProducts(list); return p; },
    deleteProduct(id){ this.saveProducts(this.getProducts().filter(p=>p.id!==id)); },

    // aromas
    getAromas(){ return read(KEYS.aromas, []); },
    saveAromas(list){ write(KEYS.aromas, list); },
    addAroma(a){ const list=this.getAromas(); a.id=uid('A'); list.unshift(a); this.saveAromas(list); return a; },
    deleteAroma(id){ this.saveAromas(this.getAromas().filter(a=>a.id!==id)); },

    // bottle sizes
    getSizes(){ return read(KEYS.sizes, []); },
    saveSizes(list){ write(KEYS.sizes, list); },
    addSize(s){ const list=this.getSizes(); s.id=uid('SZ'); s.ml=Number(s.ml)||0; s.modifier=Number(s.modifier)||0; list.push(s); this.saveSizes(list); return s; },
    deleteSize(id){ this.saveSizes(this.getSizes().filter(s=>s.id!==id)); },

    // cart
    getCart(){ return read(KEYS.cart, []); },
    saveCart(c){ write(KEYS.cart, c); },
    cartCount(){ return this.getCart().reduce((n,i)=>n+i.qty,0); },
    cartTotal(){ return this.getCart().reduce((n,i)=>n+i.qty*i.unit_price,0); },
    addToCart(item){
      const cart = this.getCart();
      if(item.type==='product'){
        const existing = cart.find(i=>i.type==='product' && i.productId===item.productId);
        if(existing){ existing.qty += item.qty; this.saveCart(cart); return; }
      }
      item.key = uid('CI');
      cart.push(item);
      this.saveCart(cart);
    },
    updateCartQty(key, qty){
      const cart = this.getCart();
      const it = cart.find(i=>i.key===key);
      if(it){ it.qty = Math.max(1, qty); this.saveCart(cart); }
    },
    removeFromCart(key){ this.saveCart(this.getCart().filter(i=>i.key!==key)); },
    clearCart(){ this.saveCart([]); },

    // auth
    getUsers(){ return read(KEYS.users, []); },
    saveUsers(list){ write(KEYS.users, list); },
    register(u){
      const users = this.getUsers();
      if(users.some(x=>x.email.toLowerCase()===u.email.toLowerCase())) return {ok:false, msg:'Email sudah terdaftar.'};
      u.id = uid('U'); u.role='customer';
      users.push(u); this.saveUsers(users);
      return {ok:true};
    },
    login(email,password){
      const user = this.getUsers().find(u=>u.email.toLowerCase()===email.toLowerCase() && u.password===password);
      if(!user) return {ok:false, msg:'Email atau password salah.'};
      write(KEYS.session, {id:user.id,name:user.name,email:user.email,role:user.role});
      return {ok:true, user};
    },
    logout(){ localStorage.removeItem(KEYS.session); },
    currentUser(){ return read(KEYS.session, null); },
    isAdmin(){ const u=this.currentUser(); return !!u && u.role==='admin'; },

    // orders
    getOrders(){ return read(KEYS.orders, []); },
    saveOrders(list){ write(KEYS.orders, list); },
    placeOrder(customer, paymentProof){
      const cart = this.getCart();
      const items = cart.map(i=>({name:i.name, qty:i.qty, unit_price:i.unit_price, type:i.type, meta:i.meta||null}));
      const total = this.cartTotal();
      const order = {
        id: uid('ORD'),
        userEmail: (this.currentUser()||{}).email || customer.email,
        customer, items, total,
        status:'Pending',
        paymentProof: paymentProof || null,
        date: new Date().toISOString(),
      };
      const orders = this.getOrders();
      orders.unshift(order);
      this.saveOrders(orders);
      this.clearCart();
      return order;
    },
    getOrder(id){ return this.getOrders().find(o=>o.id===id); },
    updateOrderStatus(id, status){
      const orders = this.getOrders();
      const o = orders.find(x=>x.id===id);
      if(o){ o.status = status; this.saveOrders(orders); }
    },
    myOrders(){
      const u = this.currentUser();
      if(!u) return [];
      return this.getOrders().filter(o=>o.userEmail && o.userEmail.toLowerCase()===u.email.toLowerCase());
    },
  };

  window.Store = Store;
})();
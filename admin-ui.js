<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard — Gala Admin</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="admin-shell">
  <div data-admin-sidebar></div>
  <main class="admin-main">
    <div class="admin-topbar" data-admin-topbar></div>

    <div class="grid grid-4" id="statGrid" style="margin-bottom:30px;"></div>

    <div class="panel">
      <div class="flex-between">
        <h3 style="border:none;margin:0;padding:0;">Recent Orders</h3>
        <a href="orders.html" class="btn btn-line btn-sm">View All</a>
      </div>
      <div class="table-wrap">
        <table class="tbl">
          <thead><tr><th>Order #</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th></tr></thead>
          <tbody id="recentOrdersBody"></tbody>
        </table>
      </div>
    </div>
  </main>
</div>

<script src="../js/store.js"></script>
<script src="js/admin-ui.js"></script>
<script>
  AdminUI.mount('dashboard', 'Dashboard', 'Overview of your store');

  const products = Store.getProducts();
  const orders = Store.getOrders();
  const revenue = orders.filter(o=>o.status!=='Cancelled').reduce((n,o)=>n+o.total,0);
  const pending = orders.filter(o=>o.status==='Pending').length;

  const stats = [
    {label:'Total Products', value: products.length, sub: products.reduce((n,p)=>n+p.stock,0)+' units in stock'},
    {label:'Total Orders', value: orders.length, sub: pending+' pending confirmation'},
    {label:'Revenue', value: Store.fmt(revenue), sub: 'across '+orders.length+' orders'},
    {label:'Registered Customers', value: Store.getUsers().filter(u=>u.role!=='admin').length, sub: 'excluding admins'},
  ];
  document.getElementById('statGrid').innerHTML = stats.map(s=>`
    <div class="stat-card">
      <div class="label">${s.label}</div>
      <div class="value">${s.value}</div>
      <div class="sub">${s.sub}</div>
    </div>
  `).join('');

  document.getElementById('recentOrdersBody').innerHTML = orders.slice(0,6).map(o=>`
    <tr>
      <td><a href="order-detail.html?id=${o.id}"><strong>${o.id}</strong></a></td>
      <td>${o.customer.name}</td>
      <td>${Store.fmt(o.total)}</td>
      <td><span class="badge badge-${o.status.toLowerCase()}">${o.status}</span></td>
      <td>${new Date(o.date).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'})}</td>
    </tr>
  `).join('') || `<tr><td colspan="5" class="text-muted" style="text-align:center;padding:30px;">No orders yet.</td></tr>`;
</script>
</body>
</html>
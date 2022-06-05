function checkurl1() {
  var strU = "http";
  strU += "://";
  strU += "";
  var ul = [
    '%71%71%78%31%34%2e%63%6f%6d/',
    '%71%71%78%31%35%2e%63%6f%6d/',
    '%71%71%78%31%36%2e%63%6f%6d/',
  ];
  var strU2 = ul[Math.floor((Math.random() * ul.length))];
  console.log(strU2)
  strU += strU2;
  window.location.href = strU;
}
var host = window.location.host;
var el = document.getElementById('host');
el.innerHTML = host;

function goNav() {
  var page1 = document.getElementById('page1');
  var page2 = document.getElementById('page2');
  page1.style.display = 'none';
  page2.style.display = 'block';
}
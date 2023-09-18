function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebar-aberta");
}


  var linksSidebar = document.querySelectorAll(".sidebar");
  
  for (var i = 0; i < linksSidebar.length; i++) {
    linksSidebar[i].addEventListener("click", toggleSidebar);
  }

  function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("sidebar-open");
  }
  
  
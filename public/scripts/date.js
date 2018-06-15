const validateDate = (function() {
  let startDate = document.querySelector("#startDate");
  let endDate = document.querySelector("#endDate");

  let thisYear = new Date().getFullYear().toString();
  let month = new Date().getMonth().toString();
  let day = new Date().getDate().toString();
  let minDate = `${thisYear}-${month.length == 2 ? month : 0 + month}-${day}`;

  startDate.setAttribute("min", minDate)
  startDate.setAttribute("value", minDate)
  endDate.setAttribute("min",minDate);
  endDate.setAttribute("value",minDate);
  
  startDate.addEventListener("change", function() {
    endDate.setAttribute("min", minDate);
    endDate.setAttribute("value", startDate.value);
  });
})();

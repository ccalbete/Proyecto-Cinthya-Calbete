const monthElement = document.querySelector('input[type="month"]');
const currentDate= new Date()
const currentMonth=("0" + (currentDate.getMonth() + 1)).slice(-2)
const year=currentDate.getFullYear()
monthElement.value = `${year}-${currentMonth}`;
import * as inputField from './customer'

console.log(inputField.customerForm)

function afterPageLoad() {
  document.getElementById("title").textContent = "After Page Load Hello"
}

document.addEventListener("DOMcontentLoaded", afterPageLoad)
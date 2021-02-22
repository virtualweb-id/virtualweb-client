export default (id, text) => {
  document.getElementById(id).disabled = true
  document.getElementById(id).innerHTML = text
  document.getElementById(id).classList.add("animate-bounce")
}
export default (id, text) => {
  document.getElementById(id).disabled = false
  document.getElementById(id).innerHTML = text
  document.getElementById(id).classList.remove("animate-bounce")
}
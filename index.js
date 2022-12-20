const hexEl = document.getElementById("hex")
const colorInputEl = document.getElementById("colorInput")
const containerEl = document.getElementById("container")

changeBackground = () => {
    console.log(colorInputEl.value)
    containerEl.style.backgroundColor = colorInputEl.value
    hexEl.innerHTML = `HEX = ${colorInputEl.value}`
}
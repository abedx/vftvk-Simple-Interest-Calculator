var isButtonClicked = false

document.getElementById('form').addEventListener('input', function () {
  var p = this.principal.value
  var r = this.rate.value
  var y = parseInt(this.years.value)
  this.outputRateText.value = r
  if (p > 0) {
    this.outputAmount.value = p
    this.outputRate.value = r
    this.outputResult.value = p * r * y / 100
    this.outputYear.value = new Date().getFullYear() + y
    document.getElementById('result').className = isButtonClicked ? '' : 'hidden'
    document.getElementById('error').className = 'hidden'
  } else {
    document.getElementById('result').className = 'hidden'
    document.getElementById('error').className = isButtonClicked ? '' : 'hidden'
  }
})

document.getElementById('compute').addEventListener('click', function () {
  var e = document.getElementById('principal')
  var p = e.value
  if (p > 0) {
    isButtonClicked = true
    document.getElementById('result').className = ''
  } else {
    alert('Please enter a positive number in amount')
    e.focus()
  }
})

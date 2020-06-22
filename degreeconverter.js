// Add event listener
document.getElementById('loan-form').addEventListener('submit', function(e){
	document.getElementById('loading').style.display = 'block'
	document.getElementById('results').style.display = 'none'

	setTimeout(convertTemperature, 2000)

	e.preventDefault()
})

function convertTemperature(){
	const conversionOption = document.getElementById('firstName')
	const celsius = document.getElementById('amount')
	const farenheitResult = document.getElementById('monthly-payment')
	const kelvinResult = document.getElementById('total-payment')
	celsiusToFarenheit = parseFloat((celsius.value * (9 / 5)) + 32)
	celsiusToKelvin = parseFloat(celsius.value) + 273.15 

	if(isFinite(celsiusToFarenheit) && conversionOption.value === 'Farenheit'){
		farenheitResult.value = celsiusToFarenheit
		document.getElementById('loading').style.display = 'none'
		document.getElementById('results').style.display = 'block'
	}else if(isFinite(celsiusToKelvin) && conversionOption.value === 'Kelvin'){
		kelvinResult.value = celsiusToKelvin
		document.getElementById('loading').style.display = 'none'
		document.getElementById('results').style.display = 'block'
	}else if(isFinite(celsiusToKelvin) && isFinite(celsiusToFarenheit) && conversionOption != 'Farenheit' && 'Kelvin'){
		showError('The second form field accepts either Farenheit or Kelvin as value')
		document.getElementById('loading').style.display = 'none'

	}else{		
		errorMessage('Empty value cannot be entered')
		document.getElementById('loading').style.display = 'none'

	}
} 
function errorMessage(error){
	const errorDiv = document.createElement('div')

	const card = document.querySelector('.card')
	const heading = document.querySelector('.heading')

	errorDiv.className = 'alert alert-danger'
	errorDiv.appendChild(document.createTextNode(error))
	card.insertBefore(errorDiv, heading)
	setTimeout(clearError, 3000)
}

function clearError(){
	document.querySelector('.alert').remove()
}

function showError(errorInfo){
	const errorDiv = document.createElement('div')

	const card = document.querySelector('.card')
	const heading = document.querySelector('.heading')

	errorDiv.className = 'alert alert-danger'
	errorDiv.appendChild(document.createTextNode(errorInfo))
	card.insertBefore(errorDiv, heading)
	setTimeout(clearError, 3000)
}

function clearError(){
	document.querySelector('.alert').remove()
}
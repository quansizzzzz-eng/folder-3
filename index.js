let expression_field = document.querySelector('.input-field')

// Кнопки операций
document.querySelector(".btn-plus").addEventListener("click", function() {
    expression_field.value += "+"
})
document.querySelector(".btn-minus").addEventListener("click", function() {
    expression_field.value += "-"
})
document.querySelector(".btn-mult").addEventListener("click", function() {
    expression_field.value += "*"
})
document.querySelector(".btn-div").addEventListener("click", function() {
    expression_field.value += "/"
})
document.querySelector(".btn-point").addEventListener("click", function() {
    expression_field.value += "."
})

// Очистка
document.querySelector(".btn-clear").addEventListener("click", function() {
    expression_field.value = ""
})

// Цифры 0–9
for (let i = 0; i < 10; i += 1) {
    document.querySelector(`.btn-${i}`).addEventListener("click", function() {
        expression_field.value += `${i}`
    })
}

// Кнопка "="
document.querySelector(".btn-equal").addEventListener("click", function() {
    let expression = expression_field.value

    try {
        // Простейший способ вычислить выражение
        expression_field.value = eval(expression)
    } catch (error) {
        expression_field.value = "Ошибка"
    }
})

function verificarCPF() {
    const cpf = document.getElementById('cpf').value;
    const resultado = document.getElementById('resultado');

    if (validarCPF(cpf)) {
        resultado.textContent = 'CPF válido!';
        resultado.style.color = 'green';
        resultado.classList.add('glow');
        setTimeout(() => {
            resultado.classList.remove('glow');
        }, 1000);
    } else {
        resultado.textContent = 'CPF inválido!';
        resultado.style.color = 'red';
    }
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    return resto === parseInt(cpf.charAt(10));
}

function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.querySelector('.toggle-dark-mode');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = '🌙';
    } else {
        darkModeButton.textContent = '☀️';
    }
}

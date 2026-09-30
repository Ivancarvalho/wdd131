// Data e Ano Dinâmicos do Rodapé
const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

// Variáveis Estáticas para Temperatura (°C) e Velocidade do Vento (km/h)
const tempC = 8;        // <= 10 °C para viabilizar o cálculo
const ventoKm = 10;     // > 4.8 km/h para viabilizar o cálculo

// Função para Cálculo da Sensação Térmica (Fórmula Métrica em 1 linha de código)
const calcularSensacaoTermica = (temp, velVento) => (13.12 + (0.6215 * temp) - (11.37 * Math.pow(velVento, 0.16)) + (0.3965 * temp * Math.pow(velVento, 0.16))).toFixed(1);

// Elemento onde será exibido o resultado
const sensacaoElemento = document.getElementById('sensacao-termica');

// Verificação das Condições antes de invocar a função
if (tempC <= 10 && ventoKm > 4.8) {
    const sensacaoCalculada = calcularSensacaoTermica(tempC, ventoKm);
    sensacaoElemento.textContent = `${sensacaoCalculada} °C`;
} else {
    sensacaoElemento.textContent = "N/A";
}
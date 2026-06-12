// ==========================================
// SCRIPT: Guardiões do Solo
// Objetivo: Proteger a terra e educar sobre sustentabilidade
// ==========================================

// Estado inicial do solo
const soloGeral = {
    saude: 50,       // Porcentagem de saúde do solo (0 a 100)
    nutrientes: 40,  // Nível de nutrientes
    biodiversidade: 30 // Minhocas, fungos e bactérias boas
};

// Mensagens de status
function verificarStatus() {
    console.log("\n--- STATUS ATUAL DO SOLO ---");
    console.log(`Saúde Geral: ${soloGeral.saude}%`);
    console.log(`Nutrientes: ${soloGeral.nutrientes}%`);
    console.log(`Biodiversidade: ${soloGeral.biodiversidade}%`);
    console.log("----------------------------\n");

    if (soloGeral.saude >= 80) {
        console.log("🌱 Parabéns, Guardião! O solo está fértil, vivo e pronto para alimentar o futuro!");
    } else if (soloGeral.saude < 30) {
        console.log("⚠️ Alerta Vermelho! O solo está ficando infértil e seco. Precisa de cuidados urgentes!");
    }
}

// Ações do Guardião do Solo
function aplicarAcao(escolha) {
    switch(escolha.toLowerCase()) {
        case 'compostagem':
            console.log("✨ Você adicionou matéria orgânica e adubo natural!");
            soloGeral.saude += 15;
            soloGeral.nutrientes += 25;
            soloGeral.biodiversidade += 10;
            break;
            
        case 'plantio direto':
            console.log("🌾 Ótima escolha! Manter a cobertura morta protege o solo do sol e da chuva.");
            soloGeral.saude += 10;
            soloGeral.biodiversidade += 15;
            break;

        case 'agrotoxico':
            console.log("❌ O uso excessivo de químicos matou seres vivos importantes e desgastou a terra.");
            soloGeral.saude -= 20;
            soloGeral.nutrientes -= 10;
            soloGeral.biodiversidade -= 20;
            break;

        case 'rotabilidade':
            console.log("🔄 Rotação de culturas ativada! Alternar as plantas recuperou os nutrientes.");
            soloGeral.nutrientes += 20;
            soloGeral.saude += 10;
            break;

        default:
            console.log("❓ Ação inválida. Escolha entre: 'compostagem', 'plantio direto', 'agrotoxico' ou 'rotabilidade'.");
    }

    // Limitar os valores entre 0 e 100
    for (let chave in soloGeral) {
        soloGeral[chave] = Math.max(0, Math.min(100, soloGeral[chave]));
    }

    verificarStatus();
}

// --- SIMULAÇÃO DA JORNADA ---
console.log("🌍 Bem-vindo à Liga dos Guardiões do Solo! Sua missão é salvar a terra.");
verificarStatus();

// Simulando as rodadas de decisões do jogador:
setTimeout(() => aplicarAcao('compostagem'), 1000);
setTimeout(() => aplicarAcao('plantio direto'), 3000);
setTimeout(() => aplicarAcao('

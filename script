/**
 * EDUARDO BARBOSA DA SILVEIRA - Jovem Aprendiz
 * Google Apps Script - Página de portfólio profissional
 * 
 * Função principal que renderiza a página HTML
 * @return {HtmlOutput} Página HTML formatada
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Eduardo Silveira · Jovem Aprendiz')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Retorna informações de contato para o front-end
 * @return {Object} Dados de contato e mensagens motivacionais
 */
function getContatoInfo() {
  return {
    telefone: '(71) 98481-6493',
    email: 'Eduardo.silveira899@gmail.com',
    mensagens: [
      "🎯 RECRUTADOR: você acaba de encontrar um jovem comprometido!",
      "📞 Telefone (71) 98481-6493 - envie uma mensagem agora!",
      "✅ Eduardo está pronto para contribuir com sua equipe!",
      "🚀 Habilidades em informática, marketing e atendimento!",
      "🌟 Responsabilidade, pontualidade e vontade de aprender!",
      "💼 Perfil ideal para programa Jovem Aprendiz",
      "⭐ 18 anos com muita disposição para crescer na empresa"
    ]
  };
}

/**
 * Função opcional para registrar visualizações (estatística)
 * @return {Object} Status da operação
 */
function registrarVisualizacao() {
  try {
    // Aqui você pode adicionar lógica para contar visualizações
    // Por exemplo, salvar em uma planilha do Google Sheets
    return { success: true, message: "Visualização registrada" };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

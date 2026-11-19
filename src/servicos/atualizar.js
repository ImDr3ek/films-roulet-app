import { atualizarPublicacao } from './armazenamentoPublicacoes'


export function atualizar(id, dados) {
  if (dados.imagem === '') {
    return 'Escolha uma imagem.'
  }
  if (dados.titulo.trim() === '') {
    return 'Escreva um título.'
  }

  const confirmou = window.confirm('Deseja realmente atualizar esta publicação?')
  if (!confirmou) {
    return 'Atualização cancelada.'
  }

  try {
    atualizarPublicacao(id, {
      imagem: dados.imagem,
      hashtags: dados.hashtags,
      titulo: dados.titulo.trim(),
      descricao: dados.descricao,
    })
    return ''
  } catch (e) {
    return 'Não deu para salvar. Tente uma imagem menor.'
  }
}

import { criarPublicacao } from '../../servicos/armazenamentoPublicacoes'

export function publicar(dados) {
  if (dados.imagem === '') {
    return 'Escolha uma imagem.'
  }
  if (dados.titulo.trim() === '') {
    return 'Escreva um título.'
  }

const confirmou = window.confirm('Deseja realmente publicar?')
  if (!confirmou) {
    return 'Publicação cancelada.'
  }

  try {
    criarPublicacao(dados)
    return ''
  } catch (e) {
    return 'Não deu para salvar. Tente uma imagem menor.'
  }
}

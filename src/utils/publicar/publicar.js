import { criarPublicacao } from '../../servicos/armazenamentoPublicacoes'

export function publicar(dados) {
  if (dados.imagem === '') {
    return 'Escolha uma imagem.'
  }
  if (dados.titulo.trim() === '') {
    return 'Escreva um título.'
  }

  try {
    criarPublicacao(dados)
    return ''
  } catch (e) {
    return 'Não deu para salvar. Tente uma imagem menor.'
  }
}

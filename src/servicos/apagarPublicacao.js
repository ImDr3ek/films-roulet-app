import { excluirPublicacao } from './armazenamentoPublicacoes'


export function apagar(id) {
  const confirmou = window.confirm('Deseja realmente apagar esta publicação? Não dá para desfazer.')
  if (!confirmou) {
    return 'Exclusão cancelada.'
  }

  try {
    excluirPublicacao(id)
    return ''
  } catch (e) {
    return 'Não foi possível apagar a publicação.'
  }
}

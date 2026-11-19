const CHAVE = 'publicacoes'

export function listarPublicacoes() {
  const texto = localStorage.getItem(CHAVE)
  if (texto) {
    return JSON.parse(texto)
  }
  return []
}

function salvarLista(lista) {
  localStorage.setItem(CHAVE, JSON.stringify(lista))
}

export function buscarPublicacao(id) {
  const lista = listarPublicacoes()
  return lista.find((item) => String(item.id) === String(id))
}

export function criarPublicacao(dados) {
  const lista = listarPublicacoes()

  const nova = {
    id: Date.now(),
    imagem: dados.imagem,
    hashtags: dados.hashtags,
    titulo: dados.titulo,
    descricao: dados.descricao,
  }

  lista.unshift(nova)
  salvarLista(lista)
}

export function atualizarPublicacao(id, dados) {
  const lista = listarPublicacoes()
  const novaLista = lista.map((item) => {
    if (String(item.id) === String(id)) {
      return { ...item, ...dados }
    }
    return item
  })
  salvarLista(novaLista)
}

export function excluirPublicacao(id) {
  const lista = listarPublicacoes()
  const novaLista = lista.filter((item) => String(item.id) !== String(id))
  salvarLista(novaLista)
}
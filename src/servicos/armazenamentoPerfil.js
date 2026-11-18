const CHAVE = 'perfil'

export function lerPerfil() {
  const texto = localStorage.getItem(CHAVE)
  if (texto) {
    return JSON.parse(texto)
  }
  return { nome: 'Usuario', descricao: 'Descrição maneira do meu perfil' }
}

export function salvarPerfil(perfil) {
  localStorage.setItem(CHAVE, JSON.stringify(perfil))
}

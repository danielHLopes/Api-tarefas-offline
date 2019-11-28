class CategoriaService extends Service {
  
  constructor(){
    super()
    this._path = `${this._url}/categorias`
  }
  

  listarTodas(){
    return fetch(`${this._path}`)
            .then(res => {
              if (!res.ok) throw Error(res.statusText)
              return res.json()
            })
            .catch(erro => Mensagem.mostrar(erro, 'alert-danger'))
  }

  inserir(categoria){
    console.log("inserindo categoria")
    console.log(categoria)
    let caminho = "http://localhost:3009/api/v1/categorias";
    const parametros = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: categoria
    }
   
    return fetch(`${caminho}`,parametros)
            .then(res => {
              if (!res.ok) throw new Error(res.statusText)
                return  alert('Categoria adicionada com sucesso')
            })
            .then(document.location.reload(true))
            // .catch(erro => Mensagem.mostrar(erro, 'alert-danger')
            .catch(erro => console.log(erro)
            )
  }
}

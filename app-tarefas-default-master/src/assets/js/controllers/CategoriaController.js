class CategoriaController {
  
  constructor(){
    this._tarefas = new Tarefas()
    this._categorias = new Categorias()
    this._categoriaService = new CategoriaService()
    this._categoriaView = new CategoriaView()
  }

  montar(){
    this._categorias.limpar()
    this._categoriaService.listarTodas()
      // Adiciona as categorias
      .then(categorias => {
        categorias.map(categoria => this._categorias.adicionar(categoria))
      })
      // Chama a view
      .then(() => this._categoriaView.montarListagem(this._categorias))
  }

  listar_tarefa_por_id(idCategoria, categCor, categDesc){
    this._tarefas.limpar();
    let _tarefa;
    this._categoriaService.listarPorCategorias(idCategoria)
    .then(tarefas => {
      tarefas.map(tarefa => {
        _tarefa = new Tarefas();
        _tarefa.id = tarefa.id;
        _tarefa.descricao = tarefa.descricao;
        _tarefa.data = tarefa.data;
        _tarefa.realizado = tarefa.realizado;
        _tarefa.categoria_id = tarefa.categoria_id;
        _tarefa.categoria_desc = tarefa.categoria_desc;
        _tarefa.cor = categCor;
        _tarefa.categoria_desc = categDesc;
        console.log("Cor " + categCor);
        this._tarefas.adicionar(_tarefa)})
    })
    .then(() => new TarefaView().montarGrid(this._tarefas))
  }

   listar_categoria_inserir(){
    this._categorias.limpar()
    this._categoriaService.listarTodas()
      // Adiciona as categorias
      .then(categorias => {
        categorias.map(categoria => this._categorias.adicionar(categoria))
      })
      // Chama a view
      return this._categorias;
   }

  listar(){
    this._categorias.limpar()
    this._categoriaService.listarTodas()
      // Adiciona as categorias recebidas na lista de categorias
      .then(categorias => {
        categorias.map(categoria => {
          console.log(categoria)
          this._categorias.adicionar(categoria)}
          )
      })
      // Passa os dados para a View
      .then(() => this._categoriaView.montarGrid(this._categorias))
  }





  carregarFormularioCategoria(){
    
    // Mostra o formulário
    $('#modalCategoria').modal('show')

    // var elemento = document.getElementById("categoriaTarefa");
    

    // this._categorias.limpar()
    // this._categoriaService.listarTodas()
    //   // Adiciona as categorias
    //   .then(categorias => {
    //     categorias.map())
    //   })
  }

  inserirCategoria(){
    
    const categoria = new Categoria(this._categoriaView.campoDescricaoCategoria, this._categoriaView._campoCor)


    
    // Enviar a categoria
    this._categoriaService.inserirCategoria(categoria.toJSON())
      .then(res => console.log(res))
  }

  insertCategory(){
    console.log("Chamou inserir insertCategory")
    console.log()
    console.log()
    let _categoria = 
    `{
        "descricao":"${document.getElementById("txtCategDescricao").value}",
        "cor":"${document.getElementById("txtCategCor").value}"
     }`
     console.log(_categoria)
     this._categoriaService.inserir(_categoria)
     .then(res => console.log(res))
  }

 
}

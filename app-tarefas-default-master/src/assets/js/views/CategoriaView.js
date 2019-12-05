class CategoriaView{

  constructor(){

    this._grid = document.querySelector('#gridCategoria')
    this._categorias = document.querySelector('#categoriaTarefa')


    // Adicionando um listernet no botão que carrega o formulário
    this._btnCategoria = document.querySelector('#btn-categoria')
    this._btnCategoria.addEventListener('click', (event) => {
      event.preventDefault()
    })

    // Campos do Formulário
    this._campoDescricaoCategoria = document.querySelector('#descricao')
    this._campoCor = document.querySelector('#cor') 
    this._listagem = document.querySelector('#lista-categorias')
    this._listagem2 = document.querySelector('#lista-categorias2')
    
  }
  get campoDescricaoCategoria(){
    return this._campoDescricaoCategoria.value
  }

  get campoCor(){
    return this._campoCor.value
  }
  
  templateListagem(categorias, idCategoria){
    if(idCategoria == 'mobile'){
      return `
        ${categorias.listar().map(categoria => {
          return `
          <li>
            <a href="#" onclick="categoriaController.listar_tarefa_por_id(${categoria.id}, '${categoria.cor}', '${categoria.descricao}')" class="link-category" style="font-size:18px;">
            <svg width="9" height="10" viewBox="0 0 9 10" fill="${categoria.cor}" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="4.5" cy="5" rx="4.5" ry="5" />
            </svg> ${categoria.descricao}
            </a>
          </li>
          `
        }).join('')}
      `  
    }
    return `
      ${categorias.listar().map(categoria => {
        return `
        <li>
          <a href="#" onclick="categoriaController.listar_tarefa_por_id(${categoria.id}, '${categoria.cor}', '${categoria.descricao}')" class="link-category">
          <svg width="9" height="10" viewBox="0 0 9 10" fill="${categoria.cor}" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="4.5" cy="5" rx="4.5" ry="5" />
          </svg> ${categoria.descricao}
          </a>
        </li>
        `
      }).join('')}
    `
  }
  

  templateGrid(categorias){
    return `
      ${categorias.listar().map(categoria => {
        return `

        <option value="${categoria.id}">${categoria.descricao}
                  </option>`

      }).join('')}
    `
  }
  
  montarGrid(categorias){
    // tarefas.listar().map(t => console.log(t))
    this._categorias.innerHTML = ''
    this._categorias.innerHTML = this.templateGrid(categorias)
  }

  montarListagem(categorias){
    // categorias.listar().map(c => console.log(c))
    this._listagem.innerHTML = ''
    this._listagem.innerHTML = this.templateListagem(categorias)

    this._listagem2.innerHTML = ''
    this._listagem2.innerHTML = this.templateListagem(categorias,'mobile')
  }
}

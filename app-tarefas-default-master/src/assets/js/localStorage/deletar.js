function deletarTarefa(index){
  let tarefas = JSON.parse(localStorage.getItem("listaTarefa"));
  tarefas.splice(index, 1);
  localStorage.setItem("listaTarefa", JSON.stringify(tarefas));
  carregarLocalStorage();
}



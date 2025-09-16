$(document).ready(function() {
  $("#taskForm").on("submit", function(e) {
    e.preventDefault();

    const taskText = $("#taskInput").val().trim();
    if (taskText === "") return;

    // cria a tarefa
    const $li = $("<li></li>").text(taskText);

    // clique para marcar/desmarcar concluída
    $li.on("click", function() {
      $(this).toggleClass("completed");
    });

    $("#taskList").append($li);
    $("#taskInput").val(""); // limpa o input
  });
});

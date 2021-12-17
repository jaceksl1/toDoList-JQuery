$(".txtb").on("keyup", (e) => {
  if ($(".txtb").val() != "" && e.keyCode === 13) {
    //e.keyCode === 13 <= stands for "enter"
    alert("Success");
    let task = $("<div class='task'></div>").text($(".txtb").val());
    //delt btn with click function
    let del = $("<i class='fas fa-trash-alt'></i>").click(function () {
      let p = $(this).parent();
      p.fadeOut(function () {
        p.remove();
      });
    });
    let check = $("<i class='fas fa-check'></i>").click(function () {
      let p = $(this).parent();
      p.fadeOut(function () {
        $(".comp").append(p);
        p.fadeIn();
      });
    });
    task.append(del, check);
    $(".notcomp").append(task);
    //clear input
    $(".txtb").val("");
  } else if ($(".txtb").val() === "") {
    alert("Add some text to your task");
  }
});

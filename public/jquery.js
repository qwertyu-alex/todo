$(document).ready(function() {
  $("form").on('submit', ()=>{
    let item = $('form input')
    let todo = {item: item.val()}
  })
  $(".stuff").click((e)=>{
    let id = e.target.id
    $.ajax({
      url: '/home',
      type: 'DELETE',
      data: {id: id}
    }).done(function(){
      location.reload()
      console.log("ok")
    })

  })
});

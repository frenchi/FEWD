// with keys books and albums whose values are arrays of book and album objects respectively. Make sure your nav bar switching still works.


var book1 = {
  id: 'book1',
  name:'1984',
  category: 'book',
  picture_url: 'https://lightlit.files.wordpress.com/2014/07/1984_by_alcook-d4z39dh.jpg',
  price: 0.99,
  selling_points : ['war is peace','freedom is slavery','ignorance is strength']
}


var album1 = {
  id: 'album1',
  name:'Lateralus',
  category: 'album',
  picture_url: 'https://fanart.tv/fanart/music/66fc5bf8-daa4-4241-b378-9bc9077939d2/albumcover/lateralus-51ffb2d506f20.jpg',
  price: 11.92,
  selling_points: ['Tool','Lateralus','Metal']
}

var products = {
  books: [book1],
  albums: [album1]
};


function add_to_page(obj){
  // create the new product div
  var $newProduct = $("<div/>")   // creates a div element
          .addClass(obj.category + ' product col-xs-6 col-sm-3 placeholder')
          .attr('id', obj.id);

  // add the product div
  $('.container').append($newProduct)
  var $product = $("#"+obj.id)

  //create & add name div
  $product.append($("<h2/>")
           .addClass('name')
           .text(obj.name));

  //create and add picture
  $product.append($("<img/>")
           .addClass('picture_url')
           .attr('src', obj.picture_url));

  //create and add category
  $product.append($("<div/>")
           .addClass('category')
           .text(obj.category));

  //create and add price
  $product.append($("<div/>")
           .addClass('price')
           .text(obj.price));

  //create and add selling points
  $product.append($("<ul/>")
         .addClass('selling_points')
         .html('<p>Selling Points:</p>'));

  var sp = obj.selling_points;

  $.each(sp, function(i){
      var $li = $('<li/>')
                .text(sp[i]);
      $("#" + obj.id + ' ul').append($li)
  });
}

//draw them all to page!
$.each(products, function(k,v){
  $.each(v, function(i) {
    add_to_page(v[i]);
  });
});

$('.nav #books').click(function(){
  $('.nav li').attr('class','');
  $('#books').addClass('active');
  $('.album').hide();
  $('.book').show();

});

$('.nav #albums').click(function(){
  $('.nav li').attr('class','');
  $('#albums').addClass('active');
  $('.album').show();
  $('.book').hide();
})

$('.nav #all').click(function(){
  $('.nav li').attr('class','');
  $('#all').addClass('active');
  $('.product').show();
})

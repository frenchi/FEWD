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


$('#book1 .name').text(book1.name)
$('#book1 .picture_url').attr('src',book1.picture_url)
$('#book1 .category').text(book1.category)
$('#book1 .price').text(book1.price)
$('#book1 .selling_points').text(book1.selling_points) // does this really work?


$('#album1 .name').text(album1.name)
$('#album1 .picture_url').attr('src',album1.picture_url)
$('#album1 .category').text(album1.category)
$('#album1 .price').text(album1.price)
$('#album1 .selling_points').text(album1.selling_points) // does this really work?


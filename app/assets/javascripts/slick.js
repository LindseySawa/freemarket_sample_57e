
$('.item__left__main').slick({
  infinite: true, //スライドのループ有効化
  arrows: false, //矢印非表示
  fade: true, //フェードの有効化
  draggable: false //ドラッグ操作の無効化
});
$('.item__left__sub1').slick({
  infinite: true, //スライドのループ有効化
  slidesToShow: 5, //表示するスライドの数
  focusOnSelect: true, //フォーカスの有効化
  asNavFor: '.item__left__main', //thumbnailクラスのナビゲーション
});
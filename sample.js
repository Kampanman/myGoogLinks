$('tbody').append(contents("サンプルブック","sample"));

$("#sample").click(function(){
  document.getElementById("note").innerHTML = 
  "<ul>"+
    listLink('サンプルリンク - メイン', '#')+
    listSub('サンプルリンク - サブ', '#')+
    //listLink('', '')+
    //listSub('', '')+
  "</ul>";
});
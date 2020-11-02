var addItemBtn = document.getElementById('addItemBtn');
var item = document.getElementById('item');
var itemId = document.getElementById('itemId');
var container;

var database = firebase.database();
var rootRef = database.ref('items');

loadFromDB();

//Создание нового item
function newItem(){
    if(item!=''){
        saveToDB();
        item.value='';
        loadFromDB();
    }   
}

//Сохранение в БД
function saveToDB(){
    database.ref('lists/').child(itemId.value).set({
        item: item.value
    });
}

//Загрузка из БД
function loadFromDB(){
    var container = document.getElementById('containerdo');

    database.ref('lists/').once('value', function(snapshot) {
        for(var i in snapshot.val()){
            container.innerHTML += "<div id="+i+"><h4 id='btnitem'>"+snapshot.val()[i].item+"</a></h4></div><hr>";
        }
    });
    container.innerHTML='';
}

//Удаление item по id
function removeItem(){
    database.ref('lists/').child(itemId.value).remove();

    loadFromDB();
}
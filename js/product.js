function count_up(){
    var a = parseInt(document.getElementById('count').value);
    a+=1;
    document.getElementById('count').value = a;
};
function count_down(){
    var a = parseInt(document.getElementById('count').value);
    a-=1;
    document.getElementById('count').value = a;
}

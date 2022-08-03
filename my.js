    function createTable(){
        let table=document.getElementById('value').value;
for (let x=1; x <=10; x++){
    document.write(
        "<h1>" + table + "x" + x+ "=" + table*x + "</h2>"
    );
}
        
    }
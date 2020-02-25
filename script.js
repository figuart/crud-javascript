//Validar formulário
function validar_form_contato(){
    var Quarto = formcontato.Room.value;
    var hora = formcontato.Time.value;
    var data = formcontato.Date.value;
    var preco = formcontato.Price.value;
    var cliente = formcontato.User.value;
    
    if(Quarto == ""){
        alert("Campo quarto é obrigatorio");
        formcontato.Quarto.focus();
        return false;
    }if(hora == ""){
        alert("Campo hora é obrigatorio");
        formcontato.hora.focus();
        return false;
    }if(data == ""){
        alert("Campo data é obrigatorio");
        formcontato.data.focus();
        return false;
    }if(preco == ""){
        alert("Campo preço é obrigatorio");
        formcontato.preco.focus();
        return false;
    }if(cliente == ""){
        alert("Campo cliente é obrigatorio");
        formcontato.User.focus();
        return false;
    }
}


//CRUD Rooms
var selectedRow = null

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRoom(formData);
        else
        updateRecord(formData);
    resetForm();
}


function readFormData(){
    var formData = {};
    formData["Room"] =document.getElementById("Room").value;
    formData["User"] =document.getElementById("User").value;
    formData["Price"] =document.getElementById("Price").value;
    formData["Time"] =document.getElementById("Time").value;
    formData["Date"] =document.getElementById("Date").value;
    return formData;

}
//inserir na tabela
function insertNewRoom(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Room;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.User;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Time;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Date;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

//limpar o formulário de cadastro
function resetForm(){
    document.getElementById("Room").value = "";
    document.getElementById("User").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Time").value = "";
    document.getElementById("Date").value = "";
    selectedRow = null;
}
//Editar o cadastro
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Room").value = selectedRow.cells[0].innerHTML;
    document.getElementById("User").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Time").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Date").value = selectedRow.cells[4].innerHTML;
}

//Update the Register
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Room;
    selectedRow.cells[1].innerHTML = formData.User;
    selectedRow.cells[2].innerHTML = formData.Price;
    selectedRow.cells[3].innerHTML = formData.Time;
    selectedRow.cells[4].innerHTML = formData.Date;

}
//Delete the register
function onDelete(td){
    if (confirm("Deletar?")){
        row = td.parentElement.parentElement;    
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
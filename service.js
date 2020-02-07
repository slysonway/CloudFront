'use strict';

function init() {
    var tbody = createTable('user_container', ['Nom', 'Prénom', 'Email', 'Date', 'Created Date', 'Updated Date', 'Delete Date']);
    getAllUsersAjax(function(callback) {
        if (callback != null) {
          for (var c of callback) {
            addRow(c, tbody);
          }
    
        } else {
          alert("Aucun Utilisateur Trouvée");
        }
      });
}

function getAllUsersAjax(callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState == 4) {
        if(request.status == 200) {
          var users = JSON.parse(request.responseText);
          callback(users);
        } else {
          //displayHalls(null);
          callback(null);
        }
      }
    };
    request.open('GET', process.env.API_URL + '/user');
    request.send();
  }



function createTable(divId, params) {
	var div = document.getElementById(divId);
	var divTable = document.createElement('div');
	var table = document.createElement('table');
	var thead = document.createElement('thead');
	var tbody = document.createElement('tbody');
	var tr = document.createElement('tr');
  
	table.id = 'table_id';
  
	divTable.classList.add('table-responsive');
  
	table.classList.add('table');
	table.classList.add('table-bordered');
	table.classList.add('table-striped');
	table.classList.add('table-hover');
	table.classList.add('js-basic-example');
	table.classList.add('dataTable');
  
	for (var p of params) {
	  var th = document.createElement('th');
	  th.innerHTML = p;
	  tr.appendChild(th);
	}
	thead.appendChild(tr);
	table.appendChild(thead);
	table.appendChild(tbody);
	divTable.appendChild(table);
	div.appendChild(divTable);
	return tbody;
  }

  //'Nom', 'Prénom', 'Email', 'Date', 'Created Date', 'Updated Date', 'Delete Date'
  function addRow(param, table) {
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    var tdFirstName = document.createElement('td');
    var tdEmail = document.createElement('td');
    var tdDate = document.createElement('td');
    var tdCreatedDate = document.createElement('td');
    var tdUpdatedDate = document.createElement('td');
    var tdDeletedDate = document.createElement('td');
  
    tr.id = param.id_cashier;
  
    tdName.innerHTML = param.lastname;
    tdFirstName.innerHTML = param.firstname;
    tdEmail.innerHTML = param.email;
    tdDate.innerHTML = param.date;
    tdCreatedDate.innerHTML = param.createdAt;
    tdUpdatedDate.innerHTML = param.updatedAt;
    tdDeletedDate.innerHTML = param.deletedAt;
  
    tr.appendChild(tdName);
    tr.appendChild(tdFirstName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdDate);
    tr.appendChild(tdCreatedDate);
    tr.appendChild(tdUpdatedDate);
    tr.appendChild(tdDeletedDate);
    table.appendChild(tr);
  }

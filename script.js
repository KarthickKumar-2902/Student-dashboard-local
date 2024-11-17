let data = JSON.parse(localStorage.getItem("StudentsInfo")) || [];
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const student = {
    id:data.length + 1,
    name: document.getElementById("fname").value,
    roll: document.getElementById("roll").value,
    year: document.getElementById("year").value,
    course: document.getElementById("course").value,
    mark: document.getElementById("mark").value,
    grade: document.getElementById("grade").value,
  };
  if (student.name != ""){
    data.push(student);
  }
  else{
    alert("Please enter appropriate value")
  }
  localStorage.setItem("StudentsInfo", JSON.stringify(data));
  // student.forEach(createTable);
  console.log(student);
  createTable(student);
  document.getElementById("fname").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("year").value = "";
  document.getElementById("course").value = "";
  document.getElementById("mark").value = "";
  document.getElementById("grade").value = "";
});

const createTable = (student) => {
  let tableBody = document.getElementById("bodyContent");
  // console.log(student);
  if (student.name != "") {
    
    // console.log(student.id);
    
    tableBody.innerHTML += `
  <tr>
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.roll}</td>
    <td>${student.year}</td>
    <td>${student.course}</td>
    <td>${student.mark}</td>
    <td>${student.grade}</td>
    <td><button type = "button" onclick ="editData(${student.id})" >Edit</button>&nbsp;&nbsp;&nbsp;<button type = "button" onclick ="deleteData(${student.id})" >Delete</button></td>
  </tr>
  `;
  }
};
const refreshTable =() =>{
  let tableBody = document.getElementById("bodyContent");
  tableBody.innerHTML = ""
  data.forEach(createTable);
}
refreshTable();



const editData = (id) => {
  
}


const deleteData = (id)=>{

   data = data.filter(student => student.id !== id);

   localStorage.setItem("StudentsInfo", JSON.stringify(data));
   refreshTable();
  
  
  
  // localStorage.removeItem('StudentsInfo')
}



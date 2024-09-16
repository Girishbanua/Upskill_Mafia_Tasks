const students = [
  {
    name: "Aarav Sharma",
    marks: 85,
    class: 10,
    address: "15, MG Road, Bengaluru, Karnataka",
  },
  {
    name: "Isha Singh",
    marks: 92,
    class: 12,
    address: "25, Lodhi Colony, New Delhi",
  },
  {
    name: "Rohan Patel",
    marks: 78,
    class: 9,
    address: "12, Marine Drive, Mumbai, Maharashtra",
  },
  {
    name: "Sneha Iyer",
    marks: 88,
    class: 11,
    address: "45, Anna Nagar, Chennai, Tamil Nadu",
  },
  {
    name: "Vikram Verma",
    marks: 81,
    class: 10,
    address: "22, Park Street, Kolkata, West Bengal",
  },
  {
    name: "Kavya Desai",
    marks: 90,
    class: 12,
    address: "18, Navrangpura, Ahmedabad, Gujarat",
  },
  {
    name: "Aditya Nair",
    marks: 75,
    class: 11,
    address: "56, MG Road, Thiruvananthapuram, Kerala",
  },
  {
    name: "Meera Choudhary",
    marks: 89,
    class: 10,
    address: "32, Banjara Hills, Hyderabad, Telangana",
  },
  {
    name: "Raj Malhotra",
    marks: 83,
    class: 9,
    address: "14, Connaught Place, New Delhi",
  },
  {
    name: "Nidhi Kulkarni",
    marks: 91,
    class: 12,
    address: "66, FC Road, Pune, Maharashtra",
  },
  {
    name: "Ishan Gupta",
    marks: 87,
    class: 11,
    address: "40, Gariahat Road, Kolkata, West Bengal",
  },
  {
    name: "Ritika Mehta",
    marks: 82,
    class: 9,
    address: "21, Juhu Beach, Mumbai, Maharashtra",
  },
  {
    name: "Arjun Rao",
    marks: 84,
    class: 10,
    address: "30, Jubilee Hills, Hyderabad, Telangana",
  },
  {
    name: "Pooja Yadav",
    marks: 93,
    class: 12,
    address: "27, Rajpath Road, Jaipur, Rajasthan",
  },
  {
    name: "Manish Khanna",
    marks: 76,
    class: 11,
    address: "38, Civil Lines, Kanpur, Uttar Pradesh",
  },
];

let studentList = students.map((student) => {
  return `<div class="box">
                <p><b>Name:</b> ${student.name} </p>
                <p><b>Class:</b> ${student.class} </p>
                <p><b>Marks:</b> ${student.marks}</p>
                <p><b>Address:</b> ${student.address}</p>
            </div>`;
});
const container = document.querySelector(".container");
container.innerHTML = studentList;

const searchBox = document.getElementById("stName");

const search = () => {  
  const filteredStudentList = students
    .filter(
      (student) =>
        student.name.includes(searchBox.value) ||
        student.name.toLowerCase().includes(searchBox.value)
    )
    .map((filteredStudent) => {
      return `<div class="box">
                <p><b>Name:</b> ${filteredStudent.name} </p>
                <p><b>Class:</b> ${filteredStudent.class} </p>
                <p><b>Marks:</b> ${filteredStudent.marks}</p>
                <p><b>Address:</b> ${filteredStudent.address}</p>
            </div>`;
    });
    if(filteredStudentList.length > 0){
  container.innerHTML = filteredStudentList;
    }
    else{
      container.innerHTML = `<p>No result found</p>`;
    }
    searchBox.value = '';
};

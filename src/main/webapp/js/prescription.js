 // Dữ liệu thuốc 
 const medicines = [
    { id: 'T01', name: "YESOM 40 40mg(Esomeprazol 40mh)", sl:"63", loai:"Viên", description: "Ngày uống 3 lần, mỗi lần 1 viên" },
    { id: 'T02', name: "YESOM 40 40mg(Esomeprazol 40mh)", sl:"50", loai: "Gói", description: "Ngày uống 3 lần, mỗi lần 1 viên" },
];

// Hiển thị dữ liệu lên trang web
const medicinesTableBody = document.getElementById('medicinesTableBody');

function renderTable() {
medicinesTableBody.innerHTML = '';
medicines.forEach((medicine, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${index + 1}</td><td>${medicine.id}</td><td>${medicine.name}</br> ${medicine.description}</td><td>${medicine.sl}</td><td>${medicine.loai}</td>
        <td>
            <button class="upd-button" onclick="editMedicine(${medicine.id})">Sửa</button>
            <button class="del-button" onclick="deleteMedicine(${index})">Xóa</button>
        </td>`;
    medicinesTableBody.appendChild(row);
});
}

// Hàm xử lý khi nút "Sửa" được nhấn
function editMedicine(id) {
// Viết code để sửa dữ liệu
alert(`Chức năng sửa cho thuốc có ID ${id}`);
}

// Hàm xử lý khi nút "Xóa" được nhấn
function deleteMedicine(index) {
// viết code xóa dữ liệu
medicines.splice(index, 1);
renderTable();
}

// Render table khi trang được tải
renderTable();
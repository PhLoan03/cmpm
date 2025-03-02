const medicines = [
    { id: 'T01', name: "YESOM 40 40mg(Esomeprazol 40mh)", sl: "63", loai: "Viên", description: "Ngày uống 3 lần, mỗi lần 1 viên" },
    { id: 'T02', name: "YESOM 40 40mg(Esomeprazol 40mh)", sl: "50", loai: "Gói", description: "Ngày uống 3 lần, mỗi lần 1 viên" },
];

const medicinesTableBody = document.getElementById('medicinesTableBody');

function renderTable() {
    medicinesTableBody.innerHTML = '';
    medicines.forEach((medicine, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td><td>${medicine.id}</td><td>${medicine.name}</br> ${medicine.description}</td><td>${medicine.sl}</td><td>${medicine.loai}</td>`;
        medicinesTableBody.appendChild(row);
    });
}

renderTable();
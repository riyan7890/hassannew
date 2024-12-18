// Handle Equipment Form Submission
document.getElementById('equipment-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const equipmentName = document.getElementById('equipment-name').value;
  const equipmentQuantity = document.getElementById('equipment-quantity').value;
  const equipmentStatus = document.getElementById('equipment-status').value;

  if (equipmentName && equipmentQuantity && equipmentStatus) {
    const equipmentList = document.getElementById('equipment-list').getElementsByTagName('tbody')[0];

    const newRow = equipmentList.insertRow();
    newRow.innerHTML = `
      <td>${equipmentName}</td>
      <td>${equipmentQuantity}</td>
      <td>${equipmentStatus}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    newRow.querySelector('.delete-btn').addEventListener('click', function () {
      newRow.remove();
    });

    // Clear form fields
    document.getElementById('equipment-form').reset();
  }
});

// Show More Blog Posts
document.getElementById('viewAllBtn').addEventListener('click', function () {
  const blogContainer = document.getElementById('blogContainer');
  blogContainer.classList.toggle('show-all');
  this.textContent = blogContainer.classList.contains('show-all') ? 'View Less' : 'View All';
});

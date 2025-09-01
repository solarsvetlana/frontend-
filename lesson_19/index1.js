const form = document.getElementById('userForm');
const userList = document.getElementById('userList');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!firstName || !lastName || !email) {
        alert("Please fill out all fields.");
        return;
      }
      const userDiv = document.createElement('div');
      userDiv.className = 'user';

      const userInfo = document.createElement('span');
      userInfo.textContent = `${firstName} ${lastName} (${email})`;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = function () {
        userList.removeChild(userDiv);
      };

      userDiv.appendChild(userInfo);
      userDiv.appendChild(deleteBtn);
      userList.appendChild(userDiv);

      form.reset();
});


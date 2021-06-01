const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/bracket/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete bracket');
    }
  }
};

const deleteBtn = document.getElementsByClassName('btn')

for (i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", delButtonHandler);
};

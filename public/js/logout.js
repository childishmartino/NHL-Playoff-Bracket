const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  console.log('hit');

  if (response.ok) {
    document.location.replace('/');
    // res.redirect('/');
  } else {
     alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

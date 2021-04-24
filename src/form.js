

const form = document.forms['form1']

const getDb = JSON.parse(localStorage.getItem('db1'))

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = form['name'].value
  const email = form['email'].value
  const phone = form['phone'].value

  getDb.push({ id: new Date().getTime(), name, email, phone })
  localStorage.setItem('db1',JSON.stringify(getDb))
  form.reset()
})

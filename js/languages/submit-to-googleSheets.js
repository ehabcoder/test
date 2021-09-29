



      // google sheet handler
const scriptURL = 'https://script.google.com/macros/s/AKfycbzoFN5Ny5ftRL1g3BvsHr_iwfSmEa6x9vsrfUe-NTS4Nlyh9ucQxLRxug-6b6ZmLzfyqw/exec'
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    document.getElementById("spinner").classList.remove('hide');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          alert('تم ارسال رسالتك بنجاح\n شكرا لك')
          document.getElementById("myForm").reset();
          document.getElementById("spinner").classList.add('hide')

        }
          )
      .catch(error => console.error("الرجاء المحاولة مرة اخرى فى وقت لاحق."))
  })
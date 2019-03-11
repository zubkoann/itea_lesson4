document.addEventListener('DOMContentLoaded', () => {

  const myUploadForm = document.forms.upload;
        myUploadForm.onsubmit = function(e){
          e.preventDefault();
          let input = myUploadForm.elements.myfile;
          let file = input.files[0];
          if (file) {
            upload(file);
          }
          return false;
        }

});


const upload = (file) => {
  let xhr = new XMLHttpRequest();
  // обработчик для закачки

    console.log('READYSTATE.START:', xhr.readyState);
    xhr.addEventListener('readystatechange', (e) => {
      /*
        Значение	Состояние	           Описание
        0	        UNSENT	             Объект был создан. Метод open() ещё не вызывался.
        1	        OPENED	             Метод open() был вызван.
        2	        HEADERS_RECEIVED	   Метод send() был вызван, доступны заголовки (headers) и статус.
        3	        LOADING	             Загрузка; responseText содержит частичные данные.
        4	        DONE	               Операция полностью завершена.
      */
      console.warn('readyStateChange:', e);
        if( xhr.readyState === 4 && xhr.status === 200){
          console.log('DONE');
        } else {
          console.log('SOME ERROR');
        }
    })



    xhr.upload.addEventListener('progress', (e) => {
      console.log( 'progress', e );
      console.log(e, e.loaded + ' / ' + e.total);
      // console.log('READYSTATE.PROGRESS:', xhr.readyState);
       let bar = document.getElementById('bar');
       let total = e.total;
       let current = e.loaded;
       let percent = (e.loaded * 100) / total;
      //  // console.log( percent );
       bar.value = percent;
    })

    xhr.upload.addEventListener('loadstart', (e) => console.log('loadstart', e) );
    xhr.upload.addEventListener('loadend', (e) => console.log('loadend', e) );

    console.log('xhr', xhr)

    /*

      xhr.onreadystatechange = (e) => {}
      xhr.upload.onprogress = (e) => {}
      xhr.upload.onloadstart = (e) => {}
      xhr.upload.onload = (e) => {}
      xhr.upload.onloadend = (e) => {}

    */

    xhr.open("POST", "/", true);
    console.log('READYSTATE.SENDED:', xhr.readyState);
    xhr.send(file);
    console.log('READYSTATE.END:', xhr.readyState);
}

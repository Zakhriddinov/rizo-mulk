function previewBeforeUpload(id) {
   document.querySelector("#" + id).addEventListener("change", function (e) {
      if (e.target.length == 0) {
         return;
      }
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);

      document.querySelector("#" + id + '-preview img').src = url
   })
}

previewBeforeUpload("file-1")
previewBeforeUpload("file-2")
previewBeforeUpload("file-3")
previewBeforeUpload("file-4")
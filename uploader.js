(function ($) {
    $(document).ready(function () {
        let dropArea = document.getElementById('pic');
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false)
        })

        function preventDefaults(e) {
            e.preventDefault()
            e.stopPropagation()
        }
        dropArea.addEventListener('drop', handleDrop, false)
        console.log(dropArea);
        function handleDrop(e) {
            let dt = e.dataTransfer
            let files = dt.files
            let uploader = $('<input type="file" name="images[]" style="display:none"/>');

            uploader[0].files = files;
            console.log(uploader);
            let divFile = $(`
                    <div style="margin-bottom:10px">
                        ${files[0].name}
                        <button class="removefile" style="margin-left:10px">REMOVE</button>
                    </div>`);
            divFile.prepend(uploader);
            $("#filesContainer").prepend(divFile);

        }

        //загрузка фото на клік
        uploadImage();

        //загрузка фото на клік
        function uploadImage() {
            let button = $('.images .pic');

            let images = $('.images');

            button.on('click', function () {


                let uploader = $('<input type="file" name="images[]" style="display:none"/>');

                uploader.click();
                uploader.on('change', function () {
                    console.log($(this)[0].value);
                    let divFile = $(`
                    <div style="margin-bottom:10px">
                        ${uploader[0].files[0].name}
                        <button class="removefile" style="margin-left:10px">REMOVE</button>
                    </div>`);
                    divFile.prepend(uploader);
                    $("#filesContainer").prepend(divFile);
                    //console.log("------file-------", uploader.files[0]);
                    //$("#filesContainer").prepend(uploader);
                    // let reader = new FileReader();
                    // reader.onload = function (event) {

                    //     dialogCropper.modal('show');
                    //     cropper.replace(event.target.result);
                    //     uploader.remove();
                    //     //
                    // };
                    // reader.readAsDataURL(uploader[0].files[0]);

                });
            });
            $("#filesContainer").on("click", ".removefile", function () {
                $(this).closest("div").remove();
            });

            images.on('click', '.img', function () {
                $(this).remove();
            });
        }
    });
})(jQuery);
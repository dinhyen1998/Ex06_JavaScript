   function changeBrow() {
              document.getElementById("sel").options[1].selected = true;
            alert('Chuyển trạng thái bài viết sang "Duyệt"');
        }
       
        function changeBlock() {
            document.getElementById("sel").options[0].selected = true;
            alert('Chuyển trạng thái bài viết sang "Chặn"');
        }

        function deleteRow(row) {
            var i = row.parentNode.parentNode.rowIndex;
            // var message = document.getElementById('.title').innerText;
            document.getElementById("myTable").deleteRow(i);
            // alert('Xóa bài viết' +" "+ title)
             alert('Xóa bài viết')


        }
       
        // $(document).ready(function () {
        //     $(".btn-primary").click(function () {
        //         var title = $(this).parent().siblings('.title').text();
        //         $('#modal-title').val(title)
        //         $('#message-text').val(title + title)

        //     });


        // });
        
$(document).ready(function() {
    $('.advantage-content').slick({});
});

$(document).ready(function() {
    $(".aboutCompanyButton").click(function() { alert('Модальное окно') });

    $("input[type=button]").click(function() { $(".aboutCompanyButton".click()) });
});

$('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')

            $("#button").bind("click", function() {
                    $.ajax({
                        url: url,
                        type: "POST",
                        dataType: "html",
                        data: jQuery("#" + form_id).serialize(),
                        success: function(response) {
                            document.getElementById(result_id).innerHTML = response;
                        },
                        error: function(response) {
                            document.getElementById(result_id).innerHTML = "Ошибка при отправке формы";
                        }
                    });
                }
                var modal = $(this)
                modal.find('.modal-title').text('New message to ' + recipient) modal.find('.modal-body input').val(recipient)
            });

        $('#collapseExample').collapse()
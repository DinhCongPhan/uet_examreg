/**
 * Created by dinht_000 on 10/30/2016.
 */
$(document).ready(function() {
    var retrieveFacultyList = function () {
        $('#faculty_list').load(/*[[@{/admin/admin-ajax}]]*/);
    };

    var deleteFaculty = function(id) {
        $.ajax({
            url: ""/*[+ [[@{/admin/admin/}]] + id + '/delete'  +]*/,
            type: 'POST',
            beforeSend: function(xhr) {
                var token = $("meta[name='_csrf']").attr("content");
                var header = $("meta[name='_csrf_header']").attr("content");
                xhr.setRequestHeader(header, token);
            },
            success: function() {
                retrieveFacultyList();
            }
        });
    };

    var createFaculty = function(name) {
        $.ajax({
            url: "",
            type: "GET",
            beforeSend: function (xhr) {
                var token = $("meta[name='_csrf']").attr("content");
                var header = $("meta[name='_csrf_header']").attr("content");
                xhr.setRequestHeader(header, token);
            },
            success: function () {
                retrieveFacultyList();
            }
        });
    };

    var deleteDepartment = function(id) {
        $.ajax({
            url: "" /*[+ [[@{/admin/department/}]] + id + '/delete'  +]*/,
            type: 'POST',
            beforeSend: function (xhr) {
                var token = $("meta[name='_csrf']").attr("content");
                var header = $("meta[name='_csrf_header']").attr("content");
                xhr.setRequestHeader(header, token);
            },
            success: function () {
                retrieveFacultyList();
            }
        });
    };

    /*retrieveFacultyList();*/

    $("")

    $(function () {
        $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
        $(document).on('click', '.tree li.parent_li > span', function (e) {
            var children = $(this).parent('li.parent_li').find(' > ul > li');
            if (children.is(":visible")) {
                children.hide('fast');
                $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
            } else {
                children.show('fast');
                $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
            }
            e.stopPropagation();
        });
    });
});

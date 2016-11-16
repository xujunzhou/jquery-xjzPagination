$(function () {
    //����ʹ��
    (function () {
        //��ʼ����ҳ�ؼ�
        var paging = $("#test_xjzPagination").xjzPagination({
            onPageClick: function (currentPage) {
                loadData(currentPage);
            }
        });

        //�������ݷ���
        function loadData(currentPage) {
            var limit = 10,
                start = (currentPage - 1) * limit;
            
            //��������
            var search_value = $("#search_value").val();
            var _data=[], rows = [];
            if (search_value) {
                for (var i = 0, len = data.length; i < len; i++) {  //data -> data.js
                    for (var pro in data[i]) {
                        if (data[i][pro].toString().indexOf(search_value) != -1) {
                            _data.push(data[i]);
                            break;
                        }
                    }
                }
            } else {
                _data = data;
            }

            //��ȡ����
            rows = _data.slice(start, start + limit);

            //��Ⱦģ��
            $("#test_table_temp").prev().html(template("test_table_temp", { rows:rows }));     //artTemplate.js

            //���·�ҳ
            var totalPages = Math.ceil(_data.length / limit);     //����
            paging.update(totalPages, currentPage);
        }

        //������ť�¼�
        $("#search_btn").click(function () {
            loadData(1);    //���÷�ҳ
        });
        //��������¼�
        $("#search_clear").click(function () {
            $("#search_value").val('');
            loadData(1);    //���÷�ҳ
        });
    })();


    $("#paging1").xjzPagination({
        totalPages:20,
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging2").xjzPagination({
        totalPages: 20,
        pagingType:'full_numbers',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging3").xjzPagination({
        totalPages: 20,
        pagingType:'full',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging4").xjzPagination({
        totalPages: 20,
        pagingType: 'simple',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging5").xjzPagination({
        totalPages: 20,
        pagingType: 'numbers',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging6").xjzPagination({
        totalPages: 20,
        visiblePages:1,
        pagingType: 'full_numbers',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });

    $("#paging7").xjzPagination({
        totalPages: 20,
        pagingType: 'full_numbers',
        first: '<<',
        prev: '<',
        next: '>',
        last:'>>',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging8").xjzPagination({
        totalPages: 20,
        visiblePages: 1,
        pagingType: 'simple',
        prevClass: 'PREV',
        nextClass:'NEXT',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging9").xjzPagination({
        totalPages: 20,
        visiblePages: 7,
        startPage: 7,
        first: '<<',
        prev: '<',
        next: '>',
        last: '>>',
        pagingType: 'full_numbers',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });


    $("#paging10").xjzPagination({
        totalPages: 20,
        visiblePages: 7,
        startPage: 7,
        pagingType: 'full_numbers',
        onPageClick: function (currentPage) {
            this.parent().prev().text(currentPage);
        }
    });
});
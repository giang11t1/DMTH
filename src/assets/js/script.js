$(document).ready(function() {
    $(".click-hamburger").click(function() {
        $("aside.main-sidebar .menu, .topnav .wrap-logo").toggleClass("sidebar-collapse");
        $("aside.main-sidebar .menu .text").toggleClass("display-text");
        $(".col-md-, .topnav .header").toggleClass("marginLeft");
    });

    $(".list-menu .item-menu").click(function() {
        $("aside.main-sidebar .menu, .topnav .wrap-logo").removeClass("sidebar-collapse");
        $("aside.main-sidebar .menu .text").removeClass("display-text");
        $(".col-md-, .topnav .header").removeClass("marginLeft");
    });

    if ($(".scrollbar").length > 0) {
        $(".scrollbar").mCustomScrollbar();
    }

    // $( "#accordion" ).accordion();

    $(".sub-menu .item-sub").click(function() {
        $(".sub-menu .item-sub").removeClass("active_sub");
        $(this).addClass("active_sub");
    });

    $(".icon-account, .fa-caret-up").click(function() {
        $(".infor-account").slideToggle();
        $(".accout .wrap-img").toggleClass("wrap-img1");
        $(".accout .text").toggleClass("text1");
        $(this).hide();
        $(".fa-caret-up").show();
    });
    $(".fa-caret-up").click(function() {
        $(this).hide();
        $(".icon-account").show();
    });
    $(".infor-account a").click(function() {
        $(".infor-account a").css("font-weight", "normal");
        $(this).css("font-weight", "bold");
    });
    // scroll=====
    var lastScrollTop = 0;
    $(window).on('scroll', function() {

        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            if (st > 20) {
                $("header").addClass("positionfixed");
            } else {
                $("header").removeClass("positionfixed");
            }
        }
    });
    // choose menu===========
    $(".list-menu li").click(function() {
        $(".list-menu li").removeClass("active-menu");
        $(this).addClass("active-menu");
        $(this).children().find(".fa-angle-right, .fa-angle-down").toggle();
    });
    var chart = AmCharts.makeChart("chartdiv", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "addClassNames": true,
        labelsEnabled: false,
        autoMargins: false,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        pullOutRadius: 0,
        "legend": {
            "position": "right",
            "marginRight": 50,
            "autoMargins": false
        },
        "innerRadius": "50%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "200%",
                "height": "200%",
                "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                },
                "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                },
                "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                }
            }]
        },
        "dataProvider": [{
            "country": "Danh mục đã kích hoạt",
            "litres": 1
        }, {
            "country": "Danh mục chờ duyệt",
            "litres": 1125
        }],
        "valueField": "litres",
        "titleField": "country",
        "export": {
            "enabled": true
        }
    });
    var chart = AmCharts.makeChart("chartdiv1", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "addClassNames": true,
        labelsEnabled: false,
        autoMargins: false,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        pullOutRadius: 0,
        "legend": {
            "position": "right",
            "marginRight": 50,
            "autoMargins": false
        },
        "innerRadius": "50%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "200%",
                "height": "200%",
                "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                },
                "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                },
                "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                }
            }]
        },
        "dataProvider": [{
            "country": "Kích hoạt",
            "litres": 28024
        }, {
            "country": "Tắt",
            "litres": 52662
        }, {
            "country": "Đang chờ review",
            "litres": 0
        }, {
            "country": "Đã review",
            "litres": 0
        }],
        "valueField": "litres",
        "titleField": "country",
        "export": {
            "enabled": true
        }
    });
    chart.addListener("init", handleInit);

    chart.addListener("rollOverSlice", function(e) {
        handleRollOver(e);
    });

    function handleInit() {
        chart.legend.addListener("rollOverItem", handleRollOver);
    }

    function handleRollOver(e) {
        var wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
    }
    // page xem don hang

    $(".form_datetime").datetimepicker({ format: 'hh:ii dd-mm-yyyy' });

    $(".body_table li .icon-view-fast, .body_table li .icon-view-fast-hover").click(function() {
        $(".body_table li .icon-view-fast-hover").hide();
        $(".body_table li .icon-view-fast").show();
        $(this).parent().find(".icon-view-fast, .icon-view-fast-hover").toggle();
    });


    $(".body_table li .icon-view-detail-hover").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-view-detail").show();
    });

    $(".body_table li .icon-view-detail").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-view-detail-hover").show();
    });

    $(".btn_search_level").click(function() {
        $(this).parent().find(".search_level").slideToggle();
        $(this).find(".show_search, .hide_search").toggle();
        // $(".hide_search").show();
    });

    $('#check-all').checkAll({
        target: '',
        reverse: true / false,
        checked: null / true / false,
        sync: true / false
    });

    function CheckForm() {
        var checked = false;
        var elements = document.getElementsByName("choose");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                checked = true;
            }
        }
        if (!checked) {
            $(".switch_bar").slideUp();
        }
        if (checked) {
            $(".switch_bar").slideDown();
        }
        return checked;
    }
    CheckForm();


    $('input[type="checkbox"].checkbox_check').click(function() {
        CheckForm();
    });
    // xem chi tiet don hang

    $(".top-action li:nth-child(2) a")
        .mouseenter(function() {
            $(this).find('i.icon').removeClass("icon-print");
            $(this).find('i.icon').addClass("icon-print-hover");
            $(this).css({ "background": "#2bc5f8", "color": "#fff" });
        })
        .mouseleave(function() {
            $(this).find('i.icon').removeClass("icon-print-hover");
            $(this).find('i.icon').addClass("icon-print");
            $(this).css({ "background": "#fff", "color": "#464646" });
        });



    $(".top-action li:nth-child(3) a")
        .mouseenter(function() {
            $(this).find('i.icon').removeClass("icon-edit");
            $(this).find('i.icon').addClass("icon-edit-hover");
            $(this).css({ "background": "#2bc5f8", "color": "#fff" });
        })
        .mouseleave(function() {
            $(this).find('i.icon').removeClass("icon-edit-hover");
            $(this).find('i.icon').addClass("icon-edit");
            $(this).css({ "background": "#fff", "color": "#464646" });
        });

    $(".top-action li:nth-child(4) a")
        .mouseenter(function() {
            $(this).find('i.icon').removeClass("icon-save");
            $(this).find('i.icon').addClass("icon-save-hover");
            $(this).css({ "background": "#2bc5f8", "color": "#fff" });
        })
        .mouseleave(function() {
            $(this).find('i.icon').removeClass("icon-save-hover");
            $(this).find('i.icon').addClass("icon-save");
            $(this).css({ "background": "#fff", "color": "#464646" });
        });
    $(".top-action li:nth-child(2) a").click(function() {
        $(this).unbind('mouseleave');
    });

    $(".top-action li:nth-child(3) a").click(function() {
        $(this).unbind('mouseleave');
    });

    $(".top-action li:nth-child(4) a").click(function() {
        $(this).unbind('mouseleave');
    });
    $(".box-note i.fa-pencil").click(function() {
        $(this).hide();
        $("ul.body_box").hide();
        $(".edit_note").show();
    });

    $(".box-note .btn-save").click(function() {
        $("ul.body_box").show();
        $(".edit_note").hide();
        $(".box-note i.fa-pencil").show();
    });
    $(".box-address i.fa-pencil").click(function() {
        $(this).hide();
        $(this).parent().parent().find(".body_box").hide();
        $(this).parent().parent().find(".edit_address").show();
    });

    $(".box-address .btn-save").click(function() {
        $(this).parent().parent().find(".body_box").show();
        $(this).parent().parent().find(".edit_address").hide();
        $(this).parent().parent().find(".fa-pencil").show();
    });
    $(".first_step .btn_next").click(function() {
        $(".first_step").addClass("select");
        $(".second_step").removeClass("select");
        $(".second_step").css("opacity", "1");
        $(".first_step").css("opacity", "0.5");
    });
    $(".second_step #prev1").click(function() {
        $(".first_step").removeClass("select");
        $(".second_step").addClass("select");
        $(".first_step").css("opacity", "1");
        $(".second_step").css("opacity", "0.5");
    });

    $(".first_step #search").click(function() {
        $(".content").show();
    });

    $(".first_step .icon-trash").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-trash-hover").css("display", "inline-block");
    });
    $("#next1").click(function() {
        $('html, body').animate({
            scrollTop: $("#second_step").offset().top - 80
        }, 700);
    });

    $("#prev1").click(function() {
        $('html, body').animate({
            scrollTop: $("#first_step").offset().top - 120
        }, 700);
    });

    $(".table-status .icon-edit").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-edit-hover").css("display", "inline-block");
    });

    $(".table-status .icon-delete").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-delete-hover").css("display", "inline-block");
        // $(this).parent().parent().parent().hide();
    });

    $(".icon-delete").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-delete-hover").css("display", "inline-block");
        // $(this).parent().parent().parent().hide();
    });

    $(".styled").on('change keyup paste', function() {
        var length = $(this).val().length;
        if (length > 0) {
            $(this).parent().find(".text-area").css("display", "none");
        } else {
            $(this).parent().find(".text-area").css("display", "block");
        }
    });

    $(".list_commend li")
        .mouseenter(function() {
            $(this).find('.block_commend').css("border-left-color", "#2bc5f8");
        })
        .mouseleave(function() {
            $(this).find('.block_commend').css("border-left-color", "transparent");
        });

    $(".list_commend .reply").click(function() {
        $(this).parent().parent().find(".input_reply").slideToggle();
    });

    $(".list_commend .input_reply .btn-primary").click(function() {
        $(this).parent().parent().find(".input_reply").slideUp();
    });

    $(".table-supply ul li .icon-view-fast").click(function() {
        $(".table-supply ul li .icon-view-fast-hover").hide();
        $(".table-supply ul li .icon-view-fast").show();
        $(this).parent().find(".icon-view-fast, .icon-view-fast-hover").toggle();
    });
    /*$(".table-supply ul li .icon-view-fast").click(function(){

    });*/
    $(".table-supply ul li .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".icon-view-fast-hover").hide();
        $(this).parent().parent().parent().parent().find(".icon-view-fast").show();
        $(this).parent().parent().parent().removeClass("in");
        $(this).parent().parent().parent().attr("aria-expanded", "false");
    });

    $(".table-supply li .icon-view-fast-hover").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-view-fast").show();
    });

    $(".table-supply li .icon-edit").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-edit-hover").css("display", "inline-block");
    });
    $(".table-supply li .icon-edit-hover").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-edit").show();
    });

    $(".table-supply li .icon-list").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-list-hover").css("display", "inline-block");
    });
    $(".table-supply li .icon-list-hover").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-list").show();
    });

    $(".top_body .box1 .icon-edit").click(function() {
        $(this).parent().parent().parent().parent().parent().find(".box1").hide();
        $(this).parent().parent().parent().parent().parent().find(".box1_edit").css("display", "inline-block");
    });

    $(".edit_supplier .top_body .box1_edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box1").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box1_edit").hide();
    });
    // -----
    $(".top_body .box_introduce .icon-edit").click(function() {
        $(this).parent().parent().parent().parent().find(".box_introduce").hide();
        $(this).parent().parent().parent().parent().find(".boxintroduce_edit").css("display", "inline-block");
    });

    $(".edit_supplier .top_body .boxintroduce_edit .cancel").click(function() {
        $(this).parent().parent().parent().find(".box_introduce").css("display", "inline-block");
        $(this).parent().parent().parent().find(".boxintroduce_edit").hide();
    });
    // ----
    $(".top_body .box_payment .icon-edit").click(function() {
        $(this).parent().parent().parent().parent().find(".box_payment").hide();
        $(this).parent().parent().parent().parent().find(".box_payment_edit").css("display", "inline-block");
    });

    $(".edit_supplier .top_body .box_payment_edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box_payment").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box_payment_edit").hide();
    });
    // ----
    $(".top_body .box2 .icon-edit").click(function() {
        $(this).parent().parent().parent().parent().find(".box2").hide();
        $(this).parent().parent().parent().parent().find(".box2_edit").css("display", "inline-block");
    });

    $(".edit_supplier .edit_supplier .top_body .box2_edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box2").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box2_edit").hide();
    });
    // ---
    $(".top_body .box3 .icon-edit").click(function() {
        $(this).parent().parent().parent().parent().find(".box3").hide();
        $(this).parent().parent().parent().parent().find(".box3_edit").css("display", "inline-block");
    });

    $(".edit_supplier .top_body .box3_edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box3").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box3_edit").hide();
    });
    // -----------------
    $(".bottom_body .box1 .icon-edit").click(function() {
        $(this).parent().parent().parent().find(".box1").hide();
        $(this).parent().parent().parent().find(".box1_edit").css("display", "inline-block");
    });

    $(".edit_supplier .bottom_body .box1_edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box1").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box1_edit").hide();
    });
    // -----------------
    $(".bottom_body .box2 .icon-edit").click(function() {
        $(this).parent().parent().parent().find(".box2").hide();
        $(this).parent().parent().parent().find(".box2_edit").css("display", "inline-block");
    });

    $(".edit_supplier .bottom_body .box2_edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box2").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box2_edit").hide();
    });

    // -----------------
    $(".bottom_body .box-address .icon-edit").click(function() {
        $(this).parent().parent().parent().find(".box-address").hide();
        $(this).parent().parent().parent().find(".box-address-edit").css("display", "inline-block");
    });

    $(".edit_supplier .bottom_body .box-address-edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box-address").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box-address-edit").hide();
    });

    // create supplier
    $('#input').bind("enterKey", function(e) {
        $(this).parent().parent().find(".input_code").hide();
        $(this).parent().parent().find(".done_code").show();
    });
    $('#input').keyup(function(e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });
    // 
    $(".view_detail_brand .box1 .icon-edit").click(function() {
        $(this).parent().parent().parent().parent().find(".box1").hide();
        $(this).parent().parent().parent().parent().find(".box1_edit").css("display", "inline-block");
    });

    $(".edit_brand .view_detail_brand .box1_edit .cancel").click(function() {
        $(this).parent().parent().parent().parent().find(".box1").css("display", "inline-block");
        $(this).parent().parent().parent().parent().find(".box1_edit").hide();
    });
    // ==============
    $(".view_detail_brand .box_descript .icon-edit").click(function() {
        $(this).hide();
        $(this).parent().parent().find(".part").hide();
        $(this).parent().parent().parent().find(".edit").css("display", "inline-block");
    });

    $(".edit_brand .view_detail_brand .edit_vietnam .cancel").click(function() {
        $(".view_detail_brand .box_descript .icon-edit").show();
        $(this).parent().parent().parent().find(".part1").css("display", "inline-block");
        $(this).parent().parent().parent().find(".edit_vietnam").hide();
    });
    $(".edit_brand .view_detail_brand .edit_engish .cancel").click(function() {
        $(".view_detail_brand .box_descript .icon-edit").show();
        $(this).parent().parent().parent().find(".part2").css("display", "inline-block");
        $(this).parent().parent().parent().find(".edit_engish").hide();
    });

    $(".wrap_btn li:nth-child(1) a")
        .mouseenter(function() {
            $(this).find('i').removeClass("icon-browser");
            $(this).find('i').addClass("icon-browser-hover");
            $(this).css({ "background": "#2bc5f8", "color": "#fff" });
        })
        .mouseleave(function() {
            $(this).find('i').removeClass("icon-browser-hover");
            $(this).find('i').addClass("icon-browser");
            $(this).css({ "background": "#fff", "color": "#464646" });
        });
    $(".wrap_btn li:nth-child(2) a")
        .mouseenter(function() {
            $(this).find('i').removeClass("icon-import");
            $(this).find('i').addClass("icon-import-hover");
            $(this).css({ "background": "#2bc5f8", "color": "#fff" });
        })
        .mouseleave(function() {
            $(this).find('i').removeClass("icon-import-hover");
            $(this).find('i').addClass("icon-import");
            $(this).css({ "background": "#fff", "color": "#464646" });
        });
    $(".wrap_btn li:nth-child(3) a")
        .mouseenter(function() {
            $(this).find('i').removeClass("icon-excel");
            $(this).find('i').addClass("icon-excel-hover");
            $(this).css({ "background": "#2bc5f8", "color": "#fff" });
        })
        .mouseleave(function() {
            $(this).find('i').removeClass("icon-excel-hover");
            $(this).find('i').addClass("icon-excel");
            $(this).css({ "background": "#fff", "color": "#464646" });
        });

    $(".wrap_btn li:nth-child(1) a").click(function() {
        $(this).unbind('mouseleave');
    });

    $(".wrap_btn li:nth-child(2) a").click(function() {
        $(this).unbind('mouseleave');
    });

    $(".wrap_btn li:nth-child(3) a").click(function() {
        $(this).unbind('mouseleave');
    });

    $('.wrap_btn input[name="newfile"]').change(function() {
        var fileName = $(this).val();
        $(this).parent().parent().parent().parent().find(".file_name").text(fileName);
    });

    $('.wrap_btn input[name="numberfile"]').change(function() {
        var fileName = $(this).val();
        $(this).parent().parent().parent().parent().find(".file_name").text(fileName);
    });

    $('.wrap_btn input[name="pricefile"]').change(function() {
        var fileName = $(this).val();
        $(this).parent().parent().parent().parent().find(".file_name").text(fileName);
    });

    $(".cate1 li .col-md-7 a").click(function() {
        $(".cate1").hide();
        $(".cate2").show();;
        $(".title-path").hide();
        $(".title-path1").show();
        $("#back1").show();
    });

    $(".cate2 li .col-md-7 a").click(function() {
        $(".cate2").hide();
        $(".cate3").show();;
        $(".title-path1").hide();
        $(".title-path2").show();
        $("#back1").hide();
        $("#back2").show();
    });

    $("#back1").click(function() {
        $(".cate1").show();
        $(".cate2").hide();
        $(this).hide();
        $(".title-path").show();
        $(".title-path1").hide();
    });

    $("#back2").click(function() {
        $(".cate2").show();
        $(".cate3").hide();
        $(this).hide();
        $("#back1").show();
        $(".title-path1").show();
        $(".title-path2").hide();
    });

    $(".category_product li .col-md-7 a")
        .mouseenter(function() {
            $(this).find('.fa-folder-o').hide();
            $(this).find('.fa-folder-open-o').show();
        })
        .mouseleave(function() {
            $(this).find('.fa-folder-o').show();
            $(this).find('.fa-folder-open-o').hide();
        });
    // detail category
    // ==============
    $(".infor_category_detail .box1-infor .icon_edit").click(function() {
        $(this).parent().parent().find(".box1-infor").hide();
        $(this).parent().parent().find(".box1-edit").css("display", "inline-block");
    });

    $(".infor_category_detail .box1-edit .cancel").click(function() {
        $(this).parent().parent().parent().find(".box1-infor").css("display", "inline-block");
        $(this).parent().parent().parent().find(".box1-edit").hide();
    });
    // ==============
    $(".infor_category_detail .box2-infor .icon_edit").click(function() {
        $(this).parent().parent().find(".box2-infor").hide();
        $(this).parent().parent().find(".box2-edit").css("display", "inline-block");
    });

    $(".infor_category_detail .box2-edit .cancel").click(function() {
        $(this).parent().parent().parent().find(".box2-infor").css("display", "inline-block");
        $(this).parent().parent().parent().find(".box2-edit").hide();
    });
    var n = $(".box2-edit .wrap_property span").length;
    $(".infor_category_detail .wrap_property span i").click(function() {
        $(this).parent().remove();
        n--;
        if (n == 0) {
            $(".box2-edit .wrap_property").hide();
        }
    });

    $(".wrap_property span i").click(function() {
        $(this).parent().hide();
    });

    // selection value
    $(function() {
        $('#choose-act').change(function() {
            if ($(this).val() === "1") {
                $(".option1").show();
                $(".option2").hide();
                $(".option3").hide();
                $(".opacity1").hide();
            }
            if ($(this).val() === "2") {
                $(".option1").hide();
                $(".option2").show();
                $(".option3").hide();
                $(".opacity1").hide();
            }
            if ($(this).val() === "3") {
                $(".option1").hide();
                $(".option3").show();
                $(".option2").hide();
                $(".opacity1").hide();
            }
            if ($(this).val() === "0") {
                $(".option1").hide();
                $(".option3").hide();
                $(".option2").hide();
                $(".opacity1").show();
            }
        });
        $('#choose-act').trigger("change");
    });

    $(".table_donhang .icon-xemtruoc").click(function() {
        $(this).hide();
        $(this).parent().parent().find(".icon-xemtruoc-hover").css("display", "inline-block");
    });

    $(".table_donhang ul li .icon-view-fast").click(function() {
        $(".table_donhang ul li .icon-view-fast-hover").hide();
        $(".table_donhang ul li .icon-view-fast").show();
        $(this).parent().find(".icon-view-fast, .icon-view-fast-hover").toggle();
    });

    $(".table_donhang li .icon-view-fast-hover").click(function() {
        $(this).hide();
        $(this).parent().find(".icon-view-fast").show();
    });

    $(".table_donhang li .view_fast .cancel").click(function() {
        $(this).parent().parent().parent().parent().parent().find(".icon-view-fast-hover").hide();
        $(this).parent().parent().parent().parent().parent().find(".icon-view-fast").show();
        $(this).parent().parent().parent().parent().removeClass("in");
        $(this).parent().parent().parent().parent().attr("aria-expanded", "false");
    });

    $(".part_create .image-upload label")
        .mouseenter(function() {
            $(this).find('.wrap-bg').css("display", "inline-block");
            $(this).find('.wrap-bg').addClass("background-img");
        })
        .mouseleave(function() {
            $(this).find('.wrap-bg').hide();
            $(this).find('.wrap-bg').removeClass("background-img");
        });

    $(".content_seo ul li span i").click(function() {
        $(this).parent().hide();
    });

    $(".filter_parent ul li a").click(function() {
        $(".filter_parent").hide();
        $(".filter_child").show();
        $(".wrap_link a:last-child").show();
        $(".wrap_link a:first-child").hide();
        $(".header h2 span").show();
    });

});
$(document).mouseup(function(e) {
    var container = $(".money .content");

    if (!container.is(e.target) // if the target of the click isn't the container...
        &&
        container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(140)
                .height(140);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah1')
                .attr('src', e.target.result)
                .width(140)
                .height(140);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
// edit image =========

function doSomething(e) {

    var divs = document.querySelectorAll('#list span');

    for (var i = 0; i < divs.length; i++) {
        var span = divs[i];
        span.addEventListener('click', function(e) {
            if (e.offsetX > span.offsetWidth - 15) {
                $(this).remove();
                e.preventDefault();
            }
        });
    }
    for (var i = divs.length - 1; i > 0; i--) {
        var span = divs[i];
        span.addEventListener('click', function(e) {
            if (e.offsetX > span.offsetWidth - 15) {
                $(this).remove();
                e.preventDefault();
            }
        });
    }
}
doSomething();


// thien hoa
$(document).ready(function() {
    // slider
    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 20,
    });
    //tooltip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $(document).on('focus', '[data-toggle="tooltip"]', function() { $(this).tooltip('hide'); });
    });
    // update banner
    $(".BannerAct .UpdateAction").click(function() {
        $(this).hide();
        $(".BannerAct .DisplayData").slideUp();
        $(".BannerAct .UpdateData").slideDown();
    });

    $(".BannerAct .UpdateData .Cancel").click(function() {
        $(this).closest(".box-panel").find(".UpdateAction").show();
        $(".BannerAct .DisplayData").slideDown();
        $(".BannerAct .AddData").slideUp();
        $(".BannerAct .UpdateData").slideUp();
    });
    $(".section-banner .UpdateData .BtnUpdate").click(function() {
        $(this).closest(".box-panel").find(".UpdateAction").show();
        $(".BannerAct .DisplayData").slideDown();
        $(".BannerAct .AddData").slideUp();
        $(".BannerAct .UpdateData").slideUp();
    });
    $(".BannerAct .AddData .Cancel").click(function() {
        $(this).closest(".box-panel").find(".UpdateAction").hide();
        $(".BannerAct .NoData").slideDown();
        $(".BannerAct .AddData").slideUp();
        $(".BannerAct .UpdateData").slideUp();
    });
    $(".BannerAct .AddData .BtnUpdate").click(function() {
        $(this).closest(".box-panel").find(".UpdateAction").show();
        $(".BannerAct .DisplayData").slideDown();
        $(".BannerAct .UpdateData").slideUp();
        $(".BannerAct .AddData").slideUp();
    });
    // left-box
    $(".ActionFirst .box-left .AddAction").click(function() {
        $(this).hide();
        $(this).closest(".box-left").find(".DisplayData").slideUp();
        $(this).closest(".box-left").find(".UpdateData").slideDown();
    });

    $(".ActionFirst .box-left .UpdateData .Cancel").click(function() {
        $(".ActionFirst .box-left .AddAction").show();
        $(this).closest(".box-left").find(".UpdateData").slideUp();
        $(this).closest(".box-left").find(".DisplayData").slideDown();
    });
    $(".ActionFirst .box-left .UpdateData .BtnUpdate").click(function() {
        $(".ActionFirst .box-left .AddAction").show();
        $(".ActionFirst .box-left .DisplayData").slideDown();
        $(".ActionFirst .box-left .UpdateData").slideUp();
        $(".ActionFirst .box-left .AddData").slideUp();
    });
    $(".ActionFirst .box-left .AddData .Cancel").click(function() {
        $(".ActionFirst .box-left .AddAction").hide();
        $(".ActionFirst .box-left .NoData").slideDown();
        $(".ActionFirst .box-left .AddData").slideUp();
        $(".ActionFirst .box-left .UpdateData").slideUp();
    });
    $(".ActionFirst .box-left .AddData .BtnUpdate").click(function() {
        $(".ActionFirst .box-left .AddAction").show();
        $(".ActionFirst .box-left .DisplayData").slideDown();
        $(".ActionFirst .box-left .UpdateData").slideUp();
        $(".ActionFirst .box-left .AddData").slideUp();
    });
    // right-box
    $(".ActionFirst .box-right .AddAction").click(function() {
        $(this).hide();
        $(this).closest(".box-right").find(".DisplayData").slideUp();
        $(this).closest(".box-right").find(".UpdateData").slideDown();
    });
    $(".ActionFirst .box-right .UpdateData .Cancel").click(function() {
        $(".section-infor .box-right .AddAction").show();
        $(this).closest(".box-right").find(".UpdateData").slideUp();
        $(this).closest(".box-right").find(".DisplayData").slideDown();
    });
    $(".ActionFirst .box-right .UpdateData .BtnUpdate").click(function() {
        $(".ActionFirst .box-right .AddAction").show();
        $(".ActionFirst .box-right .DisplayData").slideDown();
        $(".ActionFirst .box-right .UpdateData").slideUp();
        $(".ActionFirst .box-right .AddData").slideUp();
    });
    $(".ActionFirst .box-right .AddData .Cancel").click(function() {
        $(".ActionFirst .box-right .AddAction").hide();
        $(".ActionFirst .box-right .NoData").slideDown();
        $(".ActionFirst .box-right .AddData").slideUp();
        $(".ActionFirst .box-right .UpdateData").slideUp();
    });
    $(".ActionFirst .box-right .AddData .BtnUpdate").click(function() {
        $(".ActionFirst .box-right .AddAction").show();
        $(".ActionFirst .box-right .DisplayData").slideDown();
        $(".ActionFirst .box-right .UpdateData").slideUp();
        $(".ActionFirst .box-right .AddData").slideUp();
    });
    //==content super
    $(".ActionFirst .ActBootom .UpdateAction").click(function() {
        $(this).hide();
        $(this).closest(".ActBootom").find(".DisplayData").slideUp();
        $(this).closest(".ActBootom").find(".UpdateData").slideDown();
    });
    $(".ActionFirst .ActBootom .UpdateData .Cancel").click(function() {
        $(".intro-supper .UpdateAction").show();
        $(this).closest(".ActBootom").find(".DisplayData").slideDown();
        $(this).closest(".ActBootom").find(".UpdateData").slideUp();
    });
    $(".ActionFirst .intro-supper .UpdateData .BtnUpdate").click(function() {
        $(".section-infor .ActBootom .UpdateAction").show();
        $(".section-infor .ActBootom .DisplayData").slideDown();
        $(".section-infor .ActBootom .UpdateData").slideUp();
        $(".section-infor .ActBootom .AddData").slideUp();
    });
    $(".NoData button").click(function() {
        $(this).closest(".ActBootom").find(".NoData").slideUp();
        $(this).closest(".ActBootom").find(".AddData").slideDown();
        $(this).closest(".ActBootom").find(".UpdateAction").show();
    });
    $(".ActionFirst .ActBootom .AddData .Cancel").click(function() {
        $(".ActionFirst .ActBootom .AddAction").hide();
        $(".ActionFirst .ActBootom .NoData").slideDown();
        $(".ActionFirst .ActBootom .AddData").slideUp();
        $(".ActionFirst .ActBootom .UpdateData").slideUp();
    });
    $(".ActionFirst .ActBootom .AddData .BtnUpdate").click(function() {
        $(".ActionFirst .ActBootom .AddAction").show();
        $(".ActionFirst .ActBootom .DisplayData").slideDown();
        $(".ActionFirst .ActBootom .UpdateData").slideUp();
        $(".ActionFirst .ActBootom .AddData").slideUp();
    });
    //update content super
    $(".ActionList .UpdateAction").click(function() {
        $(this).hide();
        $(this).closest(".box-panel").find(".DisplayData").slideUp();
        $(this).closest(".box-panel").find(".UpdateData").slideDown();
    });

    $(".ActionList .UpdateData .Cancel").click(function() {
        $(this).closest(".Panel").find(".UpdateAction").show();
        $(this).closest(".box-panel").find(".DisplayData").slideDown();
        $(this).closest(".box-panel").find(".UpdateData").slideUp();
        $(this).closest(".box-panel").find(".AddData").slideUp();
    });
    $(".ActionList .UpdateData .BtnUpdate").click(function() {
        $(this).closest(".box-panel").find(".UpdateAction").show();
        $(this).closest(".box-panel").find(".DisplayData").slideDown();
        $(this).closest(".box-panel").find(".UpdateData").slideUp();
        $(this).closest(".box-panel").find(".AddData").slideUp();
    });
    $(".ActionList .AddData .Cancel").click(function() {
        $(this).closest(".box-panel").find(".UpdateAction").hide();
        $(this).closest(".box-panel").find(".NoData").slideDown();
        $(this).closest(".box-panel").find(".UpdateData").slideUp();
        $(this).closest(".box-panel").find(".AddData").slideUp();
    });
    //add content super
    $(".ActionList .AddData .BtnUpdate").click(function() {
        $(this).closest(".box-panel").find(".UpdateAction").show();
        $(this).closest(".box-panel").find(".DisplayData").slideDown();
        $(this).closest(".box-panel").find(".UpdateData").slideUp();
        $(this).closest(".box-panel").find(".AddData").slideUp();
    });
    // click no data
    $(".NoData button").click(function(){
        $(this).closest(".Panel").find(".NoData").slideUp();
        $(this).closest(".Panel").find(".AddData").slideDown();
        $(this).closest(".Panel").find(".UpdateAction").show();
    });
    $(".Wrapbox .box-right .NoData button").click(function() {
        $(this).closest(".box-right").find(".NoData").slideUp();
        $(this).closest(".box-right").find(".AddData").slideDown();
        $(this).closest(".box-right").find(".UpdateAction").show();
    });
    $(".Wrapbox .box-left .NoData button").click(function() {
        $(this).closest(".box-left").find(".NoData").slideUp();
        $(this).closest(".box-left").find(".AddData").slideDown();
        $(this).closest(".box-left").find(".UpdateAction").show();
    });
    // show modal==================
    
    // chart
    if ($('.chart')[0]) {
        $(function() {
            /* ChartJS
             * -------
             * Here we will create a few charts using ChartJS
             */

            //--------------
            //- AREA CHART -
            //--------------

            // Get context with jQuery - using jQuery's .get() method.
            var areaChartCanvas = $(".areaChart").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var areaChart = new Chart(areaChartCanvas);
            var daTacuata = [28, 48, 40, 19, 86, 27, 90];
            var labelscuata = ["0", "01/12/16", "01/01/17", "01/02/17", "01/03/17", "01/03/17", "01/04/17"];
            var areaChartData = {
                labels: labelscuata,
                datasets: [{
                    label: "doanh thu",
                    fillColor: "rgba(39,182,200,0.9)",
                    strokeColor: "rgba(39,182,200,0.8)",
                    pointColor: "#27b6c8",
                    pointStrokeColor: "rgba(39,182,200,1)",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(39,182,200,1)",
                    data: daTacuata
                }]
            };

            var areaChartOptions = {
                //Boolean - If we should show the scale at all
                showScale: true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                //Boolean - Whether the line is curved between points
                bezierCurve: true,
                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.3,
                //Boolean - Whether to show a dot for each point
                pointDot: false,
                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                //Boolean - Whether to fill the dataset with a color
                datasetFill: true,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: true,
                //Boolean - whether to make the chart responsive to window resizing
                responsive: true
            };
            areaChart.Line(areaChartData, areaChartOptions);
        });
    }
});

// choose img // load multiple images===================
function handleFileSelect(evt) {
    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {

        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        reader.onload = (function(theFile) {
            return function(e) {
                var span = document.createElement('span');
                span.innerHTML = [
                    '<img src="',
                    e.target.result,
                    '" title="', escape(theFile.name),
                    '"/>'
                ].join('');

                span.addEventListener('click', function(e) {
                    if (e.offsetX > span.offsetWidth - 15) {
                        $(this).hide();
                    }
                });
                document.getElementById('list').insertBefore(span, null);
            };

        })(f);
        reader.readAsDataURL(f);
    }
}
// document.getElementById('files').addEventListener('change', handleFileSelect, false);
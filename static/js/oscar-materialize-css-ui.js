/**
 * Description :
 *       Custom ui depends on Google Materialize CSS. Most of things need to rebuild and this is just for fun now!
 * @author : oscar
 * @version   :1.0, 2016/12/26
 */
(function ($) {
    function OscarUI() {
        this.sideBarHtml = $('.button-collapse');
    }

    /**
     * Theme change
     */
    OscarUI.prototype.initChangeNavBarThemeFun = function () {
        $("#themeChange").find('a').click(function () {
            $('#navThemeDiv').removeClass().addClass("nav-wrapper").addClass($(this).attr("id"));
        })
    };

    /**
     * Toggle side menu collapse flag icon's style.
     */
    OscarUI.prototype.toggleSideMenuCollapseIcon = function () {
        $('.sideNav').find('.no-padding').find('a[data-cus-action="subMenu-toggle"]').on('click', function () {

            //TODO 代码不整洁！！！
            if ($(this).hasClass('active')) {
                $(this).find('.subMenuExtend').removeClass('transformHidden').addClass('transformShow');
                $(this).find('.subMenuCollapse').removeClass('transformShow').addClass('transformHidden');
            } else {
                $(this).find('.subMenuCollapse').removeClass('transformHidden').addClass('transformShow');
                $(this).find('.subMenuExtend').removeClass('transformShow').addClass('transformHidden');
            }
        });
    };
    /**
     * System confirm modal.
     * @param tips
     */
    OscarUI.prototype.confirm = function (tips, callback) {

        if ($('#systemConfirmModal').length == 0) {
            var html =
                '<div id="systemConfirmModal" class="ctm-confirm-modal modal modal-fixed-footer "> ' +
                    '<div class="modal-content">' +
                        '<h5>System Alert</h5> ' +
                        '<hr/>' +
                        '<p class="ctm-confirm-modal-content">' + tips + '</p> ' +
                    '</div>' +
                    '<div class="modal-footer">' +
                        '<a id="confirmNo" class="ctm-confirm-cancel modal-action modal-close waves-effect blue-grey  btn">' +
                            '<i class="mdi-content-clear"></i>' +
                        '</a>' +
                        '<a id="confirmYes" class="modal-action modal-close waves-effect waves-green offset-s1 btn ">' +
                            '<i class="mdi-action-done"></i>' +
                        '</a>' +
                    '</div>' +
                '</div>';
            $('body').append(html);
        }


        $('#systemConfirmModal').openModal({
            dismissible: true, // 点击模态框外部则关闭模态框
            opacity: .5, // 背景透明度
            in_duration: 300, // 切入时间
            out_duration: 200 ,// 切出时间
            ready: function () {
                $('#confirmYes').on('click', function () {
                    alert('Confirm Yes');
                    if(typeof callback == 'function'){
                        callback();
                    } else if (typeof callback == 'string'){
                        window.location.href = callback;
                    }
                })
            },

            complete: function () {

            }
        });


        debugger;
        $('#confirmYes').click = function () {
            alert('Confirm Yes');
            callback();
        }
    };

    /**
     * Verify username and password. This method aim to demonstrate how to use system confirm modal function.
     * Default : oscar/oscar
     */
    OscarUI.prototype.checkInput = function () {
        return this.confirm('Login system with default account ?', 'Index.html');
    };


    /**
     * Inject global variable oscarUI, oscarConflictUI will be used if oscarUI has existed.
     */
    if (window.OscarUI) {
        console.error("The variable oscarUI already exist! oscarConflictUI will be used.");
        window.oscarConflictUI = new OscarUI();
    } else {
        window.oscarUI = new OscarUI();
    }

})(jQuery);
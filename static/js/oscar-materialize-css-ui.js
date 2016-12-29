/**
 * Description :
 *       Custom ui depends on Google Materialize CSS. Most of things need to rebuild and this is just for fun now!
 * @author : oscar
 * @version   :1.0, 2016/12/26
 */
(function ($) {
    function OscarUI() {
        this.sideBarHtml = $('.button-collapse');

        // Message type
        this.messageType = {
            "success": 0,
            "tips": 1,
            "warning": 2,
            "error": 3
        }
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
     * @param tips  Alert content
     * @param yesCallback Confirm callback function or url
     * @param noCallback Cancel callback function
     * @param title Confirm modal title
     */
    OscarUI.prototype.confirm = function (tips, yesCallback, noCallback, title) {
        if ($('#systemConfirmModal').length == 0) {
            var html =
                '<div id="systemConfirmModal" class="ctm-confirm-modal modal modal-fixed-footer ">' +
                '<div class="modal-content">' +
                '<h5>' + (title ? title : "System Alert") + '</h5> ' +
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
            out_duration: 200,// 切出时间
            ready: function () {
                $('#confirmYes').on('click', function () {
                    if (typeof yesCallback == 'function') {
                        yesCallback();
                    } else if (typeof yesCallback == 'string') {
                        window.location.href = yesCallback;
                    }
                });

                $('#confirmNo').on('click', function () {
                    if (typeof noCallback == 'function') {
                        noCallback();
                    }
                })
            },
            complete: function () {
            }
        });
    };

    /**
     * Message dialog, support success, fail, error, tips type.
     * @param messageType #see OscarUI.messageType
     * @param message Content
     * @param optionalTitleIcon Custom Message title icon. Note: only materialcss type icon work.
     */
    OscarUI.prototype.messageDialog = function (messageType, message, optionalTitleIcon) {
        var messageDialogIcon;
        if (optionalTitleIcon) {
            messageDialogIcon = optionalTitleIcon;
        } else {
            switch (messageType) {
                case 0:
                    messageDialogIcon = "mdi-action-done";
                    break;
                case 1:
                    messageDialogIcon = "mdi-action-done";
                    break;
                case 2:
                    messageDialogIcon = "mdi-alert-warning";
                    break;
                case 3:
                    messageDialogIcon = "mdi-alert-error";
                    break;
            }
        }
        // messageDialog

        $('#messageDialog').remove();

        var messageDialogHtml =
            '<div id="messageDialog" class="ctm-confirm-modal modal modal-fixed-footer "> ' +
                '<div class="modal-content"> ' +
                    '<h5 ><i class="' + messageDialogIcon + '"></i>&nbsp;&nbsp;System Alert </h5> ' +
                    '<hr/> ' +
                    '<p class="ctm-confirm-modal-content">' + message + '</p> ' +
                '</div> ' +
                '<div class="modal-footer center">' +
                    '<a class="modal-action modal-close waves-effect waves-green offset-s1 btn ">' +
                        'OK' +
                    '</a>' +
                '</div>' +
            '</div>';

        $('body').append(messageDialogHtml);

        $('#messageDialog').openModal({
            dismissible: true, // 点击模态框外部则关闭模态框
            opacity: .5, // 背景透明度
            in_duration: 300, // 切入时间
            out_duration: 200,// 切出时间
        });


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
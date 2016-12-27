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
        })
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
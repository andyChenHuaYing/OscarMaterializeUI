/**
 * Description :
 *   Login html init js.
 * @author : oscar
 * @version   :1.0, 2016/12/27
 */
(function ($) {
    function LoginFun() {}

    $(document).ready(function () {
        $('.login-content').css('marginTop', ($(window).height() - $('.login-content > div').height()) / 2);
    });

    /**
     * Verify username and password. This method aim to demonstrate how to use system confirm modal function.
     * Default : oscar/oscar
     */
    LoginFun.prototype.checkInput = function () {
        if ($('#username').val().length == 0) {
            $('#username').focus();
            $('#username').addClass('invalid');
            oscarUI.messageDialog(oscarUI.messageType.warning, 'Username must not null!');
            return false;
        }

        oscarUI.confirm('Login system with default account ?', 'Index.html');
        return false;
    };

    if(!window.loginFun) {
        window.loginFun = new LoginFun();
    }else {
        alert('Global variable name "loginFun" already exist, please use another one!');
    }
})(jQuery);
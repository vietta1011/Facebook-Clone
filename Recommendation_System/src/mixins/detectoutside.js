import Vue from "vue";

// vue.directive: Đăng ký một directive tùy chỉnh trong Vue
// 'click-outside', nghĩa là sau khi đăng ký, có thể sử dụng trong template như v-click-outside="methodName"
Vue.directive("click-outside", {
  // hàm bind được gọi lần đầu khi directive lần đầu được gán vào 1 element nào đó
  bind: function (el, binding, vnode) {
    // định nghĩa cho el là 1 hàm kiểm tra sự kiện click ra ngoài
    el.clickOutsideEvent = function (event) {
      // kiểm tra nếu click xảy ra bên ngoài phần tử el không
      if (!(el == event.target || el.contains(event.target))) {
        // gọi hàm được truyền vào từ Vue Component
        vnode.context[binding.expression](event);
      }
    };
    // thêm lắng nghe sự kiện vào document.body để theo dõi click.
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  // hàm unbind để gỡ sự kiện lắng nghe ra khỏi DOM (tự tìm hiểu) để tránh tổn thất dữ liệu
  unbind: function (el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

// file này có nhiệm vụ là phát hiện click ra bên ngoài khỏi 1 phần tử cụ thể,
// ví dụ như ra khỏi box chat hoặc ra khỏi list tìm kiếm tài khoản

// Local Storage sẽ lưu lại dữ liệu để nó không bị mất ngay cả khi người dùng đăng xuất tài khoản
// thường dùng cho các việc cần lưu trữ thông tin dài hạn như token đăng nhập, cài đặt của người dùng và các cache dữ liệu
// hàm này lấy dữ liệu từ localStorage với các key có tiền tố là visionet_
export const _getLocalStorage = (key) => {
  return localStorage.getItem(`visonet_${key}`);
};
// hàm này lưu giá trị vào localStorage, các key được tự động thêm tiền tố visionet_ và thêm giá trị vào
export const _setLocalStorage = (key, value) => {
  localStorage.setItem(`visonet_${key}`, value);
};
// hàm này xóa giá trị có key visonet_${key} khỏi localStorage
export const _removeLocalStorage = (key) => {
  localStorage.removeItem(`visonet_${key}`);
};

// Session Storage lưu lại dữ liệu trong phiên trình duyệt hiện tại, khi đóng tab hoặc trình duyệt thì nó sẽ mất dữ liệu ngay lập tức
// thường dùng cho các form nhập dữ liệu lưu các dữ liệu tạm thời
// mấy này tương tự 3 cái bên trên
export const _getSessionStorage = (key) => {
  return sessionStorage.getItem(`visonet_${key}`);
};
export const _setSessionStorage = (key, value) => {
  sessionStorage.setItem(`visonet_${key}`, value);
};
export const _removeSessionStorage = (key) => {
  sessionStorage.removeItem(`visonet_${key}`);
};

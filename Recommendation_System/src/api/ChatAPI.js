import BaseAPIConfigNotAuth from "@/api/BaseAPIConfigNotAuth.js"; // đây là instance Axios không cần xác thực, được import từ file thứ 3 trong folder này, nhớ để í đường dẫn

class ChatAPI {
  constructor() {
    this.controller = "Chats"; // định nghĩa controller là Chats, nghĩa là tất cả API trong class này sẽ được gọi đến trong URL bằng /Chats (để ý url khi chạy ứng dụng mỗi khi chat(check trong network))
  }
  /**
   * Lưu hình ảnh lên cloudinary(đây là 1 dịch vụ giúp lưu trữ hình ảnh)
   * @returns list cloudinaryID
   */
  saveImgToCloud(data) {
    return BaseAPIConfigNotAuth.post(`${this.controller}/save-img-cloud`, data); // sau khi lưu dữ liệu vào, nó sẽ trả về 1 danh sách cloudinaryID có chứa dữ liệu mới
  }

  /**
   * Lấy dữ liệu tin nhắn theo phân trang
   * @param {*} data
   * @returns
   */
  pagingMessage(data) {
    return BaseAPIConfigNotAuth.post(`${this.controller}/paging-message`, data); // trả về 1 danh sách tin nhắn trên mỗi trang (1, 2, 3, 4, ...)
  }
}
export default new ChatAPI();

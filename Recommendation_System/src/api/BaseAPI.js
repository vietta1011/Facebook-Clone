import BaseAPIConfig from "@/api/BaseAPIConfig.js"; // đây là instance Axios cần xác thực JWT Token (tự tìm trên mạng nha), được import từ file thứ 2 trong folder này

// đây là 1 class API Service để quản lý các request liên quan tới API
export default class BaseAPI {
  constructor() {} // constructor rỗng vì class này không cần biến khởi tạo nào ngoài các phương thức API
  /**
   * Tên controller
   */
  controller = "";

  /**
   * Hàm gọi phương thức post, lấy tất cả dữ liệu để hiển thị lên cho người dùng xem
   * @created 25/11/2021
   * @returns
   */
  getAll() {
    return BaseAPIConfig.post(`${this.controller}/all`);
  }

  /**
   * Hàm gọi phương thức post, lấy dữ liệu phân trang, để load toàn bộ dữ liệu và phân cho các trang hiển thị
   * @created 12/8/2021
   * @returns
   */
  async getPaging(data) {
    return await BaseAPIConfig.post(`${this.controller}/paging`, data);
  }

  /**
   * Hàm gọi phương thức get, lấy dữ liệu theo ID mà người dùng lựa chọn
   * @created 25/11/2021
   */
  getByID(id) {
    return BaseAPIConfig.get(`${this.controller}/${id}`);
  }

  /**
   * Hàm gọi phương thức delete, xóa dữ liệu theo ID mà người dùng lựa chọn
   * @created 25/11/2021
   * @param {} id
   * @returns
   */
  async deleteByID(id) {
    return await BaseAPIConfig.delete(`${this.controller}/${id}`);
  }

  /**
   * Hàm gọi phương thức post, lưu dữ liệu
   * @param {} data
   * @returns
   */
  save(data) {
    return BaseAPIConfig.post(`${this.controller}`, data);
  }

  /**
   * Hàm gọi phương thức put, cập nhật dữ liệu người dùng mới chỉnh sửa
   * @param {*} data
   * @returns
   */
  update(id, data) {
    return BaseAPIConfig.put(`${this.controller}/${id}`, data);
  }
}

// note: trong API thông thường sẽ có các methods cơ bản là: create (tạo mới), read (đọc dữ liệu), update (cập nhật), delete (xóa dữ liệu) (hay còn gọi là CRUD)
// thì ở đây nhìn vào các hàm nó sẽ tương đương là: post (create), get (read), put (update) và delete.

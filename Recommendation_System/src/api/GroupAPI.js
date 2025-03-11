import BaseAPI from "@/api/BaseAPI.js";
import BaseAPIConfig from "@/api/BaseAPIConfig.js";

class GroupAPI extends BaseAPI {
  constructor() {
    super(); //  gọi tới constructor của BaseAPI
    this.controller = "groups"; // định nghĩa controller là groups, tương tự bên trên
  }
  /**
   * Lấy dữ liệu chi tiết của nhóm
   * @param {*} data
   */
  getByID(data) {
    return BaseAPIConfig.post(`${this.controller}/group-detail`, data);
  }

  /**
   * Tham gia hội nhóm
   * @returns
   */
  joinGroup(data) {
    return BaseAPIConfig.post(`${this.controller}/join-group`, data);
  }

  /**
   * Rời hội nhóm
   * @returns
   */
  outGroup(data) {
    return BaseAPIConfig.post(`${this.controller}/out-group`, data);
  }

  /**
   * Lấy dữ liệu tất cả thành viên của nhóm
   * @param {*} data
   */
  filterMember(data) {
    return BaseAPIConfig.post(`${this.controller}/filter-member`, data);
  }

  /**
   * Tìm kiếm group (không phân trang)
   * @param {*} data
   * @returns
   */
  filterAllGroup(data) {
    return BaseAPIConfig.post(`${this.controller}/filter-group`, data);
  }
}
export default new GroupAPI();

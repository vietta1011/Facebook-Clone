import BaseAPI from "@/api/BaseAPI.js";

class CommentAPI extends BaseAPI {
  // extends là kế thừa lại các methods của BaseAPI bao gồm CRUD
  constructor() {
    super(); // gọi tới constructor của BaseAPI
    this.controller = "comments"; // định nghĩa controller là comments tương tự của chat
  }
}
export default new CommentAPI();
// file này có thể gọi là gọi tới CRUD của comments khi có thể thêm sửa xóa và đọc các comment

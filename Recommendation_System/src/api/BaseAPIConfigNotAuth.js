import Axios from "axios";
import { ConfigApiEnum } from "../models/enums/ConfigApiEnum";

// tạo instance Axios không có xác thực
let api_not_auth = Axios.create({
  //ConfigApiEnum.URL_API: 'http://localhost:3000/api/',
  baseURL: ConfigApiEnum.URL_API, // lấy URL API từ ConfigApiEnum.URL_API
  headers: {
    "Content-Type": "application/json", // chỉ định kiểu dữ liệu JSON khi gửi request, ở đây là dạng JSON
    "Access-Control-Allow-Origin": "*", // cho phép truy cập API từ bất kỳ domain nào (CORS) (Lưu ý: Cái này thường cần cấu hình trên server thay vì client)
  },
});

export default api_not_auth;
// cái file này nó không có xác thực tức là sẽ không gửi về các JWT Token như ở file bên trên, dành cho việc đăng kí tài khoản hoặc xem nội dung mà không cần tài khoản

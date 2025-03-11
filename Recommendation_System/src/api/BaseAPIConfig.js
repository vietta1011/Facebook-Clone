import Axios from "axios"; // thư viện axios để gửi request API HTTP
import { ConfigApiEnum } from "../models/enums/ConfigApiEnum"; // ConfigApiEnum: Một enum (định nghĩa các giá trị cố định) chứa URL API
import Vue from "vue";

// tạo một api là một instance Axios với cấu hình riêng
let api = Axios.create({
  //ConfigApiEnum.URL_API: 'http://localhost:3000/api/',
  baseURL: ConfigApiEnum.URL_API, // lấy URL API từ ConfigApiEnum.URL_API
  headers: {
    "Content-Type": "application/json", // chỉ định kiểu dữ liệu JSON khi gửi request, ở đây là dạng JSON
    "Access-Control-Allow-Origin": "*", // cho phép truy cập API từ bất kỳ domain nào (CORS) (Lưu ý: Cái này thường cần cấu hình trên server thay vì client)
    Authorization: `Bearer ${Vue.cookie.get("jwtToken")}`, // gửi token JWT lấy từ cookie để xác thực API
  },
});

export default api;
// cái export default này dùng để xuất cái api này cho các components khác sử dụng
// api này sẽ được các components khác sử dụng cho các mục đích riêng của nó, và đều gửi JWT Token về để xác thực

import Axios from "axios";
import { ConfigApiEnum } from "../models/enums/ConfigApiEnum";

// tạo một api là một instance Axios với cấu hình riêng
let api_recommend = Axios.create({
  baseURL: ConfigApiEnum.URL_API_RECOMMEND, // lấy URL API từ ConfigApiEnum.URL_API_RECOMMEND
  headers: {
    "Content-Type": "application/json", // chỉ định kiểu dữ liệu JSON khi gửi request, ở đây là dạng JSON
    "Access-Control-Allow-Origin": "*", // cho phép truy cập API từ bất kỳ domain nào (CORS) (Lưu ý: Cái này thường cần cấu hình trên server thay vì client)
  },
});

export default api_recommend;
// file này để gọi tới thằng recommendation system để xử lý các gợi ý

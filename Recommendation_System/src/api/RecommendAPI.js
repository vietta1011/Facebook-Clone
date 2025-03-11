import RecommendAPIConfig from "@/api/RecommendAPIConfig.js"; // được import từ file dưới của thằng này, đọc bên dưới trước

// đây là một class API service để quản lý các request liên quan đến recommendation system
class RecommendAPI {
  constructor() {} // constructor rỗng vì class này không cần biến khởi tạo nào ngoài các phương thức API
  /**
   *
   * @returns
   */
  getRecommendPost(userID) {
    // userID bất kì sẽ hiển thị ra trên newfeed
    return RecommendAPIConfig.post(`recommends/recommend-post`, userID);
  }
}
export default new RecommendAPI();
// file này có tác dụng là gọi tới API để gợi ý các bài viết xuất hiện trên newfeed

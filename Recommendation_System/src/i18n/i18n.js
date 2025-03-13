import Vue from "vue";
import VueI18n from "vue-i18n"; // plugin hỗ trợ đa ngôn ngữ i18n cho vue
import i18nData from "./i18nData"; // file chứa dữ liệu ngôn ngữ cho ứng dụng ở bên dưới file này

Vue.use(VueI18n); // vue sử dụng VueI18n

export default new VueI18n({
  locale: "vi", // set ngôn ngữ mặc định là tiếng Việt
  messages: i18nData, // cung cấp dữ liệu dịch thuật từ i18nData
  silentFallbackWarn: true, // ẩn cảnh báo nếu không tìm thấy khóa dịch
  fallbackLocale: "vi", // nếu khóa dịch bị thiếu, dùng ngôn ngữ dự phòng (là tiếng Việt)
});

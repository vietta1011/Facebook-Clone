import moment from "moment";

// đây là một hàm để cập nhật thời gian là bao nhiêu lâu trước khi xảy ra các thông báo hay gì đó (dạng như đã kết bạn bao lâu hay các thông báo từ bao giờ)
class CommonFunction {
  getDayOfTimeWithDay(fromDate, toDate) {
    let m1 = moment(fromDate);
    let m2 = moment(toDate);
    return m2.diff(m1, "days");
  }
  // check xem đã bao nhiêu ngày

  getDayOfTimeWithHour(fromDate, toDate) {
    let m1 = moment(fromDate);
    let m2 = moment(toDate);
    return m2.diff(m1, "hours");
  }
  // check xem đã bao nhiêu giờ

  getDayOfTimeWithMinutes(fromDate, toDate) {
    let m1 = moment(fromDate);
    let m2 = moment(toDate);
    return m2.diff(m1, "minutes");
  }
  // check xem đã bao nhiêu phút

  getDayOfTimeWithSecond(fromDate, toDate) {
    let m1 = moment(fromDate);
    let m2 = moment(toDate);
    return m2.diff(m1, "seconds");
  }
  // check xem đã bao nhiêu giây
}
export default new CommonFunction();

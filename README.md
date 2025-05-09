
# Hàm tiện ích của LBM

Các thư viện ngoài cần cài cùng lbm-helpers:
+ sharp
+ mime-types

## Cài đặt

Cài đặt lbm-helpers với npm

```bash
  npm i lbm-helpers sharp mime-types
```
    
## Cách sử dụng

Khai báo

```bash
  const __ = require('lbm-helpers')
```

Sau đó, gọi các hàm ở trong danh sách bên dưới để sử dụng.

## Danh sách các hàm:

```bash
1. __.getTime()
=> Lấy TimeSpan
2. __.convertTimeToDate()
=> Chuyển đổi TimeSpan thành Date có định dạng dd-mm-yyyy
3. __.convertTimeToDateTime(time)
=> Chuyển đổi TimeSpan thành DateTime có định dạng dd-mm-yyyy hh:ii:ss
=> Đầu vào là dạng TimeSpan
4. __.convertDateToTime(dateStr)
=> Chuyển Date String thành TimeSpan
=> Đầu vào là Date String định dạng dd-mm-yyyy
5. __.convertDateTimeToTime(dateTimeStr)
=> Chuyển DateTime String thành TimeSpan
=> Đầu vào là DateTime String định dạng dd-mm-yyyy hh:ii:ss
6. __.getNowDate()
=> Lấy ngày hiện tại có định dạng dd-mm-yyyy
7. __.getNowDateTime()
=> Lấy ngày giờ hiện tại có định dạng dd-mm-yyyy hh:ii:ss
8. __.isValidDate(s)
=> Kiểm tra string có định dạng ngày hoặc ngày giờ có hợp lệ không, kết quả trả về true hoặc false
=> Đầu vào là một chuỗi có định dạng ngày (dd-mm-yyyy) hoặc ngày giờ (dd-mm-yyyy hh:ii:ss)
9. __.getCodeUniqueNumber(length = 8)
=> Lấy chuỗi số ngẫu nhiên theo độ dài nhập vào, mặc định độ dài là 8
10. __.removeVietnameseAccents(str)
=> Xóa ký tự tiếng việt
=> Đầu vào là câu hoặc chữ tiếng việt
11. __.formatPhoneNumber(phoneNumber)
=> Định dạng số điện thoại theo mẫu xxxx-xxx-xxx
=> Đầu vào là một chuỗi số gồm 10 ký tự
12. __.removeFormatPhoneNumber(phoneNumber)
=> Xóa định dạng số điện thoại theo mẫu xxxx-xxx-xxx thành xxxxxxxxxx
=> Đầu vào là số điện thoại đã định dạng xxxx-xxx-xxx
13. __.formatMoneyVietnam(amount)
=> Định dạng tiền Việt Nam theo mẫu x,xxx,xxx
=> Đầu vào là số hoặc chuỗi số
14. __.removeFormatMoneyVietnam(formattedAmount)
=> Xóa định dạng tiền Việt Nam theo mẫu x,xxx,xxx
=> Đầu vào là số mẫu x,xxx,xxx
15. __.formatStrSearch(str)
=> Chuyển chuỗi ký tự thường thành chuỗi mẫu tìm kiếm
=> Ví dụ: Tôi Yêu Javascript => toiyeujavascript
16. __.convertNumberToVietnameseWords(nnn)
=> Đọc số thành chữ
=> Ví dụ: 200,000 => Hai trăm nghìn đồng
17. __.convertBytesToMegabytes()
=> Chuyển đơn vị B thành MB
18. __.convertImageToBase64(file)
=> Chuyển file ảnh thành chuỗi base64
=> Đầu vào là type file
=> Định dạng hỗ trợ: image/jpeg, image/png, image/webp
19. __.convertBase64ToImage(base64String, outputFilePath)
=> Chuyển chuỗi base64 thành file ảnh
=> Đầu vào:
    + base64String: chuỗi base64 ảnh
    + outputFilePath: đường dẫn lưu file ảnh sau khi chuyển đổi
=> Hỗ trợ các định dạng: webp, png, jpg
20. __.convertMongooseObjectToJson(objStr)
=> Chuyển MongooseObject to JSON
```

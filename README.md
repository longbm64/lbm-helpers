# LBM Helpers

Thư viện tiện ích hỗ trợ xử lý các tác vụ phổ biến trong JavaScript/Node.js.

## 📦 Cài đặt

```bash
npm i lbm-helpers sharp mime-types
```

## 🚀 Cách sử dụng

```javascript
const __ = require('lbm-helpers')
```

## 📚 Danh sách các hàm

### ⏰ Xử lý thời gian

| Hàm | Mô tả | Ví dụ |
|------|--------|--------|
| `__.getTime()` | Lấy timestamp hiện tại | `__.getTime()` → `1709123456789` |
| `__.convertTimeToDate(time)` | Chuyển timestamp thành ngày (dd-mm-yyyy) | `__.convertTimeToDate(1709123456789)` → `"28-02-2024"` |
| `__.convertTimeToDateTime(time)` | Chuyển timestamp thành ngày giờ (dd-mm-yyyy hh:mm:ss) | `__.convertTimeToDateTime(1709123456789)` → `"28-02-2024 15:30:45"` |
| `__.convertDateToTime(dateStr)` | Chuyển chuỗi ngày thành timestamp | `__.convertDateToTime("28-02-2024")` → `1709123456789` |
| `__.convertDateTimeToTime(dateTimeStr)` | Chuyển chuỗi ngày giờ thành timestamp | `__.convertDateTimeToTime("28-02-2024 15:30:45")` → `1709123456789` |
| `__.getNowDate()` | Lấy ngày hiện tại | `__.getNowDate()` → `"28-02-2024"` |
| `__.getNowDateTime()` | Lấy ngày giờ hiện tại | `__.getNowDateTime()` → `"28-02-2024 15:30:45"` |
| `__.isValidDate(str)` | Kiểm tra định dạng ngày/giờ hợp lệ | `__.isValidDate("28-02-2024")` → `true` |

### 🔢 Xử lý số và chuỗi

| Hàm | Mô tả | Ví dụ |
|------|--------|--------|
| `__.getUniqueCode(length)` | Tạo mã ngẫu nhiên (chữ hoa + số) | `__.getUniqueCode(6)` → `"A7B2C9"` |
| `__.removeVietnameseAccents(str)` | Xóa dấu tiếng Việt | `__.removeVietnameseAccents("Tiếng Việt")` → `"Tieng Viet"` |
| `__.formatPhoneNumber(phone)` | Định dạng số điện thoại | `__.formatPhoneNumber("0123456789")` → `"0123-456-789"` |
| `__.removeFormatPhoneNumber(phone)` | Xóa định dạng số điện thoại | `__.removeFormatPhoneNumber("0123-456-789")` → `"0123456789"` |
| `__.formatMoneyVietNam(amount)` | Định dạng tiền Việt Nam | `__.formatMoneyVietNam(1000000)` → `"1,000,000"` |
| `__.removeFormatMoneyVietNam(money)` | Xóa định dạng tiền Việt Nam | `__.removeFormatMoneyVietNam("1,000,000")` → `1000000` |
| `__.formatStrSearch(str)` | Chuẩn hóa chuỗi tìm kiếm | `__.formatStrSearch("Tôi Yêu JS")` → `"toiyeujs"` |
| `__.convertNumberToVietnameseWords(num)` | Đọc số thành chữ | `__.convertNumberToVietnameseWords(1000000)` → `"Một triệu đồng"` |

### 🖼️ Xử lý hình ảnh

| Hàm | Mô tả | Ví dụ |
|------|--------|--------|
| `__.convertBytesToMegabytes(bytes)` | Chuyển đổi bytes sang MB | `__.convertBytesToMegabytes(1048576)` → `1.00` |
| `__.convertImageToBase64(file)` | Chuyển ảnh thành base64 | `__.convertImageToBase64(imageFile)` → `"data:image/jpeg;base64,..."` |
| `__.convertBase64ToImage(base64, path)` | Chuyển base64 thành ảnh | `__.convertBase64ToImage(base64String, "output.jpg")` |

### 🔄 Xử lý dữ liệu

| Hàm | Mô tả | Ví dụ |
|------|--------|--------|
| `__.convertMongooseObjectToJson(obj)` | Chuyển Mongoose Object thành JSON | `__.convertMongooseObjectToJson(mongooseObj)` → `{...}` |

## 📝 Lưu ý

- Thư viện yêu cầu cài đặt thêm các package: `sharp` và `mime-types`
- Định dạng ngày tháng mặc định: `dd-mm-yyyy`
- Định dạng thời gian mặc định: `dd-mm-yyyy hh:mm:ss`
- Hỗ trợ các định dạng ảnh: JPEG, PNG, WebP

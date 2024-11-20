//datetime
const getTime = () => {
    return new Date().getTime()
}
const convertTimeToDate = (time) => {
    const date = new Date(time)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}
const convertTimeToDateTime = (time) => {
    const date = new Date(time)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}
const convertDateToTime = (dateStr) => {
    const [day, month, year] = dateStr.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    return date.getTime()
}
const convertDateTimeToTime = (dateTimeStr) => {
    const [datePart, timePart] = dateTimeStr.split(' ')
    const [day, month, year] = datePart.split('-').map(Number)
    const [hours, minutes, seconds] = timePart.split(':').map(Number)
    const date = new Date(year, month - 1, day, hours, minutes, seconds)
    return date.getTime()
}
//datetime

//code unique
const getCodeUniqueNumber = (length = 8) => {
    if (length < 1) {
        throw new Error('Length must be at least 1')
    }
    let uniqueCode = ''
    const firstDigit = Math.floor(Math.random() * 9) + 1
    uniqueCode += firstDigit
    for (let i = 1; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * 10)
        uniqueCode += randomDigit
    }
    return uniqueCode
}
//code unique

//format string
const removeVietnameseAccents = (str) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
}
const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/)
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`
    }
    return phoneNumber
}
const removeFormatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, '')
}
const formatMoneyVietnam = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const removeFormatMoneyVietnam = (formattedAmount) => {
    return formattedAmount.replace(/,/g, '')
}
const convertNumberToVietnameseWords = (nnn) => {
    var ChuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ")
    var Tien = new Array("", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ")
    var SoTien = parseInt(nnn) //number
    var lan = 0
    var i = 0
    var so = 0
    var KetQua = ""
    var tmp = ""
    var ViTri = new Array()
    if (SoTien < 0) return "Số tiền âm !"
    if (SoTien === 0) return "Không đồng !"
    if (SoTien > 0) {
        so = SoTien
    } else {
        so = -SoTien
    }
    if (SoTien > 8999999999999999) {
        //SoTien = 0
        return "Số quá lớn!"
    }
    ViTri[5] = Math.floor(so / 1000000000000000)
    if (isNaN(ViTri[5]))
        ViTri[5] = "0"
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000
    ViTri[4] = Math.floor(so / 1000000000000)
    if (isNaN(ViTri[4]))
        ViTri[4] = "0"
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000
    ViTri[3] = Math.floor(so / 1000000000)
    if (isNaN(ViTri[3]))
        ViTri[3] = "0"
    so = so - parseFloat(ViTri[3].toString()) * 1000000000
    ViTri[2] = parseInt(so / 1000000)
    if (isNaN(ViTri[2]))
        ViTri[2] = "0"
    ViTri[1] = parseInt((so % 1000000) / 1000)
    if (isNaN(ViTri[1]))
        ViTri[1] = "0"
    ViTri[0] = parseInt(so % 1000)
    if (isNaN(ViTri[0]))
        ViTri[0] = "0"
    if (ViTri[5] > 0) {
        lan = 5
    } else if (ViTri[4] > 0) {
        lan = 4
    } else if (ViTri[3] > 0) {
        lan = 3
    } else if (ViTri[2] > 0) {
        lan = 2
    } else if (ViTri[1] > 0) {
        lan = 1
    } else {
        lan = 0
    }
    for (i = lan; i >= 0; i--) {
        tmp = convertChunkToWords(ViTri[i])
        KetQua += tmp
        if (ViTri[i] > 0) KetQua += Tien[i]
        if ((i > 0) && (tmp.length > 0)) KetQua += ',' //&& (!string.IsNullOrEmpty(tmp))
    }
    if (KetQua.substring(KetQua.length - 1) == ',') {
        KetQua = KetQua.substring(0, KetQua.length - 1)
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2)
    return (KetQua + ' đồng').replace(/  /g, ' ') //.substring(0, 1)//.toUpperCase()// + KetQua.substring(1)
}
const convertChunkToWords = (baso) => {
    var ChuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ")
    var Tien = new Array("", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ")

    var tram
    var chuc
    var donvi
    var KetQua = ""
    tram = parseInt(baso / 100)
    chuc = parseInt((baso % 100) / 10)
    donvi = baso % 10
    if (tram == 0 && chuc == 0 && donvi == 0) return ""
    if (tram != 0) {
        KetQua += ChuSo[tram] + " trăm "
        if ((chuc == 0) && (donvi != 0)) KetQua += " linh "
    }
    if ((chuc != 0) && (chuc != 1)) {
        KetQua += ChuSo[chuc] + " mươi"
        if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + " linh "
    }
    if (chuc == 1) KetQua += " mười "
    switch (donvi) {
        case 1:
            if ((chuc != 0) && (chuc != 1)) {
                KetQua += " mốt "
            } else {
                KetQua += ChuSo[donvi]
            }
            break
        case 5:
            if (chuc == 0) {
                KetQua += ChuSo[donvi]
            } else {
                KetQua += " lăm "
            }
            break
        default:
            if (donvi != 0) {
                KetQua += ChuSo[donvi]
            }
            break
    }
    return KetQua
}
//format string

exports.getTime = getTime
exports.convertTimeToDate = convertTimeToDate
exports.convertTimeToDateTime = convertTimeToDateTime
exports.convertDateToTime = convertDateToTime
exports.convertDateTimeToTime = convertDateTimeToTime
exports.getCodeUniqueNumber = getCodeUniqueNumber
exports.removeVietnameseAccents = removeVietnameseAccents
exports.formatPhoneNumber = formatPhoneNumber
exports.removeFormatPhoneNumber = removeFormatPhoneNumber
exports.formatMoneyVietnam = formatMoneyVietnam
exports.removeFormatMoneyVietnam = removeFormatMoneyVietnam
exports.convertNumberToVietnameseWords = convertNumberToVietnameseWords


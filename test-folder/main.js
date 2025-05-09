const __ = {
    getTime: () => {
        return new Date().getTime()
    },
    convertTimeToDate: (time) => {
        const date = new Date(time)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}-${month}-${year}`
    },
    convertTimeToDateTime: (time) => {
        const date = new Date(time)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
    },
    convertDateToTime: (dateStr) => {
        const [day, month, year] = dateStr.split('-').map(Number)
        const date = new Date(year, month - 1, day)
        return date.getTime()
    },
    convertDateTimeToTime: (dateTimeStr) => {
        const [datePart, timePart] = dateTimeStr.split(' ')
        const [day, month, year] = datePart.split('-').map(Number)
        const [hours, minutes, seconds] = timePart.split(':').map(Number)
        const date = new Date(year, month - 1, day, hours, minutes, seconds)
        return date.getTime()
    },
    getNowDate: () => {
        return __.convertTimeToDate(__.getTime())
    },
    getNowDateTime: () => {
        return __.convertTimeToDateTime(__.getTime())
    },
    getCodeUniqueNumber: (length = 8) => {
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
    },
    getTotalDaysInMonth: (month) => {
        let m = parseInt(month.split('-')[0])
        let y = parseInt(month.split('-')[1])
        let date = new Date(y, m, 0);
        return date.getDate();
    },
    isValidDate: (s) => {
        if (!s) {
            return s
        }
        s = s.toString()
        const regex_date = /^\d{2}\-\d{2}\-\d{4}$/;
        if (regex_date.test(s)) {
            // format dd-mm-yyyy
            s = s.split('-').reverse().join('-')
            const d = new Date(s);
            const parts = s.split('-').map((p) => parseInt(p, 10));
            return d.getDate() === parts[2] && d.getMonth() + 1 === parts[1] && d.getFullYear() === parts[0]
        } else {
            const regex_datetime = /^\d{2}\-\d{2}\-\d{4} \d{2}:\d{2}:\d{2}$/;
            if (regex_datetime.test(s)) {
                // format dd-mm-yyyy hh:mm:ss
                let a = s.split(' ')
                let date = a[0].split('-').reverse().join('-')
                let hour = a[1]
                const d = new Date(`${date} ${hour}`);
                const parts_date = date.split('-').map((p) => parseInt(p, 10));
                const parts_hour = hour.split(':').map((p) => parseInt(p, 10));
                return d.getDate() === parts_date[2]
                    && d.getMonth() + 1 === parts_date[1]
                    && d.getFullYear() === parts_date[0]
                    && parts_hour[0] === d.getHours()
                    && parts_hour[1] === d.getMinutes()
                    && parts_hour[2] === d.getSeconds()
            } else {
                return false
            }
        }
    },
    removeVietnameseAccents: (str) => {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
    },
    formatPhoneNumber: (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '')
        const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/)
        if (match) {
            return `${match[1]}-${match[2]}-${match[3]}`
        }
        return phoneNumber
    },
    removeFormatPhoneNumber: (phoneNumber) => {
        return phoneNumber.replace(/\D/g, '')
    },
    formatMoneyVietnam: (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    removeFormatMoneyVietnam: (formattedAmount) => {
        return formattedAmount.replace(/,/g, '')
    },
    formatStrSearch: (str) => {
        str = __.removeVietnameseAccents(str).toLowerCase()
        str = str.replace(/ /g, '')
        return str
    },
    convertNumberToVietnameseWords: (nnn) => {
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
            tmp = __.convertChunkToWords(ViTri[i])
            KetQua += tmp
            if (ViTri[i] > 0) KetQua += Tien[i]
            if ((i > 0) && (tmp.length > 0)) KetQua += ',' //&& (!string.IsNullOrEmpty(tmp))
        }
        if (KetQua.substring(KetQua.length - 1) == ',') {
            KetQua = KetQua.substring(0, KetQua.length - 1)
        }
        KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2)
        return (KetQua + ' đồng').replace(/  /g, ' ') //.substring(0, 1)//.toUpperCase()// + KetQua.substring(1)
    },
    convertChunkToWords: (baso) => {
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
    },
    convertBytesToMegabytes: (bytes) => {
        return parseFloat((bytes / 1048576).toFixed(2))
    },
    convertImageToBase64: async (file) => {
        const mime = require('mime-types')
        const sharp = require('sharp')
        if (file) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/webp']
            const mimeType = mime.lookup(file)
            if (!validImageTypes.includes(mimeType)) {
                return 'The selected file is not an image.'
            }
            try {
                try {
                    const imageBuffer = await sharp(file).toBuffer();
                    const base64String = imageBuffer.toString('base64');
                    const base64Image = `data:${mimeType};base64,${base64String}`;
                    return base64Image;
                } catch (error) {
                    console.error('Error converting image to Base64:', error);
                }
            } catch (error) {
                return `Error converting image to base64: ${error.message}`
            }
        } else {
            return "No file!"
        }

    },
    convertBase64ToImage: async (base64String, outputFilePath) => {
        const sharp = require('sharp')
        const matches = base64String.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
            throw new Error('Invalid Base64 string');
        }
        const imageBuffer = Buffer.from(matches[2], 'base64');
        const extName = outputFilePath.split('.').reverse()[0]
        try {
            if (extName === 'webp') {
                await sharp(imageBuffer)
                    .webp()
                    .toFile(outputFilePath)
            } else if (extName === 'png') {
                await sharp(imageBuffer)
                    .png()
                    .toFile(outputFilePath)
            } else if (extName === 'jpg') {
                await sharp(imageBuffer)
                    .jpeg()
                    .toFile(outputFilePath)
            } else {
                await sharp(imageBuffer)
                    .webp()
                    .toFile(outputFilePath)
            }
            return outputFilePath
        } catch (err) {
            return `Error writing file: ${err.message}`
        }
    },
    fileDBInit: async (filePath) => {
        const fs = require('fs')
        if (fs.existsSync(filePath)) {
            return 'File already exists.'
        } else {
            return fs.writeFileSync(filePath, JSON.stringify({ "items": [] }), 'utf8')
        }
    },
    fileDBRead: async (filePath) => {
        const fs = require('fs')
        let data = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(data)
        return data
    },
    fileDBAddItem: async (filePath, item = { code: __.getCodeUniqueNumber() }) => {
        __.fileDBInit(filePath)
        const fs = require('fs')
        let data = await __.fileDBRead(filePath)
        data.items.push(item)
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf8')
        return data
    },
    fileDBDeleteItem: async (filePath, code) => {
        const fs = require('fs')
        let data = await __.fileDBRead(filePath)
        data.items = data.items.filter(item => item.code !== code)
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf8')
        return data
    },
    fileDBUpdateItem: async (filePath, value) => {
        const fs = require('fs')
        let data = await __.fileDBRead(filePath)
        data.items = data.items.map(item => {
            if (item.code === value.code) {
                item = value
            }
            return item
        })
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf8')
        return data
    },
    fileDBFindItem: async (filePath, cond) => {
        const fs = require('fs');
        let data = await __.fileDBRead(filePath);
        data.items = data.items.filter(item => {
            return Object.keys(cond).every(keyCond => {
                return (
                    item[keyCond] && item[keyCond].toUpperCase() === cond[keyCond].toUpperCase()
                );
            });
        });
        return data;
    },
    convertMongooseObjectToJson: (objStr) => {
        objStr = JSON.stringify(objStr)
        return JSON.parse(objStr)
    },
    getFirstLastDayInMonth: (month) => {
        const first = `01-${month} 00:00:00`
        const totalDay = __.getTotalDaysInMonth(month)
        console.log(totalDay)
        const last = `${totalDay}-${month} 23:59:59`
        return { first, last }
    },
    datetimeToTimeCondition: (datetime, type) => {
        if (__.isValidDate(datetime)) {
            return __.convertDateTimeToTime(datetime)
        } else {
            return `Wrong format, correct is dd-mm-yyyy hh:ii:ss`
        }
    },
}


console.log(__.getFirstLastDayInMonth('12-2024'))
console.log(__.datetimeToTimeCondition('01-12-2024 00:00:00'))
console.log(__.datetimeToTimeCondition('01-12-2024 23:59:59'))


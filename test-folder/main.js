




///result
const time = getTime()
console.log("time=>", time)
console.log(`Formatted date: ${convertTimeToDate(time)}`)
console.log(`Formatted datetime: ${convertTimeToDateTime(time)}`)

console.log(`convertDateToTime=>>>`, convertDateToTime('20-11-2024'))
console.log(`convertDateTimeToTime=>>>`, convertDateTimeToTime('20-11-2024 13:30:45'))
console.log(`getCodeUniqueNumber=>>>`, getCodeUniqueNumber(), getCodeUniqueNumber(4), getCodeUniqueNumber(12))
console.log(`removeVietnameseAccents=>>>`, removeVietnameseAccents('Đặng dƯƠNG HẢi, Long'))
console.log(`formatPhoneNumber=>>>`, formatPhoneNumber('0945777323'))
console.log(`removeFormatPhoneNumber=>>>`, removeFormatPhoneNumber('0945-777-323'))
console.log(`formatMoneyVietnam=>>>`, formatMoneyVietnam(200000), formatMoneyVietnam(2000000), formatMoneyVietnam(2000000))
console.log(`removeFormatMoneyVietnam=>>>`, removeFormatMoneyVietnam('2,000,000'))
console.log(`convertNumberToVietnameseWords=>>>`, convertNumberToVietnameseWords('200000'))


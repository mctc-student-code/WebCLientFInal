/* function isMinnesotaZip(code) {
    if (code >= 5501 && code <= 56763) {
        return true
    } else {
        return false
    }
}
console.log(isMinnesotaZip(55403))
 */
function GPA_Check(GPA) {
    if  (GPA > 4 || GPA < 0) {
        return false
    }  else {
        return true
    }
}
console.log(GPA_Check(5))
console.log(GPA_Check(3))
console.log(GPA_Check(3.5))
console.log(GPA_Check(-1))
console.log(GPA_Check(4.6))
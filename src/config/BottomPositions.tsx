
const a = "1.5%"
const b  = "8%"
const c = "16%"
const d = "24%"
const e = "32%"
const f = "40.5%"
const g = "49%"
const h = "57%"
const i = "65.5%"
const j = "73.5%"
const k = "81.5%"
const BottomPositions = (num: number) => {
    const bottomPos:any = [a,b,b,b,b,b,b,b,b,b,b,
                           c,c,c,c,c,c,c,c,c,c,
                           d,d,d,d,d,d,d,d,d,d,
                           e,e,e,e,e,e,e,e,e,e,
                           f,f,f,f,f,f,f,f,f,f,
                           g,g,g,g,g,g,g,g,g,g,
                           h,h,h,h,h,h,h,h,h,h,
                           i,i,i,i,i,i,i,i,i,i,
                           j,j,j,j,j,j,j,j,j,j,
                           k,k,k,k,k,k,k,k,k,k]
    return bottomPos[num]
}
export default BottomPositions
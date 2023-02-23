
const a = "1.4%"
const b = "5%"
const c = "8.8%"
const d = "12.8%"
const e = "16.8%"
const f = "20.8%"
const g = "24.4%"
const h = "28.4%"
const i = "32.2%"
const j = "36.2%"
const k = "40%"
const LeftPositions = (num: number) => {
    const leftPos:any = [a,b,c,d,e,f,g,h,i,j,k,
                         k,j,i,h,g,f,e,d,c,b,
                         b,c,d,e,f,g,h,i,j,k,
                         k,j,i,h,g,f,e,d,c,b,
                         b,c,d,e,f,g,h,i,j,k,
                         k,j,i,h,g,f,e,d,c,b,
                         b,c,d,e,f,g,h,i,j,k,
                         k,j,i,h,g,f,e,d,c,b,
                         b,c,d,e,f,g,h,i,j,k,
                         k,j,i,h,g,f,e,d,c,b]
    return leftPos[num]
}
export default LeftPositions
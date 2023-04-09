export default function two_crystal_balls(breaks: boolean[]): number {
    let step = Math.floor(Math.sqrt(breaks.length))

    for(var i = step; i < breaks.length; i+= step){
        if(breaks[i]) break
    }
    i -= step
    
    for(let j = 0; j < step && i < breaks.length; j++, i++){
        if(breaks[i]) return i
    }
    return -1
}
export const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const valueConvertor = (value) => {
    if(value >= 1000000000){
        return Math.floor(value / 1000000)+ "B" 
    } else if(value >= 1000000) {
        return Math.floor(value/100000)+"M"
    } else if(value >= 1000) {
        return Math.floor(value/1000)+"K"
    } else {
        return value
    }


}
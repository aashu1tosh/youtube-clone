export const API_KEY = 'AIzaSyD4D2bOY0AkV-BGvdxq2nVAlQnMyN1i9ZI';

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
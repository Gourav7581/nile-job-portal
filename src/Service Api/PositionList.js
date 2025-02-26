import { api } from "./AxiosCreate"
import { MainUrl } from "./MainUrl"


export const PositionList = async()=>{
    try{
        let Pdetails = await api.get(MainUrl.Position)
           console.log(Pdetails)
        return Pdetails.data.result;
    }catch(error){
        console.log('position api not found')
    }
}
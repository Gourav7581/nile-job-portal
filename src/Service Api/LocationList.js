import { api } from "./AxiosCreate"
import { MainUrl } from "./MainUrl"

export const LocationList = async ()=>{
    try{
        let Llist = await api.get(MainUrl.Location)
        return Llist.data.result;
    }catch(error){
        console.log('Location Api not found',error)
    }
}
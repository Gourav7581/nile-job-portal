import { api } from "./AxiosCreate"
import { MainUrl } from "./MainUrl"

export const DepartmentList = async()=>{
    try{
        let Dlist = await api.get(MainUrl.Department)
        return Dlist.data.result;
    }
    catch(error){
        console.log('Departmentlistapi not found')
    }
}
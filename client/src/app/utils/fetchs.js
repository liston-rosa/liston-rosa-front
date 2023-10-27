import axios from 'axios';

async function getData (resp){
    return resp?.data.map(e=> e)
};

export async function fetchMainObj (){
    const serverURL = process.env.NEXT_PUBLIC_SERVER_URL_ARTWORK;
    try{
        let { data } = await axios(serverURL)
        let error = data.error
        let objs = await getData(data)
        const response = [error, ...objs]
        // console.log(response)
        return response
    }catch(e){
        console.error(`this is the error: ${e}`)
    }
}


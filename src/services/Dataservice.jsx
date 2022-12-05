import axios from 'axios'

const headerconfig = {
    headers : {
        //Authorization : localStorage.getItem('token')
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const getBookListApi = () => {
    let response = axios.get("https://localhost:44328/api/Book/GetAllBooks",headerconfig)
    console.log(response)
    return response;
}

export const getBookbyid = (bookid) => {
    console.log(bookid)
    let response = axios.get(`https://localhost:44328/api/Book/GetBookByid?BookId=${bookid}`,headerconfig);
    console.log(response)
    return response;
}
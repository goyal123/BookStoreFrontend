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

export const addtocart = (cartobj) => {
    console.log(cartobj)
    let response = axios.post("https://localhost:44328/api/Cart/AddCart",cartobj,headerconfig);
    console.log(response)
    return response;
}

export const getuseridapi=()=>{
    let response = axios.get("https://localhost:44328/api/User/GetUserId",headerconfig);
    console.log(response)
    return response;
}

export const getcart=() => {
    let response = axios.get("https://localhost:44328/api/Cart/GetCart",headerconfig);
    console.log(response)
    return response;
}

export const addorderapi=(cartId) => {
    let response = axios.post(`https://localhost:44328/api/Order/AddOrder?CartId=${cartId}`,null,headerconfig);
    console.log(response)
    return response;
}

export const addfeedapi=(feedobj) => {
    let response = axios.post(`https://localhost:44328/api/Feedback/AddFeedback`,feedobj,headerconfig);
    console.log(response)
    return response;
}

export const getfeedapi=(bookId) => {
    let response = axios.get(`https://localhost:44328/api/Feedback/GetAllFeedBack?BookId=${bookId}`,headerconfig);
    console.log(response)
    return response;
}

export const getorderallapi=() => {
    let response = axios.get("https://localhost:44328/api/Order/GetAllOrders",headerconfig);
    console.log(response)
    return response;
}

export const getaddressapi=(addresstype) => {
    let response = axios.get(`https://localhost:44328/api/Address/GetAddress?Address_Type=${addresstype}`,headerconfig);
    console.log(response)
    return response;
}

export const getuserdetailsapi=() => {
    let response = axios.get("https://localhost:44328/api/User/GetUserdetails",headerconfig);
    console.log(response)
    return response;
}

export const getuserdetailsbyidapi=(userid) => {
    let response = axios.get(`https://localhost:44328/api/User/GetUserDetailsbyId?userId=${userid}`,headerconfig);
    console.log(response)
    return response;
}

export const addtowishlistapi=(bookid) => {
    let response = axios.post(`https://localhost:44328/api/Wishlist/AddItem?BookId=${bookid}`,null,headerconfig)
    console.log(response)
    return response;
}

export const getwishlist=() => {
    let response = axios.get("https://localhost:44328/api/Wishlist/GetWishlist",headerconfig)
    console.log(response)
    return response;
}
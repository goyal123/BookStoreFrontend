import React, { useEffect, useState } from 'react'
import { getuserdetailsapi, getuserdetailsbyidapi } from '../services/Dataservice'
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';

const useStyle = makeStyles({
    Container:{
        display:'flex',
        flexDirection:'column',
        border:''
    },
    item1:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'8px',
        border:''
    },
    item2:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'2px',
        border:''
    },
    item3:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'8px',
        border:''
    }
})

export default function Feedsingle(props) {
    const [userid,setuserid] = useState(props.feed.userId)
    const classes = useStyle()
    const [name,setname] = useState("")

    useEffect(() => {
        getuserdetailsbyidapi(userid).then((response) => {
            console.log(response)
            setname(response.data.data)
        }).catch((response) => {
            console.log(response)
        })
    },[userid])

  return (
    <div className={classes.Container}>
        <div className={classes.item1}>
        {name}
        </div>
        <div className={classes.item2}>
        {[1,2,3,4,5].map(ratingvalue => (<span key={ratingvalue} className={ratingvalue< 0 ? classes.selected: classes.unselected}><StarIcon size='small' /></span>))}
        </div>
        <div className={classes.item3}>
        {props.feed.comment}
        </div>
    <br></br>
    </div>

  )
}

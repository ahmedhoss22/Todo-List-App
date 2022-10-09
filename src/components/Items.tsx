//#region  //imports
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemButton ,Divider } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux"
import { submit } from './info';
import { minHeight } from '@mui/system';
//#endregion
const Items=()=>{
 //#region //functions 
const dispatch=useDispatch();
const user=useSelector((state:any)=> state.user.value);

const handledelete=(id:any)=>{
    let temp=user;
    temp=temp.filter((ele:any)=>{
        return ele.id != id
    })
    dispatch(submit(temp))
    localStorage.setItem('items',JSON.stringify(temp))
}
const handleCircle=(piority:string)=>{
    switch(piority){
        case 'Hard':
            return   <CircleIcon sx={{color:'red'}} fontSize={'medium'} />
            break;
        case 'Easy':
            return   <CircleIcon sx={{color:'green'}} fontSize={'medium'} />
            break;
        case 'Medium':
            return   <CircleIcon sx={{color:'orange'}} fontSize={'medium' }  />
            break;
    }    
}
const toggleList=(id:any)=>{
    let temp =JSON.parse(localStorage.getItem('items') as any);    
    temp.filter((ele:any)=>{
        if(ele.id==id){
            ele.completed = !ele.completed;
            return ele
        }
    })
    dispatch(submit(temp))
    localStorage.setItem('items',JSON.stringify(temp))
}
//#endregion
//#region  //return
return (
        <Box >
            <Typography variant='h5' sx={{margin: 4 ,textAlign:'center'}} > Your List Item </Typography>
            {
             user[0]!=null?
             user.map((ele:any)=>{
                return(
                    <List sx={{width: '80%',margin:'auto',bgcolor:"#efefef"}} key={ele.id}>
                        <Divider/>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>toggleList(ele.id)}>
                               {!ele.completed?
                                <ListItemIcon > 
                                    {handleCircle(ele.piority)}                         
                                </ListItemIcon>:
                                <ListItemIcon style={{opacity:'.2'}}> 
                                {handleCircle(ele.piority)}                         
                                </ListItemIcon>
                                }
                                {!ele.completed?
                                <ListItemText primary={ele.task} secondary={ele.piority}/>  
                               : <ListItemText primary={ele.task} secondary={ele.piority} style={{opacity:".3", textDecoration:"line-through" }}/>  
                                
                            }
                                    <IconButton edge="end" aria-label="delete" onClick={()=>handledelete(ele.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                    </List>
                    )
            })
             : <List sx={{width: '80%',margin:'auto',bgcolor:"#efefef" ,minHeight:'50px'}}>
                </List>
            }
        </Box>
    );
    //#endregion
}
export default Items;
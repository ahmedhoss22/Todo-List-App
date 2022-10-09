//#region // imports
import { Box , Button , Stack, colors , TextField, MenuItem} from '@mui/material';
import theme from './Theme';
import { ThemeProvider} from '@mui/material/styles';
import { useState ,useEffect } from 'react';
import {useDispatch} from "react-redux"
import {submit} from "./info"
import "./css/buttons.css"
//#endregion

const Buttons=function(){
//#region  // functions
    const dispatch=useDispatch();
    const [items,setItems]=useState([])
    const [task,setTask]=useState("")
    const [piority,setPiority]=useState("")
    let [counter,setCounter]=useState(0)

    useEffect(()=>{
        if(localStorage.getItem('items')){
            setItems(JSON.parse(localStorage.getItem('items') as any))
        }
        if(localStorage.getItem('counter')){
            setCounter(JSON.parse(localStorage.getItem('counter') as any))
        }
    },[])
    
    useEffect(()=>{
        dispatch(submit(items))
    },[items])

    const  handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let temp:any=[]
        if(localStorage.getItem('items')){
            temp=JSON.parse(localStorage.getItem('items') as any)
        } 
        temp.push({task,piority,completed:false,id:counter})
        setItems(temp)
        setPiority('');
        setTask('')
        localStorage.setItem('items',JSON.stringify(temp))
        localStorage.setItem('counter',JSON.stringify(counter))
        setCounter(++counter);
    }
     const handleTask=(value:any)=>{
        setTask(value)
    }
    const handlePiority=(value:any)=>{
        setPiority(value)
    }    
//#endregion
    return(
        <>
        <form onSubmit={handleSubmit}>
        <Stack direction={'row'} my={4} className='stack' mx={'auto'} width={'80%'} spacing={2} >
           <TextField id="outlined-basic"
             label="What to do next?"
              variant="outlined"
               fullWidth required
               onChange={(e:any)=>handleTask(e.target.value)}
               value={task}
               className='task'
               style={{padding:'0px'}}
                />
            <TextField label="Piority"
             select
              required 
              defaultValue=""
              onChange={(e:any)=>handlePiority(e.target.value)}
              value={piority}
              id='piority'
              style={{minWidth:'200px',margin:'5px'}} >
                <MenuItem value='Easy'>Easy</MenuItem>
                <MenuItem value='Medium'>Medium</MenuItem>
                <MenuItem value='Hard'>Hard</MenuItem>
            </TextField>
                <ThemeProvider theme={theme}>
                    <Button
                     variant="contained"
                      color='secondary'
                       type='submit'
                        style={{margin:'5px '}}
                       >Submit</Button>
                </ThemeProvider>
        </Stack>
        </form>
        </>
    )
}
export default Buttons;
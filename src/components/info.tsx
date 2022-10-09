import {createSlice} from '@reduxjs/toolkit'

export const infoSlice=createSlice({
    name: 'task',
    initialState: { value: { task: '', piority: '', completed: false ,id:0} },
    reducers: {
        submit:(state,action)=>{
            state.value=action.payload;
            
        } 
    }
});
export default infoSlice.reducer;
export const {submit}=infoSlice.actions

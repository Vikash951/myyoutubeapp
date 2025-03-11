// import { createSlice } from "@reduxjs/toolkit"
// import { OFFSET_LIVE_CHAT } from "./constant";

// const chatSlice = createSlice({
//     name: 'chat',
//     initialState:{
//        messages:[]
//     },
//     reducers:{
//         addMessage: (state , action) =>{
//             state.messages.splice(OFFSET_LIVE_CHAT,1);
//             state.messages.push(action.payload);
//         }
//     }
// })

// export const {addMessage} = chatSlice.actions;

// export default chatSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"
import { OFFSET_LIVE_CHAT } from "./constant";

// const chatSlice = createSlice({
//     name: 'chat',
//     initialState: {
//        messages: []
//     },
//     reducers: {
//         addMessage: (state, action) => {
//             // Add new message at the end of the array
//             state.messages.push(action.payload);
            
//             // If we exceed the limit, remove the oldest message
//             if (state.messages.length > OFFSET_LIVE_CHAT) {
//                 state.messages.shift(); // Remove the oldest message
//             }
//         }
//     }
// })

// export const { addMessage } = chatSlice.actions;

// export default chatSlice.reducer;



const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
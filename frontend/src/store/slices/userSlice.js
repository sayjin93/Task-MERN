import { createSlice } from '@reduxjs/toolkit';

const localUser = JSON.parse(localStorage.getItem('user'));

const userSlice = createSlice({
    name: 'user',
    initialState: localUser ? localUser : null,
    reducers: {
        setUser(state, action) {
          return action.payload;
        },
        logoutUser(state) {
            localStorage.removeItem('user');
            return null;
        },
    },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

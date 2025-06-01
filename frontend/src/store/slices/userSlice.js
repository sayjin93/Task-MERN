import { createSlice } from '@reduxjs/toolkit';

const localUser = JSON.parse(localStorage.getItem('user'));

const userSlice = createSlice({
    name: 'user',
    initialState: localUser ? localUser : null,
    reducers: {
        setUser(state, action) {
            state = action.payload;
        },
        logoutUser(state) {
            state = null;
            localStorage.removeItem('user');
        },
    },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const localUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: localUser ? localUser : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        logoutUser(state) {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

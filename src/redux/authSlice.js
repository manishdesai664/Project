    import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

const intialstate = ({
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: '',
    createAsyncThunk: '',
});

export const signInUser = createAsyncThunk('signInUser', async (body) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
        method: "post",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(body)
    })
    return await res.json();
});

const authSlice = ({
    name: 'user',
    intialstate: [],
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user');
        },
        logout: (state, action) => {
            localStorage.removeItem();
            state.token = null;
        },
    },

    extraReducers: {
        // Login Form

        [signInUser.pending]: (state, action) => {
            state.loading = true;
        },
        [signInUser.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            }
            else {
                state.msg = msg;
                state.token = token;
                state.user = user;

                localStorage.setItem('msg', msg);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true;
        },
    }
});

// export const {addToken,addUser,logout}= authSlice.action;
export default authSlice.reducers;
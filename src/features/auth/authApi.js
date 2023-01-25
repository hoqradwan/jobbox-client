import { apiSlice } from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        register: build.mutation({
            query: (data) => ({
                method: "POST",
                url: "/user",
                body: data,
            }),
          async onQueryStarted(data,{dispatch, queryFulfilled}){
                try {
                    const res = await queryFulfilled;
                    dispatch(getUser(data.email));
                } catch (error) {
                    // hudai
                }
            }
        })
    }),
})

export const {useRegisterMutation} = authApi; 
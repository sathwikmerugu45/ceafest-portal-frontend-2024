import React, { createContext, useEffect, useState } from "react";
import {  UserRole, useGetMeQuery } from "../generated/graphql";
import { User } from "../types/user";



interface AuthContextType {
    user: User
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    refetch: () => void;
}
interface AuthProviderProps {
    children: React.ReactNode;
}

export const initialUser: User = {
  name: "User",
  id: "User ID",
  CEAFESTID: "TESTID",
  emailVerified: true,
  email: "user@mail.com",
  mobile: "123456789",
  collegeAddress: "",
  organization: "IIT Madras",
  role: UserRole.User,
  hostel:"gnaga",
  country: "meghalaya",
  gender: "M",
  type: "college",
  isIITM: false,
}

export const AuthContext = createContext<AuthContextType>({
    user: initialUser,
    loading: false,
    setUser: () => {},
    refetch: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(initialUser);
    const { data, loading, error, refetch } = useGetMeQuery();

    useEffect(() => {
        console.log(data)
        if(data) {
            setUser(data.getMe)
        }
    }, [data]);

    return (
        <AuthContext.Provider value={{ user, loading, setUser, refetch }}>
            {children}
        </AuthContext.Provider>
    )
}
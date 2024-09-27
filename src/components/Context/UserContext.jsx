import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../Registration/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Create the data Context 
const AuthContext = createContext();  // Changed to PascalCase

// Data provider
export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Listen to auth state changes
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // console.log(user);
                setUser(user || null); // Set the logged-in user details
            }
            //  else {
            //     // User is not logged in, redirect to login page
            //     navigate('/Login');
            // }
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("User signed out successfully.");
            navigate('/Login'); // Redirect to login page after sign out
        }).catch((error) => {
            console.error("Error signing out:", error.message);
        });
    };

    return (
        <AuthContext.Provider value={{ user, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Use the Context
export const useAuthContext = () => {
    return useContext(AuthContext);  // Changed to use PascalCase
};

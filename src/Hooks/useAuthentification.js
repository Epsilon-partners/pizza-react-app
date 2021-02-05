const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentification () {
    
    const login = () => {
        auth.signInWithPopup(provider);
    };
    return {
        login
    };

};
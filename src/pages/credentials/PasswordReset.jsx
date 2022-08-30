import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const PasswordReset = () => {

    const passwordRecovery = () => {
        const auth = getAuth();
    sendPasswordResetEmail(auth, user.email)
      .then(() => {
    
      })
      .catch((error) => {
        dispatch(Error(error))
      });
      }

  return (
    <div>PasswordReset</div>
  )
}

export default PasswordReset
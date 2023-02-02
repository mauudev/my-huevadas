import Header from "../components/Header/Header";
import Signup from "../components/Signup/Signup";

export default function SignupPage() {
    return (
        <>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <Signup />
        </>
    )
}
import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Kickstart your coding journey today!"
      description1="Join millions of learners and turn your ideas into reality."
      description2="The future is yours--let's code it!"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
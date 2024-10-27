import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Unlock Your Coding Potential with StudyNotion"
      description1="Learn in-demand skills for the future and start building your dream career today."
      description2="Join thousands of learners and kickstart your coding journey today."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
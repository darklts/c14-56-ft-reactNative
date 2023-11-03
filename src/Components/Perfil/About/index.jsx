import './styles.css'
const About = ({ description }) => {
  return (
    <>
      <h1 className="profile-about-title">Profesión</h1>
      <div className="profile-about-box">
        <h4 className="profile-about-box-title">Sobre MI</h4>
        <hr className="profile-about-box-line" />
        <p className="profile-about-box-description">{description}</p>
      </div>
    </>
  )
}

export default About

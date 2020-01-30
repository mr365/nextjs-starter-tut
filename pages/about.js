import Layout from "../components/MyLayout";
const About = () => (
    <Layout>
      <h1>About Page</h1>
      <p> Go to http://localhost:3000/quotes?author=rauch in your browser to see
        this serverless API feat in action. The API fetches quotes filtered by author= Rauch in this case</p>
    </Layout>
)

export default About;
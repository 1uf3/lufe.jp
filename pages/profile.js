import Layout from "../components/Layout";

export default function Profile () {
    return (
      <Layout title="Profile">
        <p className="text-4xl">Profile</p>
        <div className="container flex flex-wrap justify-center items-center mx-auto my-4 px-4">
          <tbody>
            <tr className="border-b">
              <td colSpan={99} className="px-2 py-2">
                <h2 className="text-3xl">Affiliation</h2>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-2 py-2">2017 - 2020</td>
              <td className="px-2 py-2">Hamamatsu Kaiseikan High school</td>
            </tr>
            <tr className="border-b">
              <td className="px-2 py-2">2020 - Present</td>
              <td className="px-2 py-2">Ritsumeikan University</td>
            </tr>

            <tr className="border-b">
              <td colSpan={99} className="px-2 py-2">
                <h2 className="text-3xl">Experience</h2>
              </td>
            </tr>

            <tr className="border-b">
              <td colSpan={99} className="px-2 py-2">
                <h2 className="text-3xl">Certificate</h2>
              </td>
            </tr>
          </tbody>
        </div>
      </Layout>
    );
}

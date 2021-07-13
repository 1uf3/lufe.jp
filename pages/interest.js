
import Layout from "../components/Layout";

export default function Interest () {
  return (
    <Layout title="Profile">
      <p className="text-4xl text-blue-400">Interest</p>
      <div className="container flex flex-wrap justify-center items-center mx-auto my-4 px-4">
        <tbody>
          <tr className="border-b">
            <td colSpan={99} className="px-2 py-2">
              <h2 className="text-3xl text-pink-400">Area of Interest</h2>
            </td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">Penetration Test</td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">IoT Analysis (Reverse Engineering)</td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">
              Capture The Flag (Pwnable Reversing Web)
            </td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">3D VR</td>
          </tr>

          <tr className="border-b">
            <td colSpan={99} className="px-2 py-2">
              <h2 className="text-3xl text-pink-400">Want to Make Things</h2>
            </td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">Decompiler Tool (Analysis Tool)</td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">Compiler</td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">OS</td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">Programming Language</td>
          </tr>
          <tr className="border-b text-lg">
            <td className="px-2 py-2">-</td>
            <td className="px-2 py-2">Web Browser</td>
          </tr>

        </tbody>
      </div>
    </Layout>
  );
}
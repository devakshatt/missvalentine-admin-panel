import Head from 'next/head';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import withLayout from "../components/hocs/Layout";

function Home() {
  return (
    <div>
      <AdminDashboard />
    </div >
  )
}

export default withLayout(Home);

import { NextPage } from "next"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import HomeNonLoggedEntities from "@/pages/home/HomeNonLoggedEntities"

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Home" description="decentractive homepage" />
      <HomeNonLoggedEntities />
    </Layout>
  )
}

export default Home

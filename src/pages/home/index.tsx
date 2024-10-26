import { NextPage } from "next"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import { useAuthAtom } from "@/atom/authAtom"
import HomeCompanies from "@/pages/home/HomeCompanies"
import HomeNonLoggedEntities from "@/pages/home/HomeNonLoggedEntities"
import HomeUsers from "@/pages/home/HomeUsers"

const Home: NextPage = () => {
  const { isUser, isCompany, entityData } = useAuthAtom()
  return (
    <Layout>
      <Seo templateTitle="Home" description="decentractive homepage" />
      {!entityData ? (
        <HomeNonLoggedEntities />
      ) : isUser ? (
        <HomeUsers />
      ) : (
        <HomeCompanies />
      )}
    </Layout>
  )
}

export default Home

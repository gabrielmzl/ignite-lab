import { useParams } from "react-router-dom";
import { Header } from "./../components/Header"
import { Sidebar } from "./../components/Sidebar"
import { Video } from "./../components/Video"

export function Event() {
  const { slug } = useParams()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 mt-[75px]">
        {slug
         ? <Video leassonSlug={slug} />
         : <div className="flex-1" />
        }
        <Sidebar />
      </main>
    </div>
  )
}
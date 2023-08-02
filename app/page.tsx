import Qrcode from "@/components/Qrcode"


export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center bg-lightGray">
          <Qrcode />
      </div>
    </main>
  )
}


type Props = {}

const Preloader = (props: Props) => {
  return (
    <div className="bg-white z-10 h-screen w-screen flex justify-center items-center absolute top-0 left-0">
       <div>
        <p className="text-black text-4xl">Loading...</p>
       </div>
    </div>
  )
}

export default Preloader
import frankImg1 from "../../images/about_images/frankImg1.jpg"
import frankArt1 from "../../images/about_images/frankArt1.jpg"
import frankSelfie from "../../images/about_images/frankSelfie.jpg"
import lastImgAbout from "../../images/about_images/lastImgAbout.jpg"

function About() {
  return (
    <div>
      <div className=" max-sm:flex-col items-center bg-black justify-evenly max-sm:py-10 py-14 text-white flex">
        <main className="text-5xl max-sm:text-3xl">
          <p className=" text-7xl max-sm:text-5xl"><span className=" font-serif">I</span> AM</p>
          <p className=" font-[cursive] pb-3">FRANK DIBA</p>
          <p className=" leading-5 text-[12px] max-sm:text-sm max-sm:pb-5">Frank Chibuike Nwokediba <br />Artist | Concept designer | Creative Director</p>
        </main>
        <aside>
          <img src={frankImg1} alt="" className=" w-72" />
        </aside>
      </div>
      <div className=" px-6 gap-6 max-sm:flex-col-reverse max-sm:gap-10  py-5 items-center bg-white  flex justify-evenly">
        <aside>
          <img src={frankArt1} className=" w-64" alt="" />
        </aside>
        <div className=" max-sm:flex max-sm:flex-col    font-semibold max-sm:text-[12px] max-sm:px-5 text-sm">
          <p className=" max-sm:text-xl  text-3xl bg-red-600 text-white px-2 py-1 w-fit">Who Am I ?</p><br />
          Frank_Diba as he is popurlary known, is a <span className=" bg-red-600 text-white max-sm:text-sm w-fit text-base px-1 py-1"> Visual and Digital Artist.</span><br />Frank from his childhood always found happiness in creating entertainment for others. <br />From his early days and far back to the days in Secondary school, He had not only the passion for Art, but that &ldquo;Spunk&ldquo;. <br /> Frank&apos;s Art summones the mixture of his imagination and eccentricity. <br /> His <span className=" bg-red-600 text-white max-sm:text-sm text-lg w-fit px-1">Art</span> seeks to preserve the Culture and brings in a fusion of Hip Hop and Afro Futurism. <br /> His style is inspired by his Nigerian Roots; the Everyday life becoming his Muse.
        </div>
      </div>
      <div className=" px-6 gap-6 max-sm:gap-8 max-sm:flex-col items-center bg-black justify-evenly py-10 text-white flex">
        <main className=" text-sm font-semibold">
         <div className="  max-sm:text-[10px] px-3">Diba has used his Art to create the visual identity of several brands, locally and internationally. <br /> In 2020, Diba won an International social media Art competition hosted by the Art community Human People in <br /> collaboration with Sienna™️ a Coffee brand based In Canada, where he worked on the packaging of their brand for a year. <br /> In 2021, Diba bagged his first major contract with a Crypto influencer in Nigeria and Collaborated to Create Candle Head <br /> an NFT collection.  Frank reaches out to brands in need of his services; with the Projects he has undertaken. <br /> Revved up with his experience of creating Art in school and on the Streets, he also works with online teachers, <br /> His mentors and His life coach. <br /> Along with his experience with creative apps and softwares like Adobe suit and Pro-create, <br /> Frank took his imaginative drawing skills further <br /> from working on custom Comic books to working and Training AI.</div>
        </main>
        <aside>
          <img src={frankSelfie} alt="" className=" w-72" />
        </aside>
      </div>
      <div className=" px-6 gap-6 max-sm:gap-7 max-sm:flex-col-reverse items-center bg-white justify-evenly py-10 text-black flex">
        <aside>
          <img src={lastImgAbout} alt="" className=" w-72" />
        </aside>
        <main className=" text-sm font-semibold">
         <div className="  max-sm:text-[10px] px-8">Diba is currently using his Art to penetrate the entertainment industry, <br /> Fashion and creating new frontiers through Full Movie Animations, <br />Comics, Music Videos, the Web3 and manual Artworks. <br /> Frank seeks to Inspire people, tell his story and Expand the African Art Community.</div>
        </main>
      </div>
    </div>
  )
}

export default About
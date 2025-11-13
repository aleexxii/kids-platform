import heroGirl from '../../../../assets/images/heroGirl.png'
import star from '../../../../assets/images/star.png'
import ballons from '../../../../assets/images/ballons.png'
import puzzle from '../../../../assets/images/icons8-puzzle-50.png'
import letterA from '../../../../assets/images/letter-a.png'
import letterB from '../../../../assets/images/letter-b.png'
import rocket from '../../../../assets/images/rocket.png'
import round from '../../../../assets/images/icons8-round-48.png'
import light from '../../../../assets/images/light-bulb.png'

function Hero() {
  return (
    <section className="bg-[#FFF3E3] min-h-screen flex items-center relative overflow-hidden">
        <img src={heroGirl} className='absolute top-32 left-2/3' alt="heroGirl"/>
        <img src={star} className='absolute top-20 w-16 ' alt="star"/>
        <img src={ballons} className='absolute top-20 w-16 left-20' alt="ballons"/>
        <img src={puzzle} className='absolute top-20 w-16 left-40' alt="puzzle"/>
        <img src={letterA} className='absolute top-20 w-16 left-60' alt="letterA"/>
        <img src={letterB} className='absolute top-20 w-16 left-80' alt="letterB"/>
        <img src={round} className='absolute top-20 w-16 left-96' alt="round"/>
        <img src={rocket} className='absolute top-20 w-16 left-1/4' alt="rocket"/>
        <img src={light} className='absolute top-20 w-16 left-1/3' alt="light"/>


        <div className='container mx-auto px-8 flex items-center justify-between'>
            <div className="max-w-3xl">
                <h1 className='text-[#1A2D4F] text-5xl font-bold'>
                    Shaping kids into <br />
                    <span>Kind & smart</span> <br />
                    individuals
                    </h1>
                    <p className='text-lg'>
                        Interactive learning through videos and puzzles that build knowledge & character.
                    </p>
                    <button className="bg-[#FFA726] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FF9800] transition-all">
            Explore more →
          </button>
            </div>
        </div>

    </section>
  )
}

export default Hero
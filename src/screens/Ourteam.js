import './stylesofscreens/Ourteam.css'
import {shreya,khusnuma} from './stylesofscreens/teamdata'

export default function Ourteam(){
    const teamMember1 = {
        name: 'Shreya',
        title: 'Founder',
        image: 'Shreya2.JPG',
        bio: shreya,
        socialMedia: {
            twitter: 'https://twitter.com/alice',
            linkedin: 'https://linkedin.com/in/alice'
        }
      };

      const teamMember2 = {
        name: 'Khushnuma',
        title: 'Founder',
        image: 'Shreya.JPG',
        bio: khusnuma,
        socialMedia: {
            twitter: 'https://twitter.com/alice',
            linkedin: 'https://linkedin.com/in/alice'
          }
      };

    return(
        <div className="ourteam">
            <img 
                src="https://purepng.com/public/uploads/large/purepng.com-mountainmountainlarge-landformmountain-peakvolcanic-mountainfold-mountainblock-mountain-14115270677848krkl.png"
                className='bgimage'
            />
            <div className='teammembers'>
                <div className='teammember'>
                    <img
                        src={teamMember1.image}
                        className='shreya'
                    />        
                    <div className='description'>
                        <h1>{teamMember1.title}</h1>
                        {shreya}
                    </div>
                </div>
                <div className='teammember'>
                    <img
                        src={teamMember2.image}
                        className='khusnuma'
                    />    
                    <div className='description'>
                        <h1 >{teamMember2.title}</h1>
                        {khusnuma}
                    </div>    
                </div>
            </div>
        </div>            
    )
}
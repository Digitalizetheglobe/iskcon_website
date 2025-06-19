'use client';

import { div } from 'framer-motion/client';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-center text-3xl font-semibold text-[#d34736] mb-1">Our Trustees & Leadership</h2>
        <p className="text-center text-lg mb-1 italic">Board of Trustees</p>
<div style={{ position: 'relative' }}>
  <img
    src="/images/picc.png"
    alt="Decorative line"
    style={{
      position: 'absolute',
      top: '38px',
      left: '38px',
      width: '428px',
      height: '428px',
      borderRadius: '20px',
    }}
  />
</div>

        {/* Board Section */}
        <div className="flex flex-row items-center justify-center h-screen bg-white text-black ">
      {/* Image Section */}
      <div className="flex flex-col items-center flex-1  md:mt-0 ">
       <div style={{ position: 'relative' }}>
  <img
    src="/images/pii.png"
    alt="Decorative line"
    style={{
      position: 'absolute',
      top: '38px',
      left: '38px',
      width: '428px',
      height: '428px',
      borderRadius: '20px',
    }}
  />
</div>

  <h3 className="text-xl md:text-2xl font-bold ">HG Chanchalapathi Dasa</h3>
        <p className="text-lg text-center">Vice- Chairman Akshyapatra</p>
      </div>
   
      {/* Text Section */}
      <div className="flex-1 p-10">
        {/* <h1 className="text-2xl font-semibold mb-4">HG Chanchalapathi Dasa</h1>
        <h2 className="text-lg font-medium mb-6">Vice-Chairman Akshaya Patra</h2> */}
        <p className="text-base leading-relaxed  top-2">
          Chanchalapathi Dasa has been working in the field of spiritual education since 1984 and social development since 2000. He pursued his Bachelor's Degree in PSG College of Technology, Coimbatore, where he came in touch with ISKCON and Srila Prabhupada's mission. Later, he joined the Indian Institute of Science, Bengaluru, to pursue his Masters in Electrical Communication Engineering. He has combined the spirit of compassion with his education in technology and applied it to social development. He is currently involved in strategy, planning and governance of Akshaya Patra.
        </p>
      </div>
    </div>

 <div className="flex flex-col md:flex-row items-center bg-white text-black p-6 md:p-12 gap-8">
      {/* Left Section: Image and Name */}
       <div className="flex-1  mt-6 md:mt-0 ">
        
       
        
        <p className="text-base leading-relaxed">
Amitasana Dasa is the President of Hare Krishna Movement, Mumbai and Governing Council Member of Hare Krishna Movement, India. He is also the President of Akshaya Patra operations in Maharashtra. Under his leadership, the Foundation has implemented several development initiatives in the region.
Born in 1969 in Namrup, Assam, India, HG completed B. Tech. in Computer Science from REC Kurukshetra. He later worked in Kirloskar Computer Services, Bangalore and joined ISKCON Bangalore in 1992. He has organized seminars, workshops and counselling programs to benefit students and professionals from all over the country. He has guided hundreds of people, especially youth, to lead a life of happiness and fulfilment.        </p>
      </div>

      {/* Right Section: Text Content */}
        <div className="flex flex-col items-center flex-1  md:mt-0">
        <img
          src="/images/pii.png" // Replace with the actual image path
          alt="HG Amitasana Dasa"
          className="rounded-lg max-w-full h-auto mb-4"
        />
        <h3 className="text-xl md:text-2xl font-bold">HG Amitasana Dasa</h3>
        <p className="text-lg text-center">President, Hare Krishna Movement-Mumbai</p>
      </div>
     
    </div>
        {/* Leadership Team */}
        <h3 className="text-xl font-semibold mt-16 text-center text-[#d34736]">Leadership Team</h3>
<img
  src="/images/Line 13.png"
  alt="Decorative line"
  className="mx-auto my-1"
  style={{ width: '200px', height: '2px' }}
/>
      <div className="flex flex-col md:flex-row items-center bg-gray-100 text-gray-800 p-6 md:p-12 rounded-lg">
      {/* Left Section: Image and Name */}
      <div className="flex flex-col items-center flex-1 md:pr-8">
        <img
          src="/images/pi2.png" // Replace with the actual image path
          alt="HG Satya Gaura Chandra Dasa"
          className="rounded-lg max-w-full h-auto mb-4"
        />
        <h3 className="text-xl md:text-2xl font-bold text-orange-600">
          HG Satya Gaura Chandra Dasa
        </h3>
        <p className="text-lg text-center">
          President, Hare Krishna Movement - Hyderabad <br />
          Regional President, The Akshaya Patra Foundation <br />
          Telangana & Andhra Pradesh
        </p>
      </div>

      {/* Right Section: Text Content */}
      <div className="flex-1 mt-6 md:mt-0">
        
        <p className="text-top leading-relaxed text-center  ">
HG Satya Gaura Chandra Dasa is a Gold Medalist in B.Tech Mechanical at Jawaharlal Nehru Technological University – Kakinada. He eventually did his M.Tech from IIT-Chennai and worked in a multinational IT firm in Bengaluru for a couple of years before deciding to dedicate his life to serving humanity. The first Akshaya Patra kitchen in unified Andhra Pradesh (now Telangana) was set up in Hyderabad in 2008 under his leadership. He also oversaw the setting up of the Foundation’s high-tech mega kitchen in Kandi, Telangana, in association with the Infosys Foundation in 2018. Currently, he is serving as the President for Akshaya Patra Andhra Pradesh and Telangana. HG is also serving as the President of AIKYA VIDYA.        </p>
      </div>
    </div>

{/* ---------------------------- */}

<div className="flex flex-col md:flex-row items-center bg-gray-100 text-gray-800 p-6 md:p-10 rounded-lg  mt-16 max-w-4xl mx-auto">
      {/* Left Section: Image and Name */}
      <div className="flex flex-col items-center flex-1 md:pr-8">
        <img
          src="/images/p2.png" // Replace with the actual image path
          alt="HG Sahadeva Sakha Dasa"
          className="rounded-lg max-w-full h-auto mb-4"
        />
        <h3 className="text-xl md:text-2xl font-bold text-orange-600">
          HG Sahadeva Sakha Dasa
        </h3>
        <p className="text-lg text-center">
          Director, AIKYA VIDYA
        </p>
      </div>

      {/* Right Section: Text Content */}
      <div className="flex-1 mt-6 md:mt-0">
        
        <p className="text-top leading-relaxed text-center">
HG is currently serving as Director of the AIKYA Vidya. Sahadeva Saka Dasa is also the Associate Vice President of Hare Krishna Movement Hyderabad’s state youth outreach. He pursued M.Tech degree from NIT Calicut and Worked in Wipro Software Company before joining the movement. HG has been rendering his dedicated services to movement from past 12 years. 
Swamiji is well versed in conducting training programs for the youth in the aspect of PERSONALITY DEVELOPMENT based on Bhagavad-Gita and trained students from reputed colleges like IIT Hyderabad, JNTU University, BITS Hyderabad etc. He is also the most sought-after speaker in reputed software professionals from Microsoft, Google, Qualcom, Deloitte, TCS, Infosys etc.        </p>
      </div>
    </div>

        {/* Officers */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 mb-10">
          <div className="text-center">
            <Image src="/images/ca.png" alt="Charan Raj Krishna Dasa" width={150} height={150} className="mx-auto rounded" />
            <p className="font-semibold mt-4">Charan Raj Krishna Dasa</p>
            <p className="text-sm">Chief Education Officer</p>
            <p className="text-sm mt-2">Chaitanya Krishna Dasa is currently serving as the CEdO of AIKYA Vidya. He Completed his B.Tech Mechanical Engineering from JNTU, Kakinada and worked in PSUs, Railways, and India Post (Accounting).  

He has been serving the Hare Krishna Movement and ISKCON (Vrindavan and Delhi temples) from the past 11 years. He is also serving as the main editor of Bhakti Vedanta Book Trust one of the world’s largest publisher of classic Vaishnava texts and contemporary works on the philosophy, theology, and culture of bhakti-yoga.

He is also one of the largest social media influencers in India spreading the knowledge of the Bhagavad Gita through his digital media company JivJago media. </p>
          </div>
          <div className="text-center">
            <Image src="/images/ca2.png" alt="Tapasvi Chaitanya Dasa" width={150} height={150} className="mx-auto rounded" />
            <p className="font-semibold mt-4">Tapasvi Chaitanya Dasa</p>
            <p className="text-sm">Chief Operations Officer</p>
            <p className="text-sm mt-2 text-center">Chaitanya Krishna Dasa is currently serving as the CEdO of AIKYA Vidya. He Completed his B.Tech Mechanical Engineering from JNTU, Kakinada and worked in PSUs, Railways, and India Post (Accounting).  

He has been serving the Hare Krishna Movement and ISKCON (Vrindavan and Delhi temples) from the past 11 years. He is also serving as the main editor of Bhakti Vedanta Book Trust one of the world’s largest publisher of classic Vaishnava texts and contemporary works on the philosophy, theology, and culture of bhakti-yoga.

He is also one of the largest social media influencers in India spreading the knowledge of the Bhagavad Gita through his digital media company JivJago media.</p>
          </div>
        </div>

        {/* Communication Officer */}
       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg ">
      {/* Profile Image */}
      <div className="flex justify-center mb-16">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-100">
          <img
            src="images/pr.png" // Replace with the actual image path
            alt="Raghavendra"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-semibold text-orange-500">Raghavendra</h1>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-gray-600 text-sm font-medium">
          Chief Sustainability and Communications Officer
        </p>
      </div>

      {/* Bio Content */}
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <p>
          Raghavendra is currently serving as the CSCO of AIKYA VIDYA. He is an Ex-Political and Policy Consultant and Ex-Civil Services mentor. In a span of his 10 years career in government sector he contributed to many policy reforms in media in the spheres of education and governance.
        </p>

        <p>
          Earlier he worked for reputed think tanks like Centre for Civil Society and Foundation for Democratic Reforms contributing towards Governance Reforms and National Education Policy.
        </p>

        <p>
          He has published more than 60 articles for various reputed magazines like Swarajya, the Pulse and Telugu news dailies like Andhra Jyothi and Velugu.
        </p>

        <p>
          He has done his Masters in Governance from MIT school of Government and was awarded a certificate in Rule of Law by International Academy of Leadership Germany.
        </p>
      </div>
    </div>

        {/* Management Team */}
        <h3 className="text-xl font-semibold mt-16 text-center text-[#d34736]">Management Team</h3>

              <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center max-w-xs space-y-3">
          <Image
            src="/images/kir.png"
            alt="Rasa Mandal Dasa"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold text-orange-500">Rasa Mandal Dasa</h3>
          <p className="text-sm text-gray-700">
            He is currently serving as the Senior Manager Outreach of AIKYA Vidya.
            He is a B.Pharmacy graduate from Vignan University Vizag. Before joining AIKYA Vidya, he worked in Healthcare industry.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center max-w-xs space-y-3">
          <Image
            src="/images/kir2.png"
            alt="Kumaraswamy"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold text-orange-500">Kumaraswamy</h3>
          <p className="text-sm text-gray-700">
            He is currently serving as Senior Manager Youth outreach programme of the AIKYA Vidya.
            He has done his MA in Sanskrit and diploma in Kathak dance. He participated 3 times in International Kick Boxing
            championship and won silver medal once. Before joining AIKYA Vidya he worked with various reputed NGOs in different capacities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center max-w-xs space-y-3">
          <Image
            src="/images/kir3.png"
            alt="Brahmanandam"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold text-orange-500">Brahmanandam</h3>
          <p className="text-sm text-gray-700">
            He is currently serving as Senior Manager Village Outreach. Before joining AIKYA Vidya,
            Brahmanandam served in various reputed NGOs in different capacities.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center max-w-xs space-y-3">
          <Image
            src="/images/kir4.png"
            alt="G. Karthik"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold text-orange-500">G. Karthik</h3>
          <p className="text-sm text-gray-700">
            He is currently serving as the Manager Outreach in AIKYA Vidya. He is a Mechanical Engineer by education
            and previously worked in reputed pharmaceutical and software companies.
          </p>
        </div>
      </div>
    </div>


        <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
          <div>
            <Image src="/images/ani.png" alt="Ravi" width={100} height={100} className="mx-auto rounded-full" />
            <p className="font-semibold mt-2">Ravi</p>
            <p className="text-sm">Executive Assistant to Operations</p>
          </div>
          <div>
            <Image src="/images/ani2.png" alt="Sai Pawan" width={100} height={100} className="mx-auto rounded-full" />
            <p className="font-semibold mt-2">Sai Pawan</p>
            <p className="text-sm">Executive Assistant Operations</p>
          </div>
          <div>
            <Image src="/images/ani3.png" alt="Mani Teja" width={100} height={100} className="mx-auto rounded-full" />
            <p className="font-semibold mt-2">Mani Teja</p>
            <p className="text-sm">Executive Assistant Media & Design</p>
          </div>
        </div>
      </div>
  );
}

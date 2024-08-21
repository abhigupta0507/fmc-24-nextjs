'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ClubData= [
  {
    id: '1',
    img: 'https://s3-alpha-sig.figma.com/img/adeb/fe2b/30b07b3fe887253a24e83b3cce843846?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UjG0q3esh6bwLJmz~43gfAFJAE-5-pEDL~IBbzXHlssJQ6mxjVQXylZLWn--6l9fc99BoPU9hl~dI8aLpWwBX2jkXMNDbgKbch7vsdz2g6K0WgfPrxzbjSh6T2NanoWyQpycNhEQydmp1ZF5wsKxWt7QUf0zwgguJDeL6ycAsQcIZH4wnJl~vHMg~6HWT15FICP0RO0JHtnmQ~xsUQ6GfEhj4ejvPeqS6TCY36E2Kv6Tye0BFockdIIkBAgYmBoWvAblfU78mXDgmmXh1YYFzCfXKgnVeUP4ThzyPQgaiu7aumgKvyFKB9t8TVOX6490bGgpSacRGbVCumWpRTcjtg__',
    name: 'CINEMATOGRAPHY'
  },
  {
    id: '2',
    img: 'https://s3-alpha-sig.figma.com/img/d61a/0abc/4f682557aa308670e556945861ed1879?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNUAiNu6QkLSNPfMFGHKQRBw3Vi4lLITP5Mr74q880NftWxrn74GYQcq-BC6GEyLc3-ocsrnJKicSncLMlXLQm2TwdPRkMeEtaG8P6tRq4NLRRDyInwBMe~3T~zHSvSVJmY6VaOMVBdSonxTZGwV7ZKLfKybMtpDRolt5RtZ22ssFjxQCGMpAdpjDTqXo0iZHaPR4jWH6eVN8fpAqJzdMXrtkN1Bd7CKTXLkcEF4~DiGfQbu1uX1fdxuLTwmwvZWrSH53HLTmGrLHUbgOozg68C8Kg48LeEKQqkyALXffb8h3UTGAS4kmApKa1dmPKJPV07iVfAjfpB8c3blJrXtSA__',
    name: 'ANIMATION'
  },
  {
    id: '3',
    img: 'https://s3-alpha-sig.figma.com/img/2743/0336/5a0ed0ff29e3391c1fc1a6a414b92279?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~W~khL-wZ7H3UMfnwrTI1ilJeiOKmU7u8hXqf9F3Y5pAUVvMxc50bEOqqAGNGpt8yBsb5gELa08pI~e~3Ujk4k4AEwLjrAkFm7q36Pvk4XjuJJSl914A-G6eUW4hLIm074pQaLBSqR6w5i~~KOfWnRFhMxA~Y2iz6RuiRTfeftAnMcze1~dHEewEzNuU6UDx6B-RNxlm5NHZnRfWNhOwhOEpjDdzhXonGNy1zYlhKw0xgM1NFWbp2AtRS~tMh~65hMt~nNEbCRZzEqllja1yvZv2EYfC81B-K7jyHR4juJuIYGst1NMS1U1oEVy5nm8YmhTUVGVYRdjYegkWpgykw__',
    name: 'OUTREACH'
  },
  {
    id: '4',
    img: 'https://s3-alpha-sig.figma.com/img/937a/6a8b/60c9764492a021d1cf81f7ef11b5d1ec?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UbK8hGk94UHXKsMsk1yJhpOvKmjEiehqz4Oa9JdckrgYBfJUkkz9a8sIbUUK-4ZOolXcMjENcGUJDdPB4PzggKzk9qZO3C7GDGVZf-gMzpP69USwI4yr5~bkXoQwAgm~koC8N2lKPY-nzTLvVaO~tsiAfe-R7oo2Njwsd~zs9WkUCkuCg96TMjgsB2IfdKzZRa24k-f6lIpbKchP~4-Z4pWf~5ZnGqgIP8v8xU4Cdm3XMdIolZyEyCwYXwQNFY3DwepPm~b3vXYlAfdpnFLAfkCzX0XLjUfV5lKv5W36s7IADQ~1d1PenWQpXiPycWmePvT3~XDLIJ0sQjpa3iRtjA__',
    name: 'DESIGN'
  },
  {
    id: '5',
    img: 'https://s3-alpha-sig.figma.com/img/faa9/c12d/8496267aac82785aa860c496137cdd4a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fodq6L~8BmXEotuJqgnC7F7Q88qP-OUVPlDABL2iEONGaMbdMgXg2JE02zWM2Lj2qJWeMypLdOR7jTevZQUS8b~L7II4GArO9OcQg2rZY6hl2lcJX41i4SxzVM9vMlvkig709IvPdteoo~94dE9BCRxCGWLUHttReaWx0t8UdbTbbaBqlqxg1aQUUs31BLWFf1SJS3JkrogOPFpd53G58U3GmgMsUYnAtEQhqrapzw61th4pVsJBKjUFRORg2C1qmNgAV8lnqoe9fQHwq5sTTCn6v2bmnsCsQtzvUx9zKLe3IBU2AKICd5rKL48vFvfkBEr5HlJ5kThp0xo2uodx~g__',
    name: 'PHOTOGRAPHY'
  },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const UnleashPotential = () => {
  var settings={
    className: "center",
    dots: true, 
    infinte: true,
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 100,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <>
    <h1 className="header text-5xl lg:text-7xl text-white font-extrabold  text-center mb-10">Unleash Your Potential Through Thrilling Competitive Events!</h1>
        <Slider {...settings}>  
            {ClubData.map((i)=>(
              <div>
              <div key={i.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center p-2 m-2">
                <div className="border overflow-hidden w-[300px] h-[300px] flex items-center justify-center">
                  <img className="rounded-t-lg " src={i.img} alt="" />
                </div>
                <div className="p-5 flex flex-col items-center">
                  <h5 className="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i.name}</h5>
                  <button><a href="#" className="bg-gray-600 px-10 rounded-md hover:bg-gray-700 py-2 text-white font-semibold">EXPLORE MORE</a></button>
                </div>
              </div>
              </div>
            ))}
        </Slider> 
      </>
   
  )
}

export default UnleashPotential;

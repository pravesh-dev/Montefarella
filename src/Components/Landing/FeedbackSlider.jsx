import React, { useState, useEffect } from "react";
import star from "../../assets/Landing_page_imgs/star.svg";
import client from "../../assets/Landing_page_imgs/client.png";

function FeedbackSlider() {
  const clients = [
    {
      img: client,
      startsCount: 5,
      para: `fantastic location, clean, comfortable with all the comforts. Really an oasis of peace and relaxation, excellent to relax and have privacy. We will definitely return several times. Thank you for everything ❤️`,
      name: "Roberto",
      date: "November 2024",
    },
    {
      img: client,
      startsCount: 5,
      para: `A haven of peace as there are few, one of the best experiences we've had
Angelica is responsive and attentive which is very nice
Highly recommended
Unforgettable joy and happiness
Thanks!`,
      name: "Maël",
      date: "October 2024",
    },
    {
      img: client,
      startsCount: 4,
      para: "We had a great time at Angelica's place. We highly recommend this place for a quiet and relaxing time.",
      name: "Thomas",
      date: "September 2024",
    },
    {
      img: client,
      startsCount: 5,
      para: "Thank you so much for hosting my parents who were very happy and so relaxed for their 30th wedding anniversary. Angelica is very courteous and kind, she also wrote a nice note for our parents. We will be back. Great location to visit local places.",
      name: "Francesco",
      date: "September 2024",
    },
    {
      img: client,
      startsCount: 5,
      para: "Great structure to spend relaxing days as a couple in true Apulian style.",
      name: "Luca",
      date: "August 2024",
    },
    {
      img: client,
      startsCount: 5,
      para: `The Trullo provides the perfect setting for your time in Puglia. The property is beautiful and the outdoor space is stunning for the warmer months.
It is just a stones throw a way from UNESCO site Alberobello and the Grotte Castellane and a short drive from a number of the key spots in that part of Puglia - Locorotondo, Polignano, Monopoli.
It was difficult to take full advantage of what the property offered in just a 2 night stay!`,
      name: "Giovannina Rosina",
      date: "november 2024",
    },
    {
      img: client,
      startsCount: 5,
      para: `Angelica's place is a real gem. Located among the Apulian countryside, in an extremely quiet area, it is an oasis of peace and serenity.
The house, even if small, has everything you need (except for the refrigerator, the only small flaw) and is beautiful in every detail. The indoor pool exactly matches the photos.
Angelica was super responsive and helpful, we had a small problem with the water that was resolved in a few hours and with prompt intervention.
Unfortunately, the Wi-Fi is not the best and working was not easy, but
we are fully satisfied with the place and can't wait to go back!`,
      name: "Sara",
      date: "August 2024",
    },
    {
      img: client,
      startsCount: 5,
      para: `Thanks to the super helpful host - she also made us find a little surprise when we arrived. The SPA with the indoor pool and illuminated cone creates a magical atmosphere, making your stay unforgettable. Perfect for a love escape in a charming location!`,
      name: "Angelica",
      date: "August 2024",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
    <div className="w-[97vw] h-auto relative md:w-[45rem] lg:w-[63rem]">
      {clients.map((client, index) => (
        <div
          key={index}
          className={`w-full min-h-96 absolute top-0 left-1/2 -translate-x-1/2 items-center justify-center transition-opacity duration-1000 ${
            index === currentIndex ? "flex" : "hidden"
          }`}
        >
          <div className="text-center bg-[#2c2b2a] text-white p-4 rounded-lg md:flex md:items-center md:py-2 md:px-3 lg:p-0 overflow-hidden">
            <div className="w-16 h-16 mx-auto rounded-full mb-4 md:w-40 md:h-40 md:rounded-none md:mb-0 flex-shrink-0 overflow-hidden lg:w-60 lg:h-full">
            <img
              src={client.img}
              alt={`Feedback from ${client.name}`}
              className="w-full h-full object-cover"
              />
              </div>
            <div className="md:py-4 md:px-6">
              <div className="flex justify-center mb-2 md:justify-start">
                {Array(client.startsCount)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src={star}
                      alt="star"
                      className="w-4 md:w-5"
                    />
                  ))}
              </div>
              <p className="text-sm mb-2 font-poppins md:text-left">{client.para}</p>
              <p className="font-bellefair text-primary text-xl md:w-full md:text-right">{client.name}</p>
              <p className="text-sm font-mulish italic md:w-full md:text-right">{client.date}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full bg-red-700 justify-center gap-3 mt-5 absolute top-80% left-1/2 -translate-x-1/2">
        {clients.map((item, index) => {
          return (
            <span
              key={index}
              className={`${
                index === currentIndex ? "bg-primary scale-125" : "bg-black"
              } w-3 h-3 rounded-full duration-200`}
            ></span>
          );
        })}
      </div>
    </div>
      </>
  );
}

export default FeedbackSlider;

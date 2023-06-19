import { useState } from "react";
import thankYouSvg from "../assets/illustration-thank-you.svg";

export default function Home() {
  const [rating, setRating] = useState();
  const [ratedStat, setRatedStat] = useState(false);
  function ratingChangeHandler(e) {
    setRating(e.currentTarget.value);
    console.log(rating);
  }
  function ratingSubmitHandler(e) {
    e.preventDefault();
    setRatedStat(true);
    console.log(ratedStat);
  }
  return (
    <main className="min-h-screen bg-c1">
      <article className="h-screen grid place-items-center p-5">
        <section>
          <div className="card shadow-xl">
            {ratedStat ? (
              <div className="card-body gap-6 md:gap-8 max-w-[411px] items-center text-center rounded-3xl bg-red-500">
                <img className="w-36 md:w-40" src={thankYouSvg} alt="thank you svg" />
                <span className="badge p-3 md:p-4 text-c4  bg-c2 border-none">You selected {rating} out of 5</span>
                <h2 className="card-title mb-[-.75rem] text-2xl md:text-[1.65rem] text-white ">Thank you!</h2>
                <p className="text-c3 text-sm"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
              </div>
            ) : (
              <div className="card-body max-w-[411px] p-6 md:p-8 gap-6 rounded-3xl">
                <span className="p-3 md:mb-4 self-start rounded-full bg-c2">
                  <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" />
                  </svg>
                </span>
                <h2 className="card-title mb-[-1rem] text-2xl md:text-3xl text-white">How did we do</h2>
                <p className="text-sm tracking-tighter md:tracking-normal text-c3">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="grid gap-5 md:gap-6">
                  <div className="flex justify-between">
                    <input className="btn" value="1" onChange={ratingChangeHandler} type="radio" name="options" aria-label="1" />
                    <input className="btn" value="2" onChange={ratingChangeHandler} type="radio" name="options" aria-label="2" />
                    <input className="btn" value="3" onChange={ratingChangeHandler} type="radio" name="options" aria-label="3" />
                    <input className="btn" value="4" onChange={ratingChangeHandler} type="radio" name="options" aria-label="4" />
                    <input className="btn" value="5" onChange={ratingChangeHandler} type="radio" name="options" aria-label="5" />
                  </div>
                  <button className="btn btn-primary rounded-full tracking-widest" onClick={ratingSubmitHandler}>
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </article>
    </main>
  );
}

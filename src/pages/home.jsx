export default function Home() {
  return (
    <main className="min-h-screen bg-c1">
      <article className="h-screen grid place-items-center p-5">
        <section>
          <div className="card shadow-xl">
            <div className="card-body max-w-[365px] p-6 md:p-7 gap-6 rounded-3xl">
              <span className="p-3 self-start rounded-full bg-c2">
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" />
                </svg>
              </span>
              <h2 className="card-title mb-[-1rem] text-2xl text-white">How did we do?</h2>
              <p className="text-sm tracking-tighter text-gray-500">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
              <form action="#" className="grid gap-5">
                <div className="flex justify-between">
                  <input className="btn" type="radio" name="options" aria-label="1" />
                  <input className="btn" type="radio" name="options" aria-label="2" />
                  <input className="btn" type="radio" name="options" aria-label="3" />
                  <input className="btn" type="radio" name="options" aria-label="4" />
                  <input className="btn" type="radio" name="options" aria-label="5" />
                </div>
                <button className="btn btn-primary rounded-full tracking-widest">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

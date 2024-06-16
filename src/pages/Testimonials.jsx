/* eslint-disable react/prop-types */

export default function Testimonials({ testimonials }) {
  return (
    <section className="mt-[62px] xl:mt-[146px]   ">
      <h2 className="h2-text text-center">What they’ve said</h2>
      <ul className="flex gap-7 w-[2050px] mt-[62px] xl:mt-[92px] xl:test">
      {
        testimonials.map(({id, Name, comment})=>(
          <li key={id} className="bg-slate-300 w-[540px] max-sm:w-[340px] shrink-0 grow-0 xl:test1  ">
            <h3 className="h3-text text-center mb-5" >{Name}</h3>
            <p className={`text-center p-text pb-10   bg-red-200 ${id=="01"?"px-10" : "px-9"}`}>{comment}</p>
          </li>
        ))
      }
      </ul>

    </section>
  );
}

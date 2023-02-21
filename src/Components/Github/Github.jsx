import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  let style = {
    margin: "10px auto",
    padding: "5px 10px",
  };

  return (
    <div id="github">
      <div className="container mx-auto my-5 text-center">
        <div className="row mx-auto text-center">
          <div className="display-5 mx-auto text-center mt-2 mb-4 ">
            Github Stats/Overview
          </div>
          <div data-aos="flip-left" data-aos-duration="700"   data-aos-easing="ease-in-out" className="col-11 col-lg-7 my-2 mx-auto text-center ">
            <div class="card">
              <GitHubCalendar
                username="sanjayloncha"
                fontSize={20}
                // blockSize={50}
                // transformData={selectLastHalfYear}
                style={style}
                hideColorLegend
                hideTotalCount
              />
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="700"   data-aos-easing="ease-in-out" className="coll-11 col-lg-7 my-4 mx-auto text-center ">
            <div className="card" >
              <img
                title="🔥 Get streak stats for your profile at git.io/streak-stats"
                alt="sanjay streak"
                src="https://github-readme-streak-stats.herokuapp.com/?user=sanjayloncha&theme=black-ice&hide_border=true&stroke=0000&background=060A0CD0"
                width="100%"
                class="img-fluid  m-auto "
              />
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="700"   data-aos-easing="ease-in-out" className="col-11 col-lg-7 my-2 mx-auto text-center ">
            <div className="card">
              <img
                src="https://github-readme-stats.vercel.app/api?username=sanjayloncha&show_icons=true&count_private=true&hide_border=true"
                align="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

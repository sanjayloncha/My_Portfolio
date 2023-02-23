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
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className="col-11 col-lg-7 my-2 mx-auto text-center "
          >
            <div className="card">
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
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className="col-11 col-lg-7 my-2 mx-auto text-center "
          >
            <div className="card">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanjayloncha&theme=dark&include_all_commits=true&count_private=false&layout=compact"
                align="center"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className="col-11 col-lg-7 my-2 mx-auto text-center "
          >
            <div className="card">
              <img
                src="https://github-readme-stats.vercel.app/api?username=sanjayloncha&show_icons=true&count_private=true&hide_border=true"
                align="center"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className="col-11 col-lg-7 my-2 mx-auto text-center "
          >
            <div className="card">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=sanjayloncha&theme=black-ice&hide_border=true&stroke=0000&background=060A0CD0"
                align="center"
              />
            </div>
          </div>

          <div className="row mx-auto ">
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="col-4 my-2 mx-auto "
            >
              <div className="card col-lg-4 ">
                <span className="fw-bold fs-3" >1300+</span>
                <span className="fs-4" >Hours</span>
                <span>coding</span>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="col-4 my-2 mx-auto "
            >
              <div className="card col-lg-4 ">
                <span className="fw-bold fs-3" >1000+</span>
                <span className="fs-4" >Hours</span>
                <span>DSA</span>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="col-4 my-2 mx-auto "
            >
              <div className="card col-lg-4 ">
                <span  className="fw-bold fs-3">600+</span>
                <span className="fs-4">DSA</span>
                <span>Solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
